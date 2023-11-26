import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Reportsblock.css";
import Calendar from "../../assets/calendar.svg";
import { t } from "i18next";
import { useState } from "react";
import { useEffect } from "react";

export default function ReportsAll({ reports }) {
  const [sortedReports, setSortedReports] = useState(reports);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  useEffect(() => {
    const sort = reports.sort((a, b) => {
      return new Date(b.publicationDate) - new Date(a.publicationDate);
    });
    setSortedReports(sort);
    setIsLoading(true);
  }, [reports]);

  function sortByDate() {
    if (selectedDate) {
      const selectedDateObject = new Date(selectedDate);
      const sortedReportsbyDate = reports.filter((report) => {
        const reportDate = new Date(report.publicationDate);
        return (
          reportDate.setHours(0, 0, 0, 0) ===
          selectedDateObject.setHours(0, 0, 0, 0)
        );
      });
      setSortedReports(sortedReportsbyDate);
    }
  }

  function resetSort() {
    setSortedReports(reports);

  }

  console.log("sortedReports", sortedReports);
  if (isLoading !== true) {
    return <div>Loading...</div>;
  }
  return (
    <div className="ReportsAll">
      <h3 className="section-title-text py-5 container">
        <div className="title-line"></div>
        {t("reports page title")}
      </h3>
      <div className="container pb-5 sort-block">
        <input
        
          type="date"
          lang="fr-CA"
          value={selectedDate}
          className="selected-date-input"
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button className="sort-btn" onClick={sortByDate}>{t("Sort by date")}</button>
        <button className="reset-btn" onClick={resetSort}>{t("Reset btn")}</button>
      </div>
      {sortedReports.map((report, index) => {
        const isImageOnLeft = index % 2 === 0;

        return (
          <div className="container" key={index}>
            {isImageOnLeft ? (
              <Row className="reports-all left">
                <Col md={5} className="report-item-info">
                  <div className="date-post-page">
                    <div className="date-post-wrap-page">
                      <img src={Calendar} alt="calendar icon"></img>
                      <nobr>{t(report.data)}</nobr>
                    </div>
                    <div className="location">
                      <svg
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 12C8.9 12 8 11.1 8 10C8 8.9 8.9 8 10 8C11.1 8 12 8.9 12 10C12 11.1 11.1 12 10 12ZM16.5 10C16.5 6.37 13.35 3.5 10 3.5C6.65 3.5 3.5 6.37 3.5 10C3.5 12.34 5.95 16.3 10 20C14.05 16.3 16.5 12.34 16.5 10ZM10 2C14.2 2 18 5.22 18 10.2C18 13.52 15.33 17.45 10 22C4.67 17.45 2 13.52 2 10.2C2 5.22 5.8 2 10 2Z"
                          fill="#4C94FF"
                        />
                      </svg>
                      <nobr>{t(report.region)}</nobr>
                    </div>
                  </div>
                  <h3 className="m-5">{t(report.title)}</h3>
                  <p className="mb-1">{t(report.description)}</p>
                  <a
                    href={report.link}
                    className="btn-req-support w-50 mt-5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("zvit btn link")}
                  </a>
                </Col>
                <Col md={6} className="pics-reports">
                  <img
                    className="d-block w-100 img-fluid"
                    src={process.env.REACT_APP_BACKEND_LINK + `/${report.photo_1}`}
                    alt="First slide"
                  />
                  <img
                    className="d-block w-100 img-fluid"
                    src={process.env.REACT_APP_BACKEND_LINK + `/${report.photo_2}`}
                    alt="First slide"
                  />
                </Col>
              </Row>
            ) : (
              <Row className="reports-all revers right my-5">
                <Col md={6} className="pics-reports">
                  <img
                    className="d-block w-100 img-fluid"
                    src={process.env.REACT_APP_BACKEND_LINK + `/${report.photo_1}`}
                    alt="First slide"
                  />
                  <img
                    className="d-block w-100 img-fluid"
                    src={process.env.REACT_APP_BACKEND_LINK + `/${report.photo_2}`}
                    alt="First slide"
                  />
                </Col>
                <Col md={5} className="report-item-info">
                  <div className="date-post-page">
                    <div className="date-post-wrap-page">
                      <img src={Calendar} alt="calendar icon"></img>
                      <nobr>{t(report.data)} </nobr>
                    </div>
                    <div className="location">
                      <svg
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 12C8.9 12 8 11.1 8 10C8 8.9 8.9 8 10 8C11.1 8 12 8.9 12 10C12 11.1 11.1 12 10 12ZM16.5 10C16.5 6.37 13.35 3.5 10 3.5C6.65 3.5 3.5 6.37 3.5 10C3.5 12.34 5.95 16.3 10 20C14.05 16.3 16.5 12.34 16.5 10ZM10 2C14.2 2 18 5.22 18 10.2C18 13.52 15.33 17.45 10 22C4.67 17.45 2 13.52 2 10.2C2 5.22 5.8 2 10 2Z"
                          fill="#4C94FF"
                        />
                      </svg>
                      <nobr>{t(report.region)} </nobr>
                    </div>
                  </div>
                  <h3 className="m-5">{t(report.title)}</h3>
                  <p className="mb-1">{t(report.description)}</p>
                  <a
                    href={report.link}
                    className="btn-req-support w-50 mt-5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("zvit btn link")}
                  </a>
                </Col>
              </Row>
            )}
          </div>
        );
      })}
    </div>
  );
}
