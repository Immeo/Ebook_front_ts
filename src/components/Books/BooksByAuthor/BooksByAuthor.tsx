import { useParams } from 'react-router-dom';
import { useGetData } from '../../../hooks/api/useGetData';
import BookCard from '../BookCard/BookCard';

function BooksByAuthor() {
	const { slug } = useParams();
	const { data, error, isLoadingData } = useGetData(`authors/${slug}/books`);

	return (
		<div className='container mx-auto p-10 antialiased md:p-20'>
			{data && (
				<BookCard data={data} error={error} isLoadingData={isLoadingData} />
			)}
		</div>
	);
}

export default BooksByAuthor;
