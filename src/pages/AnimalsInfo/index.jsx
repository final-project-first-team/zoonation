import React, { Fragment } from 'react';

import AppBar from '../../assets/Components/AppBar';
import Footer from '../../assets/Components/Footer';
import BodyAnimalsInfo from './BodyAnimalsInfo';

export default function SignUp() {
	return (
		<Fragment>
			<AppBar />
			<BodyAnimalsInfo />
			<Footer />
		</Fragment>
	);
}
