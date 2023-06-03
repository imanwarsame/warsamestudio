'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir"
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { darkTheme, lightTheme } from './theme';
import ThemeToggle from './components/ThemeToggle';
import { useAppSelector } from './hooks';
import { themeSelector } from './reducers/ThemeReducer';

const inter = Inter({ subsets: ['latin'] });

//MUI (but actually underlying Emotion) isn't ready to work with Next's experimental `app/` directory feature
export default function Main({ children }: { children: React.ReactNode }) {
	const mode = useAppSelector(themeSelector);
	const theme = mode === 'light' ? lightTheme : darkTheme;

	return (
		<div>
			{/* Globally resets CSS to create a baseline to build on */}
			<CssBaseline />
			<NextAppDirEmotionCacheProvider options={{ key: "css" }}>
				<ThemeProvider theme={theme}>
					<Navbar/>
					<div className={inter.className}>
						{children}
					</div>
					<ThemeToggle/>
				</ThemeProvider>
			</NextAppDirEmotionCacheProvider>
		</div>
	);
}
