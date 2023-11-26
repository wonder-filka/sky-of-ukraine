import React, { useState, useEffect, useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Navigation from "../Navigation";
import { CurrentUserContext } from "../../contexts/currentUser";

export default function EditProject() {
  const { id } = useParams();
  const [currentUserState] = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);
  const [projectNubmer, setProjectNumber] = useState("");
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
  const [imgMainFile, setImgMainFile] = useState(null);
  const [imgCaseFile, setImgCaseFile] = useState(null);
  const [imgMainFileFormatt, setImgMainFileFormatt] = useState(null);
  const [imgCaseFileFormatt, setImgCaseFileFormatt] = useState(null);
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
    "Dnipro",
    "Dnipropetrovsk",
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
    console.log("file", file);
    setImgMainFile(file);
    setImgMainFileFormatt(fileExtension);
  };
  
  const handleImgCaseFileChange = (event) => {
    const file = event.target.files[0];
    const fileExtension = file.name.split(".").pop();
    console.log("file", file);
    setImgCaseFile(file);
    setImgCaseFileFormatt(fileExtension);
  };

  const handleSaveButtonClick = () => {
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
      .put(process.env.REACT_APP_BACKEND_LINK + "/update-en", newDataEn)
      .then((res) => {
        console.log(res.data);
        console.log(newDataEn);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .put(process.env.REACT_APP_BACKEND_LINK + "/update-ukr", newDataUkr)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .put(process.env.REACT_APP_BACKEND_LINK + "/update-project/title", {
        id: id,
        // photo_main: `projectmain${projectNubmer}.${imgMainFileFormatt}`,
        photo_title: `project${projectNubmer}.${imgCaseFileFormatt}`,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .put(process.env.REACT_APP_BACKEND_LINK + "/update-project/main", {
        id: id,
        photo_main: `projectmain${projectNubmer}.${imgMainFileFormatt}`,
        //  photo_title: `project${projectNubmer}.${imgCaseFileFormatt}`,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .put(process.env.REACT_APP_BACKEND_LINK + "/update-project/region", {
        id: id,
        location: projectData.region,
        //  photo_title: `project${projectNubmer}.${imgCaseFileFormatt}`,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
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
    axios.get(process.env.REACT_APP_BACKEND_LINK + `/projects/${id}`).then((response) => {
      const {
        id,
        photo_title,
        photo_main,
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
        region,
      } = response.data;

      setProjectData(response.data);
      console.log("projectData", projectData);
      const photoTitleExtension = photo_title.split(".").pop();
      const photoMainExtension = photo_main.split(".").pop();
      setImgCaseFileFormatt(photoTitleExtension);
      setImgMainFileFormatt(photoMainExtension);
      setProjectNumber(id);
      console.log(response.data);
      setNewDataEn((prevData) => [
        { ...prevData[0], keyi18n: name },
        { ...prevData[1], keyi18n: meta },
        { ...prevData[2], keyi18n: target_population },
        { ...prevData[3], keyi18n: project_duration },
        { ...prevData[4], keyi18n: international_donor },
        { ...prevData[5], keyi18n: implementation_locations },
        { ...prevData[6], keyi18n: households_to_assist },
        { ...prevData[7], keyi18n: people_to_provide },
        { ...prevData[8], keyi18n: partners },
        { ...prevData[9], keyi18n: distribution_subject },
      ]);
      setNewDataUkr((prevData) => [
        { ...prevData[0], keyi18n: name },
        { ...prevData[1], keyi18n: meta },
        { ...prevData[2], keyi18n: target_population },
        { ...prevData[3], keyi18n: project_duration },
        { ...prevData[4], keyi18n: international_donor },
        { ...prevData[5], keyi18n: implementation_locations },
        { ...prevData[6], keyi18n: households_to_assist },
        { ...prevData[7], keyi18n: people_to_provide },
        { ...prevData[8], keyi18n: partners },
        { ...prevData[9], keyi18n: distribution_subject },
      ]);
      axios.get(process.env.REACT_APP_BACKEND_LINK + `/en`).then((response) => {
        const nameItem = response.data.find(
          (item) => item.keyi18n === name
        )?.value;
        const metaItem = response.data.find(
          (item) => item.keyi18n === meta
        )?.value;
        const targetPopulationItem = response.data.find(
          (item) => item.keyi18n === target_population
        )?.value;
        const projectDurationItem = response.data.find(
          (item) => item.keyi18n === project_duration
        )?.value;
        const donorItem = response.data.find(
          (item) => item.keyi18n === international_donor
        )?.value;
        const locatItem = response.data.find(
          (item) => item.keyi18n === implementation_locations
        )?.value;
        const householdItem = response.data.find(
          (item) => item.keyi18n === households_to_assist
        )?.value;
        const peopleItem = response.data.find(
          (item) => item.keyi18n === people_to_provide
        )?.value;
        const partnersItem = response.data.find(
          (item) => item.keyi18n === partners
        )?.value;
        const sunjectItem = response.data.find(
          (item) => item.keyi18n === distribution_subject
        )?.value;
        setNewDataEn((prevData) => [
          { ...prevData[0], value: nameItem },
          { ...prevData[1], value: metaItem },
          { ...prevData[2], value: targetPopulationItem },
          { ...prevData[3], value: projectDurationItem },
          { ...prevData[4], value: donorItem },
          { ...prevData[5], value: locatItem },
          { ...prevData[6], value: householdItem },
          { ...prevData[7], value: peopleItem },
          { ...prevData[8], value: partnersItem },
          { ...prevData[9], value: sunjectItem },
        ]);
      });

      axios.get(process.env.REACT_APP_BACKEND_LINK + `/ukr`).then((response) => {
        const nameItem = response.data.find(
          (item) => item.keyi18n === name
        )?.value;
        const metaItem = response.data.find(
          (item) => item.keyi18n === meta
        )?.value;
        const targetPopulationItem = response.data.find(
          (item) => item.keyi18n === target_population
        )?.value;
        const projectDurationItem = response.data.find(
          (item) => item.keyi18n === project_duration
        )?.value;
        const donorItem = response.data.find(
          (item) => item.keyi18n === international_donor
        )?.value;
        const locatItem = response.data.find(
          (item) => item.keyi18n === implementation_locations
        )?.value;
        const householdItem = response.data.find(
          (item) => item.keyi18n === households_to_assist
        )?.value;
        const peopleItem = response.data.find(
          (item) => item.keyi18n === people_to_provide
        )?.value;
        const partnersItem = response.data.find(
          (item) => item.keyi18n === partners
        )?.value;
        const sunjectItem = response.data.find(
          (item) => item.keyi18n === distribution_subject
        )?.value;
        setNewDataUkr((prevData) => [
          { ...prevData[0], value: nameItem },
          { ...prevData[1], value: metaItem },
          { ...prevData[2], value: targetPopulationItem },
          { ...prevData[3], value: projectDurationItem },
          { ...prevData[4], value: donorItem },
          { ...prevData[5], value: locatItem },
          { ...prevData[6], value: householdItem },
          { ...prevData[7], value: peopleItem },
          { ...prevData[8], value: partnersItem },
          { ...prevData[9], value: sunjectItem },
        ]);
      });
    });
  }, [id]);

  useEffect(() => {
    if (isSaved) {
      setTimeout(() => {
        setIsSaved(false);
      }, 2000); // Устанавливаем время появления/исчезновения блока в 2 секунды
    }
  }, [isSaved]);

  if (currentUserState.isLoggedIn === false) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div className="edit-case bg-white flex min-h-screen">
        {isSaved && (
          <div className="saved bg-white border border-grey-900 rounded-lg shadow font-light">
            Збережено
          </div>
        )}
        <Navigation />

        <div className="w-screen">
          <div className="flex justify-between items-center">
            <p className="text-3xl text-gray-700 font-bold m-1 p-5">
              Редагування проекту
            </p>

            <button
              onClick={handleSaveButtonClick}
              className="ml-5 bg-blue-400 hover:bg-blue-500 text-white font-bold m-5 py-2 px-4  rounded"
            >
              Зберегти
            </button>
          </div>
          <div className="send-img flex pl-5">
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
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
            <div className="english shadow bg-purple-200">
              <div className="text-2xl text-gray-500 mt-5 mb-5 text-center">
                Українська
              </div>

              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="titleEn">Назва:</label>
                <input
                  type="text"
                  className="mt-2 px-4 py-2 border rounded "
                  name="titleEn"
                  value={newDataUkr[0].value || ""}
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
                  name="descriptionEn"
                  value={newDataUkr[1].value || ""}
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
                  value={newDataUkr[2].value || ""}
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
                <label htmlFor="resultEn">Термін реалізації проекту:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="resultEn"
                  value={newDataUkr[3].value || ""}
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
                <label htmlFor="keysinfoEn">Міжнародний донор проекту:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  value={newDataUkr[4].value || ""}
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
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="descriptionEn">
                  Населенні пункти в яких реалізовується проект:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="descriptionEn"
                  value={newDataUkr[5].value || ""}
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
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="descriptionEn">
                  {" "}
                  Кількість домогосподарств, яким планується надати гуманітарну
                  допомогу:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="descriptionEn"
                  value={newDataUkr[6].value || ""}
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
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="descriptionEn">
                  {" "}
                  Кількість людей, яких планується забезпечити продуктами
                  харчування та непродовольчою допомогою:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="descriptionEn"
                  value={newDataUkr[7].value || ""}
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
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="descriptionEn">
                  Партнери по реалізації проєкту:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="descriptionEn"
                  value={newDataUkr[8].value || ""}
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
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="descriptionEn">
                  Предмет дистрибуції: В рамках цього проєкту проводиться
                  розподіл наступних продуктів та речей:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="descriptionEn"
                  value={newDataUkr[9].value || ""}
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
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="titleEn">Назва:</label>
                <input
                  type="text"
                  className="mt-2 px-4 py-2 border rounded "
                  name="titleEn"
                  value={newDataEn[0].value || ""}
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
                  name="descriptionEn"
                  value={newDataEn[1].value || ""}
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
                  value={newDataEn[2].value || ""}
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
                <label htmlFor="resultEn">Термін реалізації проекту:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="resultEn"
                  value={newDataEn[3].value || ""}
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
                <label htmlFor="keysinfoEn">Міжнародний донор проекту:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  value={newDataEn[4].value || ""}
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
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="descriptionEn">
                  {" "}
                  Населенні пункти в яких реалізовується проект:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="descriptionEn"
                  value={newDataEn[5].value || ""}
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
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="descriptionEn">
                  {" "}
                  Кількість домогосподарств, яким планується надати гуманітарну
                  допомогу:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="descriptionEn"
                  value={newDataEn[6].value || ""}
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
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="descriptionEn">
                  {" "}
                  Кількість людей, яких планується забезпечити продуктами
                  харчування та непродовольчою допомогою::
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="descriptionEn"
                  value={newDataEn[7].value || ""}
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
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="descriptionEn">
                  Партнери по реалізації проєкту:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="descriptionEn"
                  value={newDataEn[8].value || ""}
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
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="descriptionEn">
                  Предмет дистрибуції: В рамках цього проєкту проводиться
                  розподіл наступних продуктів та речей:
                </label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="descriptionEn"
                  value={newDataEn[9].value || ""}
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
}
