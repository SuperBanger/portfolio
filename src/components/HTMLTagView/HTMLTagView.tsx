import React from 'react';
import './HTMLTagView.css';

interface IProps {
    tagName: string;
    closing: boolean;
}

export class HTMLTagView extends React.Component<IProps, {}> {
	render() {
        const { tagName, closing } = this.props;

		return (
			<span>
                <span className="html-quote">{`<${closing ? '/' : ''}`}</span>
                <span className="html-tag-name">{tagName}</span>
                <span className="html-quote">{'>'}</span>
            </span>
		);
	}
};
