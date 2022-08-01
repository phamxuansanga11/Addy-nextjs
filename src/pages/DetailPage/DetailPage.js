import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SiderBarRight from "../../components/hightlightsCare/sideBarRight/SideBarRight";
import postDetailApi from "../../../pages/api/postDetailApi";
import Loading from "../../components/loading/Loading";
import renderHTML from "react-render-html";

import { useRouter } from "next/router";
import axios from "axios";

function SearchDetailPost(props) {
  const router = useRouter();
  const { slugString } = router.query;

  // console.log(slugString);

  //State data từ call API
  const [postDetail, setPostDetail] = useState();

  //State Loading
  const [loading, setLoading] = useState(false);

  const fetchPostDetail = async (slugString) => {
    setLoading(true);
    const resPostDetail = await postDetailApi.get(slugString);
    // const resPostDetail = await axios.get(
    //   "http://192.168.100.4:4001/post/detail/bai-viet-1-of-danh-muc-1-1659086822913"
    // );
    setPostDetail(resPostDetail.data);
    // console.log("data trong useEffect", resPostDetail);
    setLoading(false);
  };

  //call API
  useEffect(() => {
    if (slugString) {
      fetchPostDetail(slugString);
    }
  }, [slugString]);

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
              {postDetail?.ckeditor_data
                ? renderHTML(postDetail?.ckeditor_data)
                : ""}
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
