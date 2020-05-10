<<<<<<< HEAD
import React, { /* Fragment */ } from "react";
import './homepage.css';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
=======
import React, { Fragment } from 'react';
// import CSS from './homepage.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
>>>>>>> b5bfa59eb278af52a22208467f52072cf84a93dd

const useStyles = makeStyles((theme) => ({
	base: {
		height: '100%',
		paddingTop: '50px'
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
		alignSelf: 'flex-end'
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
						<Grid item xs={6}>
							{/* Ganti codingan yg ini kak */}
							<Paper elevation={0} className={classes.text2}>
								Meet and Feed
								<br />
								The Wildlife,
								<br />
								From Your Screen.
							</Paper>
						</Grid>

						<Grid item xs={6}>
							<Paper elevation={0} className={classes.text2}>
								Meet and Feed
								<br />
								The Wildlife,
								<br />
								From Your Screen.
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}
