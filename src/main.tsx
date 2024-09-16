import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthorsList from './components/Authors/AuthorsList';
import BookList from './components/Books/BookList';
import GenreList from './components/Genre/GenreList';
import PublishersList from './components/Publishers/PublishersList';
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
			},
			{
				path: 'publishers',
				element: <PublishersList />
			},
			{
				path: 'books',
				element: <BookList />
			}
		]
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
