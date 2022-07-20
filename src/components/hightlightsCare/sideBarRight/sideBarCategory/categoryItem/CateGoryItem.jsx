import React from "react";
import PropTypes from "prop-types";

CateGoryItem.propTypes = {
  handleClickCategoryP: PropTypes.func,
  title: PropTypes.string,
  params: PropTypes.string,
  link: PropTypes.string,
};

CateGoryItem.defaultProps = {
  handleClickCategoryP: null,
  title: "",
  params: "",
  link: "",
};

function CateGoryItem({ handleClickCategoryP, title, params, link }) {
  const handleClickCategory = () => {
    console.log("click category...", params);
    handleClickCategoryP(link);
  };
  return (
    <a className="category__detail" onClick={() => handleClickCategory()}>
      {title}
    </a>
  );
}

export default CateGoryItem;
