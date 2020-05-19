import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { useDispatch } from 'react-redux';
import { getCartData, resetAmountCart, resetPriceCart } from '../../assets/redux/actions/feedsCartAction';

const useStyles = makeStyles((theme) => ({
	image: {
		width: theme.spacing(4),
		height: theme.spacing(4)
	}
}));

export default function RegularMeat() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(getCartData('RegularFodder'));
		dispatch(resetAmountCart());
		dispatch(resetPriceCart());
	};

	return (
		<Fragment>
			<Grid item>
				<Grid item>
					<Button
						variant="text"
						size="small"
						onClick={() => handleClick()}
						style={{ width: '100%', justifyContent: 'left' }}
					>
						<Avatar
							alt=""
							src="https://i.ibb.co/X2yWSTs/kisspng-hay-computer-icons-straw-pasture-infographic-paddy-5abf352ee68a59-8597435315224804309443.png"
							style={{ marginRight: '5%' }}
							className={classes.image}
						/>
						<Typography variant="caption" style={{ textAlign: 'left' }}>
							Regular Fodder
						</Typography>
					</Button>
				</Grid>
			</Grid>
		</Fragment>
	);
}
