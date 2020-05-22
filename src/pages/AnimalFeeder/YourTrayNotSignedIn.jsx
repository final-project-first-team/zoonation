import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles((theme) => ({
	button: {
		// display: 'flex',
		// textAlign: 'center',
		// fontSize: '44px',
		// fontFamily: 'Fredoka One',
		// color: '#6C5434',
		background: '#60B6D1',
		width: '90%',
		color: '#6C5434',
	}
}));

export default function YourTray() {
	const classes = useStyle();

	return (
		<Fragment>
			<Grid item xs={12}>
			<Typography style={{ fontFamily: 'Raleway'}}>
				<i>Already a member?</i></Typography>
			<br />
			<Link to="/sign-in" style={{ textDecoration: 'none' }}>
				<Button className={classes.button} type="submit" fullWidth variant="contained">
					<Typography style={{ fontFamily: 'Fredoka One', color: '' }}>Sign In</Typography>
				</Button>
			</Link>
			</Grid>
		</Fragment>
	);
}
