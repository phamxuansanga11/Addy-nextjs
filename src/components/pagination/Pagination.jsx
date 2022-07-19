import React, { useEffect, useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

Pagination.propTypes = {};

function Pagination({ postsPerPage, totalPosts, paginate, active }) {
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
          className=" --btn__controll --prev__btn"
          onClick={() => console.log("prev...")}
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
          className=" --btn__controll --next__btn"
          onClick={() => console.log("next...")}
        >
          <span>→</span>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
