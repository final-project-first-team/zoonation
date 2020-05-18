import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	paper: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		fontFamily: 'Damion, cursive',
		color: '#6C5434'
	},
	fredokaFont: {
		flexGrow: 1,
		fontFamily: 'Fredoka One, cursive',
		color: '#6C5434',
		background: '#60B6D1'
	}
}));

export default function MenuListComposition() {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	const prevOpen = React.useRef(open);
	React.useEffect(
		() => {
			if (prevOpen.current === true && open === false) {
				anchorRef.current.focus();
			}

			prevOpen.current = open;
		},
		[ open ]
	);

	return (
		<div className={classes.root}>
			<div>
				<Button
					ref={anchorRef}
					aria-controls={open ? 'menu-list-grow' : undefined}
					aria-haspopup="true"
					onClick={handleToggle}
					style={{ textDecoration: 'none' }}
				>
					<Typography variant="h6" style={{ textTransform: 'none' }} className={classes.title}>
						Ways To Help
					</Typography>
					{open ? <ExpandLess /> : <ExpandMore />}
				</Button>
				<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
										<Link to="/general-donation" style={{ textDecoration: 'none' }}>
											<MenuItem className={classes.title} onClick={handleClose}>
												Zoo Donation
											</MenuItem>
										</Link>
										<Link to="/feeding-animals" style={{ textDecoration: 'none' }}>
											<MenuItem className={classes.title} onClick={handleClose}>
												Animal Feeding
											</MenuItem>
										</Link>
										<Link to="/animal-adopt" style={{ textDecoration: 'none' }}>
											<MenuItem className={classes.title} onClick={handleClose}>
												Animal Adoption
											</MenuItem>
										</Link>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</div>
	);
}
