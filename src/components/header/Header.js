import React from "react";
import PropTypes from "prop-types";
Header.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function Header(props) {
  return (
    <>
      <header className="header">
        <div className="container --container__header">
          <div className="header__nav">
            <div className="header__nav-logo">
              <a href="">
                <img src="../../../img/logo.png" alt="logo" />
              </a>
            </div>
            <ul className="header__nav-menu">
              <li className="nav__menu-option">
                <a href="/" className="active">
                  Trang chủ
                </a>
              </li>
              <li className="nav__menu-option">
                <a href="/features">Tính năng</a>
              </li>
              <li className="nav__menu-option">
                <a href="/posts">Bài viết</a>
              </li>
              <li className="nav__menu-option">
                <a href="/document">Tài liệu</a>
              </li>
              <li className="nav__menu-option">
                <a href="">Liên hệ</a>
              </li>
            </ul>
            <div className="header__nav-button">
              <div className="languages">
                <div className="languages__flag-icon">
                  <img src="../../../img/flag-vn.svg" alt="" />
                </div>
                <span>VN</span>
              </div>
              <div className="btn__use">
                <a href="">Sử dụng miễn phí</a>
              </div>
            </div>
            <div className="header__nav-icon__mobile">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
