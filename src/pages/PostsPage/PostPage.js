import React, { useState, useEffect, useCallback } from "react";
import Header from "../../components/header/Header";
import NewPost from "../../components/newPosts/NewPost";
import Footer from "../../components/footer/Footer";
import Search from "../../components/search/Search";
import postsApi from "../../../pages/api/postsApi";
import categoryApi from "../../../pages/api/categoryApi";
import Loading from "../../components/loading/Loading";
import Pagination from "../../components/pagination/Pagination";
import SideBarRight from "../../components/hightlightsCare/sideBarRight/SideBarRight";
import GridItem from "../../components/hightlightsCare/gridItem/GridItem";

import moment from "moment";
import "moment-timezone";

function PostPage(props) {
  const [newPosts, setNewPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageNewPosts, setPageNewPosts] = useState(1);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [totalPages, setTotalPage] = useState();

  const [active, setActive] = useState(1);

  const [remakeablePost, setRemakeablePost] = useState([]);

  //List category
  const [category, setCategory] = useState();

  const [nameCategory, setNameCategory] = useState();

  const [idCategoryList, setIdCategoryList] = useState();

  //func hightlight
  const handleClickCategoryList = (id, title) => {
    if (id) {
      setIdCategoryList(id);
      setPage(1);
      setActive(1);
      setNameCategory(title);
    }
  };

  const handleSetDownCurrentPage = useCallback(() => {
    console.log("page - 1");
    if (active - 1 > 1) {
      setActive(active - 1);
      setPage((prev) => prev - 1);
    } else {
      setActive(1);
      setPage(1);
    }
  }, [active, totalPages]);
  const handleSetUpCurrentPage = useCallback(() => {
    console.log("page + 1");
    if (active + 1 <= totalPages) {
      setActive(active + 1);
      console.log("active...", active);
      setPage((prev) => prev + 1);
    } else {
      setActive(totalPages);
      // setCurrentPage(dataPostPage?.length);
    }
  }, [active, totalPages]);

  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setPage(pageNumber);
    setActive(pageNumber);
  };

  const fetchNewPosts = async (page, pageSize) => {
    try {
      setLoading(true);
      const resNewPosts = await postsApi.getAll({
        page: `${page}`,
        pageSize: `${pageSize}`,
      });
      setNewPosts(resNewPosts?.data?.data);
      setLoading(false);
    } catch (error) {
      console.log("goi API that bai", error);
    }
  };

  const fetchCategory = async () => {
    try {
      setLoading(true);
      const res = await categoryApi.getAll();
      setCategory(res?.data);
      setName(res?.data);
      setLoading(false);
    } catch (error) {
      console.log("goi API fetchPost that bai", error);
    }
  };

  // console.log("remakeablePost", remakeablePost);

  const fetchPostByCategory = async () => {
    try {
      const resCategory = await categoryApi.getPostsCategory(
        idCategoryList || "62e0dd8fcce02227343cf3eb",
        {
          pageIndex: `${page}`,
          pageSize: `${pageSize}`,
        }
      );
      setRemakeablePost(resCategory?.data?.data);
      setTotalPage(resCategory?.data?.totalPages);
    } catch (error) {
      console.log("API fetchPostByCategory that bai", error);
    }
  };

  useEffect(() => {
    fetchNewPosts(pageNewPosts, 4);
    fetchCategory();
  }, [page]);

  useEffect(() => {
    fetchPostByCategory();
  }, [page, idCategoryList]);

  const momentFunc = (dateToFormat) => {
    return moment(dateToFormat).format("DD/MM/YYYY");
  };

  console.log(category);
  //log so lan` re-render
  // const rederRef = useRef(1);
  // console.log("re-render....", rederRef.current++);

  return (
    <>
      {loading && <Loading />}
      <Header />
      <Search />
      <NewPost newPosts={newPosts} momentFunc={momentFunc} />
      <section className="section__hightlights-care">
        <div className="container">
          <div className="hightlights__care">
            <div className="wrapper__grid">
              <div className="wrapper__grid-left">
                <h2>{nameCategory ? nameCategory : "Tin nổi bật"}</h2>
                <div className="hightlights__care-content">
                  {remakeablePost?.map((data) => (
                    <GridItem
                      key={data._id}
                      data={data}
                      momentFunc={momentFunc}
                    />
                  ))}
                </div>
                <Pagination
                  totalPages={totalPages}
                  paginate={paginate}
                  active={active}
                  handleSetDownCurrentPage={handleSetDownCurrentPage}
                  handleSetUpCurrentPage={handleSetUpCurrentPage}
                />
              </div>
              <SideBarRight
                category={category}
                handleClickCategoryList={handleClickCategoryList}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PostPage;
