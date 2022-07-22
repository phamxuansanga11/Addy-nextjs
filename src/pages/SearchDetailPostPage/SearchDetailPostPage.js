import React, { useEffect, useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SiderBarRight from "../../components/hightlightsCare/sideBarRight/SideBarRight";

SearchDetailPost.propTypes = {};

function SearchDetailPost(props) {
  return (
    <>
      <Header />
      <section className="section__search-detail-post">
        <div className="container">
          <div className="btn__backtodocument">
            <Link href="/bai-viet">
              <a className="btn__back">Tài liệu</a>
            </Link>
            <span> {`>`} </span>
            <Link href="/bai-viet">
              <a className="btn__back">Kết quả tìm kiếm</a>
            </Link>
          </div>
          <div className="search__detail-post__grid">
            <div className="search__detail-post__grid-left">
              <div className="item__detail">
                <h1 className="title">
                  7 phương pháp nâng cao hiệu quả công việc mà bạn cần biết
                </h1>
                <div className="date-and-view">
                  <div className="date --icon">
                    <i>
                      <img src="../../../img/ic-block.svg" alt="" />
                    </i>
                    <span>28/09/2021</span>
                  </div>
                  <div className="view --icon">
                    <i>
                      <img src="../../../img/ic-eye.svg" alt="" />
                    </i>
                    <span>200 lượt xem</span>
                  </div>
                </div>
                <div className="params__content">
                  <p>
                    Đánh giá hiệu quả công việc là một trong những nhiệm vụ quan
                    trọng của nhà quản lý nhằm mục đích kiểm tra hiệu suất làm
                    việc của nhân viên để đảm bảo có một kết quả chung tốt nhất.
                    Vậy thì hiệu quả công việc là gì? Phương pháp nào doanh
                    nghiệp nên áp dụng để đạt hiệu quả tốt nhất? Mọi câu trả lời
                    sẽ được 1Office hé lộ trong bài viết này.
                  </p>
                </div>
                <div className="img__content">
                  <img
                    src="../../../img/detail-blog-1.jpg"
                    alt="image detail"
                  />
                  <p className="caption__img">
                    Các phương pháp nâng cao hiệu quả công việc mà bạn cần biết
                  </p>
                </div>
                <div className="text__content">
                  <div className="text__content-item">
                    <div className="text__content-item__title">
                      <span>I.</span>
                      <p>Hiệu quả công việc là gì?</p>
                    </div>
                    <div className="text__content-item__params">
                      <p>
                        Hiệu quả công việc là mức độ hoàn thành công việc đã
                        được giao phó, phân công của nhân viên và phụ thuộc vào
                        nhiều yếu tố khác nhau từ hoàn cảnh, thời gian tới những
                        yếu tố riêng tác động xung quanh người thực hiện công
                        việc. Mỗi doanh nghiệp lại có một chỉ tiêu hoàn thành
                        công việc riêng áp dụng cho nhân viên. Từ đó, doanh
                        nghiệp có thể đưa ra những phương án đào tạo, phát triển
                        kỹ năng tốt nhất.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper__grid-right">
              <SiderBarRight />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SearchDetailPost;
