import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
// import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

import Conservation from './Conservation';
import WaysToHelp from './WaysToHelp';
import MenuDropDown from './MenuDropDown';
import Paw from './paw.png';

import { useDispatch, useSelector } from 'react-redux';
import { currentUser, logout } from '../../assets/redux/actions/loginAction';

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

export default function ButtonAppBar(props) {
	const classes = useStyles();
	const isLoggedIn = useSelector((state) => state.isLoggedIn);
	const currUser = useSelector((state) => state.currentUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			dispatch(currentUser(token));
		}
	}, []);

	// DROP DOWN MENU
	const [ anchorE1, setAnchorE1 ] = React.useState(null);
	const open = Boolean(anchorE1);

	const handleClick = (event) => {
		setAnchorE1(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorE1(null);
	};

	const handleLogout = async (id) => {
		await dispatch(logout(id));
		await localStorage.removeItem('token');
		await localStorage.removeItem('refToken');
		await window.location.reload();
	};

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
											{/* <Link
												edge="start"
												aria-controls="fade-menu"
												aria-haspopup="true"
												onClick={handleClick}
												style={{ textDecoration: 'none' }}
											> */}
											<Typography variant="h6" className={classes.title}>
												<Conservation />
											</Typography>
											{/* </Link> */}
											{/* <Menu
												id="fade-menu"
												anchorE1={anchorE1}
												anchorOrigin="center"
												keepMounted
												open={open}
												onClose={handleClose}
												TransitionComponent={Fade}
											>
												<MenuItem onClick={handleClose}>
													<Link to="/zoos-and-conservation">Test</Link>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<Link to="#">Test</Link>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<Link to="#">Test</Link>
												</MenuItem>
											</Menu> */}
										</Grid>
										<Grid item>
											<Typography variant="h6" className={classes.title}>
												<WaysToHelp />
											</Typography>
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
												currUser.length === 0 ? (
													<Button color="inherit" className={classes.fredokaFont}>
														Become A Member
													</Button>
												) : (
													<Button color="inherit">
														{/* <img src={currUser.avatar} alt="User Avatar" /> */}
														<Typography className={classes.fredokaFont}>
															{currUser.fullname}
														</Typography>
													</Button>
												)}
											</Link>
										</Grid>
										<Grid item>
											<Typography variant="h5" className={classes.fredokaFont}>
												|
											</Typography>
										</Grid>

										<Grid item>
											{isLoggedIn.length === 0 || isLoggedIn === false ? (
												<Link to="/sign-in" style={{ textDecoration: 'none' }}>
													<Button color="inherit" className={classes.fredokaFont}>
														Sign In
													</Button>
												</Link>
											) : (
												<Button
													color="inherit"
													className={classes.fredokaFont}
													onClick={() => handleLogout(currUser._id)}
												>
													Sign Out
												</Button>
											)}
										</Grid>
									</Grid>
								</Grid>
							</Hidden>
						</Grid>
						<Grid item xs={3} style={{ textAlign: 'right' }}>
							<Hidden lgUp>
								<IconButton edge="start" className={classes.menuButton} aria-label="menu">
									<MenuDropDown />
								</IconButton>
							</Hidden>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
}
