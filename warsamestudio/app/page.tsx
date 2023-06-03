'use client';
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material';

export default function Home() {
	const itemData = [
		{
			img: './13MercerStreet-3.1.jpg',
			title: 'Bed',
		},
		{
			img: './4SlingsbyPlace-2.jpg',
			title: 'Books',
		},
		{
			img: './7MercerStreet-4.jpg',
			title: 'Sink',
		},
		{
			img: './DSC_9028.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9080.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9096.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9118.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9123.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9180.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9252.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9312.jpg',
			title: 'Kitchen',
		},
		{
			img: './TheShard.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9377.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9384.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9468.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9472.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9477.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9498.jpg',
			title: 'Kitchen',
		},
		{
			img: './DSC_9125.jpg',
			title: 'Kitchen',
		},
	  ];

	return (
		<Grid container spacing={0} sx={{ width: '75%', mb: 5, mt: 1 }}>
			<Grid item xs={12} sx={{ backgroundColor: 'transparent' }}>
				<ImageList variant="masonry" cols={2} gap={8}>
					{itemData.map((item) => (
						<ImageListItem key={item.img}>
							<img
							src={item.img}
							srcSet={item.img}
							alt={item.title}
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Grid>
		</Grid>
	);
}
