import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyle = makeStyles((theme) => ({
	image: {
		margin: 'auto',
		display: 'block',
		maxWidth: '75%',
		maxHeight: '10vh'
	}
}));

export default function AnimalsImage(props) {
	const classes = useStyle();
	const currentAnimal = props.currAnimal.data;

	return (
		<Grid container direction="column" spacing={0}>
			<Grid item lg={12} style={{ paddingTop: '2%' }}>
				<Typography style={{ fontFamily: 'Fredoka One', fontSize: '24px' }}>
					{currentAnimal !== undefined ? currentAnimal.name : null}
				</Typography>
			</Grid>
			<Grid item lg={12}>
				<Typography style={{ fontFamily: 'Raleway' }}>
					{currentAnimal !== undefined ? currentAnimal.scientificName : null}
				</Typography>
			</Grid>
			<Grid container item lg={12} style={{ paddingTop: '6%' }}>
				<Grid container item lg={6} justify="center">
					<Grid item lg={3}>
						<img
							className={classes.image}
							src="https://i.ibb.co/0srgTXz/icons8-height-100.png"
							alt="icons8-height-100"
							border="0"
						/>
					</Grid>
					<Grid container item lg={8}>
						<Grid item lg={12} style={{ textAlign: 'left' }}>
							<Typography style={{ fontFamily: 'Fredoka One' }}>Height</Typography>
						</Grid>
						<Grid item lg={12} style={{ textAlign: 'left' }}>
							<Typography>{currentAnimal !== undefined ? currentAnimal.height : null} m</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid container item lg={6} justify="center">
					<Grid item lg={3}>
						<img
							className={classes.image}
							src="https://i.ibb.co/YZDbtTJ/icons8-weight-100.png"
							alt="icons8-weight-100"
							border="0"
						/>
					</Grid>
					<Grid container item lg={8}>
						<Grid item lg={12} style={{ textAlign: 'left' }}>
							<Typography style={{ fontFamily: 'Fredoka One' }}>Weight</Typography>
						</Grid>
						<Grid item lg={12} style={{ textAlign: 'left' }}>
							<Typography>{currentAnimal !== undefined ? currentAnimal.weight : null} kg</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid container item lg={12} style={{ paddingTop: '4%' }}>
				<Grid container item lg={6} justify="center">
					<Grid item lg={3}>
						<Avatar
							className={classes.image}
							alt={currentAnimal !== undefined ? currentAnimal.status : null}
							src="/broken-image.jpg"
							className={classes.orange}
						/>
						{/* <img
							className={classes.image}
							src="https://i.ibb.co/0srgTXz/icons8-height-100.png"
							alt="icons8-height-100"
							border="0"
						/> */}
					</Grid>
					<Grid container item lg={8}>
						<Grid item lg={12} style={{ textAlign: 'left' }}>
							<Typography style={{ fontFamily: 'Fredoka One' }}>Status</Typography>
						</Grid>
						<Grid item lg={12} style={{ textAlign: 'left' }}>
							<Typography>{currentAnimal !== undefined ? currentAnimal.status : null}</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid container item lg={6} justify="center">
					<Grid item lg={3}>
						<img
							className={classes.image}
							src="https://i.ibb.co/yYdqXhN/free-fish-icon-6.png"
							alt="free-fish-icon-6"
							border="0"
						/>
					</Grid>
					<Grid container item lg={8}>
						<Grid item lg={12} style={{ textAlign: 'left' }}>
							<Typography style={{ fontFamily: 'Fredoka One' }}>Populations</Typography>
						</Grid>
						<Grid item lg={12} style={{ textAlign: 'left' }}>
							<Typography>
								{currentAnimal !== undefined ? currentAnimal.populations : null} in the wild
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid container item lg={12} style={{ paddingTop: '4%' }}>
				<Grid container item lg={6} justify="center">
					<Grid item lg={3}>
						<img
							className={classes.image}
							src="https://i.ibb.co/tXqDzSR/iconfinder-46-171420.png"
							alt="iconfinder-46-171420"
							border="0"
						/>
					</Grid>
					<Grid container item lg={8}>
						<Grid item lg={12} style={{ textAlign: 'left' }}>
							<Typography style={{ fontFamily: 'Fredoka One' }}>Habitats</Typography>
						</Grid>
						<Grid item lg={12} style={{ textAlign: 'left' }}>
							<Typography>{currentAnimal !== undefined ? currentAnimal.habitats : null}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
