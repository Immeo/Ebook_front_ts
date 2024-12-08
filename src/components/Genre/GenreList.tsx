import { useGetData } from '../../hooks/api/useGetData';
import GenreCard from './GenreCard/GenreCard';
import { TGrenreListProps } from './GenreCard/IIGenresCard.props';

function GenreList() {
	const { data, error, isLoadingData } = useGetData<TGrenreListProps>('genres');

	return (
		<div className='container mx-auto flex gap-9 p-10 antialiased md:p-20'>
			<h1 className='text-2xl font-bold'>Жанры: </h1>
			{error && <div>{error}</div>}
			{isLoadingData && <div className='text-center text-2xl'>Загрузка...</div>}
			{/* Проверяем наличие данных перед передачей в GenreCard */}
			{!isLoadingData && data && <GenreCard data={data} />}
		</div>
	);
}

export default GenreList;
