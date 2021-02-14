import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import './App.css';

import {
	Experience,
	Main,
	Skills
} from './pages';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<header>
					<nav>
						<Link className="t-main" to="/" />
						<Link className="t-skills" to="/skills" />
						<Link className="t-experience" to="/experience" />
					</nav>
					<div className="settings">
						
					</div>
				</header>

				<Switch>
					<Route path="/experience">
						<Experience />
					</Route>
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
