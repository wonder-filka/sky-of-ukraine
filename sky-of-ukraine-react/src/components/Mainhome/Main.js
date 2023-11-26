import "./Main.css";
import "../CurrentProjects/CurrentProjects.css";
import React from "react";
import AboutUs from "./AboutUs";
import OurTeam from "./OurTeam.js";
import Partners from "./Partners";
import Help from "./Help";
import CurrentProjects from "../CurrentProjects/CurrentProjects";
import Reports from "./Reports.js";

export default function Main() {
  return (
    <div className="main">
      <AboutUs />
      <OurTeam />
      <Partners />
      <Help />
      <div className="container">
        <CurrentProjects />
      </div>

      <Reports />
    </div>
  );
}
