// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth.slice';
import favoriteReducer from './favorite.slice'; // Импортируем favoriteSlice
import registrationSlice from './registration.slice';
import { userSlices } from './user.slice';

export const store = configureStore({
	reducer: {
		registration: registrationSlice,
		auth: authSlice,
		user: userSlices,
		favorite: favoriteReducer // Добавляем favoriteSlice
	}
});

// Типы для стейта и диспетча
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
