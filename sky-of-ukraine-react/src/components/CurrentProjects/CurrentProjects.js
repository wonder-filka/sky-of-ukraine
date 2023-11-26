import React, { useEffect, useState } from "react";
import "./CurrentProjects.css";
import { t } from "i18next";
import SliderCurrentProject from "./SliderCurrentProject";
import axios from "axios";

export default function CurrentProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_LINK + `/projects/`).then((response) => {
      setProjects(response.data);
      setIsLoading(true);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="CurrentProjects">
        <h3 className="section-title-text py-5">
          <div className="title-line"></div>
          {t("actual projects title")}
        </h3>
        <SliderCurrentProject currentProj={projects} />
      </div>
    );
  } else {
    return "Loading...";
  }
}
