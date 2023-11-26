import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import ReportsComronent from "../../components/Reports";
import Lang from "../../components/Lang/index";
import Navigation from "../../components/Navigation";

export const Reports = () => {
  return (
    <div className="App flex bg-white min-h-screen">
      <Lang />
      <Navigation />
      <div className="main pb-10">
        <ReportsComronent />
        <div className="btn add mt-20">
          <Link
            to="/add-reports"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold m-5 py-2 px-4 rounded"
          >
            Додати звіт
          </Link>
        </div>
      </div>
    </div>
  );
};
