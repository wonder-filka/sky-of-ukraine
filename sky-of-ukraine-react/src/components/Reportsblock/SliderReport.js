import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../config";
import "./Reportsblock.css";
import { t } from "i18next";

function SliderReport({ reports }) {
  const [index, setIndex] = useState(0);
  const [sortedReports, setSortedReports] = useState(reports);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const sort = reports.sort((a, b) => {
      return new Date(b.publicationDate) - new Date(a.publicationDate);
    });
    setSortedReports(sort);
  }, [reports]);
  return (
    <Carousel
      className="slider-report"
      activeIndex={index}
      onSelect={handleSelect}
      prevIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon">
          <img src={baseUrl + "/sliderPrev.png"} alt="report slider prev" />
        </span>
      }
      nextIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon">
          <img src={baseUrl + "/slideNext.png"} alt="report slider next" />
        </span>
      }
    >
      {sortedReports.map((report, i) => (
        <Carousel.Item key={i}>
          <div className="report-slider-item">
            <div className="report-info">
              <h3 className="">{t(report.title)}</h3>
              <p className="my-1">{t(report.description)}</p>
              <a
                href={report.link}
                className="btn-req-support w-50 mt-5"
                target="_blank"
                rel="noreferrer"
              >
                {t("zvit btn link")}
              </a>
            </div>
            <div className="report-image pics-reports">
              <img
                className="d-block w-60 img-fluid"
                src={process.env.REACT_APP_BACKEND_LINK + `/${report.photo_2}`}
                alt="Report slide"
              />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default SliderReport;
