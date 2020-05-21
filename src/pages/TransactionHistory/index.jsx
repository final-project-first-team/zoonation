import React, { Fragment } from 'react';

import AppBar from '../../assets/Components/AppBar';
import Footer from '../../assets/Components/Footer';
import BodyTransactionHistory from './BodyTransactionHistory';

export default function Donation() {
	return (
		<Fragment>
			<AppBar />
			<BodyTransactionHistory />
			<Footer />
		</Fragment>
	);
}
