import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Paw from './paw.png';

import Menu from './Menu';

import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: '#6C5434'
	},
	title: {
		flexGrow: 1,
		fontFamily: 'Damion, cursive',
		color: '#6C5434'
	},
	zoonations: {
		flexGrow: 1,
		fontFamily: 'Montserrat Subrayada, sans-serif',
		color: '#6C5434',
		textAlign: 'left'
	},
	fredokaFont: {
		flexGrow: 1,
		fontFamily: 'Fredoka One, cursive',
		color: '#6C5434'
	}
}));

export default function ButtonAppBar() {
	const classes = useStyles();
	const isLoggedIn = useSelector((state) => state.isLoggedIn);
	const currentUser = useSelector((state) => state.currentUser);

	useEffect(() => {
		console.log(currentUser);
	});

	return (
		<div className={classes.root}>
			<AppBar position="fixed" style={{ background: '#AAE787' }}>
				<Toolbar>
					<Grid container alignItems="center">
						<Grid item xs={9} lg={3}>
							<Link to="/" style={{ textDecoration: 'none' }}>
								<Hidden smDown>
									<Typography variant="h4" className={classes.zoonations}>
										Z<img src={Paw} style={{ maxHeight: '26px' }} />ONATIONS
									</Typography>
								</Hidden>
								<Hidden mdUp>
									<Typography variant="h5" className={classes.zoonations}>
										Z<img src={Paw} style={{ maxHeight: '20px' }} />ONATIONS
									</Typography>
								</Hidden>
							</Link>
						</Grid>

						<Grid item lg={9}>
							<Hidden mdDown>
								<Grid container spacing={3} justify="space-between">
									<Grid container item lg={8} spacing={2}>
										<Grid item>
											<Link to="/zoos-and-conservation" style={{ textDecoration: 'none' }}>
												<Typography variant="h6" className={classes.title}>
													Zoos and Conservations
												</Typography>
											</Link>
										</Grid>
										<Grid item>
											<Link to="/our-animals" style={{ textDecoration: 'none' }}>
												<Typography variant="h6" className={classes.title}>
													Our Animals
												</Typography>
											</Link>
										</Grid>

										<Grid item>
											<Link to="#" style={{ textDecoration: 'none' }}>
												<Typography variant="h6" className={classes.title}>
													Animals News
												</Typography>
											</Link>
										</Grid>
										<Grid item>
											<Link to="#" style={{ textDecoration: 'none' }}>
												<Typography variant="h6" className={classes.title}>
													About Us
												</Typography>
											</Link>
										</Grid>
									</Grid>
									<Grid container item lg={4} justify="flex-end">
										<Grid item>
											<Link to="/sign-up" style={{ textDecoration: 'none' }}>
												{(isLoggedIn.length === 0 || isLoggedIn === false) &&
												currentUser.length === 0 ? (
													<Button color="inherit" className={classes.fredokaFont}>
														Become A Member
													</Button>
												) : (
													<Button color="inherit" className={classes.fredokaFont}>
														{currentUser.fullname}
													</Button>
												)}
											</Link>
										</Grid>
										<Grid item>
											<Typography variant="h5" className={classes.fredokaFont}>
												|
											</Typography>
										</Grid>
										<Link to="/sign-in" style={{ textDecoration: 'none' }}>
											<Grid item>
												{isLoggedIn.length === 0 || isLoggedIn === false ? (
													<Button color="inherit" className={classes.fredokaFont}>
														Sign In
													</Button>
												) : (
													<Button color="inherit" className={classes.fredokaFont}>
														Sign Out
													</Button>
												)}
											</Grid>
										</Link>
									</Grid>
								</Grid>
							</Hidden>
						</Grid>
						<Grid item xs={3} style={{ textAlign: 'right' }}>
							<Hidden lgUp>
								<IconButton edge="start" className={classes.menuButton} aria-label="menu">
									<Menu />
								</IconButton>
							</Hidden>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
}
