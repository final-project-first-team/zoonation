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

const useStyle = makeStyles((theme) => ({}));

export default function AnimalsData() {
	const classes = useStyle();
	return (
		<Fragment>
			<Typography>Animals Name</Typography>
			<Typography>Animals Scientific Name</Typography>
			<Typography style={{ textAlign: 'left', paddingTop: '5%', paddingBottom: 0 }}>Feeds/Day :</Typography>
			<List style={{ paddingTop: 0, paddingBottom: '2%', textAlign: 'center' }}>
				<ListItem style={{ paddingTop: 0, paddingBottom: '0', textAlign: 'center' }}>
					<ListItemText primary="Feeds Name" />
					<ListItemText secondary="X 20" />
				</ListItem>
				<ListItem style={{ paddingTop: 0, paddingBottom: '0', textAlign: 'center' }}>
					<ListItemText primary="Feeds Name" />
					<ListItemText secondary="X 20" />
				</ListItem>
			</List>
			<Typography style={{ textAlign: 'left', paddingTop: '5%', paddingBottom: 0 }}>Feeds source :</Typography>
			<List style={{ paddingTop: 0, paddingBottom: '2%', textAlign: 'center' }}>
				<ListItem style={{ paddingTop: 0, paddingBottom: '0', textAlign: 'center' }}>
					<ListItemText primary="Feeds Name" />
					<ListItemText secondary=": Source" />
				</ListItem>
				<ListItem style={{ paddingTop: 0, paddingBottom: '0', textAlign: 'center' }}>
					<ListItemText primary="Feeds Name" />
					<ListItemText secondary=": Source" />
				</ListItem>
			</List>
			<Typography style={{ textAlign: 'left', paddingTop: '5%', paddingBottom: 0 }}>
				Number of virtual feeds given today :
			</Typography>
			<Grid container justify="space-around">
				<Grid item>Type 1</Grid>
				<Grid item>Type 2</Grid>
			</Grid>
		</Fragment>
	);
}
