import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

CateGoryItem.propTypes = {
  title: PropTypes.string,
  handleClickCategoryList: PropTypes.func,
};

CateGoryItem.defaultProps = {
  title: "",
  handleClickCategoryList: null,
};

function CateGoryItem({ title, handleClickCategoryList, id, isActive }) {
  const handleClickCategory = () => {
    handleClickCategoryList(id, title);
  };
  return (
    <a
      className={classNames({
        category__detail: true,
        active: isActive,
      })}
      onClick={() => handleClickCategory()}
    >
      {title}
    </a>
  );
}

export default CateGoryItem;
