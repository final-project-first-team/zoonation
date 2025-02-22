import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../assets/redux/actions/registerAction';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(8),
		background: '#ECE4BA',
		height: '100%',
		submit: {
			borderRadius: '10px'
		}
	},
	base: {
		display: 'flex',
		height: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: '#ECE4BA'
	},
	paper: {
		display: 'flex',
		minHeight: '60vh',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'rgba(255, 255, 255, 0.39)',
		padding: '20px',
		height: 'auto',
		width: '100%'
	}
}));

export default function BodySignUp() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<div className={classes.root}>
			<Paper className={classes.base}>
				<Grid container justify="center">
					<Grid item lg={4}>
						<Paper className={classes.paper}>
							<CssBaseline />
							<Grid container direction="column">
								<Hidden lgUp>
									<Typography
										component="h1"
										variant="h5"
										style={{
											fontFamily: 'Lemonada, cursive',
											paddingBottom: '10px',
										}}
									>
										Join Us Now!
									</Typography>
								</Hidden>
								<Hidden only={[ 'xs', 'sm', 'lg', 'xl' ]}>
									<Typography
										component="h1"
										variant="h5"
										style={{ fontFamily: 'Raleway, sans-serif', paddingBottom: '10px' }}
									>
										Get Various Benefits as Member
									</Typography>
								</Hidden>
								<br />
								<Typography
									component="h1"
									variant="h5"
									style={{ fontFamily: 'Fredoka One, cursive', color: '#6C5434' }}
								>
									Sign Up
								</Typography>
								<Formik
									initialValues={{
										fullname: '',
										email: '',
										password: ''
									}}
									validate={(values) => {
										const errors = {};
										if (!values.email) {
											errors.email = 'Required';
										} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
											errors.email = 'Invalid email address';
										}

										if (!values.password) {
											errors.password = 'Required';
										}

										return errors;
									}}
									onSubmit={async (values) => {
										await dispatch(addUser(values));
										await alert('Registration Success');
										await history.push('/sign-in');
									}}
								>
									{({ handleChange, handleSubmit, values, isSubmitting, errors, touched }) => {
										return (
											<form className={classes.form} noValidate onSubmit={handleSubmit}>
												<TextField
													variant="outlined"
													margin="normal"
													required
													fullWidth
													id="fullname"
													label="Full Name"
													name="fullname"
													autoComplete="fullname"
													onChange={handleChange}
													values={values.fullname}
													size="small"
												/>
												<TextField
													variant="outlined"
													margin="none"
													required
													fullWidth
													id="email"
													label="Email Address"
													name="email"
													autoComplete="email"
													onChange={handleChange}
													values={values.email}
													size="small"
												/>
												<TextField
													variant="outlined"
													margin="dense"
													required
													fullWidth
													name="password"
													label="Password"
													type="password"
													id="password"
													autoComplete="current-password"
													onChange={handleChange}
													values={values.password}
													size="small"
												/>
												<Button
													type="submit"
													fullWidth
													variant="contained"
													color="inherit"
													disabled={isSubmitting}
													style={{
														borderRadius: '3px',
														fontFamily: 'Roboto, sans-serif',
														backgroundColor: '#60B6D1',
														marginTop: '10px',
														color: '#6C5434'
													}}
												>
													<b>Sign Up</b>
												</Button>
											</form>
										);
									}}
								</Formik>
								<Hidden lgUp>
									<br />
									<Typography component="h3" variant="subtitle2" style={{ paddingTop: '0' }}>
										<i>Already A Member? </i>
										<br />
										<Link to="/sign-in"
											style= {{ fontFamily: 'Roboto, sans-serif', color: '#6C5434'}}>
											<i>Click Here to Sign In</i>
										</Link>
									</Typography>
								</Hidden>
							</Grid>
						</Paper>
					</Grid>
					<Grid item lg={4}>
						<Hidden mdDown>
							<Paper className={classes.paper}>
								<Grid container direction="column">
									<Typography component="h1" variant="h5" style={{ fontFamily: 'Lemonada, cursive' }}>
										Join Us Now!
									</Typography>
									<br />
									<br />
									<Typography
										component="h1"
										variant="h5"
										style={{ fontFamily: 'Raleway, sans-serif', fontSize: '20px' }}
									>
										Get various benefits as a member :
									</Typography>
									<Typography style={{ fontSize: '14px', textAlign: 'left', fontStyle: 'Roboto' }}>
										<ul>
											<li>Get a chance to adopt and take care various animals!</li>
											<li>Become an adopter and get your gifts from Zoonations!</li>
										</ul>
									</Typography>
									<Typography component="h3" variant="subtitle2" style={{ paddingTop: '8px' }}>
										<i>Already A Member?</i>
									</Typography>
									<Link
										to="/sign-in"
										type="submit"
										fullWidth
										variant="contained"
										color="inherit"
										style={{
											borderRadius: '3px',
											fontFamily: 'Roboto, sans-serif',
											color: '#6C5434'
										}}
									>
										Click Here to Sign In
									</Link>
								</Grid>
							</Paper>
						</Hidden>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
