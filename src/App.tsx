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
              <Link to="/skills">Skills</Link>

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
