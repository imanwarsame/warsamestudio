'use client';
import * as React from 'react';
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
	const theme = useTheme();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed' color='transparent' sx={{backdropFilter:"blur(5px)", border: 2, borderRadius: 10, borderColor: theme.palette.secondary.main }}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Warsame Studio</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			{/* 
				The toolbar below is rendering an empty toolbar component. It is added underneath 
				the `AppBar` to ensure that no content is hidden under the `AppBar` when using 
				`position='fixed'`
			*/}
			<Toolbar/>
		</Box>
	);
}
