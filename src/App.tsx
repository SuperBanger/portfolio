import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link
} from 'react-router-dom';
import './App.css';

import * as pages from './pages';
import * as components from './components';
import * as utils from './utils/utils';
import { languages, themes } from './utils/constants'

export default class App extends React.Component {
	render() {
		const Dropdown = components.Dropdown;

		return (
			<Router>
				<div className="city-img"></div>
				<header>
					<nav>
						{/* <Link className="nav-menu-link" to="/">
							<div className="t-main"></div>
						</Link>
						<Link className="nav-menu-link" to="/skills">
							<div className="t-skills"></div>
						</Link>
						<Link className="nav-menu-link" to="/experience">
							<div className="t-experience"></div>
						</Link> */}
					</nav>
					<div className="settings">
						<div className="setting-item">
							<Dropdown
								items={languages}
								select={utils.setLanguage}
								getSelected={utils.getLanguage}
							/>
						</div>
						<div className="setting-item">
							<Dropdown
								items={themes}
								select={utils.setTheme}
								getSelected={utils.getTheme}
							/>
						</div>
					</div>
				</header>

				<Switch>
					<Route path="/experience">
						<pages.Experience />
					</Route>
					<Route path="/skills">
						<pages.Skills />
					</Route>
					<Route path="/">
						<pages.Main />
					</Route>
				</Switch>

				<footer>
					<div className="t-footer-text"></div>
					<span>:&nbsp;</span>
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/SuperBanger/portfolio">Portfolio App</a>
				</footer>
    		</Router>
		);
	}
};
