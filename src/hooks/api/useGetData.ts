import axios from 'axios';
import { useEffect, useState } from 'react';
import { PREFIX } from '../../helpering/Api/PREFIX';

export const useGetData = (whatsData: string) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoadingData, setIsLoadingData] = useState(false);

	const getData = async () => {
		try {
			setIsLoadingData(true);
			await new Promise(resolve => setTimeout(resolve, 1000));
			const response = await axios.get(`${PREFIX}${whatsData}/`, {
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
