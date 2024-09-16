import { useParams } from 'react-router-dom';
import { useGetData } from '../../../hooks/api/useGetData';
import BookCard from '../../Books/BookCard/BookCard';

function BooksByGenre() {
	const { slug } = useParams();
	const { data, error, isLoadingData } = useGetData(`genres/${slug}/books`);

	return (
		<div className='container mx-auto p-10 antialiased md:p-20'>
			{data && (
				<BookCard data={data} isLoadingData={isLoadingData} error={error} />
			)}
		</div>
	);
}

export default BooksByGenre;