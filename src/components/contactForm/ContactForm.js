import React from "react";
import PropTypes from "prop-types";

ContactForm.propTypes = {};

{
  /* <img src="../../../img/logo.png" alt="len" /> */
}

function ContactForm({ myRef }) {
  return (
    <section ref={myRef} className="section__contact-form">
      <div className="contact__bg">
        <div className="contact__bg-top">
          <img src="../../../img/bg-top.png" alt="" />
        </div>
        <div className="contact__bg-bottom">
          <img src="../../../img/bg-bottom.png" alt="" />
        </div>
        <div className="container">
          <div className="wrapper__form-contact">
            <div className="contact__text">
              <h4>Đăng kí nhận tư vấn miễn phí</h4>
              <p>
                Addy thấu hiểu và luôn mong muốn giúp doanh nghiệp tiếp cận được
                với nhiều khách hàng bằng quy trình bài bản, các công việc được
                tự động hóa thông qua nền tảng CRM giúp tăng năng xuất và gia
                tăng doanh thu bền vững.
              </p>
            </div>
            <div className="contact__form">
              <form action="" className="form">
                <h2>Đăng ký nhận tư vấn</h2>
                <div className="form__group">
                  <input type="text" placeholder="Họ & Tên" />
                </div>
                <div className="form__group">
                  <input type="text" placeholder=" " />
                  <div className="placeholder">
                    Số điện thoại
                    <span>*</span>
                  </div>
                </div>
                <div className="form__group">
                  <input type="text" placeholder=" " />
                  <div className="placeholder">
                    Email
                    <span>*</span>
                  </div>
                </div>
                <div className="form__group">
                  <textarea
                    className="textarea"
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Nhu cầu"
                  ></textarea>
                </div>
                <div className="btn__submit">
                  <a href="">Đăng ký</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
