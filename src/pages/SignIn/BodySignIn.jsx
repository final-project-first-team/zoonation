import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Formik } from 'formik';
import Hidden from '@material-ui/core/Hidden';

import { useDispatch } from 'react-redux';
import { getUser } from '../../assets/redux/actions/registerAction';

// NOTE:
// LINK EMAIL DAN PASSWORD MASIH DEFAULT BIRU KALO DI KLIK. ENTAH HARUS GANTI DIMANA
// UDAH RESPONSIVE, TAPI BELUM TERLALU ENAK DILIAT, MOHON REVISI KALO ADA YANG BISA. DI CSS PAPER.

const useStyles = makeStyles((theme) => ({
	root: {
		// INI CSS SI BODY UTAMA YANG KUNING ITU
		height: '100%',
		submit: {
			borderRadius: '10px'
		}
	},
	pap: {
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
		padding: '10%',
		height: '80%'
	}
}));

export default function BodySignIn() {
	const classes = useStyles();
	const dispatch = useDispatch();

	return (
		<div className={classes.root} style={{ background: '#ECE4BA' }}>
			<Paper className={classes.pap}>
				<Grid container justify="center">
					<Grid item lg={4}>
						<Hidden mdDown>
							<Paper className={classes.paper}>
								<Grid container direction="column">
									<Typography component="h1" variant="h5" style={{ fontFamily: 'Lemonada, cursive' }}>
										Welcome Back,
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
									<Typography component="h3" variant="subtitle1" style={{ paddingTop: '8px' }}>
										<i>Not A Member Yet?</i>
									</Typography>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										color="inherit"
										style={{
											borderRadius: '3px',
											fontFamily: 'Roboto, sans-serif',
											backgroundColor: '#60B6D1'
										}}
									>
										Click Here to Join Us
									</Button>
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
										style={{ fontFamily: 'Lemonada, cursive', paddingBottom: '5%' }}
									>
										Welcome Back,
									</Typography>
								</Hidden>
								<Hidden only={[ 'xs', 'sm', 'lg', 'xl' ]}>
									<Typography
										component="h1"
										variant="h5"
										style={{ fontFamily: 'Raleway, sans-serif', paddingBottom: '5%' }}
									>
										The Animals are excited for you to visit them again!
									</Typography>
								</Hidden>
								<br />
								<Typography component="h1" variant="h5" style={{ fontFamily: 'Fredoka One, cursive' }}>
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
									onSubmit={(values) => {
										dispatch(getUser());
										alert(JSON.stringify(values));
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
													id="email"
													label="Email Address"
													name="email"
													autoComplete="email"
													onChange={handleChange}
													values={values.email}
												/>
												<TextField
													variant="outlined"
													margin="normal"
													required
													fullWidth
													name="password"
													label="Password"
													type="password"
													id="password"
													autoComplete="current-password"
													onChange={handleChange}
													values={values.password}
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
														backgroundColor: '#60B6D1'
													}}
												>
													Sign In
												</Button>
											</form>
										);
									}}
								</Formik>
								<Hidden lgUp>
									<br />
									<Typography component="h3" variant="subtitle1" style={{ paddingTop: '0' }}>
										<i>Not A Member Yet? </i>
										<a href="#">Join us here</a>
									</Typography>
								</Hidden>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
