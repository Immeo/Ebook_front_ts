import { Link } from 'react-router-dom';
import { IGrenre } from './IIGenresCard.props';

interface IGenreCardProps {
	data: IGrenre[];
}

function GenreCard({ data }: IGenreCardProps) {
	console.log(data);

	return (
		<>
			{data.map(item => (
				<div key={item.genres_id}>
					<Link
						className='translate-x-1 cursor-pointer text-2xl text-main-color duration-75 hover:text-hover-main-color'
						to={`/genres/${item.genres_slug}`}
					>
						{item.genres_name}
					</Link>
				</div>
			))}
		</>
	);
}

export default GenreCard;
