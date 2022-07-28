import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

GridItem.propTypes = {
  data: PropTypes.object,
  momentFunc: PropTypes.func,
};

GridItem.defaultProps = {
  data: {},
  momentFunc: null,
};

function GridItem({ data, momentFunc }) {
  return (
    <div className="item__posts">
      <Link href={`/bai-viet/${data._id}`}>
        <a>
          <img src={data.urlImage} alt="anh bai viet" />
        </a>
      </Link>
      <div className="item__text">
        <h4>{data.title}</h4>
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
            <span className="day">{momentFunc(data?.created_at)}</span>
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
