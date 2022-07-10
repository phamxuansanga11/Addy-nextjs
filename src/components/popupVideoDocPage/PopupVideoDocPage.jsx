import React, { useRef } from "react";
import PropTypes from "prop-types";

PopupVideoDocPage.propTypes = {};

function PopupVideoDocPage(props) {
  return (
    <section className="section__popup">
      <div className="popup">
        <div className="btn__close">X</div>
        <iframe
          className="iframe"
          src="https://www.youtube.com/embed/TjBwzgFtXYY?autoplay=1"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
}

export default PopupVideoDocPage;
