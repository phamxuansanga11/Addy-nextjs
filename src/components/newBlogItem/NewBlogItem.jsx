import React from "react";
import PropTypes from "prop-types";

NewBlogItem.propTypes = {};

function NewBlogItem(props) {
  return (
    <div className="new__blog-item">
      <a href="">
        <img src="../../../img/new-post-1.jpg" alt="" />
        <p>Điện thoại Realme Q mới được đồn đoán ra mắt vào ngày 13/10</p>
      </a>
    </div>
  );
}

export default NewBlogItem;
