import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import NewPost from "../../components/newPosts/NewPost";
import HightlightsCare from "../../components/hightlightsCare/HightlightsCare";
import Footer from "../../components/footer/Footer";
import Search from "../../components/search/Search";
import categoryApi from "../../../pages/api/categoryApi";

PostPage.propTypes = {};

function PostPage(props) {
  const [dataPostPage, setDataPostPage] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await categoryApi.getAll();
      setLoading(false);
      setDataPostPage(res?.data);
    };
    fetchPosts();
  }, []);

  // console.log(dataPostPage ? dataPostPage : "k co data");

  //log so lan` re-render
  const rederRef = useRef(1);
  console.log("re-render....", rederRef.current++);

  return (
    <>
      {loading && (
        <div className="overlay__loading">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <Header />
      <Search />
      <NewPost dataPostPage={dataPostPage} />
      <HightlightsCare dataPostPage={dataPostPage} />
      <Footer />
    </>
  );
}

export default PostPage;
