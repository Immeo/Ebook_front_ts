import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Импортируйте useParams
import { BookDetalisCardProps } from '../../components/Books/BookDetais/BookDetalisCard/BookDetalisCard.props';
import { PREFIX } from '../../helpering/Api/PREFIX';

export interface UseGetSingleDataResponse {
	data: BookDetalisCardProps | null;
	error: string | null;
	isLoadingData: boolean;
	getData: () => void;
}

export const useGetSingleData = (): UseGetSingleDataResponse => {
	const [data, setData] = useState<BookDetalisCardProps | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoadingData, setIsLoadingData] = useState(false);
	const { slug } = useParams(); // Получите slug из параметров маршрута

	const getData = async () => {
		try {
			setIsLoadingData(true);
			await new Promise(resolve => setTimeout(resolve, 1000));
			const response = await axios.get(`${PREFIX}books/${slug}/`, {
				withCredentials: false
			});
			setData(response.data);
			setIsLoadingData(false);
		} catch (error) {
			if (error instanceof axios.AxiosError) {
				setError(error.response?.data);
			}
		}
	};

	useEffect(() => {
		if (slug) {
			getData();
		}
	}, [slug]);

	return { getData, data, error, isLoadingData };
};
