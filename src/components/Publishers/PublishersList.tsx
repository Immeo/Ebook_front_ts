import { useGetData } from '../../hooks/api/useGetData';
import { TPublishersListProps } from './IPublishers.props';
import PublishersCard from './PublishersCard/PublishersCard';

function PublishersList() {
	const { data, error, isLoadingData } =
		useGetData<TPublishersListProps>('publishers');

	return (
		<div className='container mx-auto flex gap-9 p-10 antialiased md:p-20'>
			<h1 className='text-2xl font-bold'>Издательства: </h1>
			{error && <div>{error} </div>}
			{isLoadingData && <div className='text-center text-2xl'>Загрузка...</div>}
			{!isLoadingData && data && <PublishersCard data={data} />}
		</div>
	);
}

export default PublishersList;
