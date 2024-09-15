export interface IAuthor {
	authors_first_name: string;
	authors_last_name: string;
	authors_full_name: string;
	authors_slug: string;
}

export interface IAuthorCardProps {
	data: IAuthor[];
}
