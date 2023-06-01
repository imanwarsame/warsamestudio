'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { darkTheme, lightTheme } from './theme';
import ThemeToggle from './components/ThemeToggle';
import { useAppSelector } from './hooks';
import { themeSelector } from './reducers/ThemeReducer';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });


export default function Main({
	children,
}: {
  children: React.ReactNode
}) {
	const mode = useAppSelector(themeSelector);
	const theme = mode === 'light' ? lightTheme : darkTheme;

	return (
		<div>
			<ThemeProvider theme={theme}>
				{/* Globally resets CSS to create a baseline to build on */}
				<CssBaseline />
				<Navbar/>
				<div className={inter.className}>
					{children}
				</div>
				<ThemeToggle/>
			</ThemeProvider>
		</div>
	);
}
