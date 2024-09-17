import { Link } from 'react-router-dom';
import Rating from '../../../Rating/Rating';
import { BookDetalisCardProps } from './BookDetalisCard.props';

function BookDetalisCard({
	data,
	isLoadingData,
	error,
	onDowload,
	onRead
}: BookDetalisCardProps) {
	if (data === null) {
		return null;
	}

	// Обеспечьте безопасный доступ к свойствам, используя optional chaining
	const authorSlug = data.author_books?.authors_slug;
	const authorName = data.author_books?.authors_full_name;
	const genreSlug = data.genre_books?.genres_slug;
	const genreName = data.genre_books?.genres_name;
	const publisherSlug = data.publisher_books?.publishers_slug;
	const publisherName = data.publisher_books?.publishers_name;
	const rating = data.rate[0].rating;

	return (
		<>
			{isLoadingData && <p className='text-center'>Загрузка...</p>}
			{error && <p>Error: {error}</p>}
			{!isLoadingData && !error && (
				<div className='-mx-4 flex flex-col md:flex-row'>
					<div className='gap-22 flex justify-around'>
						<div className='px-4 md:flex-1'>
							<div className='h-[460px] rounded-lg'>
								<img
									className='h-full w-full object-cover'
									src={data.cover_image_path}
									alt={`Обложка книги ${data.title_books}`}
								/>
							</div>
							<div className='-mx-2 mb-4 flex'>
								<div className='w-1/2 px-2'>
									<button
										className='w-full translate-y-1 rounded-lg bg-bg-action px-5 py-2.5 text-sm font-medium text-main-color hover:bg-hover-bg-action hover:text-hover-main-color focus:outline-none focus:ring'
										onClick={onRead}
									>
										Читать
									</button>
								</div>
								<div className='w-1/2 px-2'>
									<button
										className='w-full translate-y-1 rounded-lg bg-main-color px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-hover-main-color focus:outline-none focus:ring'
										onClick={() => onDowload(data.link_to_file ?? '')}
									>
										Скачать
									</button>
								</div>
							</div>
						</div>
						<div className='px-4 md:flex-1'>
							<div className='flex flex-col gap-6'>
								<h2 className='text-text-color text-3xl font-bold'>
									{data.title_books}
								</h2>
								<div>
									<p className='text-text-color text-2xl'>
										{data.publication_date}
									</p>
								</div>
								<span className='text-text-color text-2xl font-bold'>
									Автор:{' '}
									{authorName && (
										<Link
											className='translate-x-1 cursor-pointer text-2xl text-main-color duration-75 hover:text-hover-main-color'
											to={`/authors/${authorSlug}`}
										>
											{authorName}
										</Link>
									)}
								</span>
								<span className='text-text-color text-2xl font-bold'>
									Жанр:{' '}
									{genreName && (
										<Link
											className='translate-x-1 cursor-pointer text-2xl text-main-color duration-75 hover:text-hover-main-color'
											to={`/genres/${genreSlug}`}
										>
											{genreName}
										</Link>
									)}
								</span>
								<span className='text-text-color text-2xl font-bold'>
									Издатель:{' '}
									{publisherName && (
										<Link
											className='translate-x-1 cursor-pointer text-2xl text-main-color duration-75 hover:text-hover-main-color'
											to={`/publishers/${publisherSlug}`}
										>
											{publisherName}
										</Link>
									)}
								</span>
								<div className='flex items-center gap-2 text-xl'>
									<Rating count={5} value={rating ?? 1} /> {rating} из 5 звезд
								</div>
								<div>
									<p className='text-text-color text-2xl font-bold'>
										Описание:
									</p>
									<p className='text-text-color text-2xl'>
										{data.description_books}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default BookDetalisCard;
