import React, { Fragment } from 'react';
import { Formik } from 'formik';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SideNav from '../../assets/Components/SideNav';
import { Avatar } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Hidden from '@material-ui/core/Hidden';

import RegularMeat from '../FeedsStore/RegularMeat';
import PremiumMeat from '../FeedsStore/PremiumMeat';
import RegularFodder from '../FeedsStore/RegularFodder';
import PremiumFodder from '../FeedsStore/PremiumFodder';
import RegularFruit from '../FeedsStore/RegularFruit';
import PremiumFruit from '../FeedsStore/PremiumFruit';
import RegularBean from '../FeedsStore/RegularBean';
import PremiumBean from '../FeedsStore/PremiumBean';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getStorage } from '../../assets/redux/actions/storageAction';
import { getAdoptData } from '../../assets/redux/actions/adoptDataAction';

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
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	}
}));

export default function BodyProfileInfo() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const currUser = useSelector((state) => state.currentUser);
	const userStorage = useSelector((state) => state.feedsStorage);
	const currentAdopt = useSelector((state) => state.currentAdopt);
	const [ editMode, setEditMode ] = React.useState(false);
	const [ newPass, setNewPass ] = React.useState(false);

	if (currUser.length !== 0) {
		if (userStorage.length === 0) {
			dispatch(getStorage(currUser._id));
		}
		if (currentAdopt === '') {
			dispatch(getAdoptData(currUser._id));
		}
	}
	console.log(currentAdopt);

	const changeData = () => {
		setEditMode(true);
	};

	return (
		<div className={classes.root} style={{ background: '#ECE4BA' }}>
			<Grid container className={classes.base} justify="space-around">
				<Hidden mdDown>
					<Grid container item lg={3} className={classes.leftCont} direction="column" alignItems="center">
						<SideNav />
					</Grid>
				</Hidden>
				<Hidden lgUp>
					<Grid>
						<ExpansionPanel style={{ width: '100%' }}>
							<ExpansionPanelSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography className={classes.heading}>Welcome back</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<Grid container>
									<Grid item md={12} sm={12} xs={12}>
										<Link to="/profile" style={{ textDecoration: 'none' }}>
											<Button style={{ width: '100%' }}>Profile Info</Button>
										</Link>
									</Grid>
									{/* <Grid item md={12} sm={12} xs={12}>
										<Link to="/transaction-history" style={{ textDecoration: 'none' }}>
											<Button style={{ width: '100%' }}>Transaction History</Button>
										</Link>
									</Grid> */}
									<Grid item md={12} sm={12} xs={12}>
										<Link to="/feeds-store" style={{ textDecoration: 'none' }}>
											<Button style={{ width: '100%' }}>Feeds Store</Button>
										</Link>
									</Grid>
								</Grid>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					</Grid>
				</Hidden>
				<Grid
					container
					item
					lg={8}
					xs={12}
					className={classes.rightCont}
					direction="column"
					alignItems="center"
				>
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
						onSubmit={(values) => {
							// await dispatch(loginUser(values));
							// await history.push('/');
						}}
					>
						{({ handleChange, handleSubmit, values, isSubmitting, errors, touched }) => {
							return (
								<Fragment>
									<form
										className={classes.form}
										noValidate
										onSubmit={handleSubmit}
										style={{ width: '100%' }}
									>
										<Grid container>
											<Grid
												container
												item
												justify="flex-start"
												alignItems="center"
												style={{ paddingLeft: '5%' }}
												lg={6}
												md={12}
												sm={12}
												xs={12}
											>
												<Grid item lg={3} xs={3} style={{ textAlign: 'left' }}>
													<Typography>Name : </Typography>
												</Grid>
												<Grid item lg={9} xs={9} style={{ textAlign: 'left' }}>
													{currUser.length !== 0 ? (
														<TextField
															id="fullname"
															name="fullname"
															label="Full Name"
															autoComplete="fullname"
															margin="normal"
															variant="outlined"
															style={{ width: '90%' }}
															onChange={handleChange}
															defaultValue={`${currUser.fullname}`}
															InputProps={{
																readOnly: `${!editMode}`
															}}
															values={values.fullname}
															size="small"
														/>
													) : null}
												</Grid>
												<Grid item lg={3} xs={3} style={{ textAlign: 'left' }}>
													<Typography>Email : </Typography>
												</Grid>
												<Grid item lg={9} xs={9} style={{ textAlign: 'left' }}>
													{currUser.length !== 0 ? (
														<TextField
															id="email"
															name="email"
															label="Email"
															autoComplete="email"
															margin="normal"
															variant="outlined"
															style={{ width: '90%' }}
															onChange={handleChange}
															defaultValue={`${currUser.email}`}
															InputProps={{
																readOnly: `${!editMode}`
															}}
															values={values.email}
															size="small"
														/>
													) : null}
												</Grid>
											</Grid>
										</Grid>
									</form>
								</Fragment>
							);
						}}
					</Formik>

					<Grid container item className={classes.subTitle}>
						<Grid container item lg={8} xs={12} justify="center" alignItems="center">
							<Grid item lg={12} xs={12} style={{ paddingBottom: '3%' }}>
								<Typography variant="h6" style={{ fontFamily: 'Fredoka One, cursive' }}>
									Feeds Storage
								</Typography>
							</Grid>
							<Grid container item alignItems="center">
								<Grid item lg={4} xs={4}>
									<RegularMeat />
								</Grid>
								<Grid item lg={1} xs={2}>
									X {userStorage !== undefined ? userStorage.regularMeat : 0}
								</Grid>
								<Grid item lg={4} xs={4}>
									<RegularFruit />
								</Grid>
								<Grid item lg={1} xs={2}>
									X {userStorage !== undefined ? userStorage.regularFruit : 0}
								</Grid>
								<Grid item lg={4} xs={4}>
									<PremiumMeat />
								</Grid>
								<Grid item lg={1} xs={2}>
									X {userStorage !== undefined ? userStorage.premiumMeat : 0}
								</Grid>
								<Grid item lg={4} xs={4}>
									<PremiumFruit />
								</Grid>
								<Grid item lg={1} xs={2}>
									X {userStorage !== undefined ? userStorage.premiumFruit : 0}
								</Grid>
								<Grid item lg={4} xs={4}>
									<RegularFodder />
								</Grid>
								<Grid item lg={1} xs={2}>
									X {userStorage !== undefined ? userStorage.regularFodder : 0}
								</Grid>
								<Grid item lg={4} xs={4}>
									<RegularBean />
								</Grid>
								<Grid item lg={1} xs={2}>
									X {userStorage !== undefined ? userStorage.regularBean : 0}
								</Grid>
								<Grid item lg={4} xs={4}>
									<PremiumFodder />
								</Grid>
								<Grid item lg={1} xs={2}>
									X {userStorage !== undefined ? userStorage.premiumFodder : 0}
								</Grid>
								<Grid item lg={4} xs={4}>
									<PremiumBean />
								</Grid>
								<Grid item lg={1} xs={2}>
									X {userStorage !== undefined ? userStorage.premiumBean : 0}
								</Grid>
							</Grid>
							<Grid item lg={12} style={{ paddingTop: '5%', paddingBottom: '5%' }}>
								<Typography>Buy more feeds on our feeds store</Typography>
							</Grid>
						</Grid>
						<Grid container item lg={4} xs={12} justify="center">
							<Grid item lg={12} xs={12} style={{ paddingBottom: '3%' }}>
								<Typography variant="h6" style={{ fontFamily: 'Fredoka One, cursive' }}>
									Current Animal Adopted
								</Typography>
							</Grid>
							{currentAdopt.data !== null ? (
								<Fragment>
									<Grid item>
										<Avatar
											alt=""
											src={
												currentAdopt.data !== undefined ? (
													currentAdopt.data.animalId.image1
												) : null
											}
											style={{ marginRight: '5%' }}
											className={classes.image}
										/>
									</Grid>
									<Grid item lg={12} xs={12}>
										<Typography>
											{currentAdopt.data !== undefined ? currentAdopt.data.animalId.name : null}
										</Typography>
									</Grid>
									<Grid item lg={12} xs={12}>
										<Typography>
											{currentAdopt.data !== undefined ? currentAdopt.data.animalId.zoo : null}
										</Typography>
									</Grid>
									<Grid item lg={12} xs={12}>
										<Typography>
											You adopted this animal for{' '}
											{currentAdopt.data !== undefined ? currentAdopt.data.long : null} months
										</Typography>
									</Grid>
									<Grid item lg={12} xs={12}>
										<Typography>The animal you adopted is in good condition</Typography>
									</Grid>
								</Fragment>
							) : (
								<Grid item lg={12} xs={12}>
									<Typography>You haven't adopt animal yet</Typography>
								</Grid>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
