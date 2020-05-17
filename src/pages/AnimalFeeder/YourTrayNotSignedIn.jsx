import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles((theme) => ({
	button: {
		// display: 'flex',
		// textAlign: 'center',
		// fontSize: '44px',
		// fontFamily: 'Fredoka One',
		// color: '#6C5434',
		marginRight: theme.spacing(5)
	}
}));

export default function YourTray() {
	const classes = useStyle();

	return (
		<Fragment>
			<Typography>Already a member?</Typography>
			<br />
			<Button className={classes.button} type="submit" fullWidth variant="contained">
				<Typography>Sign In</Typography>
			</Button>
		</Fragment>
	);
}
