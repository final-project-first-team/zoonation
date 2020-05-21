import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';

import { Link } from 'react-router-dom';
// import ZooPartnerAct from '../Components/ZooPartnerAct';
import SingleSlider from '../../assets/Components/SingleSlider';
// import CardMapping from '../Components/CardMapping';

// import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSpecificZoos } from '../../assets/redux/actions/zooPartnerAction';

const useStyle = makeStyles((theme) => ({
	root: {
		// CSS BODY
		display: 'flex',
		flexWrap: 'wrap',
		height: 'auto',
		width: '100%',
		alignItems: 'center',
		textAlign: 'center',
		flexDirection: 'row'
	},
	image: {
		margin: 'auto',
		display: 'block',
		width: '100%',
		alignItems: 'center',
		height: '250px'
	},
	imageHidden: {
		margin: 'auto',
		display: 'block',
		width: '100%',
		alignItems: 'center',
		height: '250px'
	},
	ourAnimals: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		marginTop: theme.spacing(10)
	},
	forP: {
		textAlign: 'left',
		fontSize: '20px',
		fontFamily: 'Raleway',
		color: '#6C5434',
		padding: '15px'
	},
	img: {
		width: '90%',
		height: '200px',
		alignItems: 'center',
		padding: '5px',
		margin: '3px'
	}
}));

