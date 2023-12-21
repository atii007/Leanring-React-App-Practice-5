import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import RegisterationForm from "./RegistrationForm";
import RegisterationHeader from "./RegistrationHeader";

const Registeration = () => {
  return (
    <>
      <Header />
      <RegisterationHeader />
      <RegisterationForm />
      <Footer />
    </>
  );
};

export default Registeration;
