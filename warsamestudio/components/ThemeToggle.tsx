import React from 'react';
import { IconButton } from '@mui/material';
import { themeSelector, toggleColourTheme } from '../reducers/ThemeReducer';
import { MoonIcon } from '../assets/MoonIcon';
import { SunIcon } from '../assets/SunIcon';
import { useAppDispatch, useAppSelector } from '@/hooks';

export default function ThemeToggle() {
	const mode = useAppSelector(themeSelector);
	const dispatch = useAppDispatch();

	return(
		<IconButton disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, right: '1%',
			bottom: '1%', position: 'fixed' }} onClick={() => dispatch(toggleColourTheme())}>
			{mode === 'light' ? <MoonIcon/> : <SunIcon/>}
		</IconButton>
	);
}

