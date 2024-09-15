import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
function Layout() {
	return (
		<div className='flex min-h-screen flex-col'>
			<div className='mb-10'>
				<Header />
			</div>
			<div className='flex-1'>
				<Outlet />
			</div>
		</div>
	);
}
export default Layout;
