import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteSvgIcon from '../../../assets/icons/FavoriteSvgIcon';
import {
	addFavorite,
	IBookFavorite,
	removeFavorite
} from '../../../store/favorite.slice';
import { AppDispatch, RootState } from '../../../store/store';
import { selectUserName } from '../../../store/user.slice';
import Rating from '../../Rating/Rating';
import { IBookCardProps } from './IBookCard.props';

function BookCard({ data }: IBookCardProps) {
	const dispatch = useDispatch<AppDispatch>();
	const userName = useSelector(selectUserName);
	const favorites = useSelector((state: RootState) => state.favorite.favorites);

	// Устанавливаем, находится ли книга в избранном
	const isFavorited = favorites.some(
		favorite => favorite.book_slug === data.book_slug
	);

	const onFavorite = (book: IBookFavorite) => {
		if (isFavorited) {
			dispatch(removeFavorite(book.book_slug));
		} else {
			dispatch(addFavorite(book));
		}
	};

	return (
		<>
			<div
				key={data.title_books}
				className='group m-5 mx-auto flex max-w-3xl transform flex-wrap bg-slate-200 shadow-lg duration-500 hover:-translate-y-1 md:flex-nowrap'
			>
				<div>
					<img
						src={data.cover_image_path}
						width='200px'
						className='h-full w-full rounded-lg object-fill shadow-lg duration-300 group-hover:scale-110 md:w-52 sm:w-32'
						height='200px'
						alt='Обложка книги'
					/>
					{userName && (
						<button
							type='button'
							className='relative'
							onClick={() => onFavorite(data)}
						>
							<span className='absolute bottom-64 left-[120px]'>
								<FavoriteSvgIcon color={isFavorited ? 'red' : 'black'} />
							</span>
						</button>
					)}
				</div>
				<div className='w-full p-5 pb-10 overflow-ellipsis whitespace-nowrap'>
					<h2 className='mt-4 text-lg font-semibold'>{data.title_books}</h2>
					<Link
						to={`/authors/${data.author_books.authors_slug}`}
						className='mt-2 text-lg text-main-color hover:text-hover-main-color'
					>
						{data.author_books.authors_full_name}
					</Link>
					<p className='mt-2 text-2xl'>{data.description_books}</p>
					<div className='sm:flex sm:justify-between'>
						<div className='flex flex-1 flex-col text-sm'>
							<span className='text-lg'>
								Жанр:{' '}
								<Link
									to={`/genres/${data.genre_books.genres_slug}`}
									className='cursor-pointer text-main-color duration-75 hover:text-hover-main-color'
								>
									{data.genre_books.genres_name}
								</Link>
							</span>
							<span className='mt-2 text-lg'>
								Издатель:{' '}
								<Link
									to={`/publishers/${data.publisher_books.publishers_slug}`}
									className='cursor-pointer text-main-color duration-75 hover:text-hover-main-color'
								>
									{data.publisher_books.publishers_name}
								</Link>
							</span>
							<div className='mt-5 flex items-center justify-between gap-5'>
								<div>
									{data && (
										<span className='flex gap-2 items-center text-lg'>
											Рейтинг:
											<Rating
												count={5}
												value={
													data.rate &&
													data.rate.length > 0 &&
													data.rate[0].rating > 0
														? data.rate[0].rating
														: 1
												}
											/>
										</span>
									)}
								</div>
								<div className='flex items-center'></div>
								<div className='items-end'>
									<Link
										className='hover:hover-bg-action mt-3 rounded-lg bg-bg-action px-5 py-2 font-bold text-main-color shadow-md duration-100 hover:text-hover-main-color sm:mt-0 md:px-6 md:py-3 md:text-lg'
										to={`/book/${data.book_slug}`}
									>
										О книге
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BookCard;
