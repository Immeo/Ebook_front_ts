import { Link } from 'react-router-dom';
import { IAuthorCardProps } from './IAuthorsCard.props';

function AuthorCard(data: IAuthorCardProps) {
	return (
		<>
			{data &&
				data.data.map(item => (
					<div key={item.authors_slug}>
						<Link
							className='translate-x-1 cursor-pointer text-2xl text-main-color duration-75 hover:text-hover-main-color'
							to={`/authors/${item.authors_slug}`}
						>
							{item.authors_full_name}
						</Link>
					</div>
				))}
		</>
	);
}

export default AuthorCard;
