import React, { useState } from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";
import "./CurrentProjects.css";
import { baseUrl } from "../../config";

const SliderCurrentProject = ({ currentProj }) => {
  console.log("currentProj", currentProj);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex + 3 >= currentProj.length ? 0 : currentIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex - 3 < 0 ? currentProj.length - 3 : currentIndex - 3
    );
  };

  const renderSlide = () => {
    return currentProj.slice(currentIndex, currentIndex + 3).map((item) => (
      <div key={item.id} className="card-project">
        <img
          src={process.env.REACT_APP_BACKEND_LINK + `/${item.photo_title}`}
          className="card-img-top img-fluid"
          alt="project"
        ></img>
        <h3 className="block-title">{t(item.name)}</h3>
        <p className="card-text">
          {" "}
          <b> {t("The purpose of the project")} </b>
          {t(item.meta)}
        </p>

        <Link
          to={`/project/${item.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-req-support">{t("btn projects")}</button>
        </Link>
      </div>
    ));
  };

  return (
    <div className="projects-cards">
      <span onClick={prevSlide} aria-hidden="true" className="btn-slider">
        <img src={baseUrl + "/sliderPrev.png"} alt="slider prev" />
      </span>
      <div className="projects-slider"> {renderSlide()}</div>

      <span onClick={nextSlide} aria-hidden="true" className="btn-slider">
        <img src={baseUrl + "/slideNext.png"} alt="slider next" />
      </span>
    </div>
  );
};

export default SliderCurrentProject;
