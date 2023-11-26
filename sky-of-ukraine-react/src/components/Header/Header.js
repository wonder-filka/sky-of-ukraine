import "./Header.css";
import React from "react";
import HeadLinks from "../HeadLinks/HeadLinks";
import down from "../../assets/baseline_expand_more_white_24dp.png";
import Col from "react-bootstrap/Col";
import video from "../../assets/8f793c93-c6d1136f1.mp4";
import { Navbar } from "../Navbar/Navbar";
import BtnGroup from "../BtnGroup/BtnGroup";
import { t } from "i18next";

export default function Header() {
  return (
    <div className="Header">
      <video src={video} autoPlay loop muted className="hero-video"></video>
      <div className="head-page">
        <Navbar color="menu-wrap" />
        <div className="head-info container">
          <Col lg={5} className="">
            <h1>{t("header title")}</h1>
            <p>{t("header p")}</p>
            <BtnGroup />
          </Col>
          <Col lg={7}></Col>
        </div>

        <div className="scroll-down">
          <a href="#who-we-are">
            <img src={down} alt="scroll-down"></img>
          </a>
        </div>
        <div className="header_links">
          <HeadLinks color={"white"} />
        </div>
      </div>
    </div>
  );
}
