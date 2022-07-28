import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CateGoryItem from "./categoryItem/CateGoryItem";

SideBarCategory.propTypes = {
  category: PropTypes.array,
  handleClickCategoryList: PropTypes.func,
};

SideBarCategory.defaultProps = {
  category: [],
  handleClickCategoryList: null,
};

function SideBarCategory({ category, handleClickCategoryList }) {
  const [idCategory, setIdCategory] = useState("62e0dd8fcce02227343cf3eb");

  return (
    <>
      <h2 className="title">Danh mục</h2>
      <div className="category">
        {category?.map((item) => (
          <CateGoryItem
            key={item._id}
            title={item.name}
            handleClickCategoryList={(id, title) => {
              handleClickCategoryList(id, title);
              setIdCategory(id);
            }}
            id={item._id}
            isActive={idCategory === item?._id ? true : false}
          />
        ))}
      </div>
    </>
  );
}

export default SideBarCategory;
