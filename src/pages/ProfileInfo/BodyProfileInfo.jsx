import React, { Fragment } from 'react';
import { Formik } from 'formik';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

import { useSelector, useDispatch } from 'react-redux';
import { getStorage } from '../../assets/redux/actions/storageAction';

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
	const dispatch = useDispatch();
	const currUser = useSelector((state) => state.currentUser);
	const userStorage = useSelector((state) => state.feedsStorage);

	if (currUser.length !== 0) {
		if (userStorage.length === 0) {
			dispatch(getStorage(currUser._id));
		}
	}

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
					<Formik
						initialValues={{
							email: '',
							password: ''
						}}
						// validate={(values) => {
						// 	const errors = {};
						// 	if (!values.email) {
						// 		errors.email = 'Required';
						// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						// 		errors.email = 'Invalid email address';
						// 	}

						// 	if (!values.password) {
						// 		errors.password = 'Required';
						// 	}

						// 	return errors;
						// }}
						onSubmit={async (values) => {
							// await dispatch(loginUser(values));
							// await history.push('/');
						}}
					>
						{({ handleChange, handleSubmit, values, isSubmitting, errors, touched }) => {
							return (
								<Fragment>
									<form className={classes.form} noValidate onSubmit={handleSubmit}>
										<Grid
											container
											item
											justify="flex-start"
											alignItems="center"
											style={{ paddingLeft: '5%' }}
										>
											<Grid item lg={1} style={{ textAlign: 'left' }}>
												<Typography>Name : </Typography>
											</Grid>
											<Grid item lg={5} style={{ textAlign: 'left' }}>
												<TextField
													variant="outlined"
													margin="normal"
													required
													style={{ width: '90%' }}
													id="fullname"
													label="Full Name"
													name="fullname"
													autoComplete="fullname"
													onChange={handleChange}
													values={values.fullname}
													size="small"
												/>
											</Grid>
											<Grid item lg={1} style={{ textAlign: 'left' }}>
												<Typography>Email : </Typography>
											</Grid>
											<Grid item lg={5} style={{ textAlign: 'left' }}>
												<TextField
													variant="outlined"
													margin="dense"
													required
													style={{ width: '90%' }}
													id="email"
													label="Email Address"
													name="email"
													autoComplete="email"
													onChange={handleChange}
													values={values.email}
													size="small"
												/>
											</Grid>
											<Grid item lg={1} style={{ textAlign: 'left' }}>
												<Typography>Pass : </Typography>
											</Grid>
											<Grid item lg={5} style={{ textAlign: 'left' }}>
												<TextField
													variant="outlined"
													margin="dense"
													required
													style={{ width: '90%' }}
													name="password"
													label="Password"
													type="password"
													id="password"
													autoComplete="current-password"
													onChange={handleChange}
													values={values.password}
													size="small"
												/>
											</Grid>
											<Grid item lg={5} style={{ textAlign: 'right' }}>
												<Button size="small">Change data</Button>
											</Grid>
										</Grid>
									</form>
								</Fragment>
							);
						}}
					</Formik>

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
								X {userStorage !== undefined ? userStorage.regularMeat : 0}
							</Grid>
							<Grid item lg={4}>
								<RegularFruit />
							</Grid>
							<Grid item lg={1}>
								X {userStorage !== undefined ? userStorage.regularFruit : 0}
							</Grid>
							<Grid item lg={4}>
								<PremiumMeat />
							</Grid>
							<Grid item lg={1}>
								X {userStorage !== undefined ? userStorage.premiumMeat : 0}
							</Grid>
							<Grid item lg={4}>
								<PremiumFruit />
							</Grid>
							<Grid item lg={1}>
								X {userStorage !== undefined ? userStorage.premiumFruit : 0}
							</Grid>
							<Grid item lg={4}>
								<RegularFodder />
							</Grid>
							<Grid item lg={1}>
								X {userStorage !== undefined ? userStorage.regularFodder : 0}
							</Grid>
							<Grid item lg={4}>
								<RegularBean />
							</Grid>
							<Grid item lg={1}>
								X {userStorage !== undefined ? userStorage.regularBean : 0}
							</Grid>
							<Grid item lg={4}>
								<PremiumFodder />
							</Grid>
							<Grid item lg={1}>
								X {userStorage !== undefined ? userStorage.premiumFodder : 0}
							</Grid>
							<Grid item lg={4}>
								<PremiumBean />
							</Grid>
							<Grid item lg={1}>
								X {userStorage !== undefined ? userStorage.premiumBean : 0}
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
