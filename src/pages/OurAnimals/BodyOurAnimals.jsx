import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import CardMapping from '../Components/CardMapping';
import SearchBar from '../Components/SearchBar';

import { useDispatch, useSelector } from 'react-redux';
import { getAnimals } from '../../assets/redux/actions/animalsAction';

const useStyle = makeStyles((theme) => ({
	root: {
		// CSS BODY
		display: 'flex',
		flexWrap: 'wrap',
		height: 'auto',
		// width: 'auto',
		alignItems: 'center',
		textAlign: 'center',
		flexDirection: 'row'
	},
	roots: {
		maxWidth: 345
	},
	media: {
		height: 140
	},
	ourAnimals: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		marginTop: theme.spacing(10)
	},
	serachAndButton: {
		display: 'flex',
		flexDirection: 'column',

		textAlign: 'left',
		margin: theme.spacing(3)
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

export default function BodyOurAnimals() {
	const classes = useStyle();
	const dispatch = useDispatch();
	const animalsData = useSelector((state) => state.animalsData);
	if (animalsData.length === 0) {
		dispatch(getAnimals());
	}

	return (
		<div className={classes.root} style={{ background: '#ECE4BA' }}>
			<Grid container justify="center">
				<Typography className={classes.ourAnimals}>Our Animals</Typography>
				<Grid container justify="center" maxWidth="sm">
					<SearchBar />
				</Grid>
				<Grid container justify="center">
					<Typography className={classes.toHelp}>
						To help the animals and the zoos,
						<br />
						<Link color="inherit">
							<b>click here!</b>
						</Link>
					</Typography>
				</Grid>
				<Grid container className={classes.margin} justify="center" spacing={2}>
					{animalsData.length !== 0 ? (
						animalsData.data.map((_animals) => {
							return <CardMapping animals={_animals} />;
						})
					) : null}
				</Grid>
			</Grid>
		</div>
	);
}
