import React from 'react'

const Pagination = ({ totalTodos, todosPerPage, setCurrentPage, currentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="pagination">
            {
                pages.map((page, index) => (
                    <div key={index}>
                        <button className={page == currentPage ? "active" : ""}
                            onClick={() => setCurrentPage(page)} >
                            {page}
                        </button>
                    </div>
                ))
            }
        </div>
    );
}

export default Pagination;
