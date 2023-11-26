import React, { useEffect, useState } from "react";
import "../../Projects.css";
import { useParams } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FormHelp from "../FormHelp/FormHelp";
import Requisites from "../Requisites";
import { t } from "i18next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default function Project() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [projectItem, setProjectItem] = useState({});
  console.log(projectItem);

  function openRequisites() {
    const homepage = document.getElementById("homepage");
    const formRequisites = document.getElementById("requisitesForm");
    formRequisites.classList.add("open-form");
    formRequisites.classList.remove("close-form");
    homepage.classList.add("blur-background");
  }

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_LINK + `/projects/${id}`).then((response) => {
      setProjectItem(response.data);
      setIsLoading(true);
    });
  }, [id]);
  if (isLoading) {
    return (
      <div className="page">
        <FormHelp />
        <Requisites />
        <Navbar color="menu-white-wrap" />
        <div className="project-head container">
          <div className="left-head-proj">
            <h3 className="section-title-text py-5">
              {t(`${projectItem.name}`)}
            </h3>
            <button className="btn-take-part" onClick={openRequisites}>
              {t("btn get help")}
            </button>
          </div>
          <div className="right-head-proj">
            <img
              src={process.env.REACT_APP_BACKEND_LINK + `/${projectItem.photo_main}`}
              alt="help people"
            />
          </div>
        </div>
        <div className="project-wrap-page container">
          <Row className="project-page-row">
            <Col md className="project-page-col">
              <p>
                <b> {t("The purpose of the project")}</b>{" "}
                {t(projectItem.meta)
                  .split("\n")
                  .map((sentence, index) => (
                    <div key={index}>{sentence}</div>
                  ))}
              </p>
              <p>
                <b> {t("Target population")}</b>{" "}
                {t(projectItem.target_population)
                  .split("\n")
                  .map((sentence, index) => (
                    <div key={index}>{sentence}</div>
                  ))}
              </p>
              <p>
                <b> {t("Project implementation period")}</b>{" "}
                {t(projectItem.project_duration)
                  .split("\n")
                  .map((sentence, index) => (
                    <div key={index}>{sentence}</div>
                  ))}
              </p>
              <p>
                <b> {t("International donor of the project")}</b>
                <div className="project_donor">
                  {t(projectItem.international_donor)
                    .split("\n")
                    .map((sentence, index) => (
                      <div key={index}>{sentence}</div>
                    ))}
                </div>
              </p>
              <p>
                <b>
                  {t("Population centers in which the project is implemented")}
                </b>
                <div className="project_popul">
                  {t(projectItem.implementation_locations)
                    .split("\n")
                    .map((sentence, index) => (
                      <div key={index}>{sentence}</div>
                    ))}
                </div>
              </p>
              <p>
                <b>
                  {t(
                    "The number of households to whom it is planned to provide humanitarian aid"
                  )}
                </b>{" "}
                {t(projectItem.households_to_assist)
                  .split("\n")
                  .map((sentence, index) => (
                    <div key={index}>{sentence}</div>
                  ))}
              </p>
              <p>
                <b>
                  {t(
                    "The number of people who are planned to be provided with food and non-food aid"
                  )}
                </b>
                {t(projectItem.people_to_provide)
                  .split("\n")
                  .map((sentence, index) => (
                    <div key={index}>{sentence}</div>
                  ))}
              </p>
              <p>
                <b>{t("Partners for project implementation")}</b>
                <div className="partners">
                  {" "}
                  {t(projectItem.partners)
                    .split("\n")
                    .map((sentence, index) => (
                      <div key={index}>{sentence}</div>
                    ))}
                </div>
              </p>
            </Col>
            <Col md className="project-page-col grey-block">
              <p>
                <b> {t("Subject of distribution")}</b> {t("subject proj1")}
              </p>
              <div className="proj_subject">
                {t(projectItem.distribution_subject)
                  .split("\n")
                  .map((sentence, index) => (
                    <div key={index}>{sentence}</div>
                  ))}
              </div>
            </Col>
          </Row>
        </div>

        <Footer />
      </div>
    );
  } else {
    return "Loading...";
  }
}
