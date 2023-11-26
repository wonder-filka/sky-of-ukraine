import "./Main.css";
import React from "react";
import Slider from "./Slider";
import { t } from "i18next";
import "./Slider.css";

export default function Partners() {
  return (
    <div className="parters">
      <h3 className="section-title-text py-5 container">
        <div className="title-line"></div>
        {t("partners title")}
      </h3>
      <Slider />
    </div>
  );
}
