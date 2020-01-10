import React, { PureComponent } from 'react';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class PaginationList extends PureComponent {

    paginationClicked = (index) => {
        const { onPageClick } = this.props;

        if (onPageClick) onPageClick(index);
    }

    renderPaginationLinks() {
        const { pages, pageIndex } = this.props;
        var pagesList = [...Array(pages).keys()].map(x => ++x);

        return pagesList.map( item => {
            return  <PaginationItem key={item} active={item === pageIndex}>
                        <button onClick={ () => this.paginationClicked(item) }>
                        { item } 
                        </button>
                    </PaginationItem>
            })
    }

    render() {
        return (
            <div className="HotelList">
                <Pagination>
                   <PaginationItem>
                        <PaginationLink previous tag="button"></PaginationLink>
                    </PaginationItem>
                     { this.renderPaginationLinks() }
                    <PaginationItem>
                        <PaginationLink next tag="button"></PaginationLink>
                    </PaginationItem>
                </Pagination>
            </div>
        );
    }
}

export default PaginationList;