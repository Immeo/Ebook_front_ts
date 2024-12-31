import { format } from 'date-fns';

function Footer() {
	return (
		<footer className='flex justify-between p-5'>
			<div className='text-lg text-gray-500'>
				Ebook @ 2024 - {format(new Date(), 'yyyy')}
			</div>
			<div className='text-lg text-gray-500'>Все права защищены</div>
		</footer>
	);
}
export default Footer;
