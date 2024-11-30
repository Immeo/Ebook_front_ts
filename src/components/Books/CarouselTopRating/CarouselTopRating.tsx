import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetData } from '../../../hooks/api/useGetData';
import Rating from '../../Rating/Rating';

interface CarouselTopRatingProps {
	data: {
		book_slug: string;
		cover_image_path: string;
		average_rating: number;
	}[];
}

function CarouselTopRating() {
	const {
		data,
		error,
		isLoadingData
	}: { data: CarouselTopRatingProps['data'] } = useGetData('top-rating'); // замените "top-rating" на нужный вам адрес
	const [currentIndex, setCurrentIndex] = useState(0); // Создаем состояние для currentIndex

	useEffect(() => {
		if (data.length > 0) {
			const interval = setInterval(() => {
				setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
			}, 3000); // Показ книги каждые 3 секунды

			return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
		}
	}, [data]);

	const sortedBooks = [...data].sort(
		(a, b) => b.average_rating - a.average_rating
	);

	const currentBook = sortedBooks[currentIndex];

	return (
		<div className='flex justify-center items-center h-full'>
			{error && <div>{error}</div>}
			{!isLoadingData && currentBook && (
				<div className='min-w-[300px] bg-white rounded-lg shadow-md p-2 mx-2 transition-opacity duration-500'>
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
