import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles((theme) => ({
	image: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '50vh',
		borderRadius: '5px'
	},
	imageSmall: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%'
	}
}));

export default function AnimalsImage(props) {
	const classes = useStyle();
	const animal = props.currAnimal;

	return (
		<Grid container justify="center" height="100%" direction="row">
			<Grid item lg={12}>
				<img className={classes.image} alt="animals" src={animal.length !== 0 ? animal.data.image1 : ''} />
			</Grid>
		</Grid>
	);
}
