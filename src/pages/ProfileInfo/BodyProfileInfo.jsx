import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

import SideNav from '../../assets/Components/SideNav';
import RegularMeat from '../FeedsStore/RegularMeat';
import PremiumMeat from '../FeedsStore/PremiumMeat';
import RegularFodder from '../FeedsStore/RegularFodder';
import PremiumFodder from '../FeedsStore/PremiumFodder';
import RegularFruit from '../FeedsStore/RegularFruit';
import PremiumFruit from '../FeedsStore/PremiumFruit';
import RegularBean from '../FeedsStore/RegularBean';
import PremiumBean from '../FeedsStore/PremiumBean';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		height: 'auto',
		width: '100%',
		alignItems: 'center',
		textAlign: 'center',
		flexDirection: 'row'
	},
	base: {
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(3)
	},
	leftCont: {
		backgroundColor: 'rgba(255, 255, 255, 0.39)',
		paddingBottom: theme.spacing(11)
	},
	rightCont: {
		backgroundColor: 'rgba(255, 255, 255, 0.39)'
	},
	title: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4)
	},
	subTitle: {
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(4)
	},
	image: {
		width: theme.spacing(6),
		height: theme.spacing(6)
	}
}));

export default function BodyProfileInfo() {
	const classes = useStyles();
	const currUser = useSelector((state) => state.currentUser);

	return (
		<div className={classes.root} style={{ background: '#ECE4BA' }}>
			<Grid container className={classes.base} justify="space-around">
				<Grid container item lg={3} className={classes.leftCont} direction="column" alignItems="center">
					<SideNav />
				</Grid>
				<Grid container item lg={8} className={classes.rightCont} direction="column" alignItems="center">
					<Grid item className={classes.title}>
						<Typography variant="h4" style={{ fontFamily: 'Fredoka One, cursive' }}>
							Profile Info
						</Typography>
					</Grid>
					<Grid container item justify="flex-start" alignItems="center" style={{ paddingLeft: '5%' }}>
						<Grid item lg={1} style={{ textAlign: 'left' }}>
							<Typography>Name : </Typography>
						</Grid>
						<Grid item lg={5} style={{ textAlign: 'left' }}>
							<TextField />
						</Grid>
						<Grid item lg={1} style={{ textAlign: 'left' }}>
							<Typography>Pass : </Typography>
						</Grid>
						<Grid item lg={5} style={{ textAlign: 'left' }}>
							<TextField />
						</Grid>
					</Grid>
					<Grid
						container
						item
						justify="flex-start"
						alignItems="center"
						style={{ paddingLeft: '5%', paddingTop: '2%' }}
					>
						<Grid item lg={1} style={{ textAlign: 'left' }}>
							<Typography>Email : </Typography>
						</Grid>
						<Grid item lg={5} style={{ textAlign: 'left' }}>
							<TextField />
						</Grid>
						<Grid item lg={5} style={{ textAlign: 'right' }}>
							<Button size="small">Change data</Button>
						</Grid>
					</Grid>
					<Grid container item className={classes.subTitle}>
						<Grid container item lg={8} justify="center" alignItems="center">
							<Grid item lg={12} style={{ paddingBottom: '3%' }}>
								<Typography variant="h6" style={{ fontFamily: 'Fredoka One, cursive' }}>
									Feeds Storage
								</Typography>
							</Grid>
							<Grid item lg={4}>
								<RegularMeat />
							</Grid>
							<Grid item lg={1}>
								X 10
							</Grid>
							<Grid item lg={4}>
								<RegularFruit />
							</Grid>
							<Grid item lg={1}>
								X 10
							</Grid>
							<Grid item lg={4}>
								<PremiumMeat />
							</Grid>
							<Grid item lg={1}>
								X 10
							</Grid>
							<Grid item lg={4}>
								<PremiumFruit />
							</Grid>
							<Grid item lg={1}>
								X 10
							</Grid>
							<Grid item lg={4}>
								<RegularFodder />
							</Grid>
							<Grid item lg={1}>
								X 10
							</Grid>
							<Grid item lg={4}>
								<RegularBean />
							</Grid>
							<Grid item lg={1}>
								X 10
							</Grid>
							<Grid item lg={4}>
								<PremiumFodder />
							</Grid>
							<Grid item lg={1}>
								X 10
							</Grid>

							<Grid item lg={4}>
								<PremiumBean />
							</Grid>
							<Grid item lg={1}>
								X 10
							</Grid>
							<Grid item lg={12} style={{ paddingTop: '5%' }}>
								<Typography>Buy more feeds on our feeds store</Typography>
							</Grid>
						</Grid>
						<Grid container item lg={4} justify="center">
							<Grid item lg={12} style={{ paddingBottom: '3%' }}>
								<Typography variant="h6" style={{ fontFamily: 'Fredoka One, cursive' }}>
									Current Animal Adopted
								</Typography>
							</Grid>
							<Grid>
								<Avatar alt="" src="" style={{ marginRight: '5%' }} className={classes.image} />
							</Grid>
							<Grid item lg={12}>
								<Typography>Capybara</Typography>
							</Grid>
							<Grid item lg={12}>
								<Typography>Taman Safari Indonesia</Typography>
							</Grid>
							<Grid item lg={12}>
								<Typography>You adopted this animal for 3 months</Typography>
							</Grid>
							<Grid item lg={12}>
								<Typography>The animal you adopted is in good condition</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			{/* <Grid item lg={7} md={7} xs={12} style={{ margin: '25px' }}>
				<Container maxWidth="sm">
					<Typography
						variant="h5"
						style={{
							fontFamily: 'Fredoka One, cursive',
							textAlign: 'left'
						}}
					>
						Profile Info
					</Typography>
					<form>
						<TextField
							id="filled-basic"
							label="Full Name"
							variant="filled"
							fullWidth
							disabled
							className={classes.margin}
						/>

						<TextField
							id="filled-basic"
							label="Email"
							variant="filled"
							fullWidth
							disabled
							className={classes.margin}
						/>

						<TextField
							id="filled-basic"
							label="Password"
							variant="filled"
							fullWidth
							disabled
							className={classes.margin}
						/>
					</form>

					<Button
						variant="contained"
						style={{
							fontFamily: 'Fredoka One, cursive',
							background: '#D0C89E'
						}}
						className={classes.margin}
					>
						Edit Data
					</Button>

					<Typography
						variant="h5"
						style={{
							fontFamily: 'Fredoka One, cursive',
							textAlign: 'left'
						}}
					>
						Feeding History
					</Typography>
					<div
						style={{
							fontFamily: 'Fredoka One, cursive',
							textAlign: 'left'
						}}
					>
						<ul>
							<li>One</li>
							<li>Two</li>
							<li>Three</li>
						</ul>
					</div>
				</Container>
			</Grid> */}
		</div>
	);
}
