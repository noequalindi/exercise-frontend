import React, { PureComponent } from 'react';
import HotelDetail from '../HotelDetail/HotelDetail';

import '../HotelsList/styles.scss';

class HotelsList extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="HotelList">
                { 
                    this.props.items && this.props.items.map((item, idx) => {
                        return <HotelDetail key={idx} item={item} />
                    })
                }
            </div>
        );
    }
}

export default HotelsList;