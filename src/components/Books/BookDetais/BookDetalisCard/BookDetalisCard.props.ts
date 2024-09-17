export interface BookDetalisCardProps {
	error: string | null;
	data: IBookDetalisProps;
	isLoadingData: boolean;
	onDowload: (link: string) => void;
	onRead: () => void;
	link_to_file: string;
	bookRead: string | null;
}

interface IBookDetalisProps {
	title_books?: string;
	author_books?: {
		authors_first_name: string;
		authors_last_name: string;
		authors_full_name: string;
		authors_slug: string;
	};
	genre_books?: {
		genres_id: number;
		genres_name: string;
		genres_slug: string;
	};
	rate?: {
		rating: number;
	}[];
	description_books?: string;
	cover_image_path?: string;
	link_to_file?: string;
	publication_date?: string;
	publisher_books?: {
		publishers_name: string;
		publishers_slug: string;
		publishers_id: number;
	};
	book_slug?: string;
}
