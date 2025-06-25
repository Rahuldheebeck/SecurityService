import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import About from "../About/About";
import Offers from "../Offers/Offers";
import CaseStudy from "../CaseStudy/CaseStudy";
import Contact from "../Contact/Contact";

export const HomeLayout = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Offers />
      <CaseStudy />
      <Footer />
    </>
  );
};

export const ContactPage = () => {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

