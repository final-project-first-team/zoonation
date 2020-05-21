import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

export default function YourStorageNotSignedIn() {
	const classes = useStyle();

	return (
		<Fragment>
			<Grid item xs={12}>
			<Typography style={{ fontFamily: 'Raleway', margin: '5px'}}>
				<i>Become a member and start feeding the animals!</i></Typography>
			<Button className={classes.button} type="submit" fullWidth variant="contained">
				<Typography style={{ fontFamily: 'Fredoka One', color: '' }}>Sign Up</Typography>
			</Button>
			</Grid>
		</Fragment>
	);
}
