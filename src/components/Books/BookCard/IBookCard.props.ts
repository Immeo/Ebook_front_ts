import { IAuthor } from '../../Authors/IAuthorCard.props';
import { IGrenre } from '../../Genre/GenreCard/IIGenresCard.props';
import { IPublishers } from '../../Publishers/IPublishers.props';

export interface IBookCardProps {
	data: IBookProps;
}

export interface IBookProps {
	title_books: string;
	author_books: IAuthor;
	genre_books: IGrenre;
	rate: Rate[];
	description_books: string;
	cover_image_path: string;
	link_to_file: string;
	publication_date: string;
	publisher_books: IPublishers;
	available: boolean;
	book_slug: string;
}

export interface Rate {
	rating: number;
}
