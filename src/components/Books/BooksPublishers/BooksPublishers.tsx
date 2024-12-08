import { useParams } from 'react-router-dom';
import { useGetData } from '../../../hooks/api/useGetData';
import BookCard from '../BookCard/BookCard';
import { IBookProps } from '../BookCard/IBookCard.props';

function BooksPublishers() {
	const { slug } = useParams();
	const { data, error, isLoadingData } = useGetData<IBookProps[]>(
		`publishers/${slug}/books`
	);

	return (
		<div className='container mx-auto p-10 antialiased md:p-20'>
			{error && <div>{error}</div>}
			{isLoadingData && <div className='text-center text-2xl'>Загрузка...</div>}
			{!isLoadingData &&
				data &&
				data.length > 0 &&
				data.map(book => <BookCard key={book.book_slug} data={book} />)}
		</div>
	);
}

export default BooksPublishers;
