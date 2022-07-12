import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

GridItem.propTypes = {};

function GridItem(props) {
  return (
    <div className="item__posts">
      <Link href="/postsDetail">
        <a>
          <img src="../../../img/new-5.jpg" alt="" />
        </a>
      </Link>
      <div className="item__text">
        <h4>Webinar "Triển khai CRM - Để không bao giờ thất bại!</h4>
        <p>
          Là một thương hiệu lâu đời đến từ Mỹ, Bulova có rất nhiều bộ sưu tập
          mang những phong cách khác nhau nhằm phục vụ nhu cầu đa dạng của mọi
          đối tượng khách hàng.
        </p>
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
            <span className="day">28/09/2021</span>
          </div>
          <div className="time --hagtag">
            <i>
              <img src="../../../img/ic-eye.svg" alt="" />
            </i>
            <span className="day">200 lượt xem</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridItem;
