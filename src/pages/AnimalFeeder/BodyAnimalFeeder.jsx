import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Hidden from '@material-ui/core/Hidden';
import { Divider } from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';
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
		flexDirection: 'row',
		padding: '5px'
	},
	title: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		marginTop: theme.spacing(10)
	},
	titleSm: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '34px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		marginTop: theme.spacing(10)
	},
	leftContainer: {
		backgroundColor: '#6c5434',
		minHeight: '100%'
	},
	leftContainerInside: {
		backgroundColor: '#f6f4e4',
		margin: theme.spacing(2),
		padding: '50px'
	},
	storage: {
		height: 'auto'
	},
	tray: {
		minHeight: '200px'
	},
	centerContainer: {
		minHeight: '100%'
	},
	image: {
		margin: 'auto',
		width: '100%',
		height: '260px',
		alignItems: 'center'
	},
	rightContainer: {
		backgroundColor: '#6c5434',
		minHeight: '100%'
	},
	rightContainerInside: {
		margin: theme.spacing(2),
		backgroundColor: '#f6f4e4'
	},
	test: {
		backgroundColor: 'transparent'
	},
	test2: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3)
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
		<div className={classes.root} style={{ background: '#ECE4BA', padding: '5px' }}>
			<Grid container justify="center">
				<Hidden smDown>
					<Typography className={classes.title}>Animal Feeding</Typography>
				</Hidden>

				<Hidden mdUp>
					<Typography className={classes.titleSm}>Animal Feeding</Typography>
				</Hidden>
			</Grid>

			<Grid container justify="space-evenly">
				<Grid container item className={classes.rightContainer} lg={3} direction="column" justify="center">
					<Grid item className={classes.rightContainerInside} lg={12}>
						<AnimalsData currAnimal={currentAnimal} />
					</Grid>
				</Grid>
				<Grid container item className={classes.centerContainer} lg={4}>
					<Grid item xs={12} style={{ padding: '10px' }}>
						{currentAnimal.length !== 0 ? (
							<img className={classes.image} alt="animals" src={`${currentAnimal.data.image1}`} />
						) : null}
					</Grid>
				</Grid>

				<Grid container item className={classes.leftContainer} lg={3} justify="center">
					<Grid item className={classes.leftContainerInside} lg={12} xs={12}>
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
			</Grid>

			<Grid container justify="flex-end" className={classes.test2}>
				<Hidden smDown>
					<Grid item lg={4}>
						<Button>
							<Link type="submit" fullWidth variant="contained" style={{ textDecoration: 'none' }}>
								<Typography style={{ fontFamily: 'Fredoka One', color: '#6c5434' }}>
									Feed another animal?
								</Typography>
							</Link>
						</Button>
					</Grid>
				</Hidden>

				<Hidden mdUp>
					<Grid item lg={4}>
						<Button>
							<Link type="submit" fullWidth variant="contained" style={{ textDecoration: 'none' }}>
								<Typography style={{ fontFamily: 'Fredoka One', color: '#6c5434' }}>
									Feed another animal?
								</Typography>
							</Link>
						</Button>
					</Grid>
				</Hidden>
			</Grid>
		</div>
	);
}
