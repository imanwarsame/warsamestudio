'use client';
import * as React from 'react';
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';
import LinkButton from './LinkButton';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
	const [isScrollPastBanner, setIsScrollPastBanner] = React.useState(false);
	const theme = useTheme();

	/* React hook that sets the state of `isScrollPastBanner` to `true` if the user has scrolled past the height
	of the banner and `false` otherwise. Used to change colour of Navbar text. */
	React.useEffect(() => {
	  const handleScroll = () => {
		const bannerHeight = window.innerHeight;
		const scrollPosition = window.scrollY;
  
		if (scrollPosition > bannerHeight) {
		  setIsScrollPastBanner(true);
		} else {
		  setIsScrollPastBanner(false);
		}
	  };
  
	  window.addEventListener('scroll', handleScroll);
  
	  return () => {
		window.removeEventListener('scroll', handleScroll);
	  };
	}, []);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed' color='transparent' sx={{ backdropFilter:"blur(5px)", borderRadius: '0px' }}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, color: isScrollPastBanner ? 'inherit' : 'white' }}>Warsame Studio</Typography>
					<LinkButton type='button' href="/about" 
					sx={{ color: isScrollPastBanner ? theme.palette.secondary.main : 'white', mr: 2, textTransform: 'capitalize', typography: 'body2' }}>
						About
					</LinkButton>
					<LinkButton type='button' href="/contact" 
					sx={{ color: isScrollPastBanner ? theme.palette.secondary.main : 'white', mr: 2, textTransform: 'capitalize', typography: 'body2' }}>
						Contact
					</LinkButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
