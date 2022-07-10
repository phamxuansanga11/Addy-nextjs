import React, { useState } from "react";
import PropTypes from "prop-types";
import VideoItem from "./videoItem/VideoItem";

VideoSupport.propTypes = {};

// Modal.setAppElement(VideoSupport);
{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function VideoSupport(props) {
  const objData = {
    id: 1,
    title: "Hướng dẫn đăng ký tài khoản Addy",
    date: "28/09/2021",
    view: "210 Lượt xem",
    image: "../../../img/video-1.jpg",
    srcVideo: "https://www.youtube.com/embed/TjBwzgFtXYY?autoplay=1",
    arrData: [
      {
        id: 2,
        title: "Hướng dẫn đăng ký tài khoản Addy",
        date: "28/09/2021",
        view: "210 Lượt xem",
        image: "../../../img/video-2.jpg",
        srcVideo: "https://www.youtube.com/embed/dBEVO_DGiFE?autoplay=1",
      },
      {
        id: 3,
        title: "Hướng dẫn đăng ký tài khoản Addy",
        date: "28/09/2021",
        view: "210 Lượt xem",
        image: "../../../img/video-3.jpg",
        srcVideo: "https://www.youtube.com/embed/E9Gtl8mOsVc?autoplay=1",
      },
      {
        id: 4,
        title: "Hướng dẫn đăng ký tài khoản Addy",
        date: "28/09/2021",
        view: "210 Lượt xem",
        image: "../../../img/video-4.jpg",
        srcVideo: "https://www.youtube.com/embed/KKc_RMln5UY?autoplay=1",
      },
    ],
  };

  return (
    <section className="section__video">
      <div className="container">
        <div className="video__support">
          <h2 className="title">Video hỗ trợ sử dụng Addy</h2>
          <div className="video__support-grid">
            <div className="video__support-left --grid">
              <VideoItem data={objData} />
            </div>
            <div className="video__support-right --grid">
              {objData.arrData.map((data, idx) => (
                <VideoItem key={idx} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSupport;
