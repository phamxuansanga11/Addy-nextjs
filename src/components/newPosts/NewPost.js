import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

NewPost.propTypes = {
  dataPostPage: PropTypes.array,
};

NewPost.defaultProps = {
  dataPostPage: [],
};

function NewPost({ dataPostPage }) {
  const [threeItem, setThreeItem] = useState();
  const [oneItem, setOneItem] = useState();

  useEffect(() => {
    if (dataPostPage?.length > 0) {
      setOneItem(dataPostPage[0]);
      setThreeItem(dataPostPage.slice(1));
    }
  }, [dataPostPage]);

  //Link bai-viet-tim-kiem-chi-tiet

  return (
    <section className="section__newpost">
      <div className="container">
        <div className="new__post">
          <div className="new__post-title">
            <h2>Bài viết mới nhất</h2>
          </div>
          <div className="new__post-grid">
            <div className="grid__left --grid">
              <Link key={oneItem?.id} href={`/bai-viet/${oneItem?.id}`}>
                <a className="grid__item">
                  <img src={oneItem?.image} alt="" />
                  <div className="grid__item-text">
                    <h3 className="title">{oneItem?.title}</h3>
                    <div className="time">
                      <div className="time__icon">
                        <i>
                          <img src="../../../img/ic-mess.svg" alt="comment" />
                        </i>
                        <span>2</span>
                      </div>
                      <span className="dot">-</span>
                      <span> {oneItem?.date} </span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="grid__right --grid">
              {threeItem?.map((data) => (
                <Link key={data.id} href={`/bai-viet/${data?.id}`}>
                  <a className="grid__item">
                    <img src={data?.image} alt="" />
                    <div className="grid__item-text">
                      <h3 className="title">{data?.title}</h3>
                      <div className="time">
                        <div className="time__icon">
                          <i>
                            <img src="../../../img/ic-mess.svg" alt="comment" />
                          </i>
                          <span>2</span>
                        </div>
                        <span className="dot"> - </span>
                        <span> {data?.date} </span>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewPost;
