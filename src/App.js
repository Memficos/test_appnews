import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { News } from './components/News/News';
import { Profile } from './components/Profile/Profile';
import { Auth } from './components/Auth/Auth';

function App() {
	return (
		<div className="container pt-4">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path={'/'} component={Home} />
					<Route exact path={'/news'} component={News} />
					<Route exact path={'/profile'} component={Profile} />
					<Route exact path={'/login'} component={Auth} />
					<Redirect to={'/'} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
