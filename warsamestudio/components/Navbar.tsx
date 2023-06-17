'use client';
import * as React from 'react';
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
	const theme = useTheme();
	const [isScrollPastBanner, setIsScrollPastBanner] = React.useState(false);

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
					<Typography variant="body2" component="div" sx={{ color: isScrollPastBanner ? 'inherit' : 'white', mr: 2 }}>About</Typography>
					<Typography variant="body2" component="div" sx={{ color: isScrollPastBanner ? 'inherit' : 'white', mr: 2 }}>Contact</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
