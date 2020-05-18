import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { useDispatch } from 'react-redux';
import { getCartData } from '../../assets/redux/actions/feedsCartAction';

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
		dispatch(getCartData('RegularMeat'));
	};

	return (
		<Fragment>
			<Grid item style={{ textAlign: 'left' }}>
				<Button
					variant="text"
					size="small"
					onClick={() => handleClick()}
					style={{ width: '100%', justifyContent: 'left' }}
				>
					<Avatar
						alt=""
						src="https://i.ibb.co/njzVdLJ/icons8-meat-64.png"
						style={{ marginRight: '5%' }}
						className={classes.image}
					/>
					<Typography variant="caption" style={{ textAlign: 'left' }}>
						Regular Meat
					</Typography>
				</Button>
			</Grid>
		</Fragment>
	);
}
