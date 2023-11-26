import "./Main.css";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { t } from "i18next";

export default function AboutUs() {
  return (
    <div className="about-us-section-wrap container">
      <a name="who-we-are">
        <h3 className="section-title-text py-5">
          <div className="title-line"></div>
          {t("about us title")}
        </h3>
      </a>
      <Row className="about-us-content-wrap">
        <Col md={4} className="block-container">
          <h3 className="block-title my-4"> {t("who we are title")} </h3>
          <p>{t("who we are p")}</p>
        </Col>
        <Col md={4} className="block-container">
          <h3 className="block-title my-4">{t("how we work title")}</h3>
          <p className="block-text">{t("how we work p")}</p>
        </Col>
        <Col md={4} p={0} className="block-container">
          <h3 className="block-title my-4">{t("our motivation title")}</h3>
          <p className="block-text">{t("our motivation p")}</p>
        </Col>
      </Row>
    </div>
  );
}
