import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import TopicsListingHeader from "./TopicsListingHeader";
import Popular from "./Popular";
import Trending from "./Trending";

const TopicsListPage = () => {
  return (
    <>
      <Header />
      <TopicsListingHeader />

      <Popular />
      <Trending />

      <Footer />
    </>
  );
};

export default TopicsListPage;
