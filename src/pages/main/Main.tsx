import React from 'react';
import './Main.css';

import { VSCodeWidget } from '../../components';
import {
	aboutMeWidgetData,
	contactsWidgetData,
	educationWidgetData
} from '../../utils/constants';

export class Main extends React.Component {
	render() {
		return (
			<main>
				<div className="about">
					<VSCodeWidget
						widgetName={aboutMeWidgetData.widgetName}
						infoTagName={aboutMeWidgetData.infoTagName}
						items={aboutMeWidgetData.items}
						photo={aboutMeWidgetData.photo}
					/>
				</div>
				<div className="educatoin">
					<VSCodeWidget
						widgetName={educationWidgetData.widgetName}
						infoTagName={educationWidgetData.infoTagName}
						items={educationWidgetData.items}
					/>
				</div>
				<div className="contacts">
					<VSCodeWidget
						widgetName={contactsWidgetData.widgetName}
						infoTagName={contactsWidgetData.infoTagName}
						items={contactsWidgetData.items}
					/>
				</div>
			</main>
		);
	}
};
