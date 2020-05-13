import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

export default function SimpleMenu() {
	const [ anchorEl, setAnchorEl ] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1
		},
		title: {
			flexGrow: 1,
			fontFamily: 'Damion, cursive',
			color: '#6C5434',
			backgroundColor: '#60B6D1'
		},
		fredokaFont: {
			flexGrow: 1,
			fontFamily: 'Fredoka One, cursive',
			color: '#6C5434',
			backgroundColor: '#60B6D1'
		}
	}));

	const classes = useStyles();

	return (
		<div>
			<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
				<MenuIcon />
			</Button>
			<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<Link to="/sign-up" style={{ textDecoration: 'none' }}>
					<MenuItem className={classes.fredokaFont} onClick={handleClose}>
						Become a Member
					</MenuItem>
				</Link>
				<Link to="/sign-in" style={{ textDecoration: 'none' }}>
					<MenuItem className={classes.fredokaFont} onClick={handleClose}>
						Sign In
					</MenuItem>
				</Link>
				<Divider />
				<Link to="#" style={{ textDecoration: 'none' }}>
					<MenuItem className={classes.title} onClick={handleClose}>
						Zoos and Conservation
					</MenuItem>
				</Link>
				<Link to="/our-animals" style={{ textDecoration: 'none' }}>
					<MenuItem className={classes.title} onClick={handleClose}>
						Our Animals
					</MenuItem>
				</Link>

				<Link to="#" style={{ textDecoration: 'none' }}>
					<MenuItem className={classes.title} onClick={handleClose}>
						Animals News
					</MenuItem>
				</Link>

				<Link to="#" style={{ textDecoration: 'none' }}>
					<MenuItem className={classes.title} onClick={handleClose}>
						About Us
					</MenuItem>
				</Link>
			</Menu>
		</div>
	);
}
