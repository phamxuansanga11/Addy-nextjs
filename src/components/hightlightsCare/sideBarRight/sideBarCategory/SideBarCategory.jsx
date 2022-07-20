import React from "react";
import PropTypes from "prop-types";
import CateGoryItem from "./categoryItem/CateGoryItem";

SideBarCategory.propTypes = {
  params: PropTypes.string,
  handleClickCategoryP: PropTypes.func,
};

SideBarCategory.defaultProps = {
  params: "",
  handleClickCategoryP: null,
};

function SideBarCategory({ params, handleClickCategoryP }) {
  return (
    <>
      <h2 className="title">Danh mục</h2>
      <div className="category">
        <CateGoryItem
          title="Kiến thức crm"
          handleClickCategoryP={handleClickCategoryP}
          params={params}
          link="?kien-thuc"
        />
        <CateGoryItem
          title="Lợi ích crm"
          handleClickCategoryP={handleClickCategoryP}
          params={params}
          link="?loi-ich"
        />
        <CateGoryItem
          title="Các ứng dụng của crm"
          handleClickCategoryP={handleClickCategoryP}
          params={params}
          link="?ung-dung"
        />
        <CateGoryItem
          title="Các tính năng của crm"
          handleClickCategoryP={handleClickCategoryP}
          params={params}
          link="?tinh-nang"
        />
      </div>
    </>
  );
}

export default SideBarCategory;
