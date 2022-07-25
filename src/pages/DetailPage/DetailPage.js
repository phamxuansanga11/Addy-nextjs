import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SiderBarRight from "../../components/hightlightsCare/sideBarRight/SideBarRight";
import categoryApi from "../../../pages/api/categoryApi";
import Loading from "../../components/loading/Loading";

import { useRouter } from "next/router";

function SearchDetailPost(props) {
  const router = useRouter();
  const { id } = router.query;

  const urlParams = router.pathname.slice(1, 9);

  //State data từ call API
  const [postDetail, setPostDetail] = useState();

  //State Loading
  const [loading, setLoading] = useState(false);

  //call API
  useEffect(() => {
    const fetchPostDetail = async (category, id) => {
      setLoading(true);
      const resPostDetail = await categoryApi.get(category, id);
      setPostDetail(resPostDetail?.data);
      console.log(resPostDetail?.data);
      setLoading(false);
    };
    if (id) {
      fetchPostDetail(urlParams, id);
    }
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Header />
      <section className="section__search-detail-post">
        <div className="container">
          {/* <h1>{id}</h1> */}
          <div className="btn__backtodocument">
            <Link href="/bai-viet">
              <a className="btn__back">{`< Trở về bài viết`}</a>
            </Link>
            {/* <span> {`>`} </span> */}
            {/* <Link href="/bai-viet">
              <a className="btn__back">Kết quả tìm kiếm</a>
            </Link> */}
          </div>
          <div className="search__detail-post__grid">
            <div className="search__detail-post__grid-left">
              <div className="item__detail">
                <h1 className="title">{postDetail?.title}</h1>
                <div className="date-and-view">
                  <div className="date --icon">
                    <i>
                      <img src="../../../img/ic-block.svg" alt="" />
                    </i>
                    <span>{postDetail?.date}</span>
                  </div>
                  <div className="view --icon">
                    <i>
                      <img src="../../../img/ic-eye.svg" alt="" />
                    </i>
                    <span>{postDetail?.view} lượt xem</span>
                  </div>
                </div>
                <div className="params__content">
                  <p>{postDetail?.text}</p>
                </div>
                <div className="img__content">
                  <img src={postDetail?.image} alt="image detail" />
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
