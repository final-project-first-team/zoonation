import React, { Fragment } from 'react';
import { Formik } from 'formik';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextArea from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { useDispatch, useSelector } from 'react-redux';
import { newAdoptTransaction, updateAdoptData } from '../../assets/redux/actions/adoptTransactionAction';
import { useHistory } from 'react-router-dom';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

export default function FormAdopt(props) {
	const classes = useStyle();
	const dispatch = useDispatch();
	const currUser = props.user;
	const adoptValue = props.adoptRate;
	const paymentValue = props.paymentRate;
	const id = props.id;
	const history = useHistory();
	const [ open, setOpen ] = React.useState(false);

	const submitData = async (values) => {
		let long = '0';
		switch (adoptValue) {
			case '150000':
				long = '1';
				break;
			case '200000':
				long = '1.5';
				break;
			case '250000':
				long = '2';
				break;
		}

		const data = {
			userId: currUser._id,
			animalId: id,
			adoptRate: adoptValue,
			paymentMethod: paymentValue,
			userData: values,
			long: long
		};

		// console.log(data, 'data');
		await setOpen(true);
		await dispatch(newAdoptTransaction(data));
		await dispatch(updateAdoptData(data));
		await history.push('/animal-adopt');
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<Fragment>
			<Formik
				initialValues={{
					name: `${currUser.fullname}`,
					email: `${currUser.email}`,
					phone: '',
					message: ''
				}}
				onSubmit={async (values) => {
					submitData(values);
					// console.log(values);
				}}
			>
				{({ handleChange, handleSubmit, values }) => {
					return (
						<Grid
							item
							md={7}
							style={{
								background: '#6C5434',
								height: '100%',
								width: '100%',
								margin: '20px',
								padding: '20px'
							}}
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
								Secure Payment Form
							</Grid>
							<form noValidate onSubmit={handleSubmit}>
								<Grid
									item
									md={12}
									style={{
										background: '#F6F4E4',
										fontFamily: 'Fredoka One',
										fontSize: '18px',
										padding: '10px'
									}}
								>
									<TextField
										onChange={handleChange}
										label="Name"
										id="name"
										name="name"
										defaultValue={currUser.fullname}
										values={values.name}
										fullWidth
										style={{ background: '#C4C4C4', textAlign: 'center' }}
									/>
								</Grid>

								<Grid
									item
									md={12}
									style={{
										background: '#F6F4E4',
										fontFamily: 'Fredoka One',
										fontSize: '18px',
										padding: '10px'
									}}
								>
									<TextField
										onChange={handleChange}
										label="Email"
										id="email"
										name="email"
										defaultValue={currUser.email}
										values={values.email}
										fullWidth
										style={{ background: '#C4C4C4', textAlign: 'center' }}
									/>
								</Grid>

								<Grid
									item
									md={12}
									style={{
										background: '#F6F4E4',
										fontFamily: 'Fredoka One',
										fontSize: '18px',
										padding: '10px'
									}}
								>
									<TextField
										onChange={handleChange}
										required
										label="Phone"
										id="phone"
										name="phone"
										values={values.phone}
										fullWidth
										style={{ background: '#C4C4C4', textAlign: 'center' }}
									/>
								</Grid>

								<Grid
									item
									md={12}
									style={{
										background: '#F6F4E4',
										fontFamily: 'Fredoka One',
										fontSize: '18px',
										padding: '10px'
									}}
								>
									<TextArea
										onChange={handleChange}
										id="message"
										name="message"
										values={values.message}
										placeholder="Send a personal message to your animal keeper:"
										style={{
											background: '#C4C4C4',
											textAlign: 'left',
											fontFamily: 'Raleway',
											fontSize: '14px',
											width: '90%',
											height: '25vh'
										}}
									/>
									<Grid item md={12}>
										<Button
											size="large"
											variant="outlined"
											type="submit"
											style={{ margin: '10px', color: '#6C5434' }}
										>
											Submit
										</Button>
									</Grid>
								</Grid>
							</form>
						</Grid>
					);
				}}
			</Formik>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success">
					Thanks for feeding me!
				</Alert>
			</Snackbar>
		</Fragment>
	);
}
