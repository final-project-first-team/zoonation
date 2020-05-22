import React from 'react';
import { Link } from 'react-router-dom';

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
		// minWidth: 300,
		borderRadius: '5px',
		// width: 350,
		// margin: '1%'
		height: 300
	},
	media: {
		height: 140
	}
});

export default function CardMapping(props) {
	const classes = useStyles();
	return (
		<Grid item lg={3} md={4} sm={6} xs={12}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia className={classes.media} image={props.zoos.photo} title={props.zoos.zooName} />
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
							{props.zoos.zooName}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Grid container justify="center">
						<Link to={`/zoo-partner/${props.zoos._id}`} style={{ textDecoration: 'none' }}>
							<Button size="small" color="inherit" style={{ fontFamily: 'roboto', color: '#6C5434' }}>
								Zoo's info
							</Button>
						</Link>
					</Grid>
				</CardActions>
			</Card>
		</Grid>
	);
}
