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
	
	return (
		<Box display='flex' alignItems='center' justifyContent='center' sx={imageStyles}>
			<Stack direction='column' display='flex' alignItems='center' spacing={4}>
				<Typography sx={{ typography: { lg: 'h1', md: 'h2', sm: 'h4', xs: 'h5' } }} align='center' color='white'>Architectural Photography</Typography>
				<Typography variant='body2' align='center' color='white'>London</Typography>
			</Stack>
			<Box display='flex' alignItems='center' justifyContent='center' sx={{ position: 'absolute', bottom: '20px' }}>
				<Lottie animationData={animatedScrollIcon} height={50} width={50} />
			</Box>
		</Box>
	);
}
