import React, { Fragment } from 'react';

import Appbar from '../Components/AppBar';
import BodyAnimalsInfo from './BodyAnimalsInfo';
import Footer from '../Components/Footer';

export default function SignUp() {
	return (
		<Fragment>
			<Appbar />
			<BodyAnimalsInfo />
			<Footer />
		</Fragment>
	);
}
