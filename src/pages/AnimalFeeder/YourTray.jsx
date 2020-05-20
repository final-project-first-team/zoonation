import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import IconButton from '@material-ui/core/IconButton';

import { useSelector, useDispatch } from 'react-redux';

import RegularMeat from '../FeedsStore/RegularMeat';
import PremiumMeat from '../FeedsStore/PremiumMeat';
import RegularFodder from '../FeedsStore/RegularFodder';
import PremiumFodder from '../FeedsStore/PremiumFodder';
import RegularFruit from '../FeedsStore/RegularFruit';
import PremiumFruit from '../FeedsStore/PremiumFruit';
import RegularBean from '../FeedsStore/RegularBean';
import PremiumBean from '../FeedsStore/PremiumBean';
import {
	amountIncrement,
	amountDecrement,
	priceMultiplierUp,
	priceMultiplierDown,
	resetAmountCart,
	resetPriceCart
} from '../../assets/redux/actions/feedsCartAction';

const useStyle = makeStyles((theme) => ({
	button: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434'
	}
}));

export default function YourTray(props) {
	const classes = useStyle();
	const dispatch = useDispatch();
	const item = useSelector((state) => state.itemsHolder);
	const userStorage = props.storage;
	const amount = useSelector((state) => state.amountHolder);

	const increment = () => {
		dispatch(amountIncrement());

		// if (item === 'RegularMeat') {
		// 	basePrice = price.regularMeat;
		// }

		// dispatch(priceMultiplierUp(amount + 1, basePrice));
	};

	const decrement = () => {
		dispatch(amountDecrement());

		// dispatch(priceMultiplierDown(amount - 1, basePrice));
	};

	const handleClick = (id) => {
		const transactionData = {
			userId: id,
			type: 'spend',
			regularFeedType: 'none',
			regularFeedAmount: 0,
			premiumFeedType: 'none',
			premiumFeedAmount: 0
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
		// dispatch(newFeedTransaction(transactionData));
		// dispatch(updateStorage(id, updatedData));
	};

	return (
		<Fragment>
			<Typography>Your Tray</Typography>
			<List>
				{item === '' ? (
					<Button variant="text" size="small" style={{ width: '100%', justifyContent: 'left' }}>
						<Avatar alt="" src="" style={{ marginRight: '5%' }} className={classes.image} />
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

				<ListItem style={{ paddingTop: 0, paddingBottom: 0, textAlign: 'center' }}>
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
				</ListItem>
				<Grid container justify="space-around" alignItems="center" style={{ paddingTop: '2%' }}>
					<Grid container item lg={12} justify="center" alignItems="center">
						<Typography>Feed amount : </Typography>
						<IconButton disabled={item === ''} onClick={() => decrement()}>
							<RemoveCircleOutlineIcon />
						</IconButton>
						<Typography>{amount}</Typography>
						<IconButton disabled={item === ''} onClick={() => increment()}>
							<AddCircleOutlineIcon />
						</IconButton>
					</Grid>
				</Grid>
			</List>
			<Button className={classes.button} type="submit" fullWidth variant="contained" onClick={handleClick}>
				<Typography>Feed Now</Typography>
			</Button>
		</Fragment>
	);
}
