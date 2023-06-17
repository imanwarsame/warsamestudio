'use client';
import * as React from 'react';
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';
import Link from './Link';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
	const [isScrollPastBanner, setIsScrollPastBanner] = React.useState(false);
	const [isDefaultPath, setDefaultPath] = React.useState(window.location.pathname === '/');
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

	//Select colour based on page and scroll position
	const linkColour = isScrollPastBanner || !isDefaultPath ? theme.palette.secondary.main : 'white';	

	return (
		<Box sx={{ flexGrow: 1 }}>
		<AppBar position='fixed' color='transparent' sx={{ backdropFilter: "blur(5px)", borderRadius: '0px' }}>
			<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<Link
				type='button'
				href="/"
				onClick={() => setDefaultPath(true)}
				sx={{
				'&:hover': { backgroundColor: 'transparent' },
				color: linkColour,
				ml: 2,
				textTransform: 'uppercase',
				typography: 'h6'
				}}
			>
				Warsame Studio
			</Link>
			<Box>
				<Link
				type='button'
				href="/about"
				onClick={() => setDefaultPath(false)}
				sx={{
					color: linkColour,
					ml: 2,
					textTransform: 'capitalize',
					typography: 'body2'
				}}
				>
				About
				</Link>
				<Link
				type='button'
				href="/contact"
				onClick={() => setDefaultPath(false)}
				sx={{
					color: linkColour,
					ml: 2,
					textTransform: 'capitalize',
					typography: 'body2'
				}}
				>
				Contact
				</Link>
			</Box>
			</Toolbar>
		</AppBar>
		</Box>
	);
}
