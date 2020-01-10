import React, { PureComponent } from 'react';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import '../PaginationList/styles.scss'

class PaginationList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: parseInt(this.props.pageIndex)
        }
    }
    componentDidMount() {
        this._prev(this.state.currentIndex)
        this._next(this.state.currentIndex)
    }

    paginationClicked = (index) => {
        const { onPageClick } = this.props;

        if (onPageClick) onPageClick(index);
    }

    _prev = () => {
        const { pageIndex } = this.props;
        let { currentIndex } = this.state;

        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = 0;
        }

        this.setState({currentIndex: currentIndex});

        if (pageIndex) this.paginationClicked(this.state.currentIndex);
    }

    _next = () => {
        const { pageIndex, pages } = this.props;
        let { currentIndex } = this.state;

        let currentPage = currentIndex + 1;

        if (currentPage > pages) {
            currentPage = pages;
        }

        this.setState({currentIndex: currentPage})
        .then( () => {
            if(pageIndex) this.paginationClicked(this.state.currentIndex);
        });

    }

    renderPaginationLinks() {
        const { pages, pageIndex } = this.props;
        var pagesList = [...Array(pages).keys()].map(x => ++x);

        return pagesList.map( item => {
            return  <li className="PaginationLink" key={item} active={item === pageIndex}>
                        <button className={"PaginationLink --Button"  + (item === pageIndex ? 'is-active' : '')} onClick={ () => this.paginationClicked(item) }>
                        { item } 
                        </button>
                    </li>
            })
    }

    render() {
        return (
            <div className="Pagination">
            <ul className="PaginationList">
                <li className="PaginationItem"><button onClick={() => this._prev()}>&#x2190;</button></li>
                { this.renderPaginationLinks() }
                <li className="PaginationItem"><button onClick={() => this._next()}>&#x2192;</button></li>
            </ul>
        </div>
        );
    }
}

export default PaginationList;