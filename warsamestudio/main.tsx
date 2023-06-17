'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '@/components/Navbar';
import { darkTheme, lightTheme } from './theme';
import { Box } from '@mui/material';
import Footer from './components/Footer';
// import ThemeToggle from './components/ThemeToggle';
// import { useAppSelector } from './hooks';
// import { themeSelector } from './reducers/ThemeReducer';
// import { useEffect, useState } from 'react';


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
				<Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' sx={{ backgroundColor: 'transparent' }}>
					{children}
				</Box>
				<Footer name='Iman Warsame'/>
			</ThemeProvider>
		</div>
	);
}
