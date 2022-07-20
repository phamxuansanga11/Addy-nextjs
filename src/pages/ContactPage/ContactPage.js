import React, { useRef, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import AddyCrm from "../../components/addyCrm/AddyCrm";
import Characteristics from "../../components/characteristics/Characteristics";
import Features from "../../components/features/Features";
import UseSolution from "../../components/useSolution/UseSolution";
import Slider from "../../components/slider/Slider";
import ContactForm from "../../components/contactForm/ContactForm";
import Faq from "../../components/faq/Faq";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";

HomePage.propTypes = {};

function HomePage(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    return console.log(data);
  };
  const handleStyle = (name) =>
    errors[name] ? { border: "1px solid red" } : null;

  const PATTERN = {
    EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    PHONE: /(84|0[3|5|7|8|9])+([0-9]{8})\b/i,
    FB: /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/i,
    VARIABLE_NAME: /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/,
    ONLY_TWO_NUMBER: /^[0-9\b]{0,2}$/,
    ONLY_NUMBER: /^[0-9]*$/,
    LINK: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  };

  const router = useRouter();
  const location = router.pathname;

  const myRef = useRef(null);

  // console.log(myRef);
  useLayoutEffect(() => {
    console.log(myRef?.current?.offsetTop);
    if (location === "/lien-he") {
      window.scrollTo({
        behavior: "smooth",
        top: myRef?.current?.offsetTop - 80,
      });
    }
  });

  return (
    <>
      <Header />
      <AddyCrm
        title={"ADDY CRM"}
        h3={`Nâng tầm hiệu quả doanh nghiệp`}
        p={`Nền tảng giúp lưu trữ và quản lí thông tin khách hàng, 
        Xây dựng một quy trình bán hàng chuyên nghiệp giúp doanh nghiệp 
        chăm sóc khách hàng tốt hơn, tối ưu hiệu quả và tăng doanh thu.`}
      />
      <Characteristics />
      <Features />
      <UseSolution />
      <Slider />
      <section className="section__contact-form position-relative" ref={myRef}>
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
                  Addy thấu hiểu và luôn mong muốn giúp doanh nghiệp tiếp cận
                  được với nhiều khách hàng bằng quy trình bài bản, các công
                  việc được tự động hóa thông qua nền tảng CRM giúp tăng năng
                  xuất và gia tăng doanh thu bền vững.
                </p>
              </div>
              <div className="contact__form">
                <form
                  action=""
                  className="form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <h2>Đăng ký nhận tư vấn</h2>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder={`Họ & Tên...`}
                      {...register("fullName", {
                        required: "Vui lòng nhập họ tên.",
                        minLength: {
                          value: 4,
                          message: "Họ tên phải tối thiểu 4 kí tự.",
                        },
                        maxLength: {
                          value: 14,
                          message: "Hộ tên tối đa 14 kí tự.",
                        },
                        pattern: {
                          value: PATTERN.VARIABLE_NAME,
                          message: "Vui lòng nhập chữ.",
                        },
                      })}
                      style={handleStyle("fullName")}
                    />
                    {errors?.fullName && (
                      <small className="text-danger">
                        {errors.fullName.message}
                      </small>
                    )}
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Nhập số điện thoại của bạn..."
                      {...register("phoneNumber", {
                        required: "Vui lòng nhập số điện thoại.",
                        pattern: {
                          value: PATTERN.PHONE,
                          message: "Số điện thoại không hợp lệ.",
                        },
                      })}
                      style={handleStyle("phoneNumber")}
                    />
                    {errors?.phoneNumber && (
                      <small className="text-danger">
                        {errors.phoneNumber.message}
                      </small>
                    )}
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Nhập email của bạn..."
                      {...register("Email", {
                        required: { value: true, message: "FAIL" },
                        pattern: {
                          value: PATTERN.EMAIL,
                          message: "Wrong Email",
                        },
                      })}
                      style={handleStyle("Email")}
                    />
                    {errors.Email?.message === "FAIL" && (
                      <small className="text-danger">
                        Vui lòng nhập Email.
                      </small>
                    )}
                    {errors.Email?.message === "Wrong Email" && (
                      <small className="text-danger">
                        Email không đúng định dạng.
                      </small>
                    )}
                  </div>
                  <div className="form__group">
                    <textarea
                      className="textarea"
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="Nhu cầu của bạn..."
                      {...register("demand", { required: true })}
                      style={handleStyle("demand")}
                    ></textarea>
                    {errors.demand && (
                      <small className="text-danger">
                        Hãy nhập nhu cầu của bạn.
                      </small>
                    )}
                  </div>
                  <input
                    className="btn__submit"
                    type="submit"
                    value="Đăng kí"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <Alert className="position-absolute " severity="error">
          This is an error alert — check it out!
        </Alert>
      </section>
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
