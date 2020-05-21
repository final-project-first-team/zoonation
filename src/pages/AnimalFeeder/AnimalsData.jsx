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
			{/* ANIMAL NAME */}
			<Typography style={{ fontFamily: 'Fredoka One', fontSize:'22px', color: '#6C5434'}}>{currentAnimal !== undefined ? currentAnimal.name : null}</Typography>
			
			{/* SCIENTIFIC NAME */}
			<Typography style={{ fontFamily: 'Raleway', fontSize:'16px', color: '#6C5434'}}>{currentAnimal !== undefined ? currentAnimal.scientificName : null}</Typography>
			<List style={{ textAlign: 'left', fontFamily: 'Fredoka One' }}>
				<ListItem style={{ textAlign: 'center' }}>
					<ListItemText primary="Type : " />
					<ListItemText secondary={currentAnimal !== undefined ? currentAnimal.feeds.type : null} />
				</ListItem>
			</List>

			<Typography style={{ textAlign: 'left', padding: '8px', fontFamily: 'Fredoka One', color: '#6C5434' }}>Feeds/Day :</Typography>
			<List>
				<ListItem style={{ paddingLeft: '16px', textAlign: 'justify' }}>
					<ListItemText primary={currentAnimal !== undefined ? currentAnimal.feeds.feeds1 : null} />
					<ListItemText secondary={currentAnimal !== undefined ? currentAnimal.feeds.perDay1 : null} />
				</ListItem>

				<ListItem style={{ paddingLeft: '16px', textAlign: 'justify' }}>
					<ListItemText primary={currentAnimal !== undefined ? currentAnimal.feeds.feeds2 : null} />
					<ListItemText secondary={currentAnimal !== undefined ? currentAnimal.feeds.perDay2 : null} />
				</ListItem>
			</List>
			<Typography style={{ textAlign: 'left', padding: '8px', fontFamily: 'Fredoka One', color: '#6C5434' }}>Feeds source :</Typography>
			<List>
				<ListItem style={{ paddingLeft: '16px', textAlign: 'justify' }}>
					<ListItemText primary={currentAnimal !== undefined ? currentAnimal.feeds.feeds1 : null} />
					<ListItemText secondary={currentAnimal !== undefined ? currentAnimal.feeds.sources1 : null} />
				</ListItem>
				<ListItem style={{ paddingLeft: '16px', textAlign: 'justify' }}>
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
