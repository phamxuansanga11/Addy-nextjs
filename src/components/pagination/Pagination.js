import React, { useEffect, useLayoutEffect, useRef } from "react";
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
  postsPerPage,
  totalPosts,
  paginate,
  active,
  handleSetDownCurrentPage,
  handleSetUpCurrentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const tagLiRef = useRef();
  console.log(tagLiRef.current);

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
        {pageNumbers.map((i) => (
          <li
            key={i}
            className={classNames({
              "pagination__list-option": true,
              active: i === active,
            })}
            onClick={() => paginate(i)}
          >
            {i}
          </li>
        ))}
        <li
          className={classNames({
            "--btn__controll --next__btn": true,
            disables: active === Math.ceil(totalPosts / postsPerPage),
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
