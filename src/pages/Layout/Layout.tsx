import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { loginSuccess } from '../../store/auth.slice';
import { AppDispatch, RootState } from '../../store/store';
import { fetchUser } from '../../store/user.slice';

function Layout() {
	const [isOpenModalAuth, setIsOpenModalAuth] = useState<boolean>(false);
	const isSuccessLogin = useSelector(
		(state: RootState) => state.auth.isSuccessLogin
	);
	const isSuccessRegister = useSelector(
		(state: RootState) => state.registration.isSuccessRegistration
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const token = localStorage.getItem('access_token');

		if (token) {
			dispatch(loginSuccess(token));
			dispatch(fetchUser(token));
		}

		if (isSuccessLogin) {
			setIsOpenModalAuth(false);
		}

		setIsOpenModalAuth(false);
	}, [isSuccessLogin]);

	useEffect(() => {
		if (isSuccessRegister) {
			setIsOpenModalAuth(false);
		}
	}, [isSuccessRegister]);

	return (
		<div className='flex min-h-screen flex-col'>
			<div className='mb-10 z-20'>
				<Header
					setIsOpenModalAuth={setIsOpenModalAuth}
					isOpenModalAuth={isOpenModalAuth}
				/>
			</div>
			<div>
				<ModalWindow isOpen={isOpenModalAuth} isSetOpen={setIsOpenModalAuth} />
			</div>
			<div className='flex-1 z-10'>
				<Outlet />
			</div>
		</div>
	);
}
export default Layout;
