import React from "react";
import PropTypes from "prop-types";

PostCareItem.propTypes = {};

function PostCareItem({ data }) {
  return (
    <>
      {data.map((item, idx) => (
        <div key={idx} className="post__care-item">
          <a href="">
            <img src={item.image} alt="" />
            <p>{item.text}</p>
          </a>
        </div>
      ))}
    </>
  );
}

export default PostCareItem;
