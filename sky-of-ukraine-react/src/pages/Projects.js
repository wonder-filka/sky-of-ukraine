import React from "react";
import Map from "../components/Map/Map";
import { Navbar } from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CurrentProjects from "../components/CurrentProjects/CurrentProjects";
import FormHelp from "../components/FormHelp/FormHelp";
import Requisites from "../components/Requisites";

export const Projects = () => {
  
  return (
    <div className="page">
      <FormHelp />
      <Requisites />
      <div className="container" id="homepage">
        <Navbar color="menu-white-wrap" />
        <Map />
        <CurrentProjects />
      </div>
      <Footer />
    </div>
  );
};
