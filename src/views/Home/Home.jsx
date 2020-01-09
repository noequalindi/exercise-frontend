import React, { Component } from 'react';

import noResults from '../../assets/images/no-results-marker.svg';
import logo from '../../assets/images/almundo.png';
import '../Home/styles.scss';
import HotelsList from '../../components/HotelsList/HotelsList';
import FilterComponent from '../../components/Filter/FilterComponent';
import ComponentServices from '../../services/ComponentServices'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            currentAppState: 1,
            dataHotels: []
        }

    }

    componentDidMount() {
        this.searchHotel('', null);
    }

    _setNoResults = () => {
        this.setState({
            loading: false,
            currentAppState: 0
        });
    }

    searchHotel(hotelName, checkedStars) {
        this.setState({loading: true}, () => {
            ComponentServices.getHotels(hotelName, checkedStars).then( response => {
                if (response.data.result && response.data.result.length > 0) {
                    this.setState({
                        loading: false,
                        currentAppState: 1,
                        dataHotels: response.data.result
                    });
                } else {
                    this._setNoResults();
                }
            }).catch( err => {
                this._setNoResults();
                console.log("There was an error "+ err)
            });
        });
    }

    search = (hotelName, stars) => {
        this.searchHotel(hotelName, stars);
    }

    render() {
        const { dataHotels, currentAppState, loading } = this.state
        return (
            <React.Fragment>
                <header className="Header">
                    <div className="">
                    <div className="row">
                        <div className="twelve columns">
                            <img className="Header-logo" alt="logoBrand" src="http://localhost:3001/assets/images/logo-almundo.svg" />
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
                            <div className="eight columns v-positionRelative">
                                {
                                    loading &&
                                    <div className="Loader-Container">
                                        <div className="Loader-Overlay"></div>
                                        <div className="Loader">
                                            <img alt="logo" src={logo} className="Logo" />
                                            <span className="Loader-text">Buscando...</span>
                                        </div>
                                    </div>
                                }
                                {
                                    1 === currentAppState && !loading &&
                                    <HotelsList items={dataHotels} />
                                }
                                {
                                    0 === currentAppState &&
                                    <div className="NoResultsContainer">
                                        <span className="NoResultsText">No encontramos disponibilidad para tu búsqueda.</span>
                                        <span className="NoResultsText">Intentá nuevamente.</span>
                                        <img className="NoResultsLogo" src={noResults} alt="noResults" />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;