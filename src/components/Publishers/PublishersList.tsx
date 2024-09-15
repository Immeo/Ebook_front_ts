import { useGetData } from '../../hooks/api/useGetData';
import PublishersCard from './PublishersCard/PublishersCard';

function PublishersList() {
	const { data, error, isLoadingData } = useGetData('publishers');

	return (
		<div className='container mx-auto flex gap-9 p-10 antialiased md:p-20'>
			<h1 className='text-2xl font-bold'>Издательства: </h1>
			{error && <div>{error} </div>}
			{isLoadingData && <div className='text-center text-2xl'>Загрузка...</div>}
			<PublishersCard data={data} />
		</div>
	);
}

export default PublishersList;
