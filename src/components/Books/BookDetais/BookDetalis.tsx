import { useEffect, useState } from 'react';
import { useGetSingleData } from '../../../hooks/api/useGetSingleData';
import BookDetalisCard from './BookDetalisCard/BookDetalisCard.';

function BookDetalis() {
	const [bookRead, setBookRead] = useState<string | null>(null);
	const [isFrameOpen, setIsFrameOpen] = useState(false);
	const { data, error, isLoadingData } = useGetSingleData();

	useEffect(() => {
		if (data && isFrameOpen) {
			setBookRead(data?.link_to_file); // Используйте optional chaining для безопасного доступа к свойству
		} else {
			setBookRead(null);
		}
	}, [data, isFrameOpen]);

	const onDowload = (link: string) => {
		window.open(link, '_blank');
	};

	const onRead = () => {
		setIsFrameOpen(!isFrameOpen);
	};

	return (
		<div className='mx-auto max-w-6xl py-8'>
			<BookDetalisCard
				data={data} // Прямо передайте data без проверки на null
				isLoadingData={isLoadingData}
				error={error}
				onDowload={onDowload}
				onRead={onRead}
			/>
			<div className={`${isFrameOpen ? 'block' : 'hidden'} px-4 md:flex-1`}>
				{bookRead && <iframe width='100%' height='700px' src={bookRead} />}
			</div>
		</div>
	);
}

export default BookDetalis;
