import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import GridItem from "./gridItem/GridItem";
import SideBarRight from "./sideBarRight/SideBarRight";
import categoryApi from "../../../pages/api/categoryApi";

import Pagination from "../pagination/Pagination";

HightlightsCare.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function HightlightsCare(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(21);

  const [active, setActive] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await categoryApi.getAll();
      // const res = await axios.get(
      //   "https://62d4e0b9cd960e45d45cfd64.mockapi.io/api/data"
      // );
      setPosts(res?.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  console.log(posts);

  // Get current posts
  const indexOfLastPost = useMemo(
    () => currentPage * postsPerPage,
    [currentPage, postsPerPage]
  );
  const indexOfFirstPost = useMemo(
    () => indexOfLastPost - postsPerPage,
    [postsPerPage]
  );
  const currentPosts = useMemo(
    () => posts.slice(indexOfFirstPost, indexOfLastPost),
    [posts, indexOfFirstPost, indexOfLastPost]
  );

  //total posts
  const totalPosts = useMemo(
    () => Math.ceil(posts.length / postsPerPage),
    [posts, postsPerPage]
  );
  const rederRef = useRef(1);
  console.log("re-render....", rederRef.current++);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActive(pageNumber);
  };

  const handleSetDownCurrentPage = useCallback(() => {
    console.log("page - 1");
    if (active - 1 > 1) {
      setActive(active - 1);
      setCurrentPage((prev) => prev - 1);
    } else {
      setActive(1);
      setCurrentPage(1);
    }
  }, [active]);
  const handleSetUpCurrentPage = useCallback(() => {
    console.log("page + 1");
    if (active + 1 < totalPosts) {
      setActive(active + 1);
      setCurrentPage((prev) => prev + 1);
    } else {
      setActive(totalPosts);
      setCurrentPage(totalPosts);
    }
  }, [active]);

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
                active={active}
                handleSetDownCurrentPage={handleSetDownCurrentPage}
                handleSetUpCurrentPage={handleSetUpCurrentPage}
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
