import React from "react";
import { t } from "i18next";
import "../Reportsblock.css";

export default function ReportItemMap({ item }) {
  const { title, description, photo_1, data, link } = item;
  return (
    <div className="project-item">
      <div classname="report-map-wrap-item">
        <div className="report-map-title-item">
          <h3>{t(title)}</h3>
        </div>
        <div className="data-wrap-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
              stroke="#4C94FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 2.25V5.25"
              stroke="#4C94FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 2.25V5.25"
              stroke="#4C94FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.75 8.25H20.25"
              stroke="#4C94FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <nobr>{t(data)} </nobr>
        </div>
      </div>

      <div className="project-info">
        <img src={process.env.REACT_APP_BACKEND_LINK + `/${photo_1}`} alt="project" />
        <div className="map-proj-info">
          <p>{t(description)}</p>
          <a
            href={link}
            className="btn-req-support btn-proj-map"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("btn projects")}
          </a>
        </div>
      </div>
    </div>
  );
}
