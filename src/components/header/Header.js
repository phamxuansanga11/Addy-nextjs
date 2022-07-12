import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import classNames from "classnames";
import MenuMobile from "../menuMobile/MenuMobile";

Header.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function Header({ executeScroll, contact }) {
  const myRef = useRef(null);
  const iconRef = useRef(null);

  const handleClickMenu = () => {
    console.log("click menu", iconRef.current);
    iconRef.current.classList.add("active");
  };

  const handleCloseMenu = () => {
    console.log("run func close menu...");
    iconRef.current.classList.remove("active");
  };

  const router = useRouter();
  const location = router.pathname;

  const handleClick = () => {
    console.log("re-render");
    router.push("/contact");
  };

  return (
    <>
      <header ref={myRef} className="header">
        <div className="container --container__header">
          <div className="header__nav">
            <div className="header__nav-logo">
              <a href="">
                <img src="../../../img/logo.png" alt="logo" />
              </a>
            </div>
            <ul className="header__nav-menu">
              <li
                className={classNames({
                  "nav__menu-option": true,
                  active: location === "/",
                })}
              >
                <Link href="/">
                  <a className="active">Trang chủ</a>
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
                  active: location === "/posts" || location === "/postsDetail",
                })}
              >
                <Link href="/posts">
                  <a>Bài viết</a>
                </Link>
              </li>
              <li
                className={classNames({
                  "nav__menu-option": true,
                  active:
                    location === "/document" ||
                    location === "/searchDetail" ||
                    location === "/searchDetailPost",
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
                <a href="#" onClick={handleClick}>
                  Liên hệ
                </a>
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
            <div className="header__nav-icon__mobile" onClick={handleClickMenu}>
              <i className="fa fa-bars"></i>
            </div>
            <MenuMobile iconRef={iconRef} handleCloseMenu={handleCloseMenu} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
