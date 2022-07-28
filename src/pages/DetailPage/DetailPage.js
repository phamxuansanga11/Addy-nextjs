import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SiderBarRight from "../../components/hightlightsCare/sideBarRight/SideBarRight";
import postDetailApi from "../../../pages/api/postDetailApi";
import Loading from "../../components/loading/Loading";
import renderHTML from "react-render-html";

import { useRouter } from "next/router";

function SearchDetailPost(props) {
  const router = useRouter();
  const { id } = router.query;

  // console.log("url ID", id);

  // const urlParams = router.pathname.slice(1, 9);
  // const urlParams = router.asPath.slice(1, 9);
  // console.log("url ne`:", urlParams);
  // console.log("router", router);

  //State data từ call API
  const [postDetail, setPostDetail] = useState();

  //State Loading
  const [loading, setLoading] = useState(false);

  //call API
  useEffect(() => {
    const fetchPostDetail = async (id) => {
      setLoading(true);
      const resPostDetail = await postDetailApi.get(id);
      setPostDetail(resPostDetail?.data);
      console.log(resPostDetail?.data);
      // console.log(resPostDetail?.data);
      setLoading(false);
    };
    if (id) {
      fetchPostDetail(id);
    }
  }, [id]);

  // console.log("post detail ne`", postDetail);

  return (
    <>
      {loading && <Loading />}
      <Header />
      <section className="section__search-detail-post">
        <div className="container">
          <div className="btn__backtodocument">
            <Link href="/bai-viet">
              <a className="btn__back">{`< Trở về bài viết`}</a>
            </Link>
          </div>
          <div className="search__detail-post__grid">
            <div className="search__detail-post__grid-left">
              <h1>{postDetail?.title}</h1>
              {postDetail ? renderHTML(postDetail?.ckeditor_data) : ""}
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
