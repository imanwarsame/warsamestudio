'use client';
import { Grid, Stack, Typography } from '@mui/material';
import ProfileImage from '../../public/Profile.jpg';
import Image from "next/image";

export default function About() {

	return (
        <Grid container spacing={2} sx={{ width: '75%', mb: 5, mt: 10 }}>
			<Grid item md={6} sm={12}>
				<Image
                    src={ProfileImage}
                    alt='Profile image. Self portrait taken of the photographer using the cracked wing mirror of a motorbike'
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto"
                    }}/>
			</Grid>
			<Grid item md={6} sm={12}>
				<Stack direction='column'>
					<Typography variant='h6'>Connecting people to great design…</Typography>
					<Typography variant='body2' marginTop={1}>As an architectural photographer, I connect people to great design through captivating imagery. With a keen eye for detail, thoughtful use of light, and composition, I tell compelling stories that showcase exceptional designs and products.</Typography>
					<Typography variant='body2' marginTop={1}>With a background in civil engineering, I bring a wealth of knowledge and experience in the built environment to the table. Collaborating closely with architects, developers, product manufacturers, and interior designers, I take pride in bringing your creative visions to life.</Typography>
					<Typography variant='body2' marginTop={1}>Based primarily in London and the South-East of England, I am available for commissions both within the UK and internationally. Get in touch to discuss your next project.</Typography>
				</Stack>
			</Grid>
		</Grid>
    );
}
