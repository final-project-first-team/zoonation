import React, { Fragment } from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles((theme) => ({
	image: {
		margin: 'auto',
		display: 'block',
		maxWidth: '50%',
		maxHeight: '10vh'
	}
}));

export default function AnimalsBottomData(props) {
	const classes = useStyle();
	const currentAnimal = props.currAnimal.data;

	return (
		<Grid container>
			<Grid item lg={4}>
				<Typography style={{ textAlign: 'left' }}>Zoo</Typography>
				<Typography style={{ textAlign: 'left' }}>
					{currentAnimal !== undefined ? currentAnimal.zoo : null}
				</Typography>
			</Grid>
			<Grid item lg={4}>
				<Typography style={{ textAlign: 'left' }}>Feeds</Typography>
				<Typography style={{ textAlign: 'left' }}>
					{currentAnimal !== undefined ? currentAnimal.feeds : null}
				</Typography>
			</Grid>
			<Grid item lg={4}>
				<Typography style={{ textAlign: 'left' }}>Help these animals with</Typography>
				<Typography style={{ textAlign: 'center' }}>Provide the feeds or adopt them</Typography>
				<Grid container alignItems="center">
					<Grid container item lg={5} alignItems="center">
						<Grid item lg={5}>
							<img
								className={classes.image}
								src="https://i.ibb.co/FBRSzPP/Pik-Png-com-fertilizer-png-4695532.png"
								alt="Pik-Png-com-fertilizer-png-4695532"
								border="0"
							/>
						</Grid>
						<Grid item lg={6}>
							<Typography style={{ textAlign: 'left' }}>Feed Me</Typography>
						</Grid>
					</Grid>
					<Grid item lg={2}>
						{' '}
						|{' '}
					</Grid>
					<Grid container item lg={5} alignItems="center">
						<Grid item lg={5}>
							<img
								className={classes.image}
								src="https://i.ibb.co/DMGt4Lc/kisspng-beagle-pet-sitting-pet-adoption-cat-pets-sign-5adccafe0d2a20-5333867415244193260539.png"
								alt="kisspng-beagle-pet-sitting-pet-adoption-cat-pets-sign-5adccafe0d2a20-5333867415244193260539"
								border="0"
							/>
						</Grid>
						<Grid item lg={6}>
							<Typography style={{ textAlign: 'left' }}>Adopt Me</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
