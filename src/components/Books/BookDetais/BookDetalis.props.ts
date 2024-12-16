import { IAuthor } from '../../Authors/IAuthorCard.props';
import { IGrenre } from '../../Genre/GenreCard/IIGenresCard.props';
import { IPublishers } from '../../Publishers/IPublishers.props';

interface IRating {
	rating_id: number;
	what_book: number;
	rating: number;
}

export interface IBookData {
	title_books: string;
	author_books: IAuthor;
	genre_books: IGrenre;
	rate: IRating[];
	description_books: string;
	cover_image_path: string;
	link_to_file: string;
	publication_date: string;
	publisher_books: IPublishers;
	available: boolean;
	book_slug: string;
}

export interface IBookDetalisCardProps {
	data: IBookData;
	onDowload: (link: string) => void;
	onRead: () => void;
	isFrameOpen: boolean;
}
