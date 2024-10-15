import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { PREFIX } from '../helpering/Api/PREFIX';
import { AppDispatch } from './store';

interface IAuthState {
	token: string | null;
	isLoading: boolean;
	error: string | null;
	isSuccessLogin: boolean;
	isSuccessConfirmCode: boolean;
	emailForConfirmation?: string | null;
}

interface IErrorDetalis {
	detail: string;
}

interface IConfirmCode {
	confirmation_code: string;
	email: string;
}

const initialState: IAuthState = {
	token: null,
	isLoading: false,
	error: null,
	isSuccessLogin: false,
	isSuccessConfirmCode: false,
	emailForConfirmation: ''
};

export const login = (credentials: {
	costum_users_name: string;
	password: string;
}) => {
	return async (dispatch: AppDispatch) => {
		dispatch(loginRequest());
		try {
			const response = await axios.post(
				`${PREFIX}auth/login/token/`,
				credentials
			);
			const { access, refresh } = response.data;
			localStorage.setItem('access_token', access);
			localStorage.setItem('refresh_token', refresh);
			dispatch(loginSuccess(response.data.access));
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const errorDetails: IErrorDetalis = error.response?.data;
				dispatch(loginFailure(errorDetails.detail || 'Ошибка входа в систему'));
			}
		}
	};
};

export const logout = () => {
	return async (dispatch: AppDispatch) => {
		// Предполагаем, что токен хранится в localStorage
		const refreshToken = localStorage.getItem('refresh_token');

		if (refreshToken) {
			try {
				await axios.post(
					`${PREFIX}auth/logout/`,
					{
						refresh_token: refreshToken
					},
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem('access_token')}`
						}
					}
				);

				localStorage.removeItem('access_token');
				localStorage.removeItem('refresh_token');

				dispatch(logoutSuccess());
			} catch (error) {
				if (axios.isAxiosError(error)) {
					const errorDetails: IErrorDetalis = error.response?.data;
					dispatch(
						logoutFailure(errorDetails.detail || 'Ошибка выхода из системы')
					);
				}
			}
		}
	};
};

export const confirmCode = (data: IConfirmCode) => {
	return async (dispatch: AppDispatch) => {
		dispatch(confirmCodeRequest());
		try {
			await axios.post(`${PREFIX}auth/confirm-code/`, data);
			dispatch(confirmCodeSuccess());
		} catch (error) {
			if (axios.isAxiosError<IErrorDetalis>(error) && error.response) {
				dispatch(
					confirmCodeFailure(
						error.response.data.detail || 'Неправильный код подтверждения'
					)
				);
			} else {
				dispatch(confirmCodeFailure('Неправильный код подтверждения'));
			}
		}
	};
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginRequest(state) {
			state.isLoading = true;
			state.error = null;
			state.isSuccessLogin = false;
		},
		loginSuccess(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.isSuccessLogin = true;
			state.token = action.payload;
		},
		loginFailure(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		logoutSuccess(state) {
			state.token = null;
			state.isSuccessLogin = false;
		},
		logoutFailure(state, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		confirmCodeRequest(state) {
			state.isLoading = true;
		},
		confirmCodeSuccess(state) {
			state.isLoading = false;
			state.isSuccessConfirmCode = true;
		},
		confirmCodeFailure(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
			state.isSuccessConfirmCode = false;
		},
		setEmailForConfirmation(state, action: PayloadAction<string>) {
			state.emailForConfirmation = action.payload;
		}
	}
});

// Экспортируем экшены
export const {
	loginRequest,
	loginSuccess,
	loginFailure,
	logoutSuccess,
	logoutFailure,
	confirmCodeRequest,
	confirmCodeSuccess,
	confirmCodeFailure,
	setEmailForConfirmation
} = authSlice.actions;

export default authSlice.reducer;
