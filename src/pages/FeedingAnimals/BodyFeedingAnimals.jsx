import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

import { useSelector, useDispatch } from 'react-redux';
import { getAnimals } from '../../assets/redux/actions/animalsAction';
import CardForFeed from '../../assets/Components/CardForFeed';

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
	ourAnimals: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		marginTop: theme.spacing(10)
	},
	ourAnimalsSm: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '34px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		marginTop: theme.spacing(10)
	},
	adoptForBetter: {
		fontFamily: 'Lemonada',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '18px',
		lineHeight: '25px',
		display: 'flex',
		alignItems: 'center',
		color: '#6C5434',
		marginTop: theme.spacing(1)
	},
	giftText: {
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '16px',
		lineHeight: '21px',
		display: 'flex',
		alignItems: 'center',
		color: '#6C5434',
		marginTop: theme.spacing(1)
	},
	margin: {
		margin: theme.spacing(0)
	},
	text1: {
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		lineHeight: '65px',
		cursor: 'pointer',
		fontSize: '20px'
	},
	text2: {
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		lineHeight: '40px',
		cursor: 'pointer',
		fontSize: '20px'
	}
}));

export default function BodyFeedingAnimals() {
	const classes = useStyle();
	const status = useSelector((state) => state.isLoggedIn);
	const animalList = useSelector((state) => state.animalsData);
	const dispatch = useDispatch();
	let randomAnimals = [];

	useEffect(() => {
		if (animalList.length === 0) {
			dispatch(getAnimals());
		}
	}, []);
	for (let i = 0; i < 3; i++) {
		if (animalList.length !== 0) {
			let animal = animalList.data[Math.floor(Math.random() * animalList.data.length)];
			while (randomAnimals.includes(animal)) {
				animal = animalList.data[Math.floor(Math.random() * animalList.data.length)];
			}
			randomAnimals.push(animal);
		}
	}

	return (
		<div className={classes.root} style={{ background: '#ECE4BA' }}>
			<Grid container justify="center">
				<Hidden smDown>
					<Typography className={classes.ourAnimals}>Feed The Animals</Typography>
				</Hidden>

				<Hidden mdUp>
					<Typography className={classes.ourAnimalsSm}>Feed The Animals</Typography>
				</Hidden>
			</Grid>

			<Grid container justify="center">
				<Hidden smDown>
					<Typography className={classes.adoptForBetter}>
						Don't have a time to feed them at zoo?
						<br />Now you can do it everywhere!
					</Typography>
				</Hidden>
			</Grid>

			<Grid container justify="center">
				<Typography className={classes.giftText}>
					Buy Zoonations food currencies at Zoonations virtual store and feed those hungry animals
				</Typography>
			</Grid>

			<Grid container justify="center" className={classes.margin} spacing={2}>
				{randomAnimals.length !== 0 ? (
					randomAnimals.map((_animals) => {
						return <CardForFeed animals={_animals} />;
					})
				) : null}
				<Link to={'/our-animals'} style={{ textDecoration: 'none', padding: '10px' }}>
					<Button style={{ fontFamily: 'Fredoka One', padding: '10px', color: '#6C5434' }}>
						Not found the animals you want to feed? <br />Browse our other animals here!
					</Button>
				</Link>
			</Grid>

			<Grid container display="flex" maxWidth="xl" style={{ marginBottom: '30px' }}>
				<Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ background: '#AAE787' }}>
					<Hidden smDown>
						<Typography className={classes.text1}>
							<Link to="/donation" style={{ color: '#6C5434', textDecoration: 'none' }}>
								DONATE TO YOUR CITY ZOO
							</Link>
						</Typography>
					</Hidden>

					<Hidden mdUp>
						<Typography className={classes.text2}>
							<Link to="/donation" style={{ color: '#6C5434', textDecoration: 'none' }}>
								DONATE TO YOUR CITY ZOO
							</Link>
						</Typography>
					</Hidden>
				</Grid>

				<Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ background: '#91BD78' }}>
					<Hidden smDown>
						<Typography className={classes.text1}>
							<Link to="/animal-adopt" style={{ color: '#6C5434', textDecoration: 'none' }}>
								ADOPT YOUR FAVORITE ANIMAL
							</Link>
						</Typography>
					</Hidden>

					<Hidden mdUp>
						<Typography className={classes.text2}>
							<Link to="/animal-adopt" style={{ color: '#6C5434', textDecoration: 'none' }}>
								ADOPT YOUR FAVORITE ANIMAL
							</Link>
						</Typography>
					</Hidden>
				</Grid>
			</Grid>
		</div>
	);
}
