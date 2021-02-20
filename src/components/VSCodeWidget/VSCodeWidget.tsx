import React from 'react';
import './VSCodeWidget.css';

import { HTMLCodeView } from '../';

export class VSCodeWidget extends React.Component<IVSCodeWidgetData, {}> {
	render() {
        const { infoTagName, widgetName, items, photo } = this.props;

		return (
			<div className="vs-code-container">
                <div className="code-header-bar">
                    <div className="vs-code-icon" />
                    <div className="vs-code-menu-item">File</div>
                    <div className="vs-code-menu-item">Edit</div>
                    <div className="vs-code-menu-item">Selection</div>
                    <div className="vs-code-menu-item">View</div>
                    <div className="vs-code-menu-item">Go</div>
                    <div className="vs-code-menu-item">Run</div>
                    <div className="vs-code-menu-item">Terminal</div>
                    <div className="vs-code-menu-item">Help</div>
                </div>
                <div className="content-container">
                    <div className="nav-menu-bar">
                        <div className="explorer-icon" />
                        <div className="search-icon" />
                        <div className="git-icon" />
                        <div className="debug-icon" />
                        <div className="extensions-icon" />
                    </div>
                    {photo && (
                        <div className="content">
                            <div className="code-tab-header">
                                <div className={photo.tabName}>.png</div>
                            </div>
                            <div className="code-tab image">
                                <div className={photo.className}></div>
                            </div>
                        </div>
                    )}
                    
                    <div className="content">
                        <div className="code-tab-header">
                            <div className={widgetName}>.html</div>
                        </div>
                        <div className="code-tab">
                            <HTMLCodeView
                                infoTagName={infoTagName}
                                items={items}
                            />
                        </div>
                    </div>
                </div>
            </div>
		);
	}
};
