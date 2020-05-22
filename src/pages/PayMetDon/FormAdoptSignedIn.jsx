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
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Link from '@material-ui/core/Link';
import Radio from '@material-ui/core/Radio';

import { useDispatch, useSelector } from 'react-redux';
import { newDonateTransaction } from '../../assets/redux/actions/donateTransactionAction';
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
	const adoptValue = props.donateRate;
	const paymentValue = props.paymentMethod;
	const id = props.id;
	const history = useHistory();
	const [ open, setOpen ] = React.useState(false);

	const submitData = async (values) => {
		const data = {
			userId: currUser._id,
			zooId: id,
			status: 'not anonymous',
			adoptRate: adoptValue,
			paymentMethod: paymentValue,
			userData: values
		};

		// console.log(data, 'data');
		await setOpen(true);
		await dispatch(newDonateTransaction(data));
		await history.push('/donation');
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
										id="message"
										name="message"
										values={values.message}
										onChange={handleChange}
										placeholder="Message for the zookeeper"
										style={{
											background: '#C4C4C4',
											textAlign: 'left',
											fontFamily: 'Raleway',
											fontSize: '14px',
											width: '100%',
											height: '25vh'
										}}
									/>
								</Grid>
								<Grid
									item
									md={12}
									style={{
										background: '#F6F4E4',
										fontFamily: 'Raleway',
										fontSize: '14px',
										padding: '10px'
									}}
								>
									{/* <RadioGroup>
										<FormControlLabel value="Anonymous" control={<Radio />} label="Use Anonymous" />
									</RadioGroup> */}
									<Grid item md={12}>
										<Button
											type="submit"
											size="large"
											variant="outlined"
											style={{ margin: '20px', color: '#6C5434' }}
										>
											SUBMIT
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
					Thanks for your donation!
				</Alert>
			</Snackbar>
		</Fragment>
	);
}
