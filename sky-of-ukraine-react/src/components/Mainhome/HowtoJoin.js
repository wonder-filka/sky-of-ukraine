import "./Main.css";
import React from "react";
import Pic from "../../assets/BlockConnection.png";
import Pic1 from "../../assets/BlockConnection1.png";
import Pic2 from "../../assets/BlockConnection2.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HowtoJoin() {
  return (
    <div className="HowtoJoin ">
      <h3 className="section-title-text py-5">
        <div className="title-line"></div>Як до нас приєднатися
      </h3>
      <Row className="connection-block">
        <Col md={6} className="connection-left">
          <div className="connection-item">
            <div className="connect-title connect-title-big">
              <h3>Проекти</h3>
              <div className="title-line"></div>
              <p>Приєднатися до нашої команди</p>
            </div>
            <img
              src={Pic}
              alt="connection"
              className="image-connection img-fluid"
            />
          </div>
        </Col>
        <Col md={6} className="connection-right">
          <div className="connection-item">
            <div className="connect-title" id="connect-title-first">
              <h3>Допомога</h3>
              <div className="title-line"></div>
              <p>Приєднатися до нашої команди</p>
            </div>
            <img
              src={Pic1}
              alt="connection"
              className="image-connection img-fluid"
            />
          </div>
          <div className="connection-item">
            <div className="connect-title" id="connect-title-second">
              <h3>Приєднатися до нас</h3>
              <div className="title-line"></div>
              <p>Приєднатися до нашої команди</p>
            </div>
            <img
              src={Pic2}
              alt="connection"
              className="image-connection img-fluid"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
