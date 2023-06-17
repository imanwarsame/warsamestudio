'use client';
import { Grid, Typography } from '@mui/material';

export default function Contact() {

	return (
		<Grid container spacing={0} sx={{ width: '75%', mb: 5, mt: 1 }}>
			<Grid item xs={12} sx={{ backgroundColor: 'transparent' }}>
				<Typography>Contact me here</Typography>
			</Grid>
		</Grid>
	);
}
