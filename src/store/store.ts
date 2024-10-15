// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth.slice';
import registrationSlice from './registration.slice';
import { userSlices } from './user.slice';

export const store = configureStore({
	reducer: {
		registration: registrationSlice,
		auth: authSlice,
		user: userSlices
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
