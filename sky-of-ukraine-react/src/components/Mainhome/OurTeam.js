import TeamImg from "../../assets/people-hiking.png";
import React from "react";
import { t } from "i18next";

export default function OurTeam() {
  return (
    <div className="our-Team container">
      <h3 className="section-title-text py-5">
        <div className="title-line"></div>
        {t("our team title")}
      </h3>
      <div className="our-Team-info">
        <img src={TeamImg} alt="our team" className="img-fluid"></img>
        <h3 className="block-title py-5 m-0">{t("team secod title")}</h3>
        <p className="">{t("team secod p")}</p>
      </div>
    </div>
  );
}
