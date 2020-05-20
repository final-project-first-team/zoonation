import React, { Fragment } from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyle = makeStyles((theme) => ({
	image: {
		margin: 'auto',
		display: 'block',
		maxWidth: '50%',
		maxHeight: '10vh'
	},
	images: {
		width: theme.spacing(4),
		height: theme.spacing(4)
	}
}));

export default function AnimalsBottomData(props) {
	const classes = useStyle();
	const currentAnimal = props.currAnimal.data;
	console.log(currentAnimal);

	return (
		<Grid container>
			<Grid item lg={4}>
				<Typography style={{ textAlign: 'left', fontFamily: 'Fredoka One' }}>Zoo</Typography>
				<Typography style={{ textAlign: 'left', fontFamily: 'Raleway' }}>
					{currentAnimal !== undefined ? currentAnimal.zoo : null}
				</Typography>
			</Grid>
			<Grid item lg={4}>
				<Typography style={{ textAlign: 'left', fontFamily: 'Fredoka One' }}>Feeds</Typography>
				<Typography style={{ textAlign: 'left', fontFamily: 'Raleway' }}>
					{/* {currentAnimal !== undefined ? currentAnimal.feeds : null} */}
				</Typography>
			</Grid>
			<Grid item lg={4}>
				<Typography style={{ textAlign: 'left', fontFamily: 'Raleway' }}>Help these animals with</Typography>
				<Typography style={{ textAlign: 'center', fontFamily: 'Raleway' }}>
					Provide the feeds or adopt them
				</Typography>
				<Grid container alignItems="center">
					<Grid container item lg={5} alignItems="center">
						<Grid item lg={12}>
							<Button
								variant="text"
								size="small"
								// onClick={() => handleClick()}
								style={{ width: '100%', justifyContent: 'left' }}
							>
								<Avatar
									alt=""
									src="https://i.ibb.co/FBRSzPP/Pik-Png-com-fertilizer-png-4695532.png"
									style={{ marginRight: '5%' }}
									className={classes.images}
								/>
								<Typography variant="caption" style={{ fontFamily: 'Fredoka One', textAlign: 'left' }}>
									Feed me
								</Typography>
							</Button>
						</Grid>
					</Grid>
					<Grid item lg={2}>
						{' '}
						|{' '}
					</Grid>
					<Grid container item lg={5} alignItems="center">
						<Grid item lg={12}>
							<Button
								variant="text"
								size="small"
								// onClick={() => handleClick()}
								style={{ width: '100%', justifyContent: 'left' }}
							>
								<Avatar
									alt=""
									src="https://i.ibb.co/DMGt4Lc/kisspng-beagle-pet-sitting-pet-adoption-cat-pets-sign-5adccafe0d2a20-5333867415244193260539.png"
									style={{ marginRight: '5%' }}
									className={classes.images}
								/>
								<Typography variant="caption" style={{ fontFamily: 'Fredoka One', textAlign: 'left' }}>
									Adopt me
								</Typography>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
