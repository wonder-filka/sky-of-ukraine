import "./Requisites.css";
import React, { useState } from "react";
import RequisCurrensy from "./RequisCurrensy";

export default function Requisites() {
  let [currensyChoice, setCurrensyChoice] = useState("UAH");

  function closeForm(event) {
    event.preventDefault();
    const formRequisites = document.getElementById("requisitesForm");
    const homepage = document.getElementById("homepage");
    formRequisites.classList.add("close-form");
    formRequisites.classList.remove("open-form");
    homepage.classList.remove("blur-background");
  }

  function showUAH(event) {
    setCurrensyChoice("UAH");
  }

  function showUSD(event) {
    setCurrensyChoice("USD");
  }

  function showEUR(event) {
    setCurrensyChoice("EUR");
  }

  return (
    <div className="Requisites close-form" id="requisitesForm">
      <div className="form-menu">
        <h3>Реквізити компанії/Company details </h3>
        <button onClick={closeForm} className="close-btn">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 7L7 25"
              stroke="#4C94FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 25L7 7"
              stroke="#4C94FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="requisit-block">
        <div className="req-btns">
          <button type="button" onClick={showUAH} className="req-btn">
            UAH
          </button>
          <button type="button" onClick={showUSD} className="req-btn">
            USD
          </button>
          <button type="button" onClick={showEUR} className="req-btn">
            EUR
          </button>
        </div>
        <div className="req-data">
          <RequisCurrensy currensy={currensyChoice} />
        </div>
      </div>
    </div>
  );
}
