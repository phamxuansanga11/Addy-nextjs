import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import GridItem from "./gridItem/GridItem";
import SideBarRight from "./sideBarRight/SideBarRight";
import categoryApi from "../../../pages/api/categoryApi";
import { useRouter } from "next/router";

import queryString from "query-string";
import axios from "axios";
import Pagination from "../pagination/Pagination";

HightlightsCare.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function HightlightsCare(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const [active, setActive] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res?.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  console.log(posts);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log("re-render....");

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActive(pageNumber);
    if (active === pageNumber) {
    }
  };
  // const router = useRouter();

  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 1,
  // });

  // const [duLieu, setDulieu] = useState();

  // useEffect(() => {
  //   const paramsString = queryString.stringify(pagination);

  //   // router.push(`${router.pathname}?${paramsString}`);

  //   // console.log(router);

  //   console.log(`?${paramsString}`);

  //   const fetchData = async () => {
  //     const data = await categoryApi.getAll({ params: `${paramsString}` });
  //     setDulieu(data?.data);
  //     console.log(data?.data);
  //   };
  //   fetchData(paramsString);
  // }, [pagination]);

  return (
    <section className="section__hightlights-care">
      {loading && <div className="bg__gray"></div>}
      <div className="container">
        <div className="hightlights__care">
          <div className="wrapper__grid">
            <div className="wrapper__grid-left">
              <h2>Tin nổi bật</h2>
              <div className="hightlights__care-content">
                {currentPosts?.map((data) => (
                  <GridItem key={data.id} data={data} />
                ))}
              </div>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                // tagLiRef={tagLiRef}
                active={active}
              />
            </div>
            <div className="wrapper__grid-right">
              <SideBarRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HightlightsCare;
