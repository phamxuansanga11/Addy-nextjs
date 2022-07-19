import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {};

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginations">
      <ul className="pagination__list">
        <li
          className="pagination__list-option --prev__btn"
          onClick={() => console.log("prev...")}
        >
          <span>←</span>
        </li>
        {pageNumbers.map((i) => (
          <li
            key={i}
            className="pagination__list-option"
            onClick={() => paginate(i)}
          >
            {i}
          </li>
        ))}
        <li
          className="pagination__list-option --next__btn"
          onClick={() => console.log("next...")}
        >
          <span>→</span>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
