import React, { useState, useEffect } from "react";
import "./FormHelp.css";
import axios from "axios";
import { t } from "i18next";

export default function FormHelp() {
  const [formWasSend, setformWasSend] = useState("");
  const [contactInputs, setcontactInputs] = useState("");
  useEffect(() => {
    setformWasSend(document.getElementById("formWasSend"));
    setcontactInputs(document.getElementById("contact"));
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    typeHelp: "Гуманітарна Допомога",
    message: "",
  });

  function closeForm(event) {
    event.preventDefault();
    const formHelp = document.getElementById("contact-block");
    const homepage = document.getElementById("homepage");
    formHelp.classList.add("close-form");
    formHelp.classList.remove("open-form");
    homepage.classList.remove("blur-background");
  }

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const backendUrlBase = "https://api.skyua.org";

  const requestController = new AbortController();

  async function callMyEndpoint(event) {
    event.preventDefault();
    try {
      await axios.post(
        `${backendUrlBase}/my-endpoint`,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          typeHelp: formData.typeHelp,
          message: formData.message,
        },
        {
          signal: requestController.signal,
        }
      );
      contactInputs.classList.remove("open-form");
      contactInputs.classList.add("close-form");
      formWasSend.classList.remove("close-form");
      formWasSend.classList.add("open-form-send");
    } catch (err) {
      if (axios.isCancel(err)) {
      }
    }
  }

  return (
    <div className="form-need-help close-form" id="contact-block">
      <div id="formWasSend" className="close-form">
        <button onClick={closeForm} className="close-btn" id="closeSent">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 7L7 25"
              stroke="#4C94FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 25L7 7"
              stroke="#4C94FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="sent-title">
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 75C58.2107 75 75 58.2107 75 37.5C75 16.7893 58.2107 0 37.5 0C16.7893 0 0 16.7893 0 37.5C0 58.2107 16.7893 75 37.5 75Z"
              fill="#4C94FF"
            />
            <path
              d="M54.6875 28.125L31.7578 50L20.3125 39.0625"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h3>{t("form sent text")}</h3>
        </div>
      </div>
      <form id="contact" onSubmit={callMyEndpoint}>
        <div className="form-menu">
          <h3>{t(`form title`)}</h3>
          <button onClick={closeForm} className="close-btn">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 7L7 25"
                stroke="#4C94FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 25L7 7"
                stroke="#4C94FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div>
          <div className="input_item" id="formInputs">
            <label htmlFor="name">{t("form name title")}</label>
            <input
              id="formName"
              type="text"
              name="name"
              className="form_input"
              placeholder={t("form name placeholder")}
              tabIndex="1"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input_item">
            <label htmlFor="phone">{t("form phone title")}</label>
            <input
              placeholder={t("form phone placeholder")}
              id="formPhone"
              type="text"
              name="phone"
              className="form_input "
              tabIndex="3"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input_item">
            <label htmlFor="email">{t("form email title")}</label>
            <input
              placeholder={t("form email placeholder")}
              id="formEmail"
              type="text"
              name="email"
              className="form_input"
              tabIndex="2"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input_item">
            <label htmlFor="help-item">{t("form type help title")}</label>
            <select name="typeHelp" id="type-help" onChange={handleChange}>
              <option value="Гуманітарна допомога">
                {t("form type help val 1")}
              </option>
              <option value="Медична допомога">
                {t("form type help val 2")}
              </option>
              <option value="Військова допомога">
                {t("form type help val 3")}
              </option>
            </select>
          </div>
          <div className="input_item">
            <label htmlFor="message">{t("form message title")}</label>
            <textarea
              name="message"
              id="message"
              placeholder={t("form message placeholder")}
              tabIndex="5"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="input_item">
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              {t("form btn")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
