'use client';
import * as React from 'react';
import Lottie from 'lottie-react';
import { AppBar, Box, Toolbar, Button, Typography, Stack, useMediaQuery } from '@mui/material';
import animatedScrollIcon from '../public/scroll-down.json';
import Hero from '../public/Hero.jpg';

export default function Banner() {
	const imageStyles = {
		height: '100vh',
		backgroundImage: `url(${Hero.src})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed'
	};

	//Boolean that checks whether the screen is larger than 1000 px to define text size
	const matches = useMediaQuery('(min-width:1300px)');
	
	return (
		<Box display='flex' alignItems='center' justifyContent='center' sx={imageStyles}>
			<Stack direction='column' display='flex' alignItems='center' spacing={4}>
				<Typography variant={matches ? 'h1' : 'h3'} align='center' color='white'>Architectural Photography</Typography>
				<Typography variant='body2' align='center' color='white'>London</Typography>
			</Stack>
			<Box display='flex' alignItems='center' justifyContent='center' sx={{ position: 'absolute', bottom: '20px' }}>
				<Lottie animationData={animatedScrollIcon} height={50} width={50} />
			</Box>
		</Box>
	);
}
