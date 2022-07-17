import React, { useRef, useEffect } from "react";
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

// import { createContext } from "react";

HomePage.propTypes = {};

function HomePage(props) {
  const router = useRouter();
  const location = router.pathname;

  const myRef = useRef(null);
  console.log(myRef);
  useEffect(() => {
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
      <ContactForm myRef={myRef} />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