export default function ZooPartner() {
	const classes = useStyle();
	const { id } = useParams();
	const dispatch = useDispatch();
	const currentZoo = useSelector((state) => state.currentZoo);
	const status = useSelector((state) => state.isLoggedIn);

	if (currentZoo.length === 0) {
		dispatch(getSpecificZoos(id));
	} else {
		if (currentZoo.data._id !== id) {
			dispatch(getSpecificZoos(id));
		}
	}
	console.log(currentZoo);

	return (
		<div className={classes.root} style={{ background: '#ECE4BA' }}>
			<Grid container justify="center">
				<Typography className={classes.ourAnimals}>
					DONATE TO {currentZoo.length !== 0 ? currentZoo.data.zooName : null}
				</Typography>
			</Grid>

			<Grid container>
				<Hidden smDown>
					<Grid item xl={4} lg={4} style={{ background: '#ECE4BA', padding: '10px' }}>
						<Paper square>
							<img
								className={classes.image}
								alt="zoo"
								src="https://dolanyok.com/wp-content/uploads/Kebun-Binatang-Ragunan-dEPAN.jpg"
							/>
						</Paper>
					</Grid>

					<Grid item xl={4} lg={4} style={{ background: '#ECE4BA', padding: '10px' }}>
						<Paper square>
							<img
								className={classes.image}
								alt="zoo"
								src="https://dolanyok.com/wp-content/uploads/Kebun-Binatang-Ragunan-dEPAN.jpg"
							/>
						</Paper>
					</Grid>
				</Hidden>

				<Hidden mdUp>
					<Grid item sm={12} style={{ background: '#ECE4BA', padding: '10px' }}>
						<Paper>
							<img
								className={classes.imageHidden}
								alt="zoo"
								src="https://dolanyok.com/wp-content/uploads/Kebun-Binatang-Ragunan-dEPAN.jpg"
							/>
						</Paper>
					</Grid>
				</Hidden>

				<Hidden smDown>
					<Grid item lg={4} sm={4} style={{ background: 'transparent', padding: '70px' }}>
						<Grid item lg={12}>
							<Paper elevation={0} style={{ background: '#6C5434', margin: '3px' }}>
								<Button
									style={{ margin: '5px', width: '80%', fontSize: '20px', fontFamily: 'Fredoka One' }}
									disableElevation
								>
									<Link
										to={`/donation-payment-method/${id}`}
										style={{ textDecoration: 'none', color: '#F6F4E4' }}
									>
										DONATE NOW
									</Link>
								</Button>
							</Paper>
						</Grid>

						<Grid item lg={12}>
							<Paper elevation={0} style={{ background: '#6C5434', margin: '3px' }}>
								<Button
									style={{ margin: '5px', width: '80%', fontSize: '20px', fontFamily: 'Fredoka One' }}
									disableElevation
								>
									<Link
										to="/zoos-and-conservation"
										style={{ textDecoration: 'none', color: '#F6F4E4', margin: '3px' }}
									>
										CHANGE ZOO
									</Link>
								</Button>
							</Paper>
						</Grid>
					</Grid>
				</Hidden>

				<Hidden mdUp>
					<Grid container justify="center" style={{ padding: '10px' }}>
						<Grid item sm={3}>
							<Button
								style={{
									margin: '2px',
									fontSize: '16px',
									fontFamily: 'Fredoka One',
									background: '#6C5434'
								}}
							>
								<Link
									to={`/donation-payment-method/${id}`}
									style={{ textDecoration: 'none', color: '#F6F4E4' }}
								>
									DONATE NOW
								</Link>
							</Button>
						</Grid>
						<Grid item sm={3}>
							<Button
								style={{
									margin: '2px',
									fontSize: '16px',
									fontFamily: 'Fredoka One',
									background: '#6C5434'
								}}
							>
								<Link to="/zoos-and-conservation" style={{ textDecoration: 'none', color: '#F6F4E4' }}>
									CHANGE ZOO
								</Link>
							</Button>
						</Grid>
					</Grid>
				</Hidden>

				<Grid item lg={12} sm={12} style={{ background: '#ECE4BA', margin: '5px' }}>
					<Paper elevation={0} square>
						<p className={classes.forP}>{currentZoo.length !== 0 ? currentZoo.data.about : null}</p>
					</Paper>
				</Grid>

				<Grid container justify="center" style={{ background: '#AAE787' }}>
					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<Typography
							style={{
								fontFamily: 'Fredoka One',
								fontSize: '20px',
								color: '#6C5434',
								lineHeight: '40px'
							}}
						>
							PROJECT AND ACTIVITIES IN THIS ZOO
						</Typography>
					</Grid>
				</Grid>

				<Grid container justify="center" style={{ margin: '30px' }}>
					<Grid item sm={6} xs={12} lg={3} style={{ background: 'transparent', margin: '0px' }}>
						<Paper square>
							<div>
								<img
									className={classes.img}
									src="https://previews.123rf.com/images/chyball/chyball1604/chyball160400032/56188211-the-tigers-breeding-on-the-lawn-in-the-zoo-.jpg"
								/>
							</div>
							<Typography
								style={{
									fontFamily: 'Fredoka One',
									fontSize: '14px',
									color: '#6C5434',
									padding: '10px'
								}}
							>
								Animal Breeding
							</Typography>
						</Paper>
					</Grid>

					<Grid item sm={6} xs={12} lg={3} style={{ background: 'transparent', margin: '0px' }}>
						<Paper square>
							<div>
								<img
									className={classes.img}
									src="https://img.freepik.com/free-photo/young-man-planting-tree-garden-as-earth-day-save-world-concept_28283-293.jpg?size=626&ext=jpg"
								/>
							</div>
							<Typography
								style={{
									fontFamily: 'Fredoka One',
									fontSize: '14px',
									color: '#6C5434',
									padding: '10px'
								}}
							>
								Reforestation
							</Typography>
						</Paper>
					</Grid>

					<Grid item sm={6} xs={12} lg={3} style={{ background: 'transparent', margin: '0px' }}>
						<Paper square>
							<div>
								<img
									className={classes.img}
									src="https://www.nutreco.com/globalassets/nutreco-corporate1/homepage/video-block/still.jpg"
								/>
							</div>
							<Typography
								style={{
									fontFamily: 'Fredoka One',
									fontSize: '14px',
									color: '#6C5434',
									padding: '10px'
								}}
							>
								Feeds Plantation
							</Typography>
						</Paper>
					</Grid>

					<Grid item sm={6} xs={12} lg={3} style={{ background: 'transparent' }}>
						<Paper square>
							<div>
								<img
									className={classes.img}
									src="https://www.nationalparks-worldwide.com/images/animals/eaf/rhino-sunset.jpg"
								/>
							</div>
							<Typography
								style={{
									fontFamily: 'Fredoka One',
									fontSize: '14px',
									color: '#6C5434',
									padding: '10px'
								}}
							>
								Rhino Sanctuary
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
