import React from 'react';
import './App.css';

// Libraries Import
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components Import
import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
// import ProfileInfo from "./pages/Profile"
import PrivateRoute from './assets/helper/PrivateRoute';
// import SignUp from "./pages/SignUp";
import ProfileInfo from './pages/ProfileInfo';
// import AdoptionInfo from './pages/AdoptionInfo';
// import RedeemPoints from './pages/RedeemPoints';
import OurAnimals from './pages/OurAnimals';
import AnimalInfo from './pages/AnimalsInfo';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={OurAnimals} />
					<Route path="/sign-in" component={SignIn} />
					<Route path="/sign-up" component={SignUp} />
					<PrivateRoute path="/profile" component={ProfileInfo} />
					<Route path="/animal-info" component={AnimalInfo} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
