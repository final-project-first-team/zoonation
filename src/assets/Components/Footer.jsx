import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import '../../pages/Homepage/homepage.css';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh'
	},
	footer: {
		padding: theme.spacing(1, 1),
		marginTop: 'auto',
		backgroundColor: '#60B6D1',
		textAlign: 'center',
		// width: '100%',
		// position: 'fixed',
		// bottom: 0,
	},
	fontAndColor: {
		fontFamily: 'Fredoka One, cursive',
		color: '#6C5434',
		textAlign: 'right',
		padding: theme.spacing(1, 1),
		marginTop: 'auto'
	},
	fontAndColorSm: {
		fontFamily: 'Fredoka One, cursive',
		color: '#6C5434',
		textAlign: 'right',
		marginTop: 'auto',
		fontSize: '12px'
	}
}));

export default function StickyFooter() {
	const classes = useStyles();
	return (
		// LEFT FOOTER
		<div>
			<footer className={classes.footer}>
				<Container maxWidth="lg">
					<Grid container>
						<Hidden mdDown>
							<Grid item xs={4} style={{ textAlign: 'left' }} className={classes.fontAndColor}>
								<Link color="inherit" href="https://material-ui.com/">
									targhib-azil-yvonne
								</Link>{' '}
								© {new Date().getFullYear()}
								{'.'}
							</Grid>
						</Hidden>

						<Hidden smUp>
							<Grid item xs={4} style={{ textAlign: 'left' }} className={classes.fontAndColorSm}>
								<Link color="inherit" href="https://material-ui.com/">
									targhib-azil-yvonne
								</Link>{' '}
								© {new Date().getFullYear()}
								{'.'}
							</Grid>
						</Hidden>

						{/* MIDDLE FOOTER */}
						<Hidden mdDown>
							<Grid item xs={4} style={{ paddingTop: '8px' }}>
								<Link href="#">
									<ion-icon size="large" name="logo-facebook" />{' '}
								</Link>
								<Link href="#">
									<ion-icon size="large" name="logo-instagram" />{' '}
								</Link>
								<Link href="#">
									<ion-icon size="large" name="logo-twitter" />{' '}
								</Link>
							</Grid>
						</Hidden>

						<Hidden smUp>
							<Grid item xs={4} style={{ padding: '8px' }}>
								<Link href="#">
									<ion-icon size="small" name="logo-facebook" />{' '}
								</Link>
								<Link href="#">
									<ion-icon size="small" name="logo-instagram" />{' '}
								</Link>
								<Link href="#">
									<ion-icon size="small" name="logo-twitter" />{' '}
								</Link>
							</Grid>
						</Hidden>

						{/* RIGHT FOOTER */}
						<Hidden mdDown>
							<Grid item xs={4} className={classes.fontAndColor}>
								SAVES LIVES. BE EDUCATED.
							</Grid>
						</Hidden>

						<Hidden smUp>
							<Grid item xs={4} className={classes.fontAndColorSm}>
								SAVES LIVES. BE EDUCATED.
							</Grid>
						</Hidden>
					</Grid>
				</Container>
			</footer>
		</div>
	);
}
