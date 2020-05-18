import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import IconButton from '@material-ui/core/IconButton';

import { useSelector, useDispatch } from 'react-redux';

import { getPrice } from '../../assets/redux/actions/priceAction';
import { amountIncrement, amountDecrement } from '../../assets/redux/actions/feedsCartAction';
import SideNav from '../Components/SideNav';
import RegularMeat from './RegularMeat';
import PremiumMeat from './PremiumMeat';
import RegularFodder from './RegularFodder';
import PremiumFodder from './PremiumFodder';
import RegularFruit from './RegularFruit';
import PremiumFruit from './PremiumFruit';
import RegularBean from './RegularBean';
import PremiumBean from './PremiumBean';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		height: 'auto',
		width: '100%',
		alignItems: 'center',
		textAlign: 'center',
		flexDirection: 'row'
	},
	base: {
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(3)
	},
	leftCont: {
		backgroundColor: 'rgba(255, 255, 255, 0.39)',
		paddingBottom: theme.spacing(11)
	},
	rightCont: {
		backgroundColor: 'rgba(255, 255, 255, 0.39)'
	},
	title: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4)
	},
	instruction: {
		backgroundColor: '#D0C89E',
		paddingTop: theme.spacing(2)
	},
	store: {
		// paddingTop: theme.spacing(2),
		// paddingBottom: theme.spacing(2)
	},
	storage: {
		backgroundColor: '#D0C89E',
		marginBottom: theme.spacing(1),
		paddingTop: theme.spacing(1)
		// height: '40vh'
	},
	image: {
		width: theme.spacing(4),
		height: theme.spacing(4)
	},
	cart: {
		marginTop: theme.spacing(1),
		backgroundColor: '#D0C89E',
		paddingTop: theme.spacing(2)
	}
}));

export default function BodyProfileInfo() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const currUser = useSelector((state) => state.currentUser);
	const price = useSelector((state) => state.feedsPrice);
	const item = useSelector((state) => state.itemHolder);
	const amount = useSelector((state) => state.amountHolder);
	const priceCart = useSelector((state) => state.priceHolder);

	useEffect(() => {
		if (price.length === 0) {
			dispatch(getPrice());
		}
	}, []);

	const increment = () => {
		dispatch(amountIncrement());
	};

	const decrement = () => {
		dispatch(amountDecrement());
	};

	return (
		<div className={classes.root} style={{ background: '#ECE4BA' }}>
			<Grid container className={classes.base} justify="space-around">
				<Grid container item lg={3} className={classes.leftCont} direction="column" alignItems="center">
					<SideNav />
				</Grid>
				<Grid container item lg={8} className={classes.rightCont} direction="column" alignItems="center">
					<Grid item className={classes.title}>
						<Typography variant="h4" style={{ fontFamily: 'Fredoka One, cursive' }}>
							Feeds Store
						</Typography>
					</Grid>
					<Grid container item justify="space-around">
						<Grid item lg={5} className={classes.instruction}>
							<Typography variant="h6">Welcome to the feeds store</Typography>
						</Grid>
						<Grid container item lg={5} className={classes.store} direction="column">
							<Grid item className={classes.storage}>
								<Typography variant="h6">Available Items</Typography>
								<Grid container direction="row" justify="space-around">
									<Grid container item lg={6} direction="column">
										<RegularMeat />
										<PremiumMeat />
										<RegularFodder />
										<PremiumFodder />
									</Grid>
									<Grid container item lg={6} direction="column">
										<RegularFruit />
										<PremiumFruit />
										<RegularBean />
										<PremiumBean />
									</Grid>
								</Grid>
							</Grid>
							<Grid item className={classes.cart}>
								<Typography variant="h6">Your Cart</Typography>
								<Grid container justify="space-around" alignItems="center">
									<Grid item lg={6}>
										{/* {item === '' ? null : item === 'RegularMeat' ? <RegularMeat /> : null} */}
										<Button
											variant="text"
											size="small"
											style={{ width: '100%', justifyContent: 'left' }}
										>
											<Avatar
												alt=""
												src=""
												style={{ marginRight: '5%' }}
												className={classes.image}
											/>
											<Typography variant="caption" style={{ textAlign: 'left' }}>
												Premium Bean
											</Typography>
										</Button>
									</Grid>
									<Grid item lg={4}>
										<Typography>Own : 6</Typography>
									</Grid>
								</Grid>
								<Grid container justify="space-around" alignItems="center">
									<Grid container item lg={6} justify="center" alignItems="center">
										<IconButton onClick={() => decrement()}>
											<RemoveCircleOutlineIcon />
										</IconButton>
										<Typography>{amount}</Typography>
										<IconButton onClick={() => increment()}>
											<AddCircleOutlineIcon />
										</IconButton>
									</Grid>
									<Grid item lg={6}>
										<Typography>Total price: IDR 30,000</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
