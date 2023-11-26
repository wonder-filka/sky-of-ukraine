import React, { useState, useEffect, useContext } from "react";
import Navigation from "../../components/Navigation";
import { Navigate } from "react-router-dom";
import "../../App.css";
import axios from "axios";
import { CurrentUserContext } from "../../contexts/currentUser";

export const AddProject = () => {
  const [currentUserState] = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);
  const [label, setLabel] = useState("Saved");
  const [projects, setProjects] = useState([]);
  const [errorPhoto, setErrorPhoto] = useState("");
  const [error, setError] = useState("");
  const [projectNubmer, setProjectNumber] = useState(null);
  const [imgMainFile, setImgMainFile] = useState(null);
  const [imgCaseFile, setImgCaseFile] = useState(null);
  const [imgMainFileFormatt, setImgMainFileFormatt] = useState(null);
  const [imgCaseFileFormatt, setImgCaseFileFormatt] = useState(null);

  const [projectData, setProjectData] = useState({
    name: ``,
    photo_title: ``,
    photo_main: ``,
    meta: ``,
    target_population: ``,
    project_duration: ``,
    international_donor: ``,
    implementation_locations: ``,
    households_to_assist: ``,
    people_to_provide: ``,
    partners: ``,
    distribution_subject: ``,
    region: ``,
  });

  const [newDataEn, setNewDataEn] = useState([
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
  ]);
  const [newDataUkr, setNewDataUkr] = useState([
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
  ]);

  const regions = [
    "Volyn",
    "Rivne",
    "Kyiv",
    "Zhytomyr",
    "Chernihiv",
    "Sumy",
    "Lviv",
    "Kharkiv",
    "Luhansk",
    "Donetsk",
    "Dnipro",
    "Poltava",
    "Cherkasy",
    "Kyiv-City",
    "Vinnytsia",
    "Khmelnytskyi",
    "Ternopil",
    "Ivano-Frankivsk",
    "Zakarpattia",
    "Chernivtsi",
    "Kirovohrad",
    "Mykolaiv",
    "Odessa",
    "Kherson",
    "Zaporizhia",
    "Crimea",
  ];

  const handleImgMainFileChange = (event) => {
    const file = event.target.files[0];
    const fileExtension = file.name.split(".").pop();
    setImgMainFile(file);
    setImgMainFileFormatt(fileExtension);
  };

  const handleImgCaseFileChange = (event) => {
    const file = event.target.files[0];
    const fileExtension = file.name.split(".").pop();
    setImgCaseFile(file);
    setImgCaseFileFormatt(fileExtension);
  };

  const handleSaveButtonClick = () => {
    if (!imgMainFileFormatt || !imgCaseFileFormatt || !projectNubmer) {
      console.error("File formats or project number are not defined");
      setErrorPhoto("Додайте фото проекту");
      return;
    }
    if (projectData.region === "") {
      setError("Оберіть регіон");
      return;
    }
    const formData = new FormData();
    formData.append(
      `projectmain${projectNubmer}.${imgMainFileFormatt}`,
      imgMainFile
    );
    formData.append(
      `project${projectNubmer}.${imgCaseFileFormatt}`,
      imgCaseFile
    );
    axios
      .post(process.env.REACT_APP_BACKEND_LINK + "/save-files", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .post(process.env.REACT_APP_BACKEND_LINK + "/add-project", {
        projectData,
        dataEn: newDataEn,
        dataUkr: newDataUkr,
      })
      .then((response) => {
        console.log(response.data);
        setIsSaved(true); //
        setLabel("Saved");
      })
      .catch((error) => {
        console.error(error); //
        setLabel(error);
      });
    setIsSaved(true);
  };

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setProjectData((prevData) => ({
      ...prevData,
      region: selectedRegion,
    }));
  };

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_LINK + `/projects`).then((response) => {
      setProjects(response.data);
      const lastProject = response.data[response.data.length - 1];
      const lastProjectId = lastProject ? lastProject.id : null;
      setProjectNumber(lastProjectId + 1);
      console.log("ID последнего проекта:", lastProjectId);
      setProjectData({
        name: `name title proj ${lastProjectId + 1}`,
        photo_title: ``,
        photo_main: ``,
        meta: `goal proj ${lastProjectId + 1}`,
        target_population: `target proj ${lastProjectId + 1}`,
        project_duration: `time proj ${lastProjectId + 1}`,
        international_donor: `donor proj ${lastProjectId + 1}`,
        implementation_locations: `locations proj ${lastProjectId + 1}`,
        households_to_assist: `households proj ${lastProjectId + 1}`,
        people_to_provide: `people proj ${lastProjectId + 1}`,
        partners: `partners proj ${lastProjectId + 1}`,
        distribution_subject: `subject ${lastProjectId + 1}`,
        region: ``,
      });
      setNewDataEn([
        { keyi18n: `name title proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `goal proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `target proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `time proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `donor proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `locations proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `households proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `people proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `partners proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `subject ${lastProjectId + 1}`, value: "" },
      ]);

      setNewDataUkr([
        { keyi18n: `name title proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `goal proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `target proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `time proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `donor proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `locations proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `households proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `people proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `partners proj ${lastProjectId + 1}`, value: "" },
        { keyi18n: `subject ${lastProjectId + 1}`, value: "" },
      ]);
    });
  }, []);

  useEffect(() => {
    setProjectData((prevData) => ({
      ...prevData,
      photo_title: `project${projectNubmer}.${imgMainFileFormatt}`,
      photo_main: `projectmain${projectNubmer}.${imgCaseFileFormatt}`,
    }));
  }, [imgMainFileFormatt, imgCaseFileFormatt, projectNubmer]);

  useEffect(() => {
    if (isSaved) {
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    }
  }, [isSaved]);

  if (currentUserState.isLoggedIn === false) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div className="AddCase bg-white flex ">
        {isSaved && (
          <div className="saved bg-white border border-grey-900 rounded-lg shadow font-light ">
            {label}
          </div>
        )}
        <Navigation />
        <div className="p-5 w-screen">
          <div className="flex justify-between items-center">
            <p className="text-3xl text-gray-700 font-bold m-1 p-5">
              Додати проект
            </p>
            <button
              onClick={handleSaveButtonClick}
              className="ml-5 bg-blue-400 hover:bg-blue-500 text-white font-bold m-5 py-2 px-4  rounded"
            >
              Зберегти
            </button>
          </div>
          <div className="send-img flex p-1 pb-3">
            <div className="">
              <div className="font-bold mb-1">Картинка в проекті і на мапі</div>
              <form encType="multipart/form-data" className="flex items-center">
                <input
                  type="file"
                  name="fileHead"
                  onChange={handleImgMainFileChange}
                  className=" py-2 px-3"
                />
              </form>
            </div>
            <div className="ml-3">
              <div className="font-bold  mb-1">Картинка на слайдері</div>
              <form encType="multipart/form-data" className="flex items-center">
                <input
                  type="file"
                  name="fileBlock"
                  onChange={handleImgCaseFileChange}
                  className=" py-2 px-3"
                />
              </form>
              <div className="text-red-400">{errorPhoto}</div>
            </div>
            <div>
              <div className="font-bold  mb-1">Регіон</div>
              <select onChange={handleRegionChange} value={projectData.region}>
                <option value="" disabled>
                  Виберіть регіон
                </option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              <div className="text-red-400">{error}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="english shadow bg-purple-200">
              <div className="text-2xl text-gray-500 mt-5 mb-5 text-center">
                Українська
              </div>

              <div className="field  text-gray-400 focus-within:text-purple-600 m-3">
                <label htmlFor="titleEn">Назва:</label>
                <input
                  type="text"
                  className="mt-2 px-4 py-2 border rounded"
                  name="titleUkr"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataUkr((prevData) => [
                      { ...prevData[0], value: e.target.value },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="descriptionEn">Мета:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="descriptionUkr"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataUkr((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1], value: e.target.value },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="needEn">Цільове населення:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="needEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataUkr((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2], value: e.target.value },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="resultEn"> Термін реалізації проекту:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="resultEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataUkr((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3], value: e.target.value },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="keysinfoEn"> Міжнародний донор проекту:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataUkr((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4], value: e.target.value },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>

              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="keysinfoEn">
                  {" "}
                  Населенні пункти в яких реалізовується проект:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataUkr((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5], value: e.target.value },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>

              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="keysinfoEn">
                  {" "}
                  Кількість домогосподарств, яким планується надати гуманітарну
                  допомогу:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataUkr((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6], value: e.target.value },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>

              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="keysinfoEn">
                  Кількість людей, яких планується забезпечити продуктами
                  харчування та непродовольчою допомогою:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataUkr((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7], value: e.target.value },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>

              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="keysinfoEn">
                  {" "}
                  Партнери по реалізації проєкту:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataUkr((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8], value: e.target.value },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>

              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="keysinfoEn">
                  {" "}
                  Предмет дистрибуції: В рамках цього проєкту проводиться
                  розподіл наступних продуктів та речей:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataUkr((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9], value: e.target.value },
                    ]);
                  }}
                />
              </div>
            </div>
            <div className="german shadow bg-indigo-200">
              <div className="text-2xl text-gray-500 mt-5 mb-5 text-center">
                Англійська
              </div>
              <div className="field  text-gray-400 focus-within:text-purple-600 m-3">
                <label htmlFor="titleEn">Назва:</label>
                <input
                  type="text"
                  className="mt-2 px-4 py-2 border rounded"
                  name="titleUkr"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0], value: e.target.value },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="descriptionEn">Мета:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="descriptionUkr"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1], value: e.target.value },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="needEn">Цільове населення:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="needEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2], value: e.target.value },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="resultEn"> Термін реалізації проекту:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="resultEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3], value: e.target.value },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="keysinfoEn"> Міжнародний донор проекту:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4], value: e.target.value },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>

              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="keysinfoEn">
                  {" "}
                  Населенні пункти в яких реалізовується проект:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5], value: e.target.value },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>

              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="keysinfoEn">
                  {" "}
                  Кількість домогосподарств, яким планується надати гуманітарну
                  допомогу:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6], value: e.target.value },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>

              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="keysinfoEn">
                  Кількість людей, яких планується забезпечити продуктами
                  харчування та непродовольчою допомогою:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7], value: e.target.value },
                      { ...prevData[8] },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>

              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="keysinfoEn">
                  {" "}
                  Партнери по реалізації проєкту:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8], value: e.target.value },
                      { ...prevData[9] },
                    ]);
                  }}
                />
              </div>

              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="keysinfoEn">
                  {" "}
                  Предмет дистрибуції: В рамках цього проєкту проводиться
                  розподіл наступних продуктів та речей:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  placeholder=""
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                      { ...prevData[5] },
                      { ...prevData[6] },
                      { ...prevData[7] },
                      { ...prevData[8] },
                      { ...prevData[9], value: e.target.value },
                    ]);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
