import "./NavbarStyles.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import BtnLang from "../BtnLang/BtnLang";
import { t } from "i18next";

export const Navbar = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    let mobileMenu = document.getElementById("mobileNav");

    if (isNavExpanded === true) {
      mobileMenu.classList.remove("close");
      mobileMenu.classList.add("open");
    } else {
      mobileMenu.classList.remove("open");
      mobileMenu.classList.add("close");
    }
  });

  return (
    <div className={props.color}>
      <div className="mobile-menu-wrap m-5">
        <div className="mobile-menu">
          <div className="logo-menu">
            <Link to="/">
              <img src={logo} alt="logo"></img>
            </Link>
          </div>
          <div
            className="menu-mobile-icon"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <div className="line-icon"></div>
            <div className="line-icon"></div>
            <div className="line-icon"></div>
          </div>
        </div>
        <div className="mobile-nav close" id="mobileNav">
          <div className="mobile-list">
            <div>
              <Link to="/">{t("nav home")}</Link>
            </div>
            <div>
              <Link to="/projects">{t("nav projects")}</Link>
            </div>
            <div>
              <Link to="/reports">{t("nav reports")}</Link>
            </div>
            <div>
              <Link to="/about">{t("nav about")}</Link>
            </div>
          </div>
          <BtnLang />
        </div>
      </div>
      <div className="container menu">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>

        <ul className="menu">
          <li>
            <Link to="/">{t("nav home")}</Link>
          </li>

          <li>
            <Link to="/projects">{t("nav projects")}</Link>
          </li>

          <li>
            <Link to="/reports">{t("nav reports")}</Link>
          </li>
          <li>
            <Link to="/about">{t("nav about")}</Link>
          </li>
        </ul>
        <div className="header-language">
          <BtnLang />
        </div>
      </div>
    </div>
  );
};
