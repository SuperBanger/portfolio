import React from 'react';
import './HTMLCodeView.css';

import { HTMLTagView } from '../';

export class HTMLCodeView extends React.Component<IHtmlCodeData, {}> {
	render() {
        const { infoTagName, items } = this.props;

		return (
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
		);
	}
};
