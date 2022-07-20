import React from "react";
import PropTypes from "prop-types";
import CateGoryItem from "./categoryItem/CateGoryItem";

SideBarCategory.propTypes = {};

function SideBarCategory(props) {
  const handleClickCategory = () => {
    console.log("click category...");
  };

  return (
    <>
      <h2 className="title">Danh mục</h2>
      <div className="category">
        <CateGoryItem
          title="Kiến thức crm"
          handleClickCategory={handleClickCategory}
        />
        <CateGoryItem
          title="Lợi ích crm"
          handleClickCategory={handleClickCategory}
        />
        <CateGoryItem
          title="Các ứng dụng của crm"
          handleClickCategory={handleClickCategory}
        />
        <CateGoryItem
          title="Các tính năng của crm"
          handleClickCategory={handleClickCategory}
        />
      </div>
    </>
  );
}

export default SideBarCategory;
