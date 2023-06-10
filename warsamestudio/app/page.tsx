'use client';
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import './styles.css';

export default function Home() {
	const [galleryVisible, setGalleryVisible] = React.useState(false);
	const itemData = [
		{
			src: './13MercerStreet-3.1.jpg',
			title: 'Bed',
		},
		{
			src: './4SlingsbyPlace-2.jpg',
			title: 'Books',
		},
		{
			src: './7MercerStreet-4.jpg',
			title: 'Sink',
		},
		{
			src: './DSC_9028.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9080.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9096.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9118.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9123.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9180.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9252.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9312.jpg',
			title: 'Kitchen',
		},
		{
			src: './TheShard.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9377.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9384.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9468.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9472.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9477.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9498.jpg',
			title: 'Kitchen',
		},
		{
			src: './DSC_9125.jpg',
			title: 'Kitchen',
		},
	];

	React.useEffect(() => {
		itemData.forEach((picture) => {
			new Image().src = picture.src;
		});

		setGalleryVisible(true);
	})

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
			delayChildren: 0.5,
			staggerChildren: 0.2
			}
		}
	};
	  
	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1
		}
	};

	return (
		<Grid container spacing={0} sx={{ width: '75%', mb: 5, mt: 1 }}>
			<Grid item xs={12} sx={{ backgroundColor: 'transparent' }}>
				{/* <PhotoAlbum layout='masonry' photos={itemData}/> */}
				{galleryVisible &&
				<ImageList variant="masonry" cols={2} gap={8}>
					<motion.ul className="container" variants={container} initial="hidden" animate="visible">
					{itemData.map((index) => (
						<motion.li key={index.src} className="item" variants={item}>
							<ImageListItem key={index.src}>
								<img src={index.src} srcSet={index.src} alt={index.title} loading='lazy'/>
							</ImageListItem>
						</motion.li>
					))}
					</motion.ul>
				</ImageList>
				}
				<Typography>Hello</Typography>
			</Grid>
		</Grid>
	);
}