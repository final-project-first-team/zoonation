import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';

import SideNav from '../../assets/Components/SideNav';
import RegularMeat from '../FeedsStore/RegularMeat';
import PremiumMeat from '../FeedsStore/PremiumMeat';
import RegularFodder from '../FeedsStore/RegularFodder';
import PremiumFodder from '../FeedsStore/PremiumFodder';
import RegularFruit from '../FeedsStore/RegularFruit';
import PremiumFruit from '../FeedsStore/PremiumFruit';
import RegularBean from '../FeedsStore/RegularBean';
import PremiumBean from '../FeedsStore/PremiumBean';
import { Avatar } from '@material-ui/core';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	};
}

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
	table: {
		minWidth: 650
	}
}));

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9)
];

export default function BodyTransaction() {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
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
							Transaction History
						</Typography>
					</Grid>
					<Grid item>
						<AppBar position="static">
							<Tabs
								value={value}
								onChange={handleChange}
								aria-label="simple tabs example"
								variant="fullWidth"
							>
								<Tab label="Zoo Donation" {...a11yProps(0)} />
								<Tab label="Adoption" {...a11yProps(1)} />
								<Tab label="Feeding" {...a11yProps(2)} />
							</Tabs>
						</AppBar>
						<TabPanel value={value} index={0}>
							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label="simple table" size="small">
									<TableHead>
										<TableRow>
											<TableCell>Dessert (100g serving)</TableCell>
											<TableCell align="right">Calories</TableCell>
											<TableCell align="right">Fat&nbsp;(g)</TableCell>
											<TableCell align="right">Carbs&nbsp;(g)</TableCell>
											<TableCell align="right">Protein&nbsp;(g)</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<TableRow key={row.name}>
												<TableCell component="th" scope="row">
													{row.name}
												</TableCell>
												<TableCell align="right">{row.calories}</TableCell>
												<TableCell align="right">{row.fat}</TableCell>
												<TableCell align="right">{row.carbs}</TableCell>
												<TableCell align="right">{row.protein}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label="simple table" size="small">
									<TableHead>
										<TableRow>
											<TableCell>Dessert (100g serving)</TableCell>
											<TableCell align="right">Calories</TableCell>
											<TableCell align="right">Fat&nbsp;(g)</TableCell>
											<TableCell align="right">Carbs&nbsp;(g)</TableCell>
											<TableCell align="right">Protein&nbsp;(g)</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<TableRow key={row.name}>
												<TableCell component="th" scope="row">
													{row.name}
												</TableCell>
												<TableCell align="right">{row.calories}</TableCell>
												<TableCell align="right">{row.fat}</TableCell>
												<TableCell align="right">{row.carbs}</TableCell>
												<TableCell align="right">{row.protein}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</TabPanel>
						<TabPanel value={value} index={2}>
							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label="simple table" size="small">
									<TableHead>
										<TableRow>
											<TableCell>Type</TableCell>
											<TableCell align="right">Animal Fed</TableCell>
											<TableCell align="right">Feed Amount</TableCell>
											<TableCell align="right">Feed Type</TableCell>
											<TableCell align="right">Payment Method</TableCell>
											<TableCell align="right">Price</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<TableRow key={row.name}>
												<TableCell component="th" scope="row">
													{row.name}
												</TableCell>
												<TableCell align="right">{row.calories}</TableCell>
												<TableCell align="right">{row.fat}</TableCell>
												<TableCell align="right">{row.carbs}</TableCell>
												<TableCell align="right">{row.protein}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</TabPanel>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
