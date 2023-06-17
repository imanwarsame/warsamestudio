'use client';
import { Grid, ImageList, ImageListItem, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import './styles.css';
import Banner from '@/components/Banner';

export default function Home() {
	const [galleryVisible, setGalleryVisible] = React.useState(false);

	const imageData = [
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
		imageData.forEach((picture) => {
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
		<Grid container spacing={0} sx={{ width: '100%', mb: 5, mt: 0 }}>
			<Grid item xs={12}>
				<Banner/>
			</Grid>
			<Grid container sx={{ width: '100%', justifyContent: 'center' }}>
				<Grid item xs={12} sm={9} sx={{ backgroundColor: 'transparent' }}>
					{galleryVisible && (
						<ImageList variant="masonry" cols={matches ? 2 : 1} gap={8} sx={{ height: '100%', pr: 5 }}>
							<motion.ul className="container" variants={container} initial="hidden" whileInView="visible">
								{imageData.map((index) => (
								<motion.div key={index.src} className="item" variants={item}>
									<ImageListItem key={index.src}>
									<img src={index.src} srcSet={index.src} alt={index.title} loading='lazy'/>
									</ImageListItem>
								</motion.div>
								))}
							</motion.ul>
						</ImageList>
					)}
				</Grid>
			</Grid>
		</Grid>
	);
}