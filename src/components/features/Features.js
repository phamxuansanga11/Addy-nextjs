import React from "react";
import PropTypes from "prop-types";

Features.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function Features(props) {
  return (
    <section className="section__features">
      <div className="container">
        <div className="features">
          <div className="features__title">
            <h2>Tính năng ưu việt của phần mềm</h2>
          </div>
          <div className="features__content">
            <div className="features__content-item">
              <i>
                <img src="../../../img/ic-feature-1.png" alt="" />
              </i>
              <p>Quản trị Zalo OA</p>
            </div>
            <div className="features__content-item">
              <i>
                <img src="../../../img/ic-feature-2.png" alt="" />
              </i>
              <p>Quản lý khách hàng</p>
            </div>
            <div className="features__content-item">
              <i>
                <img src="../../../img/ic-feature-3.png" alt="" />
              </i>
              <p>Chăm sóc khách hàng</p>
            </div>
            <div className="features__content-item">
              <i>
                <img src="../../../img/ic-feature-4.png" alt="" />
              </i>
              <p>Hỗ trợ bán hàng</p>
            </div>
          </div>
          <div className="features__content">
            <div className="features__content-item">
              <i>
                <img src="../../../img/ic-feature-5.png" alt="" />
              </i>
              <p>Quản lí Marketing</p>
            </div>
            <div className="features__content-item">
              <i>
                <img src="../../../img/ic-feature-6.png" alt="" />
              </i>
              <p>Báo cáo - Thống kê</p>
            </div>
            <div className="features__content-item">
              <i>
                <img src="../../../img/ic-feature-7.png" alt="" />
              </i>
              <p>Tích hợp đa kênh</p>
            </div>
            <div className="features__content-item">
              <i>
                <img src="../../../img/ic-feature-8.png" alt="" />
              </i>
              <p>Quản lý công việc</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
