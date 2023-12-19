import React from "react";
import Hero from "./sections/Hero/Hero";
import Featured from "./sections/Featured/Featured";
import Topics from "./sections/Topics/Topics";
import Work from "./sections/Work/Work";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Contact from "./sections/Contact/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <Topics />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
