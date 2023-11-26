import "../Map.css";
import React from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";

export default function ProjectItem({ item }) {
  console.log("item", item);
  const { name, meta, photo_main, id } = item;
  return (
    <div className="project-item">
      <h3>{t(name)}</h3>
      <div className="project-info">
        <img src={process.env.REACT_APP_BACKEND_LINK + `/${photo_main}`} alt="project" />
        <div className="map-proj-info">
          <p>{t(meta)}</p>
          <Link to={`/project/${id}`} target="_blank" rel="noopener noreferrer">
            <button className="btn-req-support btn-proj-map">
              {t("btn projects")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
