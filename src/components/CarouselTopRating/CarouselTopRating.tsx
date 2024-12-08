import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetData } from '../../hooks/api/useGetData';
import Rating from '../Rating/Rating';

interface Book {
	book_slug: string;
	cover_image_path: string;
	average_rating: number;
}

interface CarouselTopRatingData {
	data: Book[] | null; // Здесь мы указываем, что data может быть null
	error: string | null;
	isLoadingData: boolean;
}

function CarouselTopRating() {
	const { data, error, isLoadingData }: CarouselTopRatingData =
		useGetData('top-rating');

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (data && data.length > 0) {
			const interval = setInterval(() => {
				setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
			}, 3000); // Показ книги каждые 3 секунды

			return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
		}
	}, [data]);

	const sortedBooks = data
		? [...data].sort((a, b) => b.average_rating - a.average_rating)
		: [];
	const currentBook = sortedBooks[currentIndex];

	return (
		<div className='flex justify-center items-center h-full'>
			{error && <div className='text-red-500'>{error}</div>}
			{isLoadingData && <div>Загрузка...</div>}
			{!isLoadingData && data && data.length === 0 && (
				<div>Нет доступных книг.</div>
			)}
			{!isLoadingData && currentBook && (
				<div className='max-w-[300px] bg-white rounded-lg shadow-md p-2 mx-2 transition-opacity duration-500'>
					<Link to={`/book/${currentBook.book_slug}`}>
						<img
							src={currentBook.cover_image_path}
							alt={currentBook.book_slug}
							className='w-full h-auto rounded-md'
						/>
					</Link>
					<div className='mt-2 justify-center flex'>
						<Rating count={5} value={currentBook.average_rating} />
					</div>
				</div>
			)}
		</div>
	);
}

export default CarouselTopRating;
