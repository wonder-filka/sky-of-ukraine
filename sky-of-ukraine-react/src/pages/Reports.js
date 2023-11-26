import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Reportsblock from "../components/Reportsblock/Reportsblock";
import FormHelp from "../components/FormHelp/FormHelp";
import Requisites from "../components/Requisites";

export const Reports = () => {
  return (
    <div>
      <FormHelp />
      <Requisites />
      <div className="page">
        <Navbar color="menu-white-wrap" />
        <Reportsblock />
        <Footer />
      </div>
    </div>
  );
};
