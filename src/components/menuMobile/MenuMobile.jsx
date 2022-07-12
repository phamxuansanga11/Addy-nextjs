import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

MenuMobile.propTypes = {};

function MenuMobile({ iconRef, handleCloseMenu }) {
  const router = useRouter();
  const location = router.pathname;

  const handleCloseMenuChild = () => {
    console.log("close menu..");
    handleCloseMenu();
  };

  return (
    <section className="menu__mobie" ref={iconRef}>
      <div className="bg__black"></div>
      <div className="menu__mobile-nav">
        <div className="menu__mobile-nav-logo">
          <a href="" className="logo">
            <img src="../../../img/logo.png" alt="logo" />
          </a>
          <div
            className="btn__close-menu-mobile"
            onClick={handleCloseMenuChild}
          >
            <i className="fa fa-times"></i>
          </div>
        </div>
        <ul className="menu__mobile-nav-menu">
          <li
            className={classNames({
              active: location === "/",
            })}
          >
            <Link href="/">
              <a>Trang chủ</a>
            </Link>
          </li>
          <li
            className={classNames({
              "nav__menu-option": true,
              active: location === "/features",
            })}
          >
            <Link href="/features">
              <a>Tính năng</a>
            </Link>
          </li>
          <li
            className={classNames({
              "nav__menu-option": true,
              active: location === "/posts",
            })}
          >
            <Link href="/posts">
              <a>Bài viết</a>
            </Link>
          </li>
          <li
            className={classNames({
              "nav__menu-option": true,
              active: location === "/document",
            })}
          >
            <Link href="/document">
              <a>Tài liệu</a>
            </Link>
          </li>
          <li
            className={classNames({
              "nav__menu-option": true,
              active: location === "/contact",
            })}
          >
            <Link href="/contact">
              <a>Liên hệ</a>
            </Link>
          </li>
        </ul>
        <div className="menu__mobile-nav-btn">
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
      </div>
    </section>
  );
}

export default MenuMobile;
