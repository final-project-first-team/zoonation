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
import Avatar from '@material-ui/core/Avatar';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		// minWidth: 350,
		borderRadius: '5px'
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
					<Link to={`/animal-info/${props.animals._id}`}>
						<CardMedia
							className={classes.media}
							image={props.animals.image3}
							title={props.animals.scientificName}
						/>
					</Link>
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
						<Grid item>
							<Button
								variant="text"
								size="small"
								// onClick={() => handleClick()}
								style={{ width: '100%', justifyContent: 'left' }}
							>
								<Avatar
									title="Feed me"
									alt="Feed me"
									src="https://i.ibb.co/FBRSzPP/Pik-Png-com-fertilizer-png-4695532.png"
									style={{ marginRight: '5%' }}
									className={classes.images}
								/>
							</Button>
						</Grid>
						<Grid item>
							<Button
								variant="text"
								size="small"
								// onClick={() => handleClick()}
								style={{ width: '100%', justifyContent: 'left' }}
							>
								<Avatar
									title="Adopt me"
									alt="Adopt me"
									src="https://i.ibb.co/DMGt4Lc/kisspng-beagle-pet-sitting-pet-adoption-cat-pets-sign-5adccafe0d2a20-5333867415244193260539.png"
									style={{ marginRight: '5%' }}
									className={classes.images}
								/>
							</Button>
						</Grid>

						{/* <Button size="small" color="inherit" style={{ fontFamily: 'roboto', color: '#6C5434' }}>
							Feed me
						</Button> */}

						{/* <Link to={`/animal-info/${props.animals._id}`}>
							<Button size="small" color="inherit" style={{ fontFamily: 'roboto', color: '#6C5434' }}>
								Learn More
							</Button>
						</Link> */}
					</Grid>
				</CardActions>
			</Card>
		</Grid>
	);
}
