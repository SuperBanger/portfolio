import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import './App.css';

import {
	Main,
	Skills
} from './components';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				
				<header>
					<nav> 
						<Link className="t-label-main" to="/" />
						<Link className="t-label-skills" to="/skills" />
					</nav>
				</header>

				<Switch>
					<Route path="/skills">
						<Skills />
					</Route>
					<Route path="/">
						<Main />
					</Route>
				</Switch>
    		</Router>
		);
	}
};
