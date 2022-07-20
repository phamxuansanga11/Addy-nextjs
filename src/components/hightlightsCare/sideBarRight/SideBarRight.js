import React from "react";
import PropTypes from "prop-types";
import PostCareItem from "../postCareItem/PostCareItem";
import SideBarCategory from "./sideBarCategory/SideBarCategory";

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
      <SideBarCategory />
      <h2 className="title">Bạn có thể quan tâm</h2>
      <PostCareItem data={Data} />
    </>
  );
}

export default SideBarRight;
