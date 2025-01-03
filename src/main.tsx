import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthorsList from './components/Authors/AuthorsList';
import BookDetalis from './components/Books/BookDetais/BookDetalis';
import BookList from './components/Books/BookList';
import BooksByAuthor from './components/Books/BooksByAuthor/BooksByAuthor';
import BooksByGenre from './components/Books/BooksByGenre/BooksByGenre.';
import BooksFavorites from './components/Books/BooksFavorites/BooksFavorites';
import BooksPublishers from './components/Books/BooksPublishers/BooksPublishers';
import GenreList from './components/Genre/GenreList';
import PublishersList from './components/Publishers/PublishersList';
import './index.css';
import ConfirmCode from './pages/Auth/ConfirmCode';
import Layout from './pages/Layout/Layout';
import { store } from './store/store';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/activate',
				element: <ConfirmCode />
			},
			{
				path: 'authors',
				element: <AuthorsList />
			},
			{
				path: 'authors/:slug',
				element: <BooksByAuthor />
			},
			{
				path: 'genres',
				element: <GenreList />
			},
			{
				path: 'genres/:slug',
				element: <BooksByGenre />
			},
			{
				path: 'publishers',
				element: <PublishersList />
			},
			{
				path: 'publishers/:slug',
				element: <BooksPublishers />
			},
			{
				path: 'books',
				element: <BookList />
			},
			{
				path: 'book/:slug',
				element: <BookDetalis />
			},
			{
				path: '/favorites',
				element: <BooksFavorites />
			}
		]
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
