import React from 'react';
import './App.css';

// Libraries Import
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components Import
import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
// import SignUp from "./pages/SignUp";
// import ProfileInfo from './pages/ProfileInfo';
import AdoptionInfo from './pages/AdoptionInfo'

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={AdoptionInfo} />
					{/* <Route path="/sign-in" component={SignIn} /> */}
					{/* <Route path="/sign-up" component={SignUp} /> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
