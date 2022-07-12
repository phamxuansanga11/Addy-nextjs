import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import NewPost from "../../components/newPosts/NewPost";
import HightlightsCare from "../../components/hightlightsCare/HightlightsCare";
import Footer from "../../components/footer/Footer";
import Search from "../../components/search/Search";

PostPage.propTypes = {};

function PostPage(props) {
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
