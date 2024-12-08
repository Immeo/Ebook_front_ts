export interface IPublishersCard {
	data: IPublishers[];
}

export interface IPublishers {
	publishers_name: string;
	publishers_slug: string;
	publishers_id: number;
}

export type TPublishersListProps = IPublishers[];
