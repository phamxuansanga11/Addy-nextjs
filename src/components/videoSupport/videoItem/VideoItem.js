import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Modal from "react-modal";

VideoItem.propTypes = {};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function VideoItem({ data }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="video__item ">
        <div className="video" onClick={openModal}>
          <img src={`${data.image}`} alt="" />
          <div className="video__btn-play">
            <i>
              <img src="../../../img/icon-play.png" alt="" />
            </i>
          </div>
        </div>
        <div className="wrapper__decription">
          <div className="time__view --decription">
            <div className="time --icon">
              <i>
                <img src="../../../img/ic-clock.svg" alt="" />
              </i>
              <span>{data.date}</span>
            </div>
            <div className="view --icon">
              <i>
                <img src="../../../img/ic-eye.svg" alt="" />
              </i>
              <span>{data.view}</span>
            </div>
          </div>
          <a href="">Hướng dẫn đăng ký tài khoản Addy</a>
        </div>
      </div>
      <div className="Modal">
        <section className="section__popup">
          <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="popup">
              <div className="btn__close" onClick={closeModal}>
                <p>X</p>
              </div>
              <iframe
                className="iframe"
                src={`${data.srcVideo}`}
                frameBorder="0"
              ></iframe>
            </div>
          </Modal>
        </section>
      </div>
    </>
  );
}

export default VideoItem;
