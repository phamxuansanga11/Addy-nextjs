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

HomePage.propTypes = {};

function HomePage(props) {
  const router = useRouter();
  const location = router.pathname;

  console.log(location);

  const myRef = useRef(null);

  const handlePositionY = (value) => {
    console.log(value.offsetTop);
    if (location === "/lien-he") {
      window.scrollTo({
        behavior: "smooth",
        top: value?.offsetTop - 80,
      });
    }
  };

  // console.log(myRef);
  // useLayoutEffect(() => {
  //   // console.log(myRef?.current?.offsetTop);
  // });

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
      <ContactForm myRef={myRef} handlePositionY={handlePositionY} />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
