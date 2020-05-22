import React from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser, logout } from '../../assets/redux/actions/loginAction';

export default function SimpleMenu() {
	const isLoggedIn = useSelector((state) => state.isLoggedIn);
	const currUser = useSelector((state) => state.currentUser);
	const dispatch = useDispatch();
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const [ openCons, setOpenCons ] = React.useState(false);
	const [ openWays, setOpenWays ] = React.useState(false);
	const handleClickCons = () => {
		setOpenCons(!openCons);
	};
	const handleClickWays = () => {
		setOpenWays(!openWays);
	};
	const handleClickMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = async (id) => {
		setAnchorEl(null);
		await dispatch(logout(id));
		await localStorage.removeItem('token');
		await localStorage.removeItem('refToken');
		await localStorage.removeItem('isLoggedIn');
		await window.location.reload();
	};
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
			color: '#60B6D1'
		},
		title: {
			flexGrow: 1,
			fontFamily: 'Damion, cursive',
			color: '#6C5434'
		},
		nested: {
			paddingLeft: theme.spacing(4)
		},
		avatar: {
			width: theme.spacing(3),
			height: theme.spacing(3)
		}
	}));

	const classes = useStyles();
	return (
		<div>
			<Button aria-controls="simple-Menu" aria-haspopup="true" onClick={handleClickMenu}>
				<MenuIcon />
			</Button>
			<Menu id="simple-Menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				{(isLoggedIn.length === 0 || isLoggedIn === false) && currUser.length === 0 ? (
					<Link to="/sign-up" style={{ textDecoration: 'none' }}>
						<MenuItem style={{ fontFamily: 'Damion, cursive', color: '#6C5434' }} onClick={handleClose}>
							Become A Member
						</MenuItem>
					</Link>
				) : (
					<Link to="/profile" style={{ textDecoration: 'none' }}>
						<MenuItem style={{ fontFamily: 'Damion, cursive', color: '#6C5434' }} onClick={handleClose}>
							<Avatar
								alt={currUser.fullname}
								src={currUser.avatar}
								style={{ marginRight: '5%' }}
								className={classes.avatar}
							/>
							<Typography className={classes.fredokaFont}>{currUser.fullname}</Typography>
						</MenuItem>
					</Link>
				)}
				{isLoggedIn.length === 0 || isLoggedIn === false ? (
					<Link to="/sign-in" style={{ textDecoration: 'none' }}>
						<MenuItem style={{ fontFamily: 'Damion, cursive', color: '#6C5434' }} onClick={handleClose}>
							Sign In
						</MenuItem>
					</Link>
				) : (
					<MenuItem
						style={{ fontFamily: 'Damion, cursive', color: '#6C5434' }}
						onClick={() => handleLogout(currUser._id)}
					>
						Sign Out
					</MenuItem>
				)}
				<Divider />
				<ListItem
					button
					onClick={handleClickCons}
					style={{ background: 'transparent', fontFamily: 'Damion, cursive', color: '#6C5434' }}
				>
					Conservation
					{openCons ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openCons} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<Link
								to="/zoos-and-conservation"
								style={{ textDecoration: 'none' }}
								className={classes.title}
							>
								Zoos
							</Link>
						</ListItem>
						<ListItem button className={classes.nested}>
							<Link to="/our-animals" style={{ textDecoration: 'none' }} className={classes.title}>
								Animals
							</Link>
						</ListItem>
					</List>
				</Collapse>
				<ListItem
					button
					onClick={handleClickWays}
					style={{ background: 'transparent', fontFamily: 'Damion, cursive', color: '#6C5434' }}
				>
					Ways to Help
					{openWays ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openWays} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<Link to="/donation" style={{ textDecoration: 'transparent' }} className={classes.title}>
								Zoo Donation
							</Link>
						</ListItem>
						<ListItem button className={classes.nested}>
							<Link to="/feeding-animals" style={{ textDecoration: 'none' }} className={classes.title}>
								Animal Feeding
							</Link>
						</ListItem>
						<ListItem button className={classes.nested}>
							<Link to="/animal-adopt" style={{ textDecoration: 'none' }} className={classes.title}>
								Animal Adoption
							</Link>
						</ListItem>
					</List>
				</Collapse>
				<Link to="/animals-news" style={{ textDecoration: 'none' }}>
					<MenuItem className={classes.title} onClick={handleClose}>
						Animals News
					</MenuItem>
				</Link>

				{/* <Link to="/about-us" style={{ textDecoration: 'none' }}>
					<MenuItem className={classes.title} onClick={handleClose}>
						About Us
					</MenuItem>
				</Link> */}
			</Menu>
		</div>
	);
}
