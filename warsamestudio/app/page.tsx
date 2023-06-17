'use client';
import { Grid, ImageList, ImageListItem, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import './styles.css';

export default function Home() {
	const [galleryVisible, setGalleryVisible] = React.useState(false);

	const itemData = [
		{
			src: './bark_1.jpg',
			title: 'Bed',
		},
		{
			src: './bark_2.jpg',
			title: 'Books',
		},
		{
			src: './bark_3.jpg',
			title: 'Sink',
		},
		{
			src: './bark_4.jpg',
			title: 'Kitchen',
		},
		{
			src: './bark_5.jpg',
			title: 'Kitchen',
		},
		{
			src: './bark_6.jpg',
			title: 'Kitchen',
		},
		{
			src: './bark_7.jpg',
			title: 'Kitchen',
		},
		{
			src: './bark_8.jpg',
			title: 'Kitchen',
		},
		{
			src: './bark_9.jpg',
			title: 'Kitchen',
		},
		{
			src: './bark_10.jpg',
			title: 'Kitchen',
		}
	];

	/* Using the `useLayoutEffect` hook from React to load all the images in the `itemData` array and set
	the state of `galleryVisible` to `true` once all the images have been loaded. This ensures that the
	images are fully loaded before they are displayed in the gallery. */
	React.useLayoutEffect(() => {
		itemData.forEach((picture) => {
			const newImage = new Image();
			newImage.src = picture.src;
		});

		setGalleryVisible(true);
	})

	const container = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
			delayChildren: 1,
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

	//Boolean that checks whether the screen is larger than 1000 px to define gallery columns
	const matches = useMediaQuery('(min-width:1000px)');

	return (
		<Grid container spacing={0} sx={{ width: '75%', mb: 5, mt: 1 }}>
			<Grid item xs={12} sx={{ backgroundColor: 'transparent' }}>
				{galleryVisible &&
				<ImageList variant="masonry" cols={matches ? 2 : 1} gap={8} sx={{ height: '100%' }}>
					<motion.ul className="container" variants={container} initial="hidden" animate="visible">
						{itemData.map((index) => (
							<motion.div key={index.src} className="item" variants={item}>
								<ImageListItem key={index.src}>
									<img src={index.src} srcSet={index.src} alt={index.title} loading='lazy'/>
								</ImageListItem>
							</motion.div>
						))}
					</motion.ul>
				</ImageList>
				}
				<Typography>Hello</Typography>
			</Grid>
		</Grid>
	);
}