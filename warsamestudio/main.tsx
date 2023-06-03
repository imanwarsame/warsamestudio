'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { darkTheme, lightTheme } from './theme';
// import ThemeToggle from './components/ThemeToggle';
// import { useAppSelector } from './hooks';
// import { themeSelector } from './reducers/ThemeReducer';
// import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });


export default function Main({
	children,
}: {
  children: React.ReactNode
}) {
	//// Issues with the next.js 13 and MUI means this doesn't work well with SSR
	// const mode = useAppSelector(themeSelector);
	// const theme = mode === 'light' ? lightTheme : darkTheme;

	return (
		<div>
			<ThemeProvider theme={lightTheme}>
				{/* Globally resets CSS to create a baseline to build on */}
				<CssBaseline />
				<Navbar/>
				<div className={inter.className}>
					{children}
				</div>
			</ThemeProvider>
		</div>
	);
}
