import React, { useState, useEffect, useContext } from "react";
import Navigation from "../../components/Navigation";
import { Navigate } from "react-router-dom";
import "../../App.css";
import axios from "axios";
import { CurrentUserContext } from "../../contexts/currentUser";

export const AddReport = () => {
  const [currentUserState] = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);
  const [label, setLabel] = useState("Saved");
  const [projects, setProjects] = useState([]);
  const [errorPhoto, setErrorPhoto] = useState("");
  const [error, setError] = useState("");
  const [errorLink, setErrorLink] = useState("");
  const [projectNubmer, setProjectNumber] = useState(null);
  const [imgMainFile, setImgMainFile] = useState(null);
  const [imgCaseFile, setImgCaseFile] = useState(null);
  const [imgMainFileFormatt, setImgMainFileFormatt] = useState(null);
  const [imgCaseFileFormatt, setImgCaseFileFormatt] = useState(null);

  const [projectData, setProjectData] = useState({
    title: ``,
    data: ``,
    region: ``,
    description: ``,
    photo_1: ``,
    photo_2: ``,
    link: ``,
    location: ``,
    publicationDate: ``,
  });

  const [newDataEn, setNewDataEn] = useState([
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
  ]);

  const months = {
    1: "Січень",
    2: "Лютий",
    3: "Березень",
    4: "Квітень",
    5: "Травень",
    6: "Червень",
    7: "Липень",
    8: "Серпень",
    9: "Вересень",
    10: "Жовтень",
    11: "Листопад",
    12: "Грудень",
  };

  const monthsEn = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const currentDate = new Date();
  const [day, setDay] = useState(currentDate.getDate().toString());
  const [month, setMonth] = useState((currentDate.getMonth() + 1).toString()); // +1, так как месяцы начинаются с 0
  const [year, setYear] = useState(currentDate.getFullYear().toString());
  const selectedMonthUkr = months[month];
  const selectedMonthEn = monthsEn[month];
  const [finalDate, setFinalDate] = useState(`${year}-${month}-${day}`);
  const [finalDateUkr, setFinalDateUkr] = useState(
    `${day} ${selectedMonthUkr}, ${year}`
  );
  const [finalDateEn, setFinalDateEn] = useState(
    `${selectedMonthEn} ${day}, ${year}`
  );

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
  const regionsFull = [
    "Volyn Region",
    "Rivne Region",
    "Kyiv Region",
    "Zhytomyr Region",
    "Chernihiv Region",
    "Sumy Region",
    "Lviv Region",
    "Kharkiv Region",
    "Luhansk Region",
    "Donetsk Region",
    "Dnipro Region",
    "Poltava Region",
    "Cherkasy Region",
    "Kyiv-City",
    "Vinnytsia Region",
    "Khmelnytskyi Region",
    "Ternopil Region",
    "Ivano-Frankivsk Region",
    "Zakarpattia Region",
    "Chernivtsi Region",
    "Kirovohrad Region",
    "Mykolaiv Region",
    "Odessa Region",
    "Kherson Region",
    "Zaporizhia Region",
    "Crimea",
  ];

  const regionsUkrainian = [
    "Волинська область",
    "Рівненська область",
    "Київська область",
    "Житомирська область",
    "Чернігівська область",
    "Сумська область",
    "Львівська область",
    "Харківська область",
    "Луганська область",
    "Донецька область",
    "Дніпровська область",
    "Полтавська область",
    "Черкаська область",
    "Київ",
    "Вінницька область",
    "Хмельницька область",
    "Тернопільська область",
    "Івано-Франківська область",
    "Закарпатська область",
    "Чернівецька область",
    "Кіровоградська область",
    "Миколаївська область",
    "Одеська область",
    "Херсонська область",
    "Запорізька область",
    "АР Крим",
  ];
  const updateFinalDate = () => {
    setFinalDate(`${year}-${month}-${day}`);
    setNewDataEn((prevData) => [
      { ...prevData[0] },
      { ...prevData[1], value: `${selectedMonthEn} ${day}, ${year}` },
      { ...prevData[2] },
      { ...prevData[3] },
    ]);
    setNewDataUkr((prevData) => [
      { ...prevData[0] },
      { ...prevData[1], value: `${day} ${selectedMonthUkr}, ${year}` },
      { ...prevData[2] },
      { ...prevData[3] },
    ]);
    setProjectData((prevData) => ({
      ...prevData,
      publicationDate: `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`,
    }));
  };

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

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    const index = regions.indexOf(selectedRegion);
    setProjectData((prevData) => ({
      ...prevData,
      location: selectedRegion,
    }));
    if (index !== -1) {
      const regionNewUkr = regionsUkrainian[index];
      const regionNewEn = regionsFull[index];
      setNewDataEn((prevData) => [
        { ...prevData[0] },
        { ...prevData[1] },
        { ...prevData[2], value: regionNewEn },
        { ...prevData[3] },
      ]);
      setNewDataUkr((prevData) => [
        { ...prevData[0] },
        { ...prevData[1] },
        { ...prevData[2], value: regionNewUkr },
        { ...prevData[3] },
      ]);
    }
  };

  const handleSaveButtonClick = () => {
    if (!imgMainFileFormatt || !imgCaseFileFormatt || !projectNubmer) {
      console.error("File formats or project number are not defined");
      setErrorPhoto("Додайте фото звіту");
      return;
    }
    if (projectData.location === "") {
      setError("Оберіть регіон");
      return;
    }
    if (projectData.link === "") {
      setErrorLink("Введіть посилання");
      return;
    }
console.log(projectData)
    const formData = new FormData();
    formData.append(`zvit${projectNubmer}.${imgMainFileFormatt}`, imgMainFile);
    formData.append(
      `zvit${projectNubmer}_1.${imgCaseFileFormatt}`,
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
      .post(process.env.REACT_APP_BACKEND_LINK + "/add-report", {
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

  useEffect(() => {
    updateFinalDate();
  }, [day, month, year]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_LINK + `/reports`).then((response) => {
      setProjects(response.data);
      const lastProject = response.data[response.data.length - 1];
      const lastProjectId = lastProject ? lastProject.id : null;
      setProjectNumber(lastProjectId + 1);
      setProjectData({
        title: `zvit ${lastProjectId + 1} title`,
        data: `report data ${lastProjectId + 1}`,
        region: `report data location ${lastProjectId + 1}`,
        description: `zvit ${lastProjectId + 1} description`,
        photo_1: ``,
        photo_2: ``,
        link: ``,
        location: ``,
        publicationDate: `${year}-${month.toString().padStart(2, "0")}-${day
          .toString()
          .padStart(2, "0")}`,
      });
      setNewDataEn([
        { keyi18n: `zvit ${lastProjectId + 1} title`, value: "" },
        {
          keyi18n: `report data ${lastProjectId + 1}`,
          value: `${selectedMonthEn} ${day}, ${year}`,
        },
        { keyi18n: `report data location ${lastProjectId + 1}`, value: "" },
        { keyi18n: `zvit ${lastProjectId + 1} description`, value: "" },
      ]);

      setNewDataUkr([
        { keyi18n: `zvit ${lastProjectId + 1} title`, value: "" },
        {
          keyi18n: `report data ${lastProjectId + 1}`,
          value: `${day} ${selectedMonthUkr}, ${year}`,
        },
        { keyi18n: `report data location ${lastProjectId + 1}`, value: "" },
        { keyi18n: `zvit ${lastProjectId + 1} description`, value: "" },
      ]);
    });
  }, []);

  useEffect(() => {
    setProjectData((prevData) => ({
      ...prevData,
      photo_1: `zvit${projectNubmer}.${imgMainFileFormatt}`,
      photo_2: `zvit${projectNubmer}_1.${imgMainFileFormatt}`,
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
              Додати звіт
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
              <select
                onChange={handleRegionChange}
                value={projectData.location}
              >
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
                    ]);
                  }}
                />
              </div>

              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="resultEn">Опис:</label>
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
                    ]);
                  }}
                />
              </div>

              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="resultEn">Опис:</label>
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

                    ]);
                  }}
                />
              </div>
            </div>
            <div className="field text-gray-600 focus-within:text-purple-600  m-3">
              <label htmlFor="date">Дата публікації:</label>
              <div className="flex flex-wrap">
                <select
                  className="mt-2 px-4 py-2 border rounded"
                  name="day"
                  value={day}
                  onChange={(e) => {
                    setDay(e.target.value);
                  }}
                >
                  {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                  ].map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                <select
                  className="mt-2 px-4 py-2 border rounded"
                  name="month"
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                  value={month}
                >
                  {Object.keys(months).map((monthNumber) => (
                    <option key={monthNumber} value={monthNumber}>
                      {months[monthNumber]}
                    </option>
                  ))}
                </select>
                <select
                  className="mt-2 px-4 py-2 border rounded"
                  name="year"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                >
                  {[
                    2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031,
                    2032,
                  ].map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <br />

              <div className="field  text-gray-400">
                Дата укр.: {newDataUkr[1].value}
              </div>
              <div className="field  text-gray-400">
                Дата англ.: {newDataEn[1].value}
              </div>
              <div className="field  text-gray-400">
                Регіон укр.: {newDataUkr[2].value}
              </div>
              <div className="field  text-gray-400">
                Регіон англ.: {newDataEn[2].value}
              </div>
            </div>
            <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
              <label htmlFor="resultEn">Посилання:</label>
              <textarea
                type="text"
                className="mt-2 px-4 py-2 border rounded  h-24"
                name="resultEn"
                value={projectData.link}
                onChange={(e) => {
                  setProjectData((prevData) => ({
                    ...prevData,
                    link: e.target.value,
                  }));
                }}
              />
              <div className="text-red-400">{errorLink}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
