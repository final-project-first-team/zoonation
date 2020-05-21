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
import Donation from './pages/Donation';
import ZooPartner from './pages/ZooPartner';
import PayMetDon from './pages/PayMetDon';
import FeedsStore from './pages/FeedsStore';
import AnimalsNews from './pages/AnimalsNews';
import AboutUs from './pages/AboutUs';
import TransactionHistory from './pages/TransactionHistory';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					{/* Basic Features*/}
					<Route exact path="/" component={Homepage} />
					<Route path="/sign-in" component={SignIn} />
					<Route path="/sign-up" component={SignUp} />

					{/* Main Features - Education */}
					<Route path="/zoos-and-conservation" component={ZooCons} />
					<Route path="/our-animals" component={OurAnimals} />
					<Route exact path="/animal-info/:id" component={AnimalInfo} />

					{/* Main Features - Donation */}
					<Route path="/donation" component={Donation} />
					<Route path="/animal-adopt" component={AnimalAdopt} />
					<Route path="/animal-adopt-2/:id" component={AnimalAdopt2} />
					<Route path="/animal-adopt-3/:id" component={AnimalAdopt3} />
					<Route path="/feeding-animals" component={FeedingAnimals} />
					<Route path="/animal-feeder/:id" component={AnimalFeeder} />
					<Route path="/zoo-partner/:id" component={ZooPartner} />
					<Route path="/donation-payment-method/:id" component={PayMetDon} />

					{/* User Profile */}
					<PrivateRoute path="/profile" component={ProfileInfo} />
					<PrivateRoute path="/feeds-store" component={FeedsStore} />
					<PrivateRoute path="/transaction-history" component={TransactionHistory} />

					{/* Additional Features */}
					<Route path="/animals-news" component={AnimalsNews} />
					<Route path="/about-us" component={AboutUs} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
