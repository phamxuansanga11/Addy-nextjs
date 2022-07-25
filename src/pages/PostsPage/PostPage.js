import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/header/Header";
import NewPost from "../../components/newPosts/NewPost";
import HightlightsCare from "../../components/hightlightsCare/HightlightsCare";
import Footer from "../../components/footer/Footer";
import Search from "../../components/search/Search";
import categoryApi from "../../../pages/api/categoryApi";
import Loading from "../../components/loading/Loading";

function PostPage(props) {
  const [dataPostPage, setDataPostPage] = useState(null);
  const [fourItem, setFourItem] = useState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await categoryApi.getAll();
      setFourItem(res?.data?.slice(0, 4));
      setDataPostPage(res?.data.slice(4));
      setLoading(false);
    };
    fetchPosts();
  }, []);

  //log so lan` re-render
  const rederRef = useRef(1);
  console.log("re-render....", rederRef.current++);

  return (
    <>
      {loading && <Loading />}
      <Header />
      <Search />
      <NewPost dataPostPage={fourItem} />
      <HightlightsCare dataPostPage={dataPostPage} />
      <Footer />
    </>
  );
}

export default PostPage;
