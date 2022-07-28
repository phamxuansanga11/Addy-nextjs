import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

Pagination.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  paginate: PropTypes.func,
  active: PropTypes.number,
  handleSetDownCurrentPage: PropTypes.func,
  handleSetUpCurrentPage: PropTypes.func,
};

Pagination.defaultProps = {
  postsPerPage: null,
  totalPosts: null,
  paginate: null,
  active: null,
  handleSetDownCurrentPage: null,
  handleSetUpCurrentPage: null,
};

function Pagination({
  // postsPerPage,
  totalPages,
  paginate,
  active,
  handleSetDownCurrentPage,
  handleSetUpCurrentPage,
  // currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginations">
      <ul className="pagination__list">
        <li
          className={classNames({
            "--btn__controll --prev__btn": true,
            disables: active === 1,
          })}
          onClick={() => handleSetDownCurrentPage()}
        >
          <span>←</span>
        </li>
        {pageNumbers.map(
          (i, index) =>
            index > active - 3 &&
            index < active + 2 && (
              <button
                key={i}
                disabled={index < active + 1 ? false : true}
                className={classNames({
                  "pagination__list-option": true,
                  active: i === active,
                  unhover: index < active + 1 ? false : true,
                })}
                onClick={() => paginate(i)}
              >
                {i < active + 2 ? i : "..."}
              </button>
            )
        )}
        <li
          className={classNames({
            "--btn__controll --next__btn": true,
            disables: active === totalPages,
          })}
          onClick={() => handleSetUpCurrentPage()}
        >
          <span>→</span>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
