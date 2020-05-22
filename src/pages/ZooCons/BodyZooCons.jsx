import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';

import SliderSlick from '../../assets/Components/SliderSlick';

import { useDispatch, useSelector } from 'react-redux';
import { getZoos } from '../../assets/redux/actions/zooActions';

const useStyles = makeStyles((theme) => ({
	root: {
		//CSS BODY
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		height: '100vh',
		width: 'auto',
		alignItems: 'center',
		textAlign: 'center',
		flexDirection: 'row'
	},
	gridList: {
		flexWrap: 'nowrap',
		transform: 'translateZ(0)'
	},
	ourAnimals: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		marginTop: theme.spacing(10)
	},
	margin: {
		margin: theme.spacing(3)
	},
	toHelp: {
		fontFamily: 'Lemonada',
		color: '#6C5434',
		cursor: 'pointer'
	}
}));

export default function BodyZooCons() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const zooData = useSelector((state) => state.zooData);
	if (zooData.length === 0) {
		dispatch(getZoos());
	}

	return (
		<div className={classes.root} style={{ background: '#ECE4BA' }}>
			<Grid container justify="center" spacing={1}>
				<Typography className={classes.ourAnimals}>Zoos And Conservations</Typography>

				<Grid container justify="center" spacing={1}>
					<Typography className={classes.toHelp}>
						To help the animals and the zoos,
						<br />
						<Link to='/donation' className={classes.toHelp} style={{ textDecoration: 'none' }}>
							<b>click here!</b>
						</Link>
					</Typography>
				</Grid>

				<Grid container className={classes.margin} justify="center" spacing={5}>
					<Grid item xs={12}>
						<SliderSlick zoo={zooData} />
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
