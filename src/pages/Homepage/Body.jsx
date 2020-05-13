import React /* Fragment */ from 'react';
import './homepage.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import people from './people.png';
import rhino from './rhino.png';

const useStyles = makeStyles((theme) => ({
	base: {
		height: '100%',
		paddingTop: '50px',
		paddingBottom: '50px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	text1: {
		fontFamily: 'Fredoka One',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '36px',
		lineHeight: '44px',
		textAlign: 'right',
		padding: '30px',
		backgroundColor: 'transparent'
	},
	text2: {
		fontFamily: 'Fredoka One',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '36px',
		lineHeight: '44px',
		textAlign: 'right',
		padding: '30px',
		backgroundColor: 'transparent',
		alignSelf: 'flex-end',
		justifyContent: 'flex-end'
	},
	text3: {
		fontFamily: 'Fredoka One',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '36px',
		lineHeight: '44px',
		textAlign: 'right',
		padding: '30px',
		backgroundColor: 'transparent',
		alignSelf: 'flex-end',
		justifyContent: 'flex-end'
	},
	flexing: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		minHeight: '100%'
	}
}));

export default function Body() {
	const classes = useStyles();

	return (
		<div className="background-image">
			<div className={classes.base}>
				<div className={classes.flexing}>
					<Grid container>
						<Grid item xs={12}>
							<div className={classes.text1}>
								“The First Collaborative Website
								<br />
								for Zoo Across Nations”
							</div>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item xs={6} md={6} lg={6}>
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
										<Typography style={{ fontFamily: 'Raleway', fontSize: '18px' }}>
											Educate
										</Typography>
										<img src={people} alt="people_png" style={{ width: '100px' }} />
										<Typography style={{ fontFamily: 'Raleway', fontSize: '18px' }}>
											People
										</Typography>
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
										<Typography style={{ fontFamily: 'Raleway', fontSize: '18px' }}>
											Protect
										</Typography>
										<img src={rhino} alt="rhino_png" style={{ width: '100px' }} />
										<Typography style={{ fontFamily: 'Raleway', fontSize: '18px' }}>
											Animals
										</Typography>
									</Grid>
								</Grid>
							</Paper>
						</Grid>

						<Grid item xs={6}>
							<Grid container>
								<Grid item xs={12}>
									<div className={classes.text3}>
										Feed and Meet
										<br />
										The Wildlife,
										<br />
										From Your Screen.
									</div>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}
