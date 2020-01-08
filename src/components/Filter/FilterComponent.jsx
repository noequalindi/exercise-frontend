import React, { PureComponent } from 'react';
import ExpandableContainer from '../ExpandableComponent/ExpandableComponent';

import '../../scss/Card.scss';
import '../../scss/utils.scss';

class FilterComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Card">
                <div className="CardWrap CardTitleContainer v-bottomBorder">
                    <span className="CardTitle">Filtros</span>
                </div>
                <div className="CardWrap CardSection v-bottomBorder">
                    <ExpandableContainer title="Nombre de Hotel" type="search" withIcon={true} onPress={this.props.onSearch} />
                </div>
                <div className="CardWrap CardSection">
                    <ExpandableContainer title="Estrellas" type="star" withIcon={true} />
                </div>
            </div>
        );
    }
}

export default FilterComponent;