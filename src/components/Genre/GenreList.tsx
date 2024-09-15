import { useGetData } from '../../hooks/api/useGetData';
import GenreCard from './GenreCard/GenreCard';

function GenreList() {
	const { data, error, isLoadingData } = useGetData('genres');

	return (
		<div className='container mx-auto flex gap-9 p-10 antialiased md:p-20'>
			<h1 className='text-2xl font-bold'>Жанры: </h1>
			{error && <div>{error} </div>}
			{isLoadingData && <div className='text-center text-2xl'>Загрузка...</div>}
			<GenreCard data={data} />
		</div>
	);
}

export default GenreList;
