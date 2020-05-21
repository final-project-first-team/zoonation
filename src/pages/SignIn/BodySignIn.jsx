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
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../assets/redux/actions/loginAction';

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
		width: '100%',
	}
}));

export default function BodySignIn() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const currentUser = useSelector((state) => state.currentUser);

	return (
		<div className={classes.root}>
			<Paper className={classes.base}>
				<Grid container justify="center">
					<Grid item lg={4}>
						<Hidden mdDown>
							<Paper className={classes.paper}>
								<Grid container direction="column">
									<Typography component="h1" variant="h5" style={{ fontFamily: 'Lemonada, cursive' }}>
										Welcome Back!
									</Typography>
									<br />
									<br />
									<Typography
										component="h1"
										variant="h5"
										style={{ fontFamily: 'Raleway, sans-serif' }}
									>
										The Animals are excited for you to visit them again!
									</Typography>
									<br />
								</Grid>
							</Paper>
						</Hidden>
					</Grid>
					<Grid item lg={4}>
						<Paper className={classes.paper}>
							<CssBaseline />
							<Grid container direction="column">
								<Hidden lgUp>
									<Typography
										component="h1"
										variant="h5"
										style={{ fontFamily: 'Lemonada, cursive', paddingBottom: '10px', color: '#6C5434'  }}
									>
										Welcome Back!
									</Typography>
								</Hidden>
								<Hidden only={[ 'xs', 'sm', 'lg', 'xl' ]}>
									<Typography
										component="h1"
										variant="h5"
										style={{ fontFamily: 'Raleway, sans-serif', paddingBottom: '10px' }}
									>
										The Animals are excited for you to visit them again!
									</Typography>
								</Hidden>
								<br />
								<Typography component="h1" variant="h5" style={{ fontFamily: 'Fredoka One, cursive', color: '#6C5434' }}>
									Sign In
								</Typography>
								<Formik
									initialValues={{
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
										await dispatch(loginUser(values));
										await history.push('/');
									}}
								>
									{({ handleChange, handleSubmit, values, isSubmitting, errors, touched }) => {
										return (
											<form className={classes.form} noValidate onSubmit={handleSubmit}>
												<TextField
													variant="outlined"
													margin="dense"
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
														color: '#6C5434',
														marginTop: '10px'
													}}
												>
													<b>Sign In</b>
												</Button>
												<Typography
													component="h3"
													variant="subtitle2"
													style={{ paddingTop: '16px' }}
												>
													<i>Not A Member Yet?</i>
												</Typography>
												<Link
													color="inherit"
													style={{
														fontFamily: 'Roboto, sans-serif',
														color: '#6C5434'
													}}
													to="./sign-up"
												>
													Click Here to Join Us
												</Link>
											</form>
										);
									}}
								</Formik>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
