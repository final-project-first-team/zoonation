import React, { Fragment } from 'react';

import AppBar from '../../assets/Components/AppBar';
import Footer from '../../assets/Components/Footer';
import BodyZooCons from './BodyZooCons';

export default function ZooCons() {
	return (
		<Fragment>
			<AppBar />
			<BodyZooCons />
			<Footer />
		</Fragment>
	);
}
