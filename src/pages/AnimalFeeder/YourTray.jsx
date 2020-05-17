import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import { Divider } from '@material-ui/core';

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
			{/* <Typography>Your Tray</Typography>
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
			</Button> */}
			<Typography>Already a member?</Typography>
			<br />
			<Button className={classes.button} type="submit" fullWidth variant="contained">
				<Typography>Sign In</Typography>
			</Button>
		</Fragment>
	);
}
