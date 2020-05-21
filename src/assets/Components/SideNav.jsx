import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { currentUser, logout } from '../../assets/redux/actions/loginAction';

const useStyles = makeStyles((theme) => ({
	forAvatar: {
		borderRadius: '50%',
		width: '140px',
		height: '140px',
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(5),
		background: '#D0C89E'
	},
	sideNav: {
		paddingTop: theme.spacing(1),
		width: '80%'
	},
	image: {
		width: theme.spacing(15),
		height: theme.spacing(15)
	}
}));

export default function SideNav(props) {
	const classes = useStyles();
	const currUser = useSelector((state) => state.currentUser);
	const dispatch = useDispatch();

	const handleLogout = async (id) => {
		await dispatch(logout(id));
		await localStorage.removeItem('token');
		await localStorage.removeItem('refToken');
		await localStorage.removeItem('isLoggedIn');
		await window.location.reload();
	};

	return (
		<Fragment>
			<Grid item style={{ paddingTop: '5%', paddingBottom: '5%' }}>
				<Avatar alt="" src="" style={{ marginRight: '5%' }} className={classes.image} />
				{/* <div className={classes.forAvatar}>
					<img src="https://i.pinimg.com/736x/64/cf/2c/64cf2ca5fd23b48e6f1cdb0414d47c8a.jpg" />
				</div> */}
			</Grid>
			<Grid item>
				<Typography variant="h6" style={{ paddingTop: '3%', paddingBottom: '5%' }}>
					Welcome back, {currUser !== undefined ? currUser.fullname : ''}
				</Typography>
			</Grid>
			<Grid item className={classes.sideNav}>
				<Link href="#" color="inherit">
					<Button
						variant="contained"
						size="small"
						className={classes.buttons}
						fullWidth
						style={{ background: '#D0C89E' }}
					>
						<Typography style={{ fontFamily: 'Fredoka One, cursive' }}>Change Avatar</Typography>
					</Button>
				</Link>
			</Grid>
			<Grid item className={classes.sideNav}>
				<Link to="/profile" style={{ textDecoration: 'none' }}>
					<Button
						variant="contained"
						size="small"
						className={classes.buttons}
						fullWidth
						style={{ background: '#D0C89E' }}
					>
						<Typography style={{ fontFamily: 'Fredoka One, cursive' }}>Profile Info</Typography>
					</Button>
				</Link>
			</Grid>
			<Grid item className={classes.sideNav}>
				<Link to="/transaction-history" style={{ textDecoration: 'none' }}>
					<Button
						variant="contained"
						size="small"
						className={classes.buttons}
						fullWidth
						style={{ background: '#D0C89E' }}
					>
						<Typography style={{ fontFamily: 'Fredoka One, cursive' }}>Transaction History</Typography>
					</Button>
				</Link>
			</Grid>
			<Grid item className={classes.sideNav}>
				<Link to="/feeds-store" style={{ textDecoration: 'none' }}>
					<Button
						variant="contained"
						size="small"
						className={classes.buttons}
						fullWidth
						style={{ background: '#D0C89E' }}
					>
						<Typography style={{ fontFamily: 'Fredoka One, cursive' }}>Feeds Store</Typography>
					</Button>
				</Link>
			</Grid>
			<Grid item className={classes.sideNav}>
				<Button
					variant="contained"
					size="small"
					className={classes.buttons}
					fullWidth
					style={{ background: '#D0C89E' }}
					onClick={() => handleLogout(currUser._id)}
				>
					<Typography style={{ fontFamily: 'Fredoka One, cursive' }}>Sign Out</Typography>
				</Button>
			</Grid>
		</Fragment>
	);
}
