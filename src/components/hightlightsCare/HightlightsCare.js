import React from "react";
import PropTypes from "prop-types";
import GridItem from "./gridItem/GridItem";
import PostCareItem from "./postCareItem/PostCareItem";

HightlightsCare.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function HightlightsCare(props) {
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
    <section className="section__hightlights-care">
      <div className="container">
        <div className="hightlights__care">
          <div className="wrapper__grid">
            <div className="wrapper__grid-left">
              <h2>Tin nổi bật</h2>
              <div className="hightlights__care-content">
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
              </div>
              <div className="paginations">
                <ul className="pagination__list">
                  <li className="pagination__list-option --prev__btn">
                    <span>←</span>
                  </li>
                  <li className="pagination__list-option active">1</li>
                  <li className="pagination__list-option">2</li>
                  <li className="pagination__list-option">3</li>
                  <li className="pagination__list-option --next__btn">
                    <span>→</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrapper__grid-right">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HightlightsCare;
