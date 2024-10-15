import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { PREFIX } from '../helpering/Api/PREFIX';

interface UserState {
	name: string | null;
	email: string | null;
	balance: number | null;
	loading: boolean;
	error: string | null;
}

const initialState: UserState = {
	name: null,
	email: null,
	balance: null,
	loading: false,
	error: null
};

// Async thunk для получения данных пользователя
export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async (token: string) => {
		const response = await axios.get(`${PREFIX}auth/user_info/`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		return response.data; // Возвращаем данные о пользователе
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		clearUserInfo: state => {
			state.name = null;
			state.email = null;
			state.balance = null;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUser.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.loading = false;
				state.name = action.payload.costum_users_name; // Сохраняем имя пользователя
				state.email = action.payload.costum_users_email; // Сохраняем email
				state.balance = action.payload.costum_users_balance; // Сохраняем баланс
			})
			.addCase(fetchUser.rejected, (state, action) => {
				console.log(action.error.message);
				state.loading = false;
				state.error =
					action.error.message || 'Ошибка загрузки данных о пользователе';
			});
	}
});

export const userSlices = userSlice.reducer;
export const selectUserName = (state: { user: UserState }) => state.user.name;
export const { clearUserInfo } = userSlice.actions;
