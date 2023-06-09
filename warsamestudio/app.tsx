'use client';
import Main from './main';
import { store } from './store';
import { Provider } from 'react-redux';

export default function App({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<Provider store={store}>
			<Main children={children}/>
		</Provider>
	);
}
