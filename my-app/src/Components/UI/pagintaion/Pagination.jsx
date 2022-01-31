import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <button key={p}
                        className={page === p ? 'page_btn page__current' : 'page_btn'}
                        onClick={() => changePage(p)}
                >
                    {p}
                </button>
            )}
        </div>
    );
};

export default Pagination;