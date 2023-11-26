import "./Main.css";
import React from "react";
import HelpPictures from "../../assets/army1.jpg";
import HelpPictures1 from "../../assets/Frame1.png";
import HelpPictures2 from "../../assets/Photo-1.png";
import HelpPic from "../../assets/help.png";
import IconHand from "../../assets/help-icon-hand.svg";
import IconMilit from "../../assets/help-icon-military.svg";
import Icon101 from "../../assets/help-icon-101.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BtnGroup from "../BtnGroup/BtnGroup";
import { t } from "i18next";

export default function Help() {
  return (
    <div className="help container">
      <h3 className="section-title-text py-5">
        <div className="title-line"></div>
        {t("help title")}
      </h3>
      <Row className="help-block">
        <Col lg={6} className=" ">
          <div className="help-pictures-first">
            <img src={HelpPictures} alt="help" className="img-fluid"></img>
          </div>
          <div className="help-pictures-second  d-sm-none d-md-flex">
            <img src={HelpPic} alt="help" className="img-fluid"></img>
            {/* <div>
              <img src={HelpPictures2} alt="help" className="img-fluid"></img>
            </div>
            <div>
              <img src={HelpPictures1} alt="help" className="img-fluid"></img>
            </div> */}
          </div>
        </Col>
        <Col lg={6} className="help-info">
          <h3 className="block-title my-4">{t("help second title")}</h3>
          <p className="my-3">{t("help p")}</p>
          <div className="my-4">
            <div className="help-list">
              <img src={IconHand} alt="icon help" className="img-fluid"></img>
              <h4>{t("help list-item 1")}</h4>
            </div>
            <div className="help-list">
              <img src={Icon101} alt="icon help" className="img-fluid"></img>
              <h4>{t("help list-item 2")}</h4>
            </div>
            <div className="help-list">
              <img src={IconMilit} alt="icon help"></img>
              <h4>{t("help list-item 3")}</h4>
            </div>
          </div>
          <div className="my-4">
            <BtnGroup />
          </div>
        </Col>
      </Row>
    </div>
  );
}
