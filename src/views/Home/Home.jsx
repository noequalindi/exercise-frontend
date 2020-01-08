import React, { Component } from 'react';

import '../Home/styles.scss';
import HotelsList from '../../components/HotelsList/HotelsList';
import FilterComponent from '../../components/Filter/FilterComponent';
import ComponentServices from '../../services/ComponentServices'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    search = (hotelName, checkedStars) => {
        console.log(hotelName, checkedStars);
        //ComponentServices.getHotels()
    }

    render() {
        return (
            <React.Fragment>
                <header className="Header">
                    <div className="container">
                    <div className="row">
                        <div className="twelve columns">
                            <img src="http://localhost:3001/assets/images/logo-almundo.svg" />
                        </div>
                    </div>
                    </div>
                </header>
                <div className="Body">
                    <div className="container">
                        <div className="row">
                            <div className="four columns">
                                <FilterComponent onSearch={this.search} />
                            </div>
                            <div className="eight columns">
                                <HotelsList />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;