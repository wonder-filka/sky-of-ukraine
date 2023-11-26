import "./Main.css";
import React from "react";
import Calendar from "../../assets/calendar.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { t } from "i18next";
import { baseUrl } from "../../config";
import { Link } from "react-router-dom";

export default function Reports() {
  return (
    <div className="Reports container">
      <h3 className="section-title-text py-5">
        <div className="title-line"></div>
        {t("reports title")}
      </h3>
      <Row className="reports-block">
        <Col lg={4} className="reports-left-side d-none d-lg-block">
          <img
            className="d-block w-100 img-fluid"
            src={baseUrl + "/zvit7_1.jpg"}
            alt="First slide"
          />
          <a
            href="https://www.facebook.com/groups/neboukrainu/posts/965645307758372/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="py-4">{t("zvit 7 title")}</h3>
          </a>
          <p className="mb-1">{t("zvit 7 description")}</p>
          <div className="label-report my-2">
            <div className="btn-more">
              <nobr>
                <Link to="/projects" target="_blank" rel="noreferrer">
                  {t("btn report get more")}
                </Link>
              </nobr>
              <div className="date-post-main">
                <div className="date-post-wrap">
                  <div className="data-wrap">
                    <img src={Calendar} alt="calendar icon"></img>
                    <nobr>{t("report data 4")} </nobr>
                  </div>

                  <div className="location">
                    <svg
                      width="24"
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
                    <nobr>{t("report data location 4")} </nobr>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={7} className="reports-right-side">
          <Row className="report-item">
            <Col sm={4} className="image-report">
              <img
                className="d-block w-100 img-fluid"
                src={baseUrl + "/zvit5.jpg"}
                alt="First slide"
              />
            </Col>
            <Col sm={7} className="report-info">
              <div className="date-post">
                <div classname="title-link-report">
                  <a
                    href="https://www.facebook.com/groups/neboukrainu/posts/965645307758372/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="block-title">{t("zvit 5 title")}</h3>
                  </a>
                </div>
                <div className="date-post-main">
                  <div className="date-post-wrap">
                    <div className="data-wrap">
                      <img src={Calendar} alt="calendar icon"></img>
                      <nobr>{t("report data 4")} </nobr>
                    </div>

                    <div className="location">
                      <svg
                        width="24"
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
                      <nobr>{t("report data location 4")} </nobr>
                    </div>
                  </div>
                </div>
              </div>

              <p>{t("zvit 5 description")}</p>
            </Col>
          </Row>
          <Row className="report-item">
            <Col sm={4} className="image-report">
              <img
                className="d-block w-100 img-fluid"
                src={baseUrl + "/zvit3.jpg"}
                alt="First slide"
              />
            </Col>
            <Col sm={7} className="report-info">
              <div className="date-post">
                <div classname="title-link-report">
                  <a
                    href="https://www.facebook.com/groups/neboukrainu/posts/804355370554034/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="block-title">{t("zvit 3 title")}</h3>
                  </a>
                </div>
                <div className="date-post-main">
                  <div className="date-post-wrap">
                    <div className="data-wrap">
                      <img src={Calendar} alt="calendar icon"></img>
                      <nobr>{t("report data 3")} </nobr>
                    </div>

                    <div className="location">
                      <svg
                        width="24"
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
                      <nobr>{t("report data location 3")} </nobr>
                    </div>
                  </div>
                </div>
              </div>
              <p>{t("zvit 3 description")}</p>
            </Col>
          </Row>
          <Row className="report-item">
            <Col sm={4} className="image-report">
              <img
                className="d-block w-100 img-fluid"
                src={baseUrl + "/zvit2_1.jpg"}
                alt="First slide"
              />
            </Col>
            <Col sm={7} className="report-info">
              <div className="date-post">
                <div classname="title-link-report">
                  <a
                    href="https://www.facebook.com/groups/neboukrainu/posts/967645974224972/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="block-title">{t("zvit 2 title")}</h3>
                  </a>
                </div>
                <div className="date-post-main">
                  <div className="date-post-wrap">
                    <div className="data-wrap">
                      <img src={Calendar} alt="calendar icon"></img>
                      <nobr>{t("report data 2")} </nobr>
                    </div>

                    <div className="location">
                      <svg
                        width="24"
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
                      <nobr>{t("report data location 2")} </nobr>
                    </div>
                  </div>
                </div>
              </div>
              <p>{t("zvit 2 description")}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
