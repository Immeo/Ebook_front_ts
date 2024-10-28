import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteSvgIcon from '../../../assets/icons/FavoriteSvgIcon';
import { removeFavorite } from '../../../store/favorite.slice';
import { IBook } from './BooksFavorites.props';

function BooksFavorites() {
	const dispatch = useDispatch();
	const [favorites, setFavorites] = useState<IBook[]>([]);

	useEffect(() => {
		const data = localStorage.getItem('favorites');
		const localFavorites: IBook[] = data ? JSON.parse(data) : [];
		setFavorites(localFavorites);
	}, []);
	const onFavorite = (book: IBook) => {
		dispatch(removeFavorite(book.book_slug));
		const updatedFavorites = favorites.filter(
			b => b.book_slug !== book.book_slug
		);
		setFavorites(updatedFavorites);
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
	};

	return (
		<div className='flex flex-wrap items-stretch justify-center gap-5'>
			{favorites.length === 0 && (
				<p className='text-center text-2xl'>У вас нет избранных книг</p>
			)}
			{favorites.map(book => (
				<div
					key={book.cover_image_path}
					className='flex flex-col max-w-sm p-3 rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white'
				>
					<div className='relative overflow-hidden bg-cover bg-no-repeat'>
						<img
							className='rounded-t-lg'
							src={book.cover_image_path}
							alt={book.title_books}
						/>
						<button
							type='button'
							className='relative'
							onClick={() => onFavorite(book)}
						>
							<span className='absolute bottom-80 left-80'>
								<FavoriteSvgIcon color='red' />
							</span>
						</button>
					</div>
					<div className='flex-grow w-full text-center'>
						<p>{book.title_books}</p>
					</div>
					<div className='flex items-center justify-center'>
						<Link
							className='align-middle hover:bg-action mt-3 rounded-lg bg-bg-action px-2 py-2 font-bold text-main-color shadow-md duration-100 hover:text-hover-main-color sm:mt-0 md:px-6 md:py-3 md:text-lg'
							to={`/book/${book.book_slug}`}
						>
							О книге
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}

export default BooksFavorites;
