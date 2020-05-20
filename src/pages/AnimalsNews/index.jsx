import React, { Fragment } from 'react';

import Appbar from '../../assets/Components/AppBar';
import BodyAnimalsNews from './BodyAnimalsNews';
import Footer from '../../assets/Components/Footer';

export default function AnimalsNews() {
	return (
		<Fragment>
			<Appbar />
			<BodyAnimalsNews />
			<Footer />
		</Fragment>
	);
}
