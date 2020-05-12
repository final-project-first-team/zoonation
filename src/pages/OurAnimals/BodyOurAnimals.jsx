import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import CardMapping from '../Components/CardMapping';

import { useDispatch, useSelector } from 'react-redux';
import { getAnimals } from '../../assets/redux/actions/animalsAction';

const useStyle = makeStyles((theme) => ({
	root: {
		// CSS BODY
		display: 'flex',
		flexWrap: 'wrap',
		height: 'auto',
		width: 'auto',
		alignItems: 'flex-start',
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
		textAlign: 'left',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		marginTop: theme.spacing(10),
		marginLeft: theme.spacing(1)
	},

	serachAndButton: {
		display: 'flex',
		flexDirection: 'row',
		flexGrow: 1,
		textAlign: 'left',
		margin: theme.spacing(3)
	},

	margin: {
		margin: theme.spacing(2)
	}
}));

export default function BodyOurAnimals() {
	const classes = useStyle();
	const dispatch = useDispatch();
	const animalsData = useSelector((state) => state.animalsData);
	if (animalsData.length === 0) {
		dispatch(getAnimals());
	}
	// console.log(animalsData.data);

	return (
		<div className={classes.root} style={{ background: '#ECE4BA' }}>
			<Grid container maxWidth="lg">
				<Grid item lg={12} md={12} sm={12}>
					<Typography className={classes.ourAnimals}>Our Animals</Typography>
				</Grid>

				<div className={classes.serachAndButton}>
					<Grid item lg={6} md={6} sm={6}>
						<Button>Search Box</Button>
					</Grid>

					<Grid item lg={6} md={6} sm={6} style={{ textAlign: 'right' }}>
						<Button
							style={{
								background: '#C4C4C4',
								borderRadius: '30px',
								fontFamily: 'Fredoka One',
								color: '#6C5434'
							}}
						>
							To help
							<br />
							the animals and
							<br />
							the zoos,
							<br />
							click here!
						</Button>
					</Grid>
				</div>

				<Grid container className={classes.margin} justify="center" spacing={2}>
					{animalsData.length !== 0 ? (
						animalsData.data.map((_animals) => {
							return <CardMapping animals={_animals} />;
						})
					) : null}
					{/* <CardMapping /> */}
					{/* {animalsData.data.map((_animals) => {
                        return (
                        )
					})} */}
				</Grid>
			</Grid>
		</div>
	);
}
