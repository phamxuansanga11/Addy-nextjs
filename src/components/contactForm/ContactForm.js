import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";

import { useRouter } from "next/router";

ContactForm.propTypes = {
  handleScrollContactForm: PropTypes.func,
};

ContactForm.defaultProps = {
  handleScrollContactForm: null,
};

function ContactForm({ handleScrollContactForm }) {
  const router = useRouter();

  const [varUp, setVarUp] = useState(1);

  useEffect(() => {
    if (router.pathname === "/lien-he") {
      setVarUp((prev) => prev + 1);
      // console.log("dung trang lien he r");
    }
  }, [router]);

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

  const contactRef = useRef();

  useEffect(() => {
    // console.log("contactRef:", contactRef.current);
    handleScrollContactForm(contactRef.current);
  }, [varUp]);

  return (
    <section
      className="section__contact-form position-relative"
      ref={contactRef}
    >
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
              <h4>????ng k?? nh???n t?? v???n mi???n ph??</h4>
              <p>
                Addy th???u hi???u v?? lu??n mong mu???n gi??p doanh nghi???p ti???p c???n ???????c
                v???i nhi???u kh??ch h??ng b???ng quy tr??nh b??i b???n, c??c c??ng vi???c ???????c
                t??? ?????ng h??a th??ng qua n???n t???ng CRM gi??p t??ng n??ng xu???t v?? gia
                t??ng doanh thu b???n v???ng.
              </p>
            </div>
            <div className="contact__form">
              <form
                action=""
                className="form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h2>????ng k?? nh???n t?? v???n</h2>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder={`H??? & T??n...`}
                    {...register("fullName", {
                      required: "Vui l??ng nh???p h??? t??n.",
                      minLength: {
                        value: 4,
                        message: "H??? t??n ph???i t???i thi???u 4 k?? t???.",
                      },
                      maxLength: {
                        value: 25,
                        message: "H??? t??n t???i ??a 14 k?? t???.",
                      },
                      pattern: {
                        value: PATTERN.VARIABLE_NAME,
                        message: "Vui l??ng nh???p ch???.",
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
                    placeholder="Nh???p s??? ??i???n tho???i c???a b???n..."
                    {...register("phoneNumber", {
                      required: "Vui l??ng nh???p s??? ??i???n tho???i.",
                      pattern: {
                        value: PATTERN.PHONE,
                        message: "S??? ??i???n tho???i kh??ng h???p l???.",
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
                    placeholder="Nh???p email c???a b???n..."
                    {...register("Email", {
                      required: { value: true, message: "FAIL" },
                      pattern: { value: PATTERN.EMAIL, message: "Wrong Email" },
                    })}
                    style={handleStyle("Email")}
                  />
                  {errors.Email?.message === "FAIL" && (
                    <small className="text-danger">Vui l??ng nh???p Email.</small>
                  )}
                  {errors.Email?.message === "Wrong Email" && (
                    <small className="text-danger">
                      Email kh??ng ????ng ?????nh d???ng.
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
                    placeholder="Nhu c???u c???a b???n..."
                    {...register("demand", { required: true })}
                    style={handleStyle("demand")}
                  ></textarea>
                  {errors.demand && (
                    <small className="text-danger">
                      H??y nh???p nhu c???u c???a b???n.
                    </small>
                  )}
                </div>
                <input className="btn__submit" type="submit" value="????ng k??" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Alert className="position-absolute " severity="error">
        This is an error alert ??? check it out!
      </Alert>
    </section>
  );
}

export default ContactForm;
