import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/auth.slice';
import { AppDispatch, RootState } from '../../store/store';
import { fetchUser } from '../../store/user.slice';

function Login() {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const { token, isLoading, error, isSuccess } = useSelector(
		(state: RootState) => state.auth
	);

	const [formData, setFormData] = useState({
		costum_users_name: '',
		password: ''
	});

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(login(formData));
	};

	useEffect(() => {
		if (isSuccess && token) {
			localStorage.setItem('access_token', token); // Сохраняем токен
			dispatch(fetchUser(token));
		}
	}, [isSuccess, token, navigate]);

	return (
		<div>
			<form
				className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'
				onSubmit={onSubmit}
			>
				<h3 className='text-xl font-medium text-gray-900 dark:text-white'>
					Вход
				</h3>
				<div>
					<label
						htmlFor='costum_users_name'
						className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
					>
						Напишите ваш логин
					</label>
					<input
						type='text'
						name='costum_users_name'
						id='email'
						value={formData.costum_users_name}
						onChange={onChangeInput}
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
						placeholder='name@mail.ru'
					/>
				</div>
				<div>
					<label
						htmlFor='password'
						className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
					>
						Введите пароль
					</label>
					<input
						type='password'
						name='password'
						id='password'
						value={formData.password}
						onChange={onChangeInput}
						placeholder='••••••••'
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
					/>
				</div>
				{error && <div className='text-red-500'>{error}</div>}
				<div className='flex justify-between'>
					<div className='flex items-start'>
						<div className='flex items-center h-5'>
							<button
								type='submit'
								disabled={isLoading}
								className='w-full text-main-color hover:text-hover-main-color bg-bg-action hover:bg-hover-main-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
							>
								{isLoading ? 'Загрузка...' : 'Войти'}
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Login;
