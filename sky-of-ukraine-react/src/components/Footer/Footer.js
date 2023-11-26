import "./Footer.css";
import React from "react";
import logo from "../../assets/logo.png";
import HeadLinks from "../HeadLinks/HeadLinks";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { t } from "i18next";

export default function Footer() {
  const page = document.getElementsByClassName("page");
  function openFormHelp() {
    const formHelp = document.getElementById("contact-block");
    formHelp.classList.add("open-form");
    formHelp.classList.remove("close-form");
    page.classList.add("blur-background");
  }

  function openRequisites() {
    const formRequisites = document.getElementById("requisitesForm");
    formRequisites.classList.add("open-form");
    formRequisites.classList.remove("close-form");
    page.classList.add("blur-background");
  }

  return (
    <div className="Footer">
      <div className="container">
        <Row className="footer-wrap pt-5">
          <Col md className="foot-item contact">
            <div className="logo mb-5">
              <img src={logo} alt="logo"></img>
            </div>
          </Col>
          <Col md className="foot-item mb-1">
            <div className="link-help-footer mb-4" onClick={openFormHelp}>
              <h3>{t("btn need help")}</h3>
            </div>
            <div className="link-help-footer" onClick={openRequisites}>
              <h3> {t("btn get help")}</h3>
            </div>
          </Col>
          <Col md className="foot-item mb-1">
            <div className="foot-items-second">
              <h3 className="block-title">{t("footer nav")}</h3>
              <div className="foot-link-page">
                <a href="/">{t("footer nav main")}</a>
              </div>
              <div className="foot-link-page">
                <a href="/projects">{t("footer nav projects")}</a>
              </div>
              <div className="foot-link-page">
                <a href="/reports">{t("footer nav reports")}</a>
              </div>
              <div className="foot-link-page">
                <a href="/about">{t("footer nav about")}</a>
              </div>
            </div>
          </Col>
          <Col md className="foot-item">
            <div className="foot-contact">
              <h3 className="block-title"> {t("footer nav contacts")}</h3>

              <div>
                <div className="mail-phone">
                  <a
                    href="mailto:skyofukraine@gmail.com"
                    className="contacts-link"
                  >
                    skyukraine22@gmail.com
                  </a>
                </div>
                <div className="mail-phone">
                  <a href="tel:+380985684325" className="contacts-link">
                    +380 95 804 15 29
                  </a>
                </div>
                <div className="head-link">
                  <HeadLinks color={"#4c94ff"} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
