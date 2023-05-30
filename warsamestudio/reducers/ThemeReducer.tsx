import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

const initialMode = (): string => {
	try {
		const localStorageValue = window.localStorage.getItem('colour_theme');
		return localStorageValue ? JSON.parse(localStorageValue) : 'dark'; //default dark theme
	} catch (error) {
		return 'dark';
	}
};

const themeSlice = createSlice({
	name: 'colour_theme',
	initialState: initialMode,
	reducers: {
		toggleTheme(type) {
			if (type === 'dark') {
				return 'light';
			}
			return 'dark';
		}
	}
});

export const toggleColourTheme = () => (dispatch: any) => {
	const localStorageTheme = localStorage.getItem('colour_theme');
	const currentTheme = localStorageTheme !== null ? JSON.parse(localStorageTheme) : 'dark';	

	if (currentTheme === 'dark') {
		window.localStorage.setItem('colour_theme', JSON.stringify('light'));
	} else {
		window.localStorage.setItem('colour_theme', JSON.stringify('dark'));
	}

	dispatch(toggleTheme());
};

export const { toggleTheme } = themeSlice.actions;
export const themeSelector = (state: RootState) => state.colour_theme;
export default themeSlice.reducer;