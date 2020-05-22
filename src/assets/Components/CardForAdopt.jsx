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

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		// minWidth: 300,
		borderRadius: '5px'
	},
	media: {
		height: 140
	}
});

export default function CardMapping(props) {
	const classes = useStyles();
	const animals = props.animals;
	return (
		<Grid item lg={3} md={4} sm={6} xs={12}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={`${animals.image1}`}
						title={props.animals.scientificName}
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
							style={{
								fontFamily: 'Fredoka One',
								background: '#AAE787',
								color: '#6C5434',
								borderRadius: '5px'
							}}
						>
							{props.animals.name}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Grid container justify="center">
						<Link to={`/animal-adopt-2/${props.animals._id}`} style={{ textDecoration: 'none' }}>
							<Button size="small" color="inherit" style={{ fontFamily: 'Raleway', color: '#6C5434' }}>
								Adopt This Animal &hearts;
							</Button>
						</Link>
					</Grid>
				</CardActions>
			</Card>
		</Grid>
	);
}
