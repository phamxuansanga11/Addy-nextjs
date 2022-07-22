import React, { useEffect, useState, useMemo, useCallback } from "react";

import PropTypes from "prop-types";
import GridItem from "./gridItem/GridItem";
import SideBarRight from "./sideBarRight/SideBarRight";

import Pagination from "../pagination/Pagination";

HightlightsCare.propTypes = {
  dataPostPage: PropTypes.array,
};

HightlightsCare.defaultProps = {
  dataPostPage: [],
};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function HightlightsCare({ dataPostPage }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const [params, setParams] = useState("State Params...");

  const [active, setActive] = useState(1);

  useEffect(() => {
    if (dataPostPage) {
      setPosts(dataPostPage);
    }
  }, [dataPostPage]);

  console.log(posts);

  // Get current posts
  const indexOfLastPost = useMemo(
    () => currentPage * postsPerPage,
    [currentPage, postsPerPage]
  );
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  //total posts
  const totalPosts = useMemo(
    () => Math.ceil(posts?.length / postsPerPage),
    [posts, postsPerPage]
  );

  //funciton click category
  const handleClickCategoryP = useCallback(
    (title) => {
      console.log("ham` ong noi...", title);
    },
    [params]
  );

  const paginate = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
    setActive(pageNumber);
  }, []);

  const handleSetDownCurrentPage = useCallback(() => {
    console.log("page - 1");
    if (active - 1 > 1) {
      setActive(active - 1);
      setCurrentPage((prev) => prev - 1);
    } else {
      setActive(1);
      setCurrentPage(1);
    }
  }, [active, totalPosts]);
  const handleSetUpCurrentPage = useCallback(() => {
    console.log("page + 1");
    if (active + 1 < totalPosts) {
      setActive(active + 1);
      setCurrentPage((prev) => prev + 1);
    } else {
      setActive(totalPosts);
      setCurrentPage(totalPosts);
    }
  }, [active, totalPosts]);

  return (
    <section className="section__hightlights-care">
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
                totalPosts={posts?.length}
                paginate={paginate}
                active={active}
                handleSetDownCurrentPage={handleSetDownCurrentPage}
                handleSetUpCurrentPage={handleSetUpCurrentPage}
              />
            </div>
            <div className="wrapper__grid-right">
              <SideBarRight
                params={params}
                handleClickCategoryP={handleClickCategoryP}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HightlightsCare;
