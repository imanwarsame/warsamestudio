import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

//Navbar has to be imported as it uses 'use client'. Metadata only works in server components not client components
//All files are server components by default unless you specify it is a client component
export const metadata = {
	title: 'Warsame Studio',
	description: 'Architectural Photography Studio London',
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Navbar/>
				<div className={inter.className}>
					{children}
				</div>
			</body>
		</html>
	);
}
