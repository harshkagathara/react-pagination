import React from 'react';
import PropTypes, { number } from 'prop-types';
import _ from 'lodash';
const Pagination = (props) => {
    const { itemCount, pageSize,onPageChange, currentPage } = props;
    
    console.log(currentPage);

    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) return null;
    const pages =  _.range(1,pageCount + 1 )
    return (<nav aria-label="Page navigation example">
        <ul className="pagination">
            {pages.map(page=>(
            <li key={page} className={ page === currentPage?'page-item active':'page-item' }>
                    <a className="page-link" onClick={() => onPageChange(page)}>
                    {page}
                </a>
                </li>
                ))}
        </ul>
    </nav>
    )
};
Pagination.prototype = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
 };
export default Pagination;