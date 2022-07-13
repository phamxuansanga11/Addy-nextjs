import React from "react";
import PropTypes from "prop-types";

TabContent.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function TabContent(props) {
  return (
    <section className="section__tabcontent">
      <div className="container">
        <div className="backtopageprev">
          <a href="">Tài liệu</a>
          <span>{`>`}</span>
          <a href="">Quản trị Zalo OA</a>
        </div>
        <div className="wrapper__grid">
          <div className="wrapper__grid-left">
            <h2>Quản lý Zalo OA</h2>
            <ul className="list">
              <li className="option">
                <i>
                  <img src="../../../img/ic-multi-arr.svg" alt="" />
                </i>
                <span>Quản lý tài khoản</span>
              </li>
              <li className="option">
                <i>
                  <img src="../../../img/ic-multi-arr.svg" alt="" />
                </i>
                <span>Quản lý tài khoản</span>
              </li>
              <li className="option">
                <i>
                  <img src="../../../img/ic-multi-arr.svg" alt="" />
                </i>
                <span>Quản lý tài khoản</span>
              </li>
              <li className="option">
                <i>
                  <img src="../../../img/ic-multi-arr.svg" alt="" />
                </i>
                <span>Quản lý tài khoản</span>
              </li>
            </ul>
          </div>
          <div className="wrapper__grid-right">
            <h3>Tạo bài viết mới</h3>
            <p className="params">
              ZALO là nền tảng mạng xã hội có nhiều người dùng nhất Việt Nam, do
              đó ADDY CRM mang đến tính năng quản trị ZALO OA giúp doanh nghiệp
              tiếp cận được với lượng lớn khách hàng tiềm năng này. Với ADDY,
              doanh nghiệp dễ dàng quản trị đồng thời nhiều tài khoản ZALO và
              khai thác tối đa các dịch vụ mà ZALO cung cấp. Ngoài ra, ADDY cũng
              hỗ trợ quảng cáo theo từng khu vực của tệp khách hàng tiềm năng mà
              doanh nghiệp mong muốn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabContent;
