import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextArea from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { useParams } from 'react-router-dom';

import FormAdopt from './FormAdopt';

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
	ourAnimals: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		marginTop: theme.spacing(10)
	},
	adoptForBetter: {
		fontFamily: 'Lemonada',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '18px',
		lineHeight: '25px',
		display: 'flex',
		alignItems: 'center',
		color: '#6C5434',
		marginTop: theme.spacing(1)
	}
}));

export default function AnimalAdopt3() {
	const classes = useStyle();
	const { id } = useParams();
	const dispatch = useDispatch();
	const currUser = useSelector((state) => state.currentUser);
	const [ adoptValue, setAdoptValue ] = React.useState('');
	const [ paymentValue, setPaymentValue ] = React.useState('');

	const handleChangeAdopt = (event) => {
		setAdoptValue(event.target.value);
	};

	const handleChangePayment = (event) => {
		setPaymentValue(event.target.value);
	};
	// console.log(adoptValue);

	// const submitData = (values) => {
	// 	console.log(value, values.name);
	// };
	return (
		<div className={classes.root} style={{ background: '#ECE4BA' }}>
			<Grid container justify="center">
				<Typography className={classes.ourAnimals}>Payment Method</Typography>
			</Grid>

			<Grid container justify="center">
				<Typography className={classes.adoptForBetter}>Adopt. Together we save lives</Typography>
			</Grid>

			<Grid container justify="center">
				{currUser.length !== 0 ? (
					<FormAdopt user={currUser} adoptRate={adoptValue} paymentRate={paymentValue} id={id} />
				) : null}
				<Grid
					item
					md={4}
					xs={12}
					sm={12}
					style={{ background: '#6C5434', minHeight: '100%', margin: '20px', padding: '20px' }}
				>
					<Grid
						item
						md={12}
						style={{
							background: '#C4C4C4',
							fontFamily: 'Fredoka One',
							fontSize: '18px',
							padding: '10px',
							color: '#6C5434'
						}}
					>
						Choose Your Adoption Rate
					</Grid>
					<Grid item md={12} style={{ background: '#F6F4E4', paddingBottom: '24px' }}>
						<FormControl component="fieldset" style={{ margin: '10px' }}>
							<FormLabel component="legend" style={{ fontFamily: 'Raleway' }}>
								You're about saving a life
							</FormLabel>
							<RadioGroup
								aria-label="payment"
								name="gender1"
								value={adoptValue}
								onChange={handleChangeAdopt}
							>
								<FormControlLabel value="150000" control={<Radio />} label="IDR 150,000" />
								<FormControlLabel value="200000" control={<Radio />} label="IDR 200,000" />
								<FormControlLabel value="250000" control={<Radio />} label="IDR 250,000" />
							</RadioGroup>
						</FormControl>
					</Grid>

					<Grid
						item
						md={12}
						style={{
							background: '#C4C4C4',
							fontFamily: 'Fredoka One',
							fontSize: '18px',
							padding: '10px',
							color: '#6C5434'
						}}
					>
						Choose Your Payment Method
					</Grid>
					<Grid item md={12} style={{ background: '#F6F4E4' }}>
						<FormControl component="fieldset" style={{ margin: '10px' }}>
							<FormLabel component="legend" style={{ fontFamily: 'Raleway' }}>
								Your payment is secured
							</FormLabel>
							<RadioGroup
								aria-label="payment"
								name="gender1"
								value={paymentValue}
								onChange={handleChangePayment}
							>
								<FormControlLabel value="ATM" control={<Radio />} label="ATM Transfer" />
								<FormControlLabel value="CC" control={<Radio />} label="MasterCard / VISA" />
								<FormControlLabel value="OVO" control={<Radio />} label="OVO" />
								<FormControlLabel value="GoPay" control={<Radio />} label="GoPay" />
							</RadioGroup>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
