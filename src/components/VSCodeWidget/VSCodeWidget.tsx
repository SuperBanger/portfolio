import React from 'react';
import './VSCodeWidget.css';

import { HTMLTagView } from '../';

export class VSCodeWidget extends React.Component<IVSCodeWidgetData, {}> {
	render() {
        const { infoTagName, widgetName, items } = this.props;

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
                    <div className="content">
                        <div className="code-tab-header">
                            <div className={widgetName}>.html</div>
                        </div>
                        <div className="code-tab">
                            <code>
                                <span className="line-counter">1</span>
                                <p className="code-line">
                                    <HTMLTagView tagName={infoTagName} closing={false} />
                                </p>
                                {items.map((item, i) => 
                                    (<React.Fragment key={i}>
                                        <span className="line-counter">{2 + i}</span>
                                        <p className="code-line tab-space">
                                            <HTMLTagView tagName={item.label} closing={false} />
                                            <span className={item.locale} />
                                            <HTMLTagView tagName={item.label} closing={true} />
                                        </p>
                                    </React.Fragment>)
                                )}
                                <span className="line-counter">{2 + items.length}</span>
                                <p className="code-line">
                                    <HTMLTagView tagName={infoTagName} closing={true} />
                                </p>
                                {/* Ends with empty line */}
                                <span className="line-counter">{3 + items.length}</span>
                                <p className="code-line">&nbsp;</p>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
};
