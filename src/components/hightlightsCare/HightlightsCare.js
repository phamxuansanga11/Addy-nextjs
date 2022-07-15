import React from "react";
import PropTypes from "prop-types";
import GridItem from "./gridItem/GridItem";
import SideBarRight from "./sideBarRight/SideBarRight";

HightlightsCare.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function HightlightsCare(props) {
  return (
    <section className="section__hightlights-care">
      <div className="container">
        <div className="hightlights__care">
          <div className="wrapper__grid">
            <div className="wrapper__grid-left">
              <h2>Tin nổi bật</h2>
              <div className="hightlights__care-content">
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
              </div>
              <div className="paginations">
                <ul className="pagination__list">
                  <li className="pagination__list-option --prev__btn">
                    <span>←</span>
                  </li>
                  <li className="pagination__list-option">1</li>
                  <li className="pagination__list-option active">2</li>
                  <li className="pagination__list-option">3</li>
                  <li className="pagination__list-option --next__btn">
                    <span>→</span>
                  </li>
                </ul>
              </div>
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
