import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Hidden from '@material-ui/core/Hidden';
import { Divider } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSpecificAnimals } from '../../assets/redux/actions/spAnimalsAction';
import { getStorage, updateStorage } from '../../assets/redux/actions/storageAction';

import YourStorage from './YourStorage';
import YourStorageNotSignedIn from './YourStorageNotSignedIn';
import YourTray from './YourTray';
import YourTrayNotSignedIn from './YourTrayNotSignedIn';
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
		minHeight: '20vh'
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
	const status = useSelector((state) => state.isLoggedIn);
	const { id } = useParams();
	const dispatch = useDispatch();
	const currentAnimal = useSelector((state) => state.currentAnimal);
	const currUser = useSelector((state) => state.currentUser);
	const userStorage = useSelector((state) => state.feedsStorage);

	if (currentAnimal.length === 0) {
		dispatch(getSpecificAnimals(id));
	} else {
		if (currentAnimal.data._id !== id) {
			dispatch(getSpecificAnimals(id));
		}
	}

	if (currUser.length !== 0) {
		if (userStorage.length === 0) {
			dispatch(getStorage(currUser._id));
		}
	}

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
				<Grid container item className={classes.leftContainer} lg={3} justify="center">
					<Grid item className={classes.leftContainerInside} lg={11}>
						<Grid container justify="center" direction="column" className={classes.storage}>
							<Grid item>
								{status.length === 0 ? (
									<YourStorageNotSignedIn />
								) : (
									<YourStorage storage={userStorage} currAnimal={currentAnimal.data} />
								)}
							</Grid>
						</Grid>
						<Divider />
						<Grid container justify="center" direction="column" className={classes.tray}>
							<Grid item>
								{status.length === 0 ? <YourTrayNotSignedIn /> : <YourTray storage={userStorage} />}
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
				<Grid container item className={classes.rightContainer} lg={2} direction="column">
					<Grid item className={classes.rightContainerInside} lg={12}>
						<AnimalsData currAnimal={currentAnimal} />
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
