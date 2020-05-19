import React from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import { Link } from 'react-router-dom';

export default function SimpleMenu() {
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
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
			color: '#60B6D1'
		},
		title: {
			flexGrow: 1,
			fontFamily: 'Damion, cursive',
			color: '#6C5434',
		},
		nested: {
			paddingLeft: theme.spacing(4)
		}
	}));

	const classes = useStyles();
	return (
		<div>
			<Button aria-controls="simple-Menu" aria-haspopup="true" onClick={handleClickMenu}>
				<MenuIcon />
			</Button>
			<Menu id="simple-Menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<Link to="/sign-up" style={{ textDecoration: 'none' }}>
					<MenuItem style={{ fontFamily: 'Damion, cursive', color: '#6C5434' }} onClick={handleClose}>
						Become a Member
					</MenuItem>
				</Link>
				<Link to="/sign-in" style={{ textDecoration: 'none' }}>
					<MenuItem style={{ fontFamily: 'Damion, cursive', color: '#6C5434' }} onClick={handleClose}>
						Sign In
					</MenuItem>
				</Link>
				<Divider />
				<ListItem button onClick={handleClickCons} 
				style={{ background: 'transparent', fontFamily: 'Damion, cursive', color: '#6C5434' }}>
					Conservation
					{openCons ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openCons} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<Link
								to="/zoos-and-conservation"
								style={{ textDecoration: 'none' }}
								className={classes.title}>
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
				<ListItem button onClick={handleClickWays} 
				style={{ background: 'transparent', fontFamily: 'Damion, cursive', color: '#6C5434' }}>
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
