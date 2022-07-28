import React from "react";
import PropTypes from "prop-types";

CateGoryItem.propTypes = {
  title: PropTypes.string,
  handleClickCategoryList: PropTypes.func,
};

CateGoryItem.defaultProps = {
  title: "",
  handleClickCategoryList: null,
};

function CateGoryItem({ title, handleClickCategoryList, id }) {
  const handleClickCategory = () => {
    handleClickCategoryList(id);
  };
  return (
    <a className="category__detail" onClick={() => handleClickCategory()}>
      {title}
    </a>
  );
}

export default CateGoryItem;
