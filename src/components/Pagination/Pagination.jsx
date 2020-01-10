import React, { PureComponent } from 'react';

class Pagination extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 1
        }
    }

    _pageClick = (key) => {
        const { onPageClick } = this.props;

        this.setState({currentIndex: key});

        if (onPageClick) onPageClick(key);
    }

    _prev = () => {
        const { onPrev } = this.props;
        let { currentIndex } = this.state;

        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = 0;
        }

        this.setState({currentIndex: currentIndex});

        if (onPrev) onPrev();
    }

    _next = () => {
        const { onNext, totalPages } = this.props;
        let { currentIndex } = this.state;

        currentIndex += 1;
        if (currentIndex > totalPages) {
            currentIndex = totalPages;
        }

        this.setState({currentIndex: currentIndex});

        if (onNext) onNext();
    }

    renderPaginationItems = () => {
        const { totalPages } = this.props;
        const { currentIndex } = this.state;

        return Array(totalPages).fill('').map((val, key) => {
            return <li className="PaginationItem"><button className={"PaginationButton " + (key === currentIndex ? 'is-active' : '')} onClick={this._pageClick(key)}>{key}</button></li>;
        });
    }

    render() {
        return (
            <div className="Pagination">
                <ul className="PaginationList">
                    <li className="PaginationItem"><button onClick={this._prev()}>&#x2190;</button></li>
                    { this.renderPaginationItems() }
                    <li className="PaginationItem"><button onClick={this._next()}>&#x2192;</button></li>
                </ul>
            </div>
        );
    }
}

export default Pagination;