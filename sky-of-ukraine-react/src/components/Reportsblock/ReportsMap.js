import React, { useEffect, useState } from "react";
import Uk from "@svg-maps/ukraine";
import { SVGMap } from "react-svg-map";
import Ukraine from "../../assets/ukraine.png";
import { t } from "i18next";
import "./Reportsblock.css";
import axios from "axios";
import Reports from "./Reports";

export default function ReportsMap() {
  let [stateCode, setStateCode] = useState("Dnipro");
  let [reports, setReports] = useState([]);
  let [stateData, setStateData] = useState([]);

  function formatRegionName(name) {
    if (name === "dnipropetrovsk" || name === "Dnipropetrovsk") {
      return "Dnipro";
    }
    if (name === "zaporizhia") {
      return "Zaporizhia";
    }
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  function onLocationClick(event) {
    if (
      event.target.id === "dnipropetrovsk" ||
      event.target.id === "Dnipropetrovsk"
    ) {
      setStateCode("Dnipro");
    } else {
      setStateCode(event.target.id);
    }
  }

  function findProjectsbyRegion(reports) {
    const formattedRegionCode = formatRegionName(stateCode);
    return reports.filter((report) => report.location === formattedRegionCode);
  }
  
  useEffect(() => {
    const dataRegion = findProjectsbyRegion(reports);
    setStateData(dataRegion);
  }, [stateCode]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_LINK + `/reports/`).then((response) => {
      setReports(response.data);
      const dataRegion = findProjectsbyRegion(response.data);
      setStateData(dataRegion);
    });
  }, [stateCode]);

  return (
    <div className="MapReport container">
      <h3 className="section-title-text py-5">
        <div className="title-line"></div>
        {t("map title")}
      </h3>
      <div className="MapUkr">
        <div className="map-pic">
          <div className="ukraine">
            <img src={Ukraine} alt="ukraine" />
          </div>

          <SVGMap
            map={Uk}
            onLocationClick={onLocationClick}
            locationClassName={(location, locationIndex) => {
              const regionId = location.name;
              const isProjectRegion = reports.some(
                (report) =>
                  formatRegionName(report.location) ===
                  formatRegionName(regionId)
              );
              return isProjectRegion ? "project-region" : "";
            }}
          />
        </div>
        <div className="map-info-report">
          <h3>{t("map projects title")}</h3>
          <h2 className="my-4">{t(stateCode)}</h2>
          <div className="projects-info">
            <Reports info={stateData} />
          </div>
        </div>
      </div>
    </div>
  );
}
