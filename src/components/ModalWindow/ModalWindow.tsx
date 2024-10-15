import { useState } from 'react';
import Login from '../../pages/Auth/Logih';
import Registration from '../../pages/Auth/Registration';
import { IModalWindowProps } from './ModalWindow.props';

function ModalWindow({ isOpen, isSetOpen }: IModalWindowProps) {
	const [isDefaultModalAuth, setIsDefaultModalAuth] = useState<boolean>(true);

	const onToggleModalAuth = () => {
		setIsDefaultModalAuth(!isDefaultModalAuth);
	};

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 translate-x-2 ${
				isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
			}`}
			onClick={() => isSetOpen(false)}
		>
			<div
				onClick={e => e.stopPropagation()}
				className={`p-6 rounded-sm h-400px h-400px`}
			>
				<div className='bg-white p-6 rounded-sm'>
					<div>{isDefaultModalAuth ? <Login /> : <Registration />}</div>
					<div>
						{isDefaultModalAuth ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
						<button
							type='button'
							className='text-blue-600 hover:underline'
							onClick={onToggleModalAuth}
						>
							{' '}
							{isDefaultModalAuth ? 'Регистрация' : 'Войти'}
						</button>{' '}
					</div>
				</div>
			</div>
		</div>
	);
}
export default ModalWindow;
