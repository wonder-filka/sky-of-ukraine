import React from "react";
import "../App.css";
import Header from "../components/Header/Header";
import Main from "../components/Mainhome/Main";
import Footer from "../components/Footer/Footer";
import FormHelp from "../components/FormHelp/FormHelp";
import Requisites from "../components/Requisites";

export const Home = () => {

  return (
    <div className="Home page">
      <FormHelp />
      <Requisites />
      <div id="homepage" className="">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};
