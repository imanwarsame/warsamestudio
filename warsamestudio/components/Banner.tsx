'use client';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Button, Typography, Stack } from '@mui/material';
import Lottie from 'lottie-react';
import scrollAnimation from '../public/scroll-down.json';

export default function Banner() {
	const theme = useTheme();

	return (
		<Box display='flex' alignItems='center' justifyContent='center' sx={{ height: '100vh', backgroundColor: theme.palette.primary.main }}>
			<Stack direction='column' display='flex' alignItems='center' spacing={4}>
				<Typography variant='h1' align='center' color='white'>Architectural Photography</Typography>
				<Typography variant='body2' align='center' color='white'>London</Typography>
			</Stack>
			<Box display='flex' alignItems='center' justifyContent='center' sx={{ position: 'absolute', bottom: '20px' }}>
				<Lottie animationData={scrollAnimation} height={50} width={50} />
			</Box>
		</Box>
	);
}
