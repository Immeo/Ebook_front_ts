import { useGetData } from '../../hooks/api/useGetData';
import BookCard from './BookCard/BookCard';
import { IBookProps } from './BookCard/IBookCard.props';

function BookList() {
	const { data, error, isLoadingData } = useGetData<IBookProps[]>('books'); // Ожидаем массив IBookProps

	return (
		<div className='container mx-auto p-10 antialiased md:p-20'>
			{error && <div className='text-red-500'>{error}</div>}
			{isLoadingData && <div className='text-center text-2xl'>Загрузка...</div>}
			{!isLoadingData &&
				data &&
				data.length > 0 &&
				// Перебираем массив `data` и передаем каждую книгу в отдельный компонент `BookCard`
				data.map(book => <BookCard key={book.book_slug} data={book} />)}
		</div>
	);
}

export default BookList;
