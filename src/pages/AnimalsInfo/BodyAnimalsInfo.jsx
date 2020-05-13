import React from 'react';

import AnimalsImage from './AnimalsImage';
import AnimalsData from './AnimalsData';
import AnimalsBottomData from './AnimalsBottomData';

import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSpecificAnimals } from '../../assets/redux/actions/spAnimalsAction';

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
		minHeight: '50vh',
		backgroundColor: 'rgba(255, 255, 255, 0.39)',
		height: '100%',
		borderRadius: '15%'
	},
	bottomData: {
		minHeight: '20vh',
		backgroundColor: 'rgba(255, 255, 255, 0.39)',
		height: '100%',
		padding: '1%'
	}
}));

export default function BodyAnimalsInfo() {
	const classes = useStyle();
	const { id } = useParams();
	const dispatch = useDispatch();
	const currentAnimal = useSelector((state) => state.currentAnimal);
	if (currentAnimal.length === 0) {
		dispatch(getSpecificAnimals(id));
	} else {
		if (currentAnimal.data._id !== id) {
			dispatch(getSpecificAnimals(id));
		}
	}

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
						<AnimalsData currAnimal={currentAnimal} />
					</Paper>
				</Grid>
			</Grid>
			<Grid container justify="space-around">
				<Grid item lg={11}>
					<Paper className={classes.bottomData}>
						<AnimalsBottomData currAnimal={currentAnimal} />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
