import { configureStore } from '@reduxjs/toolkit';
import ThemeReducer from './reducers/ThemeReducer';

//Store is configured
export const store = configureStore({
	reducer: {
		colour_theme: ThemeReducer,
	}
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: equivalent of getState
export type AppDispatch = typeof store.dispatch