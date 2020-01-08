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
            hotelName: '',
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
        let clonedStars = this.state.stars.slice();

        if ('all' === value) {
            clonedStars[0].checked = true;
            clonedStars.forEach(item => {
                if ('all' !== item.value) {
                    item.checked = false;
                }
            });
        } else {
            clonedStars[0].checked = false;
            let clicked = clonedStars.filter(item => item.value === value);
            clicked[0].checked = !clicked[0].checked;

            let starArray = clonedStars.slice();
            starArray.splice(0, 1);
            let allUnchecked = starArray.every(item => {
                return 'all' !== item.value && !item.checked;
            });

            if (allUnchecked) {
                clonedStars[0].checked = true;
            }
        }

        this.setState({stars: clonedStars});
    }

    _renderStarsStructure = () => {
        const { stars } = this.state;

        return stars.map((item, idx) => {
            return (
                <div key={idx} className="StarCheckBoxRow">
                    <input onChange={ () => this._handleCheckPress(item.value) } type="checkbox" value={item.value} checked={item.checked}/>
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

    _handleOnPress = () => {
        let { onPress } = this.props;
        let { hotelName, stars } = this.state;

        let checkedOnly = [];
        console.log(stars);
        if (stars[0].checked) {
            let starArray = stars.slice();
            starArray.splice(1, 0);
            checkedOnly = starArray.filter(item => item.checked); 
            console.log(checkedOnly);
        }

        if (onPress) onPress(hotelName, checkedOnly);
    }

    _onChange = (event) => {
        this.setState({hotelName: event.target.value});
    }

    _renderExpandableContentByType = () => {
        const {
            type,
        } = this.props;

        const { 
            hotelName
        } = this.state;

        switch(type) {
            case 'search':
                return (
                    <div className="ExpandableItemRow">
                        <input onChange={this._onChange } className="ExpandableFilterInput" placeholder="Ingrese el nombre del Hotel" type="text" />
                        <button onClick={this._handleOnPress} className="Button Button--primary">Buscar</button>
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