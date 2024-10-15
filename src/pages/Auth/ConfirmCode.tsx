import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { confirmCode } from '../../store/auth.slice';
import { AppDispatch, RootState } from '../../store/store';

function ConfirmCode() {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const { isLoading, error, emailForConfirmation, isSuccessConfirmCode } =
		useSelector((state: RootState) => state.auth);

	const [code, setCode] = useState('');

	const onChangeInputCode = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCode(e.target.value);
	};

	const onSubmitCode = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (emailForConfirmation) {
			// Проверка, что emailForConfirmation не null и не undefined
			dispatch(
				confirmCode({ confirmation_code: code, email: emailForConfirmation })
			);
		} else {
			// Обработка ситуации, если emailForConfirmation отсутствует
			console.error('Email for confirmation is not available');
		}
	};

	useEffect(() => {
		if (isSuccessConfirmCode) {
			navigate('/');
		}
	}, [isSuccessConfirmCode]);

	return (
		<div>
			<form
				className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'
				onSubmit={onSubmitCode}
			>
				<h3 className='text-xl font-medium text-gray-900 dark:text-white'>
					Ввод кода подтверждения
				</h3>
				<div>
					<input
						type='hidden'
						name='email'
						value={emailForConfirmation ? emailForConfirmation : undefined}
					/>
				</div>
				<div>
					<label
						htmlFor='code'
						className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
					>
						Введите код подтверждения
					</label>
					<input
						type='text'
						name='code'
						id='code'
						value={code}
						onChange={onChangeInputCode}
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
								{isLoading ? 'Загрузка...' : 'Подтвердить'}
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ConfirmCode;
