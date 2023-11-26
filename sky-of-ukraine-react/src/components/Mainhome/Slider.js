import ParImg1 from "../../assets/partner1.jpg";
import ParImg2 from "../../assets/partner2.png";
import ParImg3 from "../../assets/partner3.png";
import ParImg4 from "../../assets/partner4.jpg";
import ParImg5 from "../../assets/partner5.jpg";
import ParImg6 from "../../assets/partner6.jpg";
import ParImg7 from "../../assets/partner7.jpg";
import ParImg8 from "../../assets/partner8.png";
import ParImg9 from "../../assets/partner9.jpg";
import ParImg11 from "../../assets/partner11.jpg";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import { t } from "i18next";
import { baseUrl } from "../../config";

export default function Slider() {

  return (
    <div className="slider-partners">
      <Carousel
        className="slider"
        prevIcon={
          <span aria-hidden="true" className="carousel-control-prev-icon">
            <img src={baseUrl + "/sliderPrev.png"} alt="slider prev" />
          </span>
        }
        nextIcon={
          <span aria-hidden="true" className="carousel-control-prev-icon">
            <img src={baseUrl + "/slideNext.png"} alt="slider next" />
          </span>
        }
      >
        <Carousel.Item>
          <div className="slider-screen container">
            <div className="card-patner">
              <img src={ParImg1} alt="partner" className="" />
              <h4 className="my-3">{t("partner 1 title")}</h4>
              <p>{t("partner 1 p")}</p>
              <a
                href="https://www.samaritanspurse.org/"
                className="btn-req-support btn-card-partner"
                target="_blank"
              >
                {t("btn partners")}
              </a>
            </div>
            <div className="card-patner">
              <img src={ParImg2} alt="partner" className="" />
              <h4 className="my-3">{t("partner 2 title")}</h4>
              <p>{t("partner 2 p")}</p>
              <a
                href="https://www.etoc.org.ua/p/pro-fond.html"
                className="btn-req-support btn-card-partner"
                target="_blank"
              >
                {t("btn partners")}
              </a>
            </div>
            <div className="card-patner">
              <img src={ParImg3} alt="partner" className="" />
              <h4 className="my-3">{t("partner 3 title")}</h4>
              <p>{t("partner 3 p")}</p>
              <a
                href="https://www.ourheartua.org.ua/"
                className="btn-req-support btn-card-partner"
                target="_blank"
              >
                {t("btn partners")}
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-screen container">
            <div className="card-patner">
              <img src={ParImg4} alt="partner" className="" />
              <h4 className="my-3">{t("partner 4 title")}</h4>
              <p>{t("partner 4 p")}</p>
              <a
                href="https://www.emaus.in.ua/"
                className="btn-req-support btn-card-partner"
                target="_blank"
              >
                {t("btn partners")}
              </a>
            </div>
            <div className="card-patner">
              <img src={ParImg5} alt="partner" className="" />
              <h4 className="my-3">{t("partner 5 title")}</h4>
              <p>{t("partner 5 p")}</p>
              <a
                href="https://www.facebook.com/ironangelskr"
                className="btn-req-support btn-card-partner"
                target="_blank"
              >
                {t("btn partners")}
              </a>
            </div>
            <div className="card-patner">
              <img src={ParImg6} alt="partner" className="" />
              <h4 className="my-3">{t("partner 6 title")}</h4>
              <p>{t("partner 6 p")}</p>
              <a
                href="https://www.instagram.com/bon_charity_for_ukraine/"
                className="btn-req-support btn-card-partner"
                target="_blank"
              >
                {t("btn partners")}
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-screen container">
            <div className="card-patner">
              <img src={ParImg7} alt="partner" className="" />
              <h4 className="my-3">{t("partner 7 title")}</h4>
              <p>{t("partner 7 p")}</p>
              <a
                href="https://www.instagram.com/dobro.kr/?igshid=NDk5N2NlZjQ%3D"
                className="btn-req-support btn-card-partner"
                target="_blank"
              >
                {t("btn partners")}
              </a>
            </div>
            <div className="card-patner">
              <img src={ParImg8} alt="partner" className="" />
              <h4 className="my-3">{t("partner 8 title")}</h4>
              <p>{t("partner 8 p")}</p>
              <a
                href="https://gosich.info/#about"
                className="btn-req-support btn-card-partner"
                target="_blank"
              >
                {t("btn partners")}
              </a>
            </div>
            <div md={3} className="card-patner">
              <img src={ParImg9} alt="partner" className="" />
              <h4 className="my-3">{t("partner 9 title")}</h4>
              <p>{t("partner 9 p")}</p>
              <a
                href="https://www.facebook.com/evangelist.church.50"
                className="btn-req-support btn-card-partner"
                target="_blank"
              >
                {t("btn partners")}
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-screen container">
            <div md={3} className="card-patner">
              <img src={ParImg11} alt="partner" className="" />
              <h4 className="my-3">{t("partner 11 title")}</h4>
              <p>{t("partner 9 p")}</p>
              <a
                href="https://www.facebook.com/evangelist.church.50"
                className="btn-req-support btn-card-partner"
                target="_blank"
              >
                {t("btn partners")}
              </a>
            </div>
            <div md={3} className="card-patner"></div>
            <div md={3} className="card-patner"></div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
