import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import NewPost from "../../components/newPosts/NewPost";
import HightlightsCare from "../../components/hightlightsCare/HightlightsCare";
import Footer from "../../components/footer/Footer";

PostPage.propTypes = {};

function PostPage(props) {
  return (
    <>
      <Header />
      <NewPost />
      <HightlightsCare />
      <Footer />
    </>
  );
}

export default PostPage;
