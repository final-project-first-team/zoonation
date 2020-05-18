import React from 'react';
import './App.css';

// Libraries Import
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components Import
import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './assets/helper/PrivateRoute';
import ProfileInfo from './pages/ProfileInfo';
// import AdoptionInfo from './pages/AdoptionInfo';
// import RedeemPoints from './pages/RedeemPoints';
import OurAnimals from './pages/OurAnimals';
import AnimalInfo from './pages/AnimalsInfo';
import ZooCons from './pages/ZooCons';
import AnimalAdopt from './pages/AnimalAdopt';
import AnimalAdopt2 from './pages/AnimalAdopt2';
import AnimalAdopt3 from './pages/AnimalAdopt3';
import FeedingAnimals from './pages/FeedingAnimals';
import AnimalFeeder from './pages/AnimalFeeder';
import Donation from './pages/Donation'
import ZooPartner from './pages/ZooPartner'


function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/sign-in" component={SignIn} />
					<Route path="/sign-up" component={SignUp} />
					<PrivateRoute path="/profile" component={ProfileInfo} />
					<Route path="/our-animals" component={OurAnimals} />
					<Route exact path="/animal-info/:id" component={AnimalInfo} />
					<Route path="/zoos-and-conservation" component={ZooCons} />
					<Route path="/animal-adopt" component={AnimalAdopt} />
					<Route path="/animal-adopt-2" component={AnimalAdopt2} />
					<Route path="/animal-adopt-3" component={AnimalAdopt3} />
					<Route path="/feeding-animals" component={FeedingAnimals} />
					<Route path="/animal-feeder" component={AnimalFeeder} />
					<Route path="/donation" component={Donation} />
					<Route path="/zoo-partner" component={ZooPartner} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
