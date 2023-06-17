'use client';
import * as React from 'react';
import { Typography } from '@mui/material';

interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps): JSX.Element {
	const currentYear = new Date().getFullYear();
  
	return (
	  <footer style={{ textAlign: 'center', marginBottom: 5, marginTop: 5 }}>
		<Typography variant="body2" color="textSecondary">
		  Copyright &copy; {currentYear} {name} | All rights reserved
		</Typography>
	  </footer>
	);
}
