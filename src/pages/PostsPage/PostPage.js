import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import NewPost from "../../components/newPosts/NewPost";
import HightlightsCare from "../../components/hightlightsCare/HightlightsCare";
import Footer from "../../components/footer/Footer";
import Search from "../../components/search/Search";

PostPage.propTypes = {};

function PostPage(props) {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <Header />
      <Search />
      <NewPost />
      <HightlightsCare />
      <Footer />
    </>
  );
}

export default PostPage;
