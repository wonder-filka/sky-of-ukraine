import SliderReport from "./SliderReport";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReportsAll from "./ReportsAll";
import ReportsMap from "./ReportsMap";
import "./Reportsblock.css";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { t } from "i18next";

export default function Reportsblock() {
  const [reports, setReposts] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_LINK + `/reports`).then((response) => {
      setReposts(response.data);
    });
  }, []);
  return (
    <div className="Reportsblock ">
      <h3 className="section-title-text py-5 container">
        <div className="title-line"></div>
        {t("reports page last title")}
      </h3>
      <SliderReport reports={reports} />
      <div className="container statistic-wrap my-5">
        <Row className="statistic-block">
          <Col md className="stat-item ">
            <div className="number-stat">256</div>
            <div className="name-stat">{t("zvit num proj")}</div>
          </Col>
          <Col md className="stat-item">
            <div className="number-stat">1,215,155.24</div>
            <div className="name-stat">{t("zvit num money")}</div>
          </Col>
          <Col md className="stat-item">
            <div className="number-stat">2.215</div>
            <div className="name-stat">{t("zvit num donats")}</div>
          </Col>
        </Row>
      </div>
      <ReportsMap reports={reports} />
      <ReportsAll reports={reports} />
    </div>
  );
}
