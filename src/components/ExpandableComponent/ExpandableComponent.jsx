import React, { PureComponent } from 'react';
import _ from 'lodash';

import './styles.scss';
import '../../scss/Button.scss';
import '../../scss/StarCheckbox.scss';

class ExpandableComponent extends PureComponent {
    
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            stars: [
                { amount: -1, value: 'all', text: 'Todas las estrellas', checked: true },
                { amount: 5, value: 5, checked: false  },
                { amount: 4, value: 4, checked: false  },
                { amount: 3, value: 3, checked: false  },
                { amount: 2, value: 2, checked: false  },
                { amount: 1, value: 1, checked: false  }
            ]
        }
    }

    _handleCheckPress = (value) => {
        let stars = _.cloneDeep(this.state.stars);

        if ('all' === value) {
            stars[0].checked = true;
            stars.forEach(item => {
                if ('all' !== item.value) {
                    item.checked = false;
                }
            });
        } else {
            stars[0].checked = false;
            let clicked = stars.filter(item => item.value === value);
            clicked[0].checked = !clicked[0].checked;

            let starArray = _.cloneDeep(stars);
            starArray.splice(0, 1);
            let allUnchecked = starArray.every(item => {
                return 'all' !== item.value && !item.checked;
            });

            if (allUnchecked) {
                stars[0].checked = true;
            }
        }

        this.setState({stars: stars});
    }

    _renderStarsStructure = () => {
        const { stars } = this.state;

        return stars.map((item, idx) => {
            return (
                <div key={idx} className="StarCheckBoxRow">
                    <input onClick={ () => this._handleCheckPress(item.value) } type="checkbox" value={item.value} checked={item.checked}/>
                    {
                        item.text &&
                        <span className="StarCheckValue">{item.text}</span>
                    }  
                    {
                        item.amount !== -1 &&
                        Array(item.amount).fill('').map((val, idx) => {
                            return <span key={idx} className="StarIcon" />
                        })
                    }
                </div>
            );
        });
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
                return (
                    <div className="StarCheckbox">
                        { this._renderStarsStructure() }
                    </div>
                );
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