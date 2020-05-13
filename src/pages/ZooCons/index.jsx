import React, { Fragment } from 'react';

import Appbar from '../Components/AppBar';
import BodyZooCons from './BodyZooCons'
import Footer from '../Components/Footer';

export default function ZooCons() {
	return (
		<Fragment>
			<Appbar />
			<BodyZooCons />
			<Footer />
		</Fragment>
	);
}
