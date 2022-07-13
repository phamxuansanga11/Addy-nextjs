import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import TabContent from "../../components/tabContent/TabContent";

DocumentPage.propTypes = {};

function DocumentPage(props) {
  return (
    <>
      <Header />
      <Search />
      <TabContent />
    </>
  );
}

export default DocumentPage;
