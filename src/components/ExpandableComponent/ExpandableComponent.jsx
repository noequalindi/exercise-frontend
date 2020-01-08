import React, { PureComponent } from 'react';

import './styles.scss';
import '../../scss/Button.scss';

class ExpandableComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true
        }
    }

    _renderExpandableContentByType = () => {
        const {
            type
        } = this.props;

        switch(type) {
            case 'search':
                return (
                    <div className="ExpandableItemRow">
                        <input className="ExpandableFilterInput" placeholder="Ingrese el nombre del Hotel" type="text" />
                        <button className="Button Button--primary">Buscar</button>
                    </div>
                );
            case 'star': 
                return <div>Stars</div>
            default:
                return <div>Ah re loco!</div> 
        }
    }

    _toggleExpanded = () => {
        this.setState({isOpened: !this.state.isOpened});
    }

    _renderIcon = () => {
        const {
            type,
            withIcon
        } = this.props;

        if (withIcon) {
            return <span className={`ExpandableTitleIcon ${type}`}></span>
        }
    }

    render() {
        const { 
            isOpened
        } = this.state;

        return (
            <div className="ExpandableContainer" >
                <div className="ExpandableTitleWrap">
                    <span className="ExpandableTitle">
                        { this._renderIcon() }
                        {this.props.title || 'Title'}
                    </span>
                    <button className="ExpandedArrowButton" onClick={this._toggleExpanded}>
                        {
                            isOpened ?
                            <span className="ExpandedIcon">▲</span>
                            :
                            <span className="ExpandedIcon">▼</span>
                        }
                    </button> 
                </div>
                {
                    isOpened && this._renderExpandableContentByType()
                }
            </div>
        );
    }
}

export default ExpandableComponent;