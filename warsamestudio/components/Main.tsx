'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { darkTheme, lightTheme } from '../theme';
import { store } from '../store';
import { Provider } from 'react-redux';
import ThemeToggle from './ThemeToggle';

const inter = Inter({ subsets: ['latin'] });


export default function Main({
	children,
}: {
  children: React.ReactNode
}) {

	return (
		<Provider store={store}>
			<ThemeProvider theme={darkTheme}>
				{/* Globally resets CSS to create a baseline to build on */}
				<CssBaseline />
				<Navbar/>
				<div className={inter.className}>
					{children}
				</div>
				<ThemeToggle/>
			</ThemeProvider>
		</Provider>
	);
}
