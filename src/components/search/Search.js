import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";

import * as ga from "../../../libs/ga";

Search.propTypes = {};

function Search(props) {
  const [valueSearch, setValueSearch] = useState("");

  const setTimeOutRef = useRef(null);

  // const [query, setQuery] = useState("");

  const handleSubmit = useCallback((newFilter) => {
    console.log("newFilter:", newFilter);
  }, []);

  const handleOnChange = (e) => {
    let valueInput = e.target.value;

    setValueSearch(valueInput);

    if (setTimeOutRef.current) {
      clearTimeout(setTimeOutRef.current);
    }

    setTimeOutRef.current = setTimeout(() => {
      const formValue = {
        valueSearch: valueInput,
      };
      handleSubmit(formValue);
    }, 500);
  };

  const search = () => {
    ga.event({
      action: "search",
      params: {
        search_term: valueSearch,
      },
    });
  };

  // useEffect(() => {
  //   console.log(valueSearch);
  // }, [valueSearch]);

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
              onChange={handleOnChange}
              // onChange={(event) => setQuery(event.target.value)}
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
