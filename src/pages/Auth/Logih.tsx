function Login() {
	return (
		<div>
			<form className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8' action='#'>
				<h3 className='text-xl font-medium text-gray-900 dark:text-white'>
					Вход
				</h3>
				<div>
					<label
						htmlFor='email'
						className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
					>
						Напишите вашу почту
					</label>
					<input
						type='email'
						name='costum_users_email'
						id='email'
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
						placeholder='••••••••'
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
					/>
				</div>
				<div className='flex justify-between'>
					<div className='flex items-start'>
						<div className='flex items-center h-5'>
							<button
								type='submit'
								className='w-full text-main-color hover:text-hover-main-color bg-bg-action hover:bg-hover-main-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
							>
								Войти
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Login;
