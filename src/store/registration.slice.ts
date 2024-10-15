import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { PREFIX } from '../helpering/Api/PREFIX';
import { AppDispatch } from './store';

interface IRegistrationFormData {
	costum_users_email: string;
	costum_users_name: string;
	password: string;
}

// Определите интерфейс для начального состояния
interface IRegistrationState {
	isLoading: boolean;
	error: string | null;
	isSuccessRegistration: boolean;
}

// Определите интерфейс для сообщения об ошибке
interface IErrorResponse {
	detail: string;
}

const initialState: IRegistrationState = {
	isLoading: false,
	error: null,
	isSuccessRegistration: false
};

// Функция registerUser
export const registerUser = (formData: IRegistrationFormData) => {
	return async (dispatch: AppDispatch) => {
		dispatch(registerUserRequest());
		try {
			await axios.post(`${PREFIX}register/`, formData);
			dispatch(registerUserSuccess());
		} catch (error) {
			if (axios.isAxiosError<IErrorResponse>(error) && error.response) {
				dispatch(
					registerUserFailure(
						error.response.data.detail || 'Ошибка регистрации'
					)
				);
			} else {
				dispatch(registerUserFailure('Ошибка регистрации'));
			}
		}
	};
};

export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		registerUserRequest(state) {
			state.isLoading = true;
			state.error = null; // Обнуляем ошибку при новом запросе
		},
		registerUserSuccess(state) {
			state.isLoading = false;
			state.isSuccessRegistration = true;
		},
		registerUserFailure(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

// Экспортируем экшены
export const { registerUserRequest, registerUserSuccess, registerUserFailure } =
	registrationSlice.actions;

export default registrationSlice.reducer;
