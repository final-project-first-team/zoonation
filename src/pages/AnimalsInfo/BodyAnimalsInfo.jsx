import React from 'react';

import AnimalsImage from './AnimalsImage';
import AnimalsData from './AnimalsData';

import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles((theme) => ({
	root: {
		background: '#ECE4BA',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		paddingTop: '6%',
		justifyContent: 'space-around'
	},
	base: {
		height: '100%',
		backgroundColor: '#ECE4BA'
	},
	imageViewer: {
		display: 'flex',
		minHeight: '50vh',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'transparent',
		height: '100%'
	},
	dataViewer: {
		display: 'flex',
		minHeight: '50vh',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'rgba(255, 255, 255, 0.39)',
		height: '80%'
	},
	bottomData: {
		display: 'flex',
		minHeight: '10%',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'rgba(255, 255, 255, 0.39)',
		height: '10%',
		marginTop: '2%',
		padding: '6%'
	}
}));

export default function BodyAnimalsInfo() {
	const classes = useStyle();

	return (
		<div className={classes.root}>
			<Grid container justify="space-around">
				<Grid item lg={5}>
					<Paper elevation={0} className={classes.imageViewer}>
						<AnimalsImage />
					</Paper>
				</Grid>
				<Grid item lg={5}>
					<Paper className={classes.dataViewer}>
						<AnimalsData />
					</Paper>
				</Grid>
			</Grid>
			<Grid container justify="space-around">
				<Grid item lg={11}>
					<Paper className={classes.bottomData}>Hello</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
