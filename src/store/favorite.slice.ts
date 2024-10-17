import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IBookFavorite {
	book_slug: string;
	title_books: string;
	cover_image_path: string;
}

interface IFavoritesState {
	favorites: IBookFavorite[];
}

// Функция для получения избранных книг из localStorage
const getFavoritesFromLocalStorage = (): IBookFavorite[] => {
	const storedFavorites = localStorage.getItem('favorites');
	return storedFavorites ? JSON.parse(storedFavorites) : [];
};

// Функция для сохранения избранных книг в localStorage
const saveFavoritesToLocalStorage = (favorites: IBookFavorite[]) => {
	localStorage.setItem('favorites', JSON.stringify(favorites));
};

const initialState: IFavoritesState = {
	favorites: getFavoritesFromLocalStorage()
};

const favoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorite(state, action: PayloadAction<IBookFavorite>) {
			state.favorites.push(action.payload);
			saveFavoritesToLocalStorage(state.favorites); // Сохраняем в localStorage
		},
		removeFavorite(state, action: PayloadAction<string>) {
			state.favorites = state.favorites.filter(
				book => book.book_slug !== action.payload
			);
			saveFavoritesToLocalStorage(state.favorites); // Сохраняем в localStorage
		}
	}
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
