import React from 'react';
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

import Menu from './Menu';

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

	return (
		<div className={classes.root}>
			<AppBar position="fixed" style={{ background: '#AAE787' }}>
				<Toolbar>
					<Grid container alignItems="center">
						<Grid item xs={9} lg={3}>
							<Link to="/" style={{ textDecoration: 'none' }}>
								<Typography variant="h4" className={classes.zoonations}>
									ZOONATIONS
								</Typography>
							</Link>
						</Grid>

						<Grid item lg={9}>
							<Hidden mdDown>
								<Grid container spacing={3} style={{ paddingLeft: '2%' }} justify="space-between">
									<Grid container item lg={8} spacing={2}>
										<Grid item>
											<Link to="#" style={{ textDecoration: 'none' }}>
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
												<Button color="inherit" className={classes.fredokaFont}>
													Become A Member
												</Button>
											</Link>
										</Grid>
										<Grid item>
											<Typography variant="h5" className={classes.fredokaFont}>
												|
											</Typography>
										</Grid>
										<Link to="/sign-in" style={{ textDecoration: 'none' }}>
											<Grid item>
												<Button color="inherit" className={classes.fredokaFont}>
													Sign In
												</Button>
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
