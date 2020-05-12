import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

export default function CardMapping(props) {
	const classes = useStyles();
	console.log(props.animals);
	return (
		<Grid item>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						// image="/static/images/cards/contemplative-reptile.jpg"
						image="https://wallpaperaccess.com/full/2136603.jpg"
						title={props.animals.scientificName}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{props.animals.name}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Flip
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}
