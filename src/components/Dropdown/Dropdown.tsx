import React from 'react';
import './Dropdown.css';

interface IState {
    expanded: boolean;
	selected: string | null;
}
interface IProps {
    items: IDropdownItem[];
    select: (item: string) => void;
    getSelected: () => string | null;
}

export class Dropdown extends React.Component<IProps, IState> {
	public state: IState = {
		expanded: false,
		selected: this.props.getSelected()
	};

	constructor(props: IProps) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.close = this.close.bind(this);
	}

	private toggle(): void {
		this.setState({ expanded: !this.state.expanded });
	}

	private select(item: string): void {
		this.props.select(item);
		this.setState({ selected: item });
	}

	private close(): void {
		this.setState({ expanded: false });
	}

	public render() {
        const items = this.props.items;

		return (
			<div
				className="dd-container"
				onClick={this.toggle}
				onBlur={this.close}
				tabIndex={0}
			>
                {items.map(item => (
                    (this.state.selected === item.value || this.state.expanded) &&
                    <div
                        className="item-container"
                        onClick={() => this.select(item.value)}
                        key={item.value}
                    >
                        <div className={`icon ${item.icon}`} />
                        <div className="label">
                            <div className={item.locale}></div>
                        </div>
                    </div>
                ))}
			</div>
		);
	}
};
