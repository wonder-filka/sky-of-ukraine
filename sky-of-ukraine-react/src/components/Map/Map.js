import "./Map.css";
import React, { useEffect, useState } from "react";
import Uk from "@svg-maps/ukraine";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import Projects from "./Projects";
import Ukraine from "../../assets/ukraine.png";
import { t } from "i18next";
import axios from "axios";

export default function Map() {
  let [stateCode, setStateCode] = useState("kherson");
  let [projects, setProjects] = useState([]);
  let [stateData, setStateData] = useState([]);

  function findProjectsbyRegion(projects) {
    const formattedRegionCode = formatRegionName(stateCode);
    return projects.filter((project) => project.region === formattedRegionCode);
  }

  function formatRegionName(name) {
    if (name === "dnipropetrovsk" || name === "Dnipropetrovsk") {
      return "Dnipro";
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


  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_LINK + `/projects/`).then((response) => {
      setProjects(response.data);
      const dataRegion = findProjectsbyRegion(response.data);
      setStateData(dataRegion);
    });
  }, [stateCode]);

  return (
    <div className="MapHelp">
      <h3 className="section-title-text py-5">
        <div className="title-line"></div>
        {t("map title")}
      </h3>
      <p> {t("map p")}</p>
      <div className="MapUkr">
        <div className="map-pic">
          <div className="ukraine">
            <img src={Ukraine} alt="ukraine" />
          </div>
          <SVGMap
            map={Uk}
            onLocationClick={onLocationClick}
            locationClassName={(location, locationIndex) => {
              // Получаем идентификатор региона из location.id (предполагается, что location.id содержит идентификатор региона)
              const regionId = location.name;
              console.log("regionId", regionId);
              // Проверьте, есть ли регион в списке проектов
              const isProjectRegion = projects.some(
                (project) =>
                  formatRegionName(project.region) ===
                  formatRegionName(regionId)
              );

              // Возвращаем класс в зависимости от наличия региона в проектах
              return isProjectRegion ? "project-region" : "";
            }}
          />
        </div>
        <div className="map-info">
          <h3>{t("map projects title")}</h3>
          <h3>{t(stateCode)}</h3>
          <div className="projects-info">
            <Projects info={stateData} />
          </div>
        </div>
      </div>
    </div>
  );
}
