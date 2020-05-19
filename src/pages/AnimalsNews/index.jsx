import React, { Fragment } from 'react';

import Appbar from '../Components/AppBar';
import BodyAnimalsNews from './BodyAnimalsNews';
import Footer from '../Components/Footer';

export default function AnimalsNews() {
	return (
		<Fragment>
			<Appbar />
			<BodyAnimalsNews />
			<Footer />
		</Fragment>
	);
}