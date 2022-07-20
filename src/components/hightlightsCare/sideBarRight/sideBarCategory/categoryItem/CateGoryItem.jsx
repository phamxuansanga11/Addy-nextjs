import React from "react";
import PropTypes from "prop-types";

CateGoryItem.propTypes = {
  handleClickCategory: PropTypes.func,
  title: PropTypes.string,
};

CateGoryItem.defaultProps = {
  handleClickCategory: null,
  title: null,
};

function CateGoryItem({ handleClickCategory, title }) {
  return (
    <a className="category__detail" onClick={() => handleClickCategory()}>
      {title}
    </a>
  );
}

export default CateGoryItem;
