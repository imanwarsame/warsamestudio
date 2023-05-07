'use client';
import * as React from 'react';
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';

export default function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed' sx={{backdropFilter:"blur(20px)", bgcolor: 'transparent'}}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>News</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
