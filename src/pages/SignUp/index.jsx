import React, { Fragment } from 'react';

import AppBar from '../../assets/Components/AppBar';
import Footer from '../../assets/Components/Footer';
import Body from './BodySignUp';

export default function SignUp() {
	return (
		<Fragment>
			<AppBar />
			<Body />
			<Footer />
		</Fragment>
	);
}
