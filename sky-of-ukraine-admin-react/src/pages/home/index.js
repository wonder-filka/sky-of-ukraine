import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Cases from "../../components/Cases";
import Lang from "../../components/Lang/index";
import Navigation from "../../components/Navigation";

export const Home = () => {
  return (
    <div className="App flex bg-white min-h-screen">
      <Lang />
      <Navigation />
      <div className="main pb-10">
        <Cases />
        <div className="btn add mt-20">
          <Link
            to="/add"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold m-5 py-2 px-4 rounded"
          >
            Додати проект
          </Link>
        </div>
      </div>
    </div>
  );
};
