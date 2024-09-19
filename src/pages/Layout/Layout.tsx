import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ModalWindow from '../../components/ModalWindow/ModalWindow';

function Layout() {
	const [isOpenModalAuth, setIsOpenModalAuth] = useState<boolean>(false);

	return (
		<div className='flex min-h-screen flex-col'>
			<div className='mb-10'>
				<Header
					setIsOpenModalAuth={setIsOpenModalAuth}
					isOpenModalAuth={isOpenModalAuth}
				/>
			</div>
			<div>
				<ModalWindow isOpen={isOpenModalAuth} isSetOpen={setIsOpenModalAuth} />
			</div>
			<div className='flex-1'>
				<Outlet />
			</div>
		</div>
	);
}
export default Layout;
