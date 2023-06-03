import App from '@/app';

export const metadata = {
	title: 'Warsame Studio',
	description: 'Architectural Photography Studio London',
};

//Main component defining layout has to be imported as it uses 'use client' which causes 
//issues with metadata. Metadata only works in server components not client components
//All files are server components by default unless you specify it is a client component
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<App children={children}/>
			</body>
		</html>
	);
}