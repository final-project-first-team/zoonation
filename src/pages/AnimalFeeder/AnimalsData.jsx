import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import { Divider } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({}));

export default function AnimalsData(props) {
	const classes = useStyle();
	const currentAnimal = props.currAnimal.data;

	return (
		<Fragment>
			<Typography>{currentAnimal !== undefined ? currentAnimal.name : null}</Typography>
			<Typography>{currentAnimal !== undefined ? currentAnimal.scientificName : null}</Typography>
			<List style={{ paddingTop: 0, paddingBottom: '2%', textAlign: 'center' }}>
				<ListItem style={{ paddingTop: 0, paddingBottom: '0', textAlign: 'center' }}>
					<ListItemText primary="Type : " />
					<ListItemText secondary={currentAnimal !== undefined ? currentAnimal.feeds.type : null} />
				</ListItem>
			</List>
			<Typography style={{ textAlign: 'left', paddingTop: '5%', paddingBottom: 0 }}>Feeds/Day :</Typography>
			<List style={{ paddingTop: 0, paddingBottom: '2%', textAlign: 'center' }}>
				<ListItem style={{ paddingTop: 0, paddingBottom: '0', textAlign: 'center' }}>
					<ListItemText primary={currentAnimal !== undefined ? currentAnimal.feeds.feeds1 : null} />
					<ListItemText secondary={currentAnimal !== undefined ? currentAnimal.feeds.perDay1 : null} />
				</ListItem>
				<ListItem style={{ paddingTop: 0, paddingBottom: '0', textAlign: 'center' }}>
					<ListItemText primary={currentAnimal !== undefined ? currentAnimal.feeds.feeds2 : null} />
					<ListItemText secondary={currentAnimal !== undefined ? currentAnimal.feeds.perDay2 : null} />
				</ListItem>
			</List>
			<Typography style={{ textAlign: 'left', paddingTop: '5%', paddingBottom: 0 }}>Feeds source :</Typography>
			<List style={{ paddingTop: 0, paddingBottom: '2%', textAlign: 'center' }}>
				<ListItem style={{ paddingTop: 0, paddingBottom: '0', textAlign: 'center' }}>
					<ListItemText primary={currentAnimal !== undefined ? currentAnimal.feeds.feeds1 : null} />
					<ListItemText secondary={currentAnimal !== undefined ? currentAnimal.feeds.sources1 : null} />
				</ListItem>
				<ListItem style={{ paddingTop: 0, paddingBottom: '0', textAlign: 'center' }}>
					<ListItemText primary={currentAnimal !== undefined ? currentAnimal.feeds.feeds2 : null} />
					<ListItemText secondary={currentAnimal !== undefined ? currentAnimal.feeds.sources2 : null} />
				</ListItem>
			</List>
			{/* <Typography style={{ textAlign: 'left', paddingTop: '5%', paddingBottom: 0 }}>
				Number of virtual feeds given today :
			</Typography>
			<Grid container justify="space-around">
				<Grid item>Type 1</Grid>
				<Grid item>Type 2</Grid>
			</Grid> */}
		</Fragment>
	);
}
