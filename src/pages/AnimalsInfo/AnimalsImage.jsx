import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles((theme) => ({
	image: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '50vh'
	},
	imageSmall: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%'
	}
}));

export default function AnimalsImage() {
	const classes = useStyle();

	return (
		<Grid container justify="center" height="100%" direction="row">
			<Grid item lg={12}>
				<img
					className={classes.image}
					alt="animals"
					src="https://qph.fs.quoracdn.net/main-qimg-d74c93d381db1641534447a433a5338a"
				/>
			</Grid>
		</Grid>
	);
}
