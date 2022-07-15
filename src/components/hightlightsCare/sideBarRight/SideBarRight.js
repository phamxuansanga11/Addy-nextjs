import React from "react";
import PropTypes from "prop-types";
import PostCareItem from "../postCareItem/PostCareItem";

SideBarRight.propTypes = {};

function SideBarRight(props) {
  const Data = [
    {
      image: "../../../img/new-6.jpg",
      text: "Điện thoại Realme Q mới được đồn đoán ra mắt vào ngày 13/10",
    },
    {
      image: "../../../img/new-7.jpg",
      text: "Điện thoại Realme Q mới được đồn đoán ra mắt vào ngày 13/10 Điện thoại Realme Q mới được đồn đoán ra mắt vào ngày 13/10",
    },
    {
      image: "../../../img/new-8.jpg",
      text: "Điện thoại Realme Q mới được đồn đoán ra mắt vào ngày 13/10 Điện thoại Realme Q mới được đồn đoán ra mắt vào ngày 13/10",
    },
    {
      image: "../../../img/new-9.jpg",
      text: "Điện thoại Realme Q mới được đồn đoán ra mắt vào ngày 13/10 Điện thoại Realme Q mới được đồn đoán ra mắt vào ngày 13/10",
    },
    {
      image: "../../../img/new-10.jpg",
      text: "Điện thoại Realme Q mới được đồn đoán ra mắt vào ngày 13/10",
    },
  ];
  return (
    <>
      <h2 className="title">Bạn có thể quan tâm</h2>
      <PostCareItem data={Data} />
      <h2 className="title">Danh mục</h2>
      <div className="category">
        <a href="" className="category__detail">
          Kiến thức crm
        </a>
        <a href="" className="category__detail">
          Lợi ích crm
        </a>
        <a href="" className="category__detail">
          Các ứng dụng của crm
        </a>
        <a href="" className="category__detail">
          Các tính năng của crm
        </a>
      </div>
    </>
  );
}

export default SideBarRight;
