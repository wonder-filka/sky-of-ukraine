import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import AboutPage from "../components/AboutPage/AboutPage";
import Footer from "../components/Footer/Footer";
import FormHelp from "../components/FormHelp/FormHelp";
import Requisites from "../components/Requisites";

import { t } from "i18next";

export const About = () => {
  return (
    <div className="about-page page">
      <FormHelp />
      <Requisites />
      <Navbar color="menu-white-wrap" />
      <h3 className="section-title-text py-5 container">
        <div className="title-line"></div>
        {t("about page title")}
      </h3>
      <AboutPage />
      <Footer />
    </div>
  );
};
