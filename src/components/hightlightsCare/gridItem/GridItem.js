import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

GridItem.propTypes = {
  data: PropTypes.object,
};

GridItem.defaultProps = {
  data: {},
};

function GridItem({ data }) {
  return (
    <div className="item__posts">
      <Link href="/bai-viet-tim-kiem-chi-tiet">
        <a>
          <img src={data.image} alt="anh bai viet" />
        </a>
      </Link>
      <div className="item__text">
        <h4>{data.title}</h4>
        <p>{data.body}</p>
        <div className="hagtag --hagtag">
          <i>
            <img src="../../../img/ic-tag.svg" alt="" />
          </i>
          <span>hashtag</span>
        </div>
        <div className="day__time --hagtag">
          <div className="date">
            <i>
              <img src="../../../img/ic-block.svg" alt="" />
            </i>
            <span className="day">{data.date}</span>
          </div>
          <div className="time --hagtag">
            <i>
              <img src="../../../img/ic-eye.svg" alt="" />
            </i>
            <span className="day">{`${data.view} lượt xem`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridItem;
