import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthorsList from './components/Authors/AuthorsList';
import GenreList from './components/Genre/GenreList';
import './index.css';
import Layout from './pages/Layout/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'authors',
				element: <AuthorsList />
			},
			{
				path: 'genres',
				element: <GenreList />
			}
		]
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
