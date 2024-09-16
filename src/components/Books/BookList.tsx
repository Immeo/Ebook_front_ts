import { useGetData } from '../../hooks/api/useGetData';
import BookCard from './BookCard/BookCard';

function BookList() {
	const { data, error, isLoadingData } = useGetData('books');

	return (
		<div className='container mx-auto p-10 antialiased md:p-20'>
			<BookCard data={data} error={error} isLoadingData={isLoadingData} />
		</div>
	);
}

export default BookList;
