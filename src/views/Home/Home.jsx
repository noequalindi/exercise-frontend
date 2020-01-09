import React, { Component } from 'react';

import '../Home/styles.scss';
import HotelsList from '../../components/HotelsList/HotelsList';
import FilterComponent from '../../components/Filter/FilterComponent';
import ComponentServices from '../../services/ComponentServices'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataHotels: []
        }

    }

    componentDidMount() {
        this.searchHotel('', null);
    }

    searchHotel(hotelName, checkedStars) {
        ComponentServices.getHotels(hotelName, checkedStars).then( response => {
           
            if (response.data) {
                this.setState({ dataHotels: response.data.result });
            }

        }).catch( err => {
            console.log("There was an error "+ err)            
        })
    }

    search = (hotelName, stars) => {
        this.searchHotel(hotelName, stars);
    }

    render() {
        const { dataHotels } = this.state
        return (
            <React.Fragment>
                <header className="Header">
                    <div className="">
                    <div className="row">
                        <div className="twelve columns">
                            <img src="http://localhost:3001/assets/images/logo-almundo.svg" />
                        </div>
                    </div>
                    </div>
                </header>
                <div className="Body">
                    <div className="">
                        <div className="row">
                            <div className="four columns">
                                <FilterComponent onSearch={this.search} />
                            </div>
                            <div className="eight columns">
                                <HotelsList items={dataHotels} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;