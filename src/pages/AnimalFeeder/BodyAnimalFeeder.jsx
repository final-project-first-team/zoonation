import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Hidden from '@material-ui/core/Hidden';
import { Divider } from '@material-ui/core';

import YourStorage from './YourStorage';
import YourTray from './YourTray';
import AnimalsData from './AnimalsData';

const useStyle = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		height: 'auto',
		width: '100%',
		alignItems: 'center',
		textAlign: 'center',
		flexDirection: 'row'
	},
	title: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		marginTop: theme.spacing(10),
		marginLeft: theme.spacing(4)
	},
	titleSm: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '34px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		marginTop: theme.spacing(10),
		marginLeft: theme.spacing(2)
	},
	leftContainer: {
		backgroundColor: '#6c5434',
		marginBottom: theme.spacing(3),
		minHeight: '58vh'
	},
	leftContainerInside: {
		margin: theme.spacing(2),
		backgroundColor: '#f6f4e4'
	},
	storage: {
		paddingTop: theme.spacing(1),
		minHeight: '26vh'
	},
	tray: {
		minHeight: '26vh'
	},
	centerContainer: {
		backgroundColor: '#6c5434',
		marginBottom: theme.spacing(3),
		minHeight: '58vh'
	},
	image: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		minHeight: '58vh'
	},
	rightContainer: {
		backgroundColor: '#6c5434',
		marginBottom: theme.spacing(3),
		minHeight: '58vh'
	},
	rightContainerInside: {
		margin: theme.spacing(2),
		backgroundColor: '#f6f4e4'
	},
	test: {
		backgroundColor: 'red',
		marginBottom: theme.spacing(3)
	},
	button: {
		// display: 'flex',
		// textAlign: 'center',
		// fontSize: '44px',
		// fontFamily: 'Fredoka One',
		// color: '#6C5434',
		marginRight: theme.spacing(5)
	},
	test2: {
		marginBottom: theme.spacing(3),
		marginRight: theme.spacing(5)
	}
}));

export default function BodyAnimalFeeder() {
	const classes = useStyle();
	return (
		<div className={classes.root} style={{ background: '#ECE4BA' }}>
			<Grid container justify="flex-start">
				<Hidden smDown>
					<Typography className={classes.title}>Animal Feeder</Typography>
				</Hidden>

				<Hidden mdUp>
					<Typography className={classes.titleSm}>Animal Feeder</Typography>
				</Hidden>
			</Grid>

			<Grid container justify="space-around">
				<Grid container item className={classes.leftContainer} lg={2} justify="center">
					<Grid item className={classes.leftContainerInside} lg={11}>
						<Grid container justify="center" direction="column" className={classes.storage}>
							<Grid item>
								<YourStorage />
							</Grid>
						</Grid>
						<Divider />
						<Grid container justify="center" direction="column" className={classes.tray}>
							<Grid item>
								<YourTray />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container item className={classes.centerContainer} lg={6}>
					<Grid item>
						<img
							className={classes.image}
							alt="animals"
							src="https://wallpaperaccess.com/full/2136603.jpg"
						/>
					</Grid>
				</Grid>
				<Grid container item className={classes.rightContainer} lg={3} direction="column">
					<Grid item className={classes.rightContainerInside} lg={12}>
						<AnimalsData />
					</Grid>
				</Grid>
			</Grid>

			<Grid container justify="flex-end" className={classes.test2}>
				<Hidden smDown>
					<Grid item lg={4}>
						<Button className={classes.button} type="submit" fullWidth variant="contained">
							<Typography>Feed another animals</Typography>
						</Button>
					</Grid>
				</Hidden>

				<Hidden mdUp>
					<Grid item lg={4}>
						<Button className={classes.button} type="submit" fullWidth variant="contained">
							<Typography>Feed another animals</Typography>
						</Button>
					</Grid>
				</Hidden>
			</Grid>
		</div>
	);
}
