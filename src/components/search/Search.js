import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import * as ga from "../../../libs/ga";

Search.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function Search(props) {
  // const [valueSearch, setValueSearch] = useState("");

  const [query, setQuery] = useState("");

  const search = () => {
    ga.event({
      action: "search",
      params: {
        search_term: query,
      },
    });
  };

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <section className="section__search">
      <div className="container">
        <div className="search__content">
          <h2 className="title">Xin chào, Addy có thể giúp gì được cho bạn?</h2>
          <div className="search__content-input">
            <div className="icon__search">
              <i>
                <img src="../../../img/ic-search.svg" alt="icon search" />
              </i>
            </div>
            <input
              type="text"
              placeholder="Hướng dẫn sử dụng phần mềm..."
              value={query}
              // onChange={(e) => setValueSearch(e.target.value)}
              onChange={(event) => setQuery(event.target.value)}
              onSubmit={() => search()}
            />
          </div>
          <p className="search__contact">
            Liên hệ ngay với ADDY để được hỗ trợ miễn phí{" "}
            <a href="#">1900 1111</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Search;
