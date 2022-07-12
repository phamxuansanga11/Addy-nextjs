import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

NewPost.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function NewPost(props) {
  return (
    <section className="section__newpost">
      <div className="container">
        <div className="new__post">
          <div className="new__post-title">
            <h2>Bài viết mới nhất</h2>
          </div>
          <div className="new__post-grid">
            <div className="grid__left --grid">
              <Link href="/postsDetail">
                <a className="grid__item">
                  <img src="../../../img/new-1.jpg" alt="" />
                  <div className="grid__item-text">
                    <h3 className="title">
                      4 Điểm mạnh trên Vsmart Aris mà bạn cần biết trước khi
                      quyết định mua
                    </h3>
                    <div className="time">
                      <div className="time__icon">
                        <i>
                          <img src="../../../img/ic-mess.svg" alt="comment" />
                        </i>
                        <span>2</span>
                      </div>
                      <span className="dot">-</span>
                      <span> 17 giờ trước </span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="grid__right --grid">
              <Link href="/postsDetail">
                <a className="grid__item">
                  <img src="../../../img/new-2.jpg" alt="" />
                  <div className="grid__item-text">
                    <h3 className="title">
                      4 Điểm mạnh trên Vsmart Aris mà bạn cần biết trước khi
                      quyết định mua
                    </h3>
                    <div className="time">
                      <div className="time__icon">
                        <i>
                          <img src="../../../img/ic-mess.svg" alt="comment" />
                        </i>
                        <span>2</span>
                      </div>
                      <span className="dot"> - </span>
                      <span> 17 giờ trước </span>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/postsDetail">
                <a className="grid__item">
                  <img src="../../../img/new-3.jpg" alt="" />
                  <div className="grid__item-text">
                    <h3 className="title">
                      4 Điểm mạnh trên Vsmart Aris mà bạn cần biết trước khi
                      quyết định mua
                    </h3>
                    <div className="time">
                      <div className="time__icon">
                        <i>
                          <img src="../../../img/ic-mess.svg" alt="comment" />
                        </i>
                        <span>2</span>
                      </div>
                      <span className="dot">-</span>
                      <span> 17 giờ trước </span>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/postsDetail">
                <a className="grid__item">
                  <img src="../../../img/new-4.jpg" alt="" />
                  <div className="grid__item-text">
                    <h3 className="title">
                      4 Điểm mạnh trên Vsmart Aris mà bạn cần biết trước khi
                      quyết định mua
                    </h3>
                    <div className="time">
                      <div className="time__icon">
                        <i>
                          <img src="../../../img/ic-mess.svg" alt="comment" />
                        </i>
                        <span>2</span>
                      </div>
                      <span className="dot">-</span>
                      <span> 17 giờ trước </span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewPost;
