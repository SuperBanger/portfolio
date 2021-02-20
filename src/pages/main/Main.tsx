import React from 'react';
import './Main.css';

import { VSCodeWidget } from '../../components';
import { aboutMeWidgetData } from '../../utils/constants';

export class Main extends React.Component {
	render() {
		const { widgetName, infoTagName, items, photo } = aboutMeWidgetData;

		return (
			<main>
				<div className="city-img"></div>
				<div className="main-info">
					<div className="about">
						<VSCodeWidget
							widgetName={widgetName}
							infoTagName={infoTagName}
							items={items}
							photo={photo}
						/>
					</div>
				</div>
			</main>
		);
	}
};
