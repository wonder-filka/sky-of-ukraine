import React from "react";
import { t } from "i18next";
import "./BtnGroup.css";

export default function BtnGroup() {
  function openFormHelp() {
    const homepage = document.getElementById("homepage");
    const formHelp = document.getElementById("contact-block");
    formHelp.classList.add("open-form");
    formHelp.classList.remove("close-form");
    homepage.classList.add("blur-background");
  }

  function openRequisites() {
    const homepage = document.getElementById("homepage");
    const formRequisites = document.getElementById("requisitesForm");
    formRequisites.classList.add("open-form");
    formRequisites.classList.remove("close-form");
    homepage.classList.add("blur-background");
  }
  return (
    <div className="head-btns">
      <button className="btn-req-support" onClick={openFormHelp}>
        {t("btn need help")}
      </button>
      <button className="btn-take-part" onClick={openRequisites}>
        {t("btn get help")}
      </button>
    </div>
  );
}
