import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { useSelector, useDispatch } from 'react-redux';

import { getPrice } from '../../assets/redux/actions/priceAction';
import { getStorage, updateStorage } from '../../assets/redux/actions/storageAction';
import { newFeedTransaction } from '../../assets/redux/actions/feedTransactionAction';
import {
	amountIncrement,
	amountDecrement,
	priceMultiplierUp,
	priceMultiplierDown,
	resetAmountCart,
	resetPriceCart
} from '../../assets/redux/actions/feedsCartAction';
import SideNav from '../../assets/Components/SideNav';
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
		paddingTop: theme.spacing(1),
		width: '90%'
	},
	store: {
		// paddingTop: theme.spacing(2),
		// paddingBottom: theme.spacing(2)
	},
	storage: {
		backgroundColor: '#D0C89E'
		// marginBottom: theme.spacing(1),
		// paddingTop: theme.spacing(1)
		// height: '40vh'
	},
	image: {
		width: theme.spacing(4),
		height: theme.spacing(4)
	},
	cart: {
		backgroundColor: '#D0C89E'
		// marginTop: theme.spacing(1),
		// paddingTop: theme.spacing(1)
	}
}));

export default function BodyProfileInfo() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const currUser = useSelector((state) => state.currentUser);
	const userStorage = useSelector((state) => state.feedsStorage);
	const price = useSelector((state) => state.feedsPrice);
	const item = useSelector((state) => state.itemsHolder);
	const amount = useSelector((state) => state.amountHolder);
	const priceCart = useSelector((state) => state.priceHolder);
	const [ open, setOpen ] = React.useState(false);
	const [ value, setValue ] = React.useState('');

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const submitData = (id) => {
		const transactionData = {
			userId: id,
			type: 'buy',
			regularFeedType: 'none',
			regularFeedAmount: 0,
			premiumFeedType: 'none',
			premiumFeedAmount: 0,
			paymentMethod: value,
			total: priceCart
		};

		if (item === 'RegularMeat' || item === 'RegularFodder' || item === 'RegularFruit' || item === 'RegularBean') {
			transactionData.regularFeedType = item;
			transactionData.regularFeedAmount = amount;
		}

		if (item === 'PremiumMeat' || item === 'PremiumFodder' || item === 'PremiumFruit' || item === 'PremiumBean') {
			transactionData.premiumFeedType = item;
			transactionData.premiumFeedAmount = amount;
		}

		const updatedData = {
			regularMeat: userStorage.regularMeat,
			premiumMeat: userStorage.premiumMeat,
			regularFodder: userStorage.regularFodder,
			premiumFodder: userStorage.premiumFodder,
			regularFruit: userStorage.regularFruit,
			premiumFruit: userStorage.premiumFruit,
			regularBean: userStorage.regularBean,
			premiumBean: userStorage.premiumBean
		};

		switch (item) {
			case 'RegularMeat':
				updatedData.regularMeat += amount;
				break;
			case 'PremiumMeat':
				updatedData.premiumMeat += amount;
				break;
			case 'RegularFodder':
				updatedData.regularFodder += amount;
				break;
			case 'PremiumFodder':
				updatedData.premiumFodder += amount;
				break;
			case 'RegularFruit':
				updatedData.regularFruit += amount;
				break;
			case 'PremiumFruit':
				updatedData.premiumFruit += amount;
				break;
			case 'RegularBean':
				updatedData.regularBean += amount;
				break;
			case 'PremiumBean':
				updatedData.premiumBean += amount;
				break;
		}
		// console.log(transactionData, 'trans');
		// console.log(updatedData, 'upt');

		dispatch(newFeedTransaction(transactionData));
		dispatch(updateStorage(id, updatedData));
		setValue('');
		setOpen(false);
		dispatch(resetAmountCart());
		dispatch(resetPriceCart());
	};

	useEffect(() => {
		if (price.length === 0) {
			dispatch(getPrice());
		}
	}, []);

	if (currUser.length !== 0) {
		if (userStorage.length === 0) {
			dispatch(getStorage(currUser._id));
		}
	}

	const increment = () => {
		dispatch(amountIncrement());
		let basePrice = 0;
		switch (item) {
			case 'RegularMeat':
				basePrice = price.regularMeat;
				break;
			case 'PremiumMeat':
				basePrice = price.premiumMeat;
				break;
			case 'RegularFodder':
				basePrice = price.regularFodder;
				break;
			case 'PremiumFodder':
				basePrice = price.premiumFodder;
				break;
			case 'RegularFruit':
				basePrice = price.regularFruit;
				break;
			case 'PremiumFruit':
				basePrice = price.premiumFruit;
				break;
			case 'RegularBean':
				basePrice = price.regularBean;
				break;
			case 'PremiumBean':
				basePrice = price.premiumBean;
				break;
			default:
				basePrice = 0;
				break;
		}

		if (item === 'RegularMeat') {
			basePrice = price.regularMeat;
		}

		dispatch(priceMultiplierUp(amount + 1, basePrice));
	};

	const decrement = () => {
		dispatch(amountDecrement());
		let basePrice = 0;
		switch (item) {
			case 'RegularMeat':
				basePrice = price.regularMeat;
				break;
			case 'PremiumMeat':
				basePrice = price.premiumMeat;
				break;
			case 'RegularFodder':
				basePrice = price.regularFodder;
				break;
			case 'PremiumFodder':
				basePrice = price.premiumFodder;
				break;
			case 'RegularFruit':
				basePrice = price.regularFruit;
				break;
			case 'PremiumFruit':
				basePrice = price.premiumFruit;
				break;
			case 'RegularBean':
				basePrice = price.regularBean;
				break;
			case 'PremiumBean':
				basePrice = price.premiumBean;
				break;
			default:
				basePrice = 0;
				break;
		}

		dispatch(priceMultiplierDown(amount - 1, basePrice));
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
					<Grid container item justify="space-around" direction="column" alignItems="center">
						<Grid item className={classes.instruction}>
							<Typography variant="h6">Welcome to the feeds store</Typography>
							<Grid container item>
								<Grid item style={{ paddingTop: '1%', paddingBottom: '1%' }}>
									<Typography>
										Here, you can buy various feeds for your beloved animals. To make it simple,
										animals has been categorized by their feeds. There are meat eater, fodder eater,
										fruit eater, bean eater. Check out your favorite animals type in their
										respective page
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid container item style={{ paddingTop: '3%' }} justify="space-around">
							<Grid item lg={5} className={classes.storage}>
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
							<Grid item lg={5} className={classes.cart}>
								<Typography variant="h6">Your Cart</Typography>
								<Grid container justify="space-around" alignItems="center">
									<Grid item lg={6}>
										{item === '' ? (
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
													Select your items
												</Typography>
											</Button>
										) : item === 'RegularMeat' ? (
											<RegularMeat />
										) : item === 'PremiumMeat' ? (
											<PremiumMeat />
										) : item === 'RegularFodder' ? (
											<RegularFodder />
										) : item === 'PremiumFodder' ? (
											<PremiumFodder />
										) : item === 'RegularFruit' ? (
											<RegularFruit />
										) : item === 'PremiumFruit' ? (
											<PremiumFruit />
										) : item === 'RegularBean' ? (
											<RegularBean />
										) : item === 'PremiumBean' ? (
											<PremiumBean />
										) : null}
									</Grid>
									<Grid item lg={4}>
										<Typography>
											Own :{' '}
											{item === '' ? (
												0
											) : item === 'RegularMeat' ? (
												userStorage.regularMeat
											) : item === 'PremiumMeat' ? (
												userStorage.premiumMeat
											) : item === 'RegularFodder' ? (
												userStorage.regularFodder
											) : item === 'PremiumFodder' ? (
												userStorage.premiumFodder
											) : item === 'RegularFruit' ? (
												userStorage.regularFruit
											) : item === 'PremiumFruit' ? (
												userStorage.premiumFruit
											) : item === 'RegularBean' ? (
												userStorage.regularBean
											) : item === 'PremiumBean' ? (
												userStorage.premiumBean
											) : null}
										</Typography>
									</Grid>
								</Grid>
								<Grid container justify="space-around" style={{ paddingTop: '2%' }}>
									<Grid item>
										<Typography>Price</Typography>
									</Grid>
									<Grid item>
										<Typography>
											{' '}
											@ IDR{' '}
											{item === '' ? (
												0
											) : item === 'RegularMeat' ? (
												price.regularMeat
											) : item === 'PremiumMeat' ? (
												price.premiumMeat
											) : item === 'RegularFodder' ? (
												price.regularFodder
											) : item === 'PremiumFodder' ? (
												price.premiumFodder
											) : item === 'RegularFruit' ? (
												price.regularFruit
											) : item === 'PremiumFruit' ? (
												price.premiumFruit
											) : item === 'RegularBean' ? (
												price.regularBean
											) : item === 'PremiumBean' ? (
												price.premiumBean
											) : null}
										</Typography>
									</Grid>
								</Grid>
								<Grid container justify="space-around" alignItems="center" style={{ paddingTop: '2%' }}>
									<Grid container item lg={6} justify="center" alignItems="center">
										<IconButton disabled={item === ''} onClick={() => decrement()}>
											<RemoveCircleOutlineIcon />
										</IconButton>
										<Typography>{amount}</Typography>
										<IconButton disabled={item === ''} onClick={() => increment()}>
											<AddCircleOutlineIcon />
										</IconButton>
									</Grid>
									<Grid item lg={6}>
										<Typography>Total price: IDR {priceCart}</Typography>
									</Grid>
								</Grid>
								<Grid container>
									<Grid item lg={12}>
										<Button
											disabled={item === '' || amount === 0}
											onClick={handleClickOpen}
											style={{ backgroundColor: '#b8b086' }}
										>
											Buy Now
										</Button>
										<Dialog
											open={open}
											onClose={handleClose}
											aria-labelledby="form-dialog-title"
											fullWidth="true"
										>
											<DialogTitle id="form-dialog-title">Confirm your items</DialogTitle>
											<DialogContent>
												<DialogContentText>
													{item === 'RegularMeat' ? (
														'Regular Meat'
													) : item === 'PremiumMeat' ? (
														'Premium Meat'
													) : item === 'RegularFodder' ? (
														'Regular Fodder'
													) : item === 'PremiumFodder' ? (
														'Premium Fodder'
													) : item === 'RegularFruit' ? (
														'Regular Fruit'
													) : item === 'PremiumFruit' ? (
														'Premium Fruit'
													) : item === 'RegularBean' ? (
														'Regular Bean'
													) : item === 'PremiumBean' ? (
														'Premium Bean'
													) : null}{' '}
													X {amount} for {priceCart}
												</DialogContentText>
												<FormControl component="fieldset" style={{ margin: '10px' }}>
													<FormLabel component="legend">
														Select your payment method. Your payment is secured
													</FormLabel>
													<RadioGroup
														aria-label="payment"
														name="gender1"
														value={value}
														onChange={handleChange}
													>
														<FormControlLabel
															value="ATM"
															control={<Radio />}
															label="ATM Transfer"
														/>
														<FormControlLabel
															value="CC"
															control={<Radio />}
															label="MasterCard / VISA"
														/>
														<FormControlLabel value="OVO" control={<Radio />} label="OVO" />
														<FormControlLabel
															value="GoPay"
															control={<Radio />}
															label="GoPay"
														/>
													</RadioGroup>
												</FormControl>
											</DialogContent>
											<DialogActions>
												<Button onClick={handleClose} color="primary">
													Cancel
												</Button>
												<Button onClick={() => submitData(currUser._id)} color="primary">
													Buy Now
												</Button>
											</DialogActions>
										</Dialog>
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
