import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

Search.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function Search(props) {
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    console.log(valueSearch);
  }, [valueSearch]);

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
              value={valueSearch}
              onChange={(e) => setValueSearch(e.target.value)}
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
