import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetData } from '../../../hooks/api/useGetData';
import { IBookData } from './BookDetalis.props';
import BookDetalisCard from './BookDetalisCard/BookDetalisCard.';

function BookDetalis() {
	const [bookRead, setBookRead] = useState<string | null>(null);
	const [isFrameOpen, setIsFrameOpen] = useState<boolean>(false);
	const { slug } = useParams();
	const { data, error, isLoadingData } = useGetData<IBookData>(`books/${slug}`);

	useEffect(() => {
		if (data && isFrameOpen) {
			setBookRead(data.link_to_file);
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
			{error && <div>{error}</div>}
			{isLoadingData && <div className='text-center text-2xl'>Загрузка...</div>}
			{!isLoadingData && data && (
				<BookDetalisCard
					data={data}
					onDowload={onDowload}
					onRead={onRead}
					isFrameOpen={isFrameOpen}
				/>
			)}
			<div className={`${isFrameOpen ? 'block' : 'hidden'} px-4 md:flex-1`}>
				{bookRead && <iframe width='100%' height='700px' src={bookRead} />}
			</div>
		</div>
	);
}

export default BookDetalis;
