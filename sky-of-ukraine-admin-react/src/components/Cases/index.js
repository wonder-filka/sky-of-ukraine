import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import "../../App.css";
import "./index.css";

import { CurrentUserContext } from "../../contexts/currentUser";

export default function Cases() {
  const [currentUserState] = useContext(CurrentUserContext);
  const [projects, setProjects] = useState([]);
  const [translations, setTranslations] = useState([]);
  const caseColors = [
    "bg-indigo-100",
    "bg-purple-100",
    "bg-green-100",
    "bg-pink-100",
  ];

  const getTranslation = (keyi18n) => {
    const translation = translations.find((t) => t.keyi18n === keyi18n);
    console.log("keyi18n", keyi18n);
    console.log("translation", translation);
    return translation ? translation.value : keyi18n;
  };

  const handleDelete = async (id) => {
    try {
      const projectData = projects.find((obj) => obj.id === id);
      const {
        name,
        meta,
        target_population,
        project_duration,
        international_donor,
        implementation_locations,
        households_to_assist,
        people_to_provide,
        partners,
        distribution_subject,
      } = projectData;

      await axios.delete(process.env.REACT_APP_BACKEND_LINK + `/projects/${id}`);
      await axios.delete(process.env.REACT_APP_BACKEND_LINK + "/delete-ukr", {
        data: {
          keyi18n: [
            name,
            meta,
            target_population,
            project_duration,
            international_donor,
            implementation_locations,
            households_to_assist,
            people_to_provide,
            partners,
            distribution_subject,
          ],
        },
      });
      await axios.delete(process.env.REACT_APP_BACKEND_LINK + "/delete-en", {
        data: {
          keyi18n: [
            name,
            meta,
            target_population,
            project_duration,
            international_donor,
            implementation_locations,
            households_to_assist,
            people_to_provide,
            partners,
            distribution_subject,
          ],
        },
      });

      setProjects(projects.filter((caseItem) => caseItem.id !== id));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_LINK + "/projects")
      .then((response) => setProjects(response.data))
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
        <p className="text-3xl text-gray-700 font-bold m-5 p-5">Проекти</p>
        <div className="caseList container w-auto">
          {projects.map((project, index) => (
            <div
              className={`caseItem flex justify-between items-center m-5 p-1 shadow rounded-lg ${
                caseColors[index % caseColors.length]
              }`}
              key={project.id}
            >
              <div className="caseTitle m-5 py-2 font-bold">
                {getTranslation(project.name)}
              </div>

              <div className="justify-items-end flex items-center">
                <label
                  htmlFor={`toggle-${project.id}`}
                  className="flex cursor-pointer select-none items-center"
                ></label>
                <div>
                  <Link
                    to={`/project/${project.id}`}
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold m-5 py-2 px-4 rounded"
                  >
                    Редагувати
                  </Link>
                </div>
                <div>
                  <button
                    className="ml-5 bg-red-500 hover:bg-red-600 text-white font-bold m-5 py-2 px-4  rounded"
                    onClick={() => handleDelete(project.id)}
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
