import { Link } from 'react-router-dom';
import { IAuthorCardProps } from '../IAuthorCard.props';

function AuthorCard({ data }: IAuthorCardProps) {
	if (!data || data.length === 0) {
		return <p>Нет авторов.</p>; // Обрабатываем случай, когда data пустое или null
	}

	return (
		<>
			{data.map(author => (
				<div key={author.authors_slug}>
					<Link
						className='translate-x-1 cursor-pointer text-2xl text-main-color duration-75 hover:text-hover-main-color'
						to={`/authors/${author.authors_slug}`}
					>
						{author.authors_full_name}
					</Link>
				</div>
			))}
		</>
	);
}

export default AuthorCard;
