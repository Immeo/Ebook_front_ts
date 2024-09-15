import { Link } from 'react-router-dom';
import { IGrenresCard } from './IIGenresCard.props';

function GenreCard(data: IGrenresCard) {
	return (
		<>
			{data &&
				data.data.map(item => (
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
