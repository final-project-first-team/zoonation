import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import RegularMeat from '../FeedsStore/RegularMeat';
import PremiumMeat from '../FeedsStore/PremiumMeat';
import RegularFodder from '../FeedsStore/RegularFodder';
import PremiumFodder from '../FeedsStore/PremiumFodder';
import RegularFruit from '../FeedsStore/RegularFruit';
import PremiumFruit from '../FeedsStore/PremiumFruit';
import RegularBean from '../FeedsStore/RegularBean';
import PremiumBean from '../FeedsStore/PremiumBean';

const useStyles = makeStyles((theme) => ({
	image: {
		width: theme.spacing(4),
		height: theme.spacing(4)
	}
}));

export default function YourStorage(props) {
	const classes = useStyles();
	const data = props.storage;
	const animalData = props.currAnimal;
	let currentStorage1 = '';
	let currentStorage2 = '';

	if (animalData !== undefined) {
		switch (animalData.feeds.type) {
			case 'Meat Eater':
				currentStorage1 = 'RegularMeat';
				currentStorage2 = 'PremiumMeat';
				break;
			case 'Fodder Eater':
				currentStorage1 = 'RegularFodder';
				currentStorage2 = 'PremiumFodder';
				break;
			case 'Fruit Eater':
				currentStorage1 = 'RegularFruit';
				currentStorage2 = 'PremiumFruit';
				break;
			case 'Bean Eater':
				currentStorage1 = 'RegularBean';
				currentStorage2 = 'PremiumBean';
				break;
		}
	}

	return (
		<Fragment>
			<Typography>Your Storage</Typography>
			<List>
				{currentStorage1 === '' ? (
					<Button variant="text" size="small" style={{ width: '100%', justifyContent: 'left' }}>
						<Avatar alt="" src="" style={{ marginRight: '5%' }} className={classes.image} />
						<Typography variant="caption" style={{ textAlign: 'left' }}>
							Please wait
						</Typography>
					</Button>
				) : currentStorage1 === 'RegularMeat' ? (
					<RegularMeat />
				) : currentStorage1 === 'RegularFodder' ? (
					<RegularFodder />
				) : currentStorage1 === 'RegularFruit' ? (
					<RegularFruit />
				) : currentStorage1 === 'RegularBean' ? (
					<RegularBean />
				) : null}
				{currentStorage1 === '' ? (
					<Button variant="text" size="small" style={{ width: '100%', justifyContent: 'left' }}>
						<Avatar alt="" src="" style={{ marginRight: '5%' }} className={classes.image} />
						<Typography variant="caption" style={{ textAlign: 'left' }}>
							Please wait
						</Typography>
					</Button>
				) : currentStorage2 === 'PremiumMeat' ? (
					<PremiumMeat />
				) : currentStorage2 === 'PremiumFodder' ? (
					<PremiumFodder />
				) : currentStorage2 === 'PremiumFruit' ? (
					<PremiumFruit />
				) : currentStorage2 === 'PremiumBean' ? (
					<PremiumBean />
				) : null}
			</List>
		</Fragment>
	);
}
