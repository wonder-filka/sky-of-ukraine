import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import "../../App.css";
import "./index.css";

import { CurrentUserContext } from "../../contexts/currentUser";

export default function ReportsComronent() {
  const [currentUserState] = useContext(CurrentUserContext);
  const [reports, setReports] = useState([]);
  const [translations, setTranslations] = useState([]);
  const caseColors = [
    "bg-indigo-100",
    "bg-purple-100",
    "bg-green-100",
    "bg-pink-100",
  ];

  const getTranslation = (keyi18n) => {
    const translation = translations.find((t) => t.keyi18n === keyi18n);

    return translation ? translation.value : keyi18n;
  };

  const handleDelete = async (id) => {
    try {
      const projectData = reports.find((obj) => obj.id === id);
      const {
        title,
        data,
        region,
        description,
        photo_1,
        photo_2,
        link,
        location,
      } = projectData;

      await axios.delete(process.env.REACT_APP_BACKEND_LINK + `/reports/${id}`);
      await axios.delete(process.env.REACT_APP_BACKEND_LINK + "/delete-ukr", {
        data: {
          keyi18n: [
            title,
            data,
            region,
            description,
            photo_1,
            photo_2,
            link,
            location,
          ],
        },
      });
      await axios.delete(process.env.REACT_APP_BACKEND_LINK + "/delete-en", {
        data: {
          keyi18n: [
            title,
            data,
            region,
            description,
            photo_1,
            photo_2,
            link,
            location,
          ],
        },
      });

      setReports(reports.filter((caseItem) => caseItem.id !== id));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_LINK + "/reports")
      .then((response) => setReports(response.data))
      .catch((error) => console.log(error));
    axios
      .get(process.env.REACT_APP_BACKEND_LINK + "/ukr")
      .then((response) => setTranslations(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (currentUserState.isLoggedIn === false) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div className="cases">
        <p className="text-3xl text-gray-700 font-bold m-5 p-5">Звіти</p>
        <div className="caseList container w-auto">
          {reports.map((report, index) => (
            <div
              className={`caseItem flex justify-between items-center m-5 p-1 shadow rounded-lg ${
                caseColors[index % caseColors.length]
              }`}
              key={report.id}
            >
              <div className="caseTitle m-5 py-2 font-bold">
                {getTranslation(report.title)}
              </div>

              <div className="justify-items-end flex items-center">
                <label
                  htmlFor={`toggle-${report.id}`}
                  className="flex cursor-pointer select-none items-center"
                ></label>
                <div>
                  <Link
                    to={`/report/${report.id}`}
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold m-5 py-2 px-4 rounded"
                  >
                    Редагувати
                  </Link>
                </div>
                <div>
                  <button
                    className="ml-5 bg-red-500 hover:bg-red-600 text-white font-bold m-5 py-2 px-4  rounded"
                    onClick={() => handleDelete(report.id)}
                  >
                    Видалити
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
