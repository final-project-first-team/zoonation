import React from 'react';

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
		<Grid container justify="center">
			<Grid item lg={12}>
				Hello
			</Grid>
			<Grid item lg={12}>
				Hello
			</Grid>
		</Grid>
	);
}
