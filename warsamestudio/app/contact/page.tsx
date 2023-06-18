'use client';
import { Grid, Typography } from '@mui/material';

export default function Contact() {

	return (
		<Grid container spacing={0} sx={{ width: '75%', mb: 5, mt: 10 }}>
		<Grid item xs={12} display='flex'>
		  <iframe
			id="sprout-iframe"
			src="//api.sproutstudio.com/leads/viewform/faa9942b3db2cef85f89339d995e8674d702088b3ca20ab1/453763"
			scrolling="no"
			style={{
			  display: 'block',
			  margin: '0px',
			  border: 0,
			  padding: '0px',
			  width: '100%',
			  minWidth: '100%',
			  height: '1000px',
			  overflow: 'hidden',
			  backgroundColor: 'transparent'
			}}
		  ></iframe>
		</Grid>
	  </Grid>
	);
}
