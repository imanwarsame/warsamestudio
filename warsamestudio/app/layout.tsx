// import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Main from '@/components/Main';

const inter = Inter({ subsets: ['latin'] });


export const metadata = {
	title: 'Warsame Studio',
	description: 'Architectural Photography Studio London',
};

//Main component defining layout has to be imported as it uses 'use client' which causes 
//issues with metadata. Metadata only works in server components not client components
//All files are server components by default unless you specify it is a client component
export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Main children={children}/>
			</body>
		</html>
	);
}
