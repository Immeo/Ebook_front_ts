import axios from 'axios';
import { useEffect, useState } from 'react';
import { PREFIX } from '../../helpering/Api/PREFIX';

export const useGetData = <T>(whatsData: string) => {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoadingData, setIsLoadingData] = useState(false);

	const getData = async () => {
		try {
			setIsLoadingData(true);
			await new Promise(resolve => setTimeout(resolve, 1000));
			const response = await axios.get<T>(`${PREFIX}${whatsData}/`, {
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
		getData();
	}, []);

	return { getData, data, error, isLoadingData };
};
