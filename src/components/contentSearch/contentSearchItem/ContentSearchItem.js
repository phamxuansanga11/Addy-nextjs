import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

ContentSearchItem.propTypes = {};

function ContentSearchItem({ data }) {
  return (
    <div className="result__content-grid__item">
      <Link href="/searchDetailPost">
        <a>
          <img src={`${data.image}`} alt="" />
          <p className="bg__orange">{data.name}</p>
        </a>
      </Link>
      <div className="decription">
        <div className="decription__title"></div>
        <div className="decription__time-view">
          <div className="time --flex-icon">
            <i>
              <img src="../../../img/ic-block.svg" alt="" />
            </i>
            <span>{data.date}</span>
          </div>
          <div className="view --flex-icon">
            <i>
              <img src="../../../img/ic-eye.svg" alt="" />
            </i>
            <span>{`${data.view} lượt xem`}</span>
          </div>
        </div>
        <div className="decription__params">
          <a href="">
            <h3>{data.title}</h3>
          </a>
          <p className="params">{data.params}</p>
        </div>
      </div>
    </div>
  );
}

export default ContentSearchItem;
