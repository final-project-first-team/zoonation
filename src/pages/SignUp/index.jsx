import React, { Fragment } from 'react';

import Appbar from '../Components/AppBar';
import Body from './BodySignUp';
import Footer from '../Components/Footer';

export default function SignUp() {
	return (
		<Fragment>
			<Appbar />
			<Body />
			<Footer />
		</Fragment>
	);
}
