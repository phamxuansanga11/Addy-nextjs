import React from "react";
import PropTypes from "prop-types";

Faq.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function Faq(props) {
  return (
    <section className="section__faq">
      <div className="container">
        <div className="faq__title">
          <h3>Câu hỏi thường gặp</h3>
        </div>
        <div className="faq__content">
          <div className="faq__content-item">
            <div className="title__item">
              <i>
                <img src="../../../img/question-ic.svg" alt="" />
              </i>
              <h5>Chính sách bảo mật của sản phẩm là gì?</h5>
            </div>
            <p className="text__item">
              Absolutely. The Bootstrap Themes license allows you to build a
              website for personal use or for a client.
            </p>
          </div>
          <div className="faq__content-item">
            <div className="title__item">
              <i>
                <img src="../../../img/question-ic.svg" alt="" />
              </i>
              <h5>Cách sử dụng Addy CRM</h5>
            </div>
            <p className="text__item">
              Yup! Bootstrap Themes come with a satisfaction guarantee. Submit a
              return and get your money back
            </p>
          </div>
          <div className="faq__content-item">
            <div className="title__item">
              <i>
                <img src="../../../img/question-ic.svg" alt="" />
              </i>
              <h5>Điểm khác biệt của ADDY so với các phần mềm CRM hiện nay?</h5>
            </div>
            <p className="text__item">
              Yes. We update all of our themes with each Bootstrap update, plus
              are constantly adding new componetns, pages, and features to our
              themes.
            </p>
          </div>
          <div className="faq__content-item">
            <div className="title__item">
              <i>
                <img src="../../../img/question-ic.svg" alt="" />
              </i>
              <h5>Các tính năng của Addy ứng dụng như thế nào?</h5>
            </div>
            <p className="text__item">
              Yes. Landkit has basic CSS/JS files you can include. If you want
              to enable deeper customization, you can integrate it into
              yourassets pipeline or build processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
