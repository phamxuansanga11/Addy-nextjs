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

function Header({ executeScroll, contact, number }) {
  const myRef = useRef(null);
  const iconRef = useRef(null);

  const handleClickMenu = () => {
    console.log("click menu", iconRef.current);
    iconRef.current.classList.add("active");
  };

  const handleCloseMenu = () => {
    console.log("run func close menu...");
    iconRef.current.classList.remove("active");
    if (number) {
      iconRef.current.classList.remove("active");
    } else {
      return;
    }
  };

  const router = useRouter();
  const location = router.pathname;

  const handleClick = async () => {
    console.log("re-render...");
    router.push("/contact");
  };

  return (
    <>
      <header ref={myRef} className="header">
        <div className="container --container__header">
          <div className="header__nav">
            <div className="header__nav-logo">
              <Link href="/">
                <a>
                  <img src="../../../img/logo.png" alt="logo" />
                </a>
              </Link>
            </div>
            <ul className="header__nav-menu">
              <li className="nav__menu-option">
                <Link href="/">
                  <a
                    className={classNames({
                      "": true,
                      active: location === "/",
                    })}
                  >
                    Trang chủ
                  </a>
                </Link>
              </li>
              <li className="nav__menu-option">
                <Link href="/features">
                  <a
                    className={classNames({
                      "": true,
                      active: location === "/features",
                    })}
                  >
                    Tính năng
                  </a>
                </Link>
              </li>
              <li className="nav__menu-option">
                <Link href="/posts">
                  <a
                    className={classNames({
                      "": true,
                      active:
                        location === "/posts" || location === "/postsDetail",
                    })}
                  >
                    Bài viết
                  </a>
                </Link>
              </li>
              <li className="nav__menu-option">
                <Link href="/document">
                  <a
                    className={classNames({
                      "": true,
                      active:
                        location === "/document" ||
                        location === "/searchDetail" ||
                        location === "/searchDetailPost",
                    })}
                  >
                    Tài liệu
                  </a>
                </Link>
              </li>
              <li className="nav__menu-option">
                <Link href="/contact">
                  <a
                    className={classNames({
                      "": true,
                      active: location === "/contact",
                    })}
                    onClick={handleClick}
                  >
                    Liên hệ
                  </a>
                </Link>
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
