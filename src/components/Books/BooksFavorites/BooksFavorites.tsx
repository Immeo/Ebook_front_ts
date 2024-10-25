import { Link } from 'react-router-dom';

interface IBook {
	cover_image_path: string;
	title_books: string;
	book_slug: string;
}

function BooksFavorites() {
	const data = localStorage.getItem('favorites');
	const favorites: IBook[] = data ? JSON.parse(data) : [];

	return (
		<div className='flex flex-wrap items-stretch justify-center gap-5'>
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
					</div>
					<div className='flex-grow w-full text-center'>
						<p>{book.title_books}</p>
					</div>
					<div className='flex items-center justify-center'>
						<Link
							className='align-middle hover:hover-bg-action mt-3 rounded-lg bg-bg-action px-2 py-2 font-bold text-main-color shadow-md duration-100 hover:text-hover-main-color sm:mt-0 md:px-6 md:py-3 md:text-lg'
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
