import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';

import SideNav from '../../assets/Components/SideNav';

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
		backgroundColor: 'red'
	}
	// root: {
	// 	// INI CSS BODY
	// 	display: 'flex',
	// 	flexWrap: 'wrap',
	// 	height: 'auto',
	// 	width: 'auto',
	// 	alignItems: 'center',
	// 	textAlign: 'center',
	// 	flexDirection: 'row',
	// 	'& > *': {
	// 		//   INI CSS 2 KOTAK DALAM BODY
	// 		display: 'flex',
	// 		flexWrap: 'wrap',
	// 		width: '100%',
	// 		minHeight: '95vh',
	// 		alignItems: 'center',
	// 		padding: '10px',
	// 		flexDirection: 'column',
	// 		backgroundColor: 'rgba(255, 255, 255, 0.39)'
	// 	}
	// },

	// buttons: {
	// 	margin: theme.spacing(1),
	// 	width: '80%',
	// 	fontFamily: 'Fredoka One, cursive'
	// },
	// margin: {
	// 	margin: theme.spacing(1)
	// }
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
				<Grid item lg={8} className={classes.rightCont}>
					a
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
