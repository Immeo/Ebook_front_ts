import { useGetData } from '../../hooks/api/useGetData';
import AuthorCard from './AuthorCard/AuthorCard';
import { IAuthorListProps } from './IAuthorCard.props';

function AuthorsList() {
	const { data, error, isLoadingData }: IAuthorListProps =
		useGetData('authors');

	return (
		<div className='container mx-auto flex gap-9 p-10 antialiased md:p-20'>
			<h1 className='text-2xl font-bold'>Авторы:</h1>
			{error && <div className='text-red-500'>{error}</div>}
			{isLoadingData && <div className='text-center text-2xl'>Загрузка...</div>}
			{!isLoadingData && data && <AuthorCard data={data} />}
		</div>
	);
}

export default AuthorsList;
