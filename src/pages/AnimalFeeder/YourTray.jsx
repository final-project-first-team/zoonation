import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyle = makeStyles((theme) => ({
	button: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434'
	}
}));

export default function YourTray() {
	const classes = useStyle();

	return (
		<Fragment>
			<Typography>Your Tray</Typography>
			<List>
				<ListItem style={{ paddingTop: 0, paddingBottom: 0, textAlign: 'center' }}>
					<ListItemText primary="Regular meat" />
					<ListItemText secondary="X 10" />
				</ListItem>
				<ListItem style={{ paddingTop: 0, paddingBottom: 0, textAlign: 'center' }}>
					<ListItemText primary="Premium meat" />
					<ListItemText secondary="X 10" />
				</ListItem>
			</List>
			<Button className={classes.button} type="submit" fullWidth variant="contained">
				<Typography>Feed Now</Typography>
			</Button>
		</Fragment>
	);
}
