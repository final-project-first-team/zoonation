import React /* Fragment */ from 'react';
import './homepage.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import people from './people.png';
import rhino from './elephant.png';

import SliderHome from '../../assets/Components/SliderHome';

// import { useSelector, useDispatch } from 'react-redux';
// import { currentUser } from '../../assets/redux/actions/loginAction';

const useStyles = makeStyles((theme) => ({
	base: {
		height: 'auto'
	},
	paper: {
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	text1: {
		fontFamily: 'Fredoka One',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '44px',
		lineHeight: '44px',
		textAlign: 'right',
		padding: '30px',
		backgroundColor: 'transparent'
	},
	text2: {
		fontFamily: 'Fredoka One',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '44px',
		lineHeight: '48px',
		textAlign: 'right',
		padding: '30px',
		backgroundColor: 'transparent',
		alignSelf: 'flex-end',
		justifyContent: 'flex-end'
	}
}));

export default function Body() {
	const classes = useStyles();
	// const dispatch = useDispatch();
	// const currentUser = useSelector((state) => state.currentUser);
	// console.log(currentUser);

	return (
		<div className={classes.base}>
			<div className="background-image">
				<Grid container justify="flex-start" style={{ paddingTop: '80px' }}>
					<Grid item xs={12} md={12} lg={6}>
						<Paper elevation={0} className={classes.text2}>
							<Grid
								container
								style={{
									fontSize: '22px',
									lineHeight: '18px',
									textAlign: 'right',
									background: 'rgba(255, 253, 99, 0.6)',
									padding: '20px',
									borderRadius: '5px'
								}}
							>
								<Grid
									item
									xs={12}
									md={12}
									lg={6}
									style={{ textAlign: 'center', background: '#C4C4C4' }}
								>
									<p>
										<b>10</b> Cooperating zoos and conservations
									</p>
									<Typography style={{ fontFamily: 'Raleway', fontSize: '18px' }}>Educate</Typography>
									<img src={people} alt="people_png" style={{ width: '100px', margin: '8px' }} />
									<Typography style={{ fontFamily: 'Raleway', fontSize: '18px' }}>People</Typography>
								</Grid>
								<br />
								<Grid
									item
									xs={12}
									md={12}
									lg={6}
									style={{ textAlign: 'center', background: '#C4C4C4' }}
								>
									<p>
										<b>100</b> and more animals in shelter and protection
									</p>
									<Typography style={{ fontFamily: 'Raleway', fontSize: '18px' }}>Protect</Typography>
									<img src={rhino} alt="rhino_png" style={{ width: '125px', margin: '8px' }} />
									<Typography style={{ fontFamily: 'Raleway', fontSize: '18px' }}>Animals</Typography>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>

				<Hidden smDown>
					<Grid container justify="flex-end">
						<Grid item xs={12} sm={12} lg={6} xl={6}>
							<Typography className={classes.text1}>
								"Get Closer to Your
								<br />Favourite Animals
								<br />Just in One Click"
							</Typography>
						</Grid>
					</Grid>
				</Hidden>
			</div>
		</div>
	);
}
