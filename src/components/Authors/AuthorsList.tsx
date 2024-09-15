import { useGetData } from '../../hooks/api/useGetData';
import AuthorCard from './AuthorCard/AuthorCard';

function AuthorsList() {
	const { data, error, isLoadingData } = useGetData('authors');

	return (
		<div className='container mx-auto flex gap-9 p-10 antialiased md:p-20'>
			<h1 className='text-2xl font-bold'>Авторы: </h1>
			{error && <div>{error} </div>}
			{isLoadingData && <div className='text-center text-2xl'>Загрузка...</div>}
			<AuthorCard data={data} />
		</div>
	);
}

export default AuthorsList;
