import React, { useState, useEffect, useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Navigation from "../Navigation";
import { CurrentUserContext } from "../../contexts/currentUser";

export default function EditReport() {
  const { id } = useParams();
  const [currentUserState] = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);
  const [projectNubmer, setProjectNumber] = useState("");
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
  const [imgMainFile, setImgMainFile] = useState(null);
  const [imgCaseFile, setImgCaseFile] = useState(null);
  const [imgMainFileFormatt, setImgMainFileFormatt] = useState(null);
  const [imgCaseFileFormatt, setImgCaseFileFormatt] = useState(null);
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
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [finalDateUkr, setFinalDateUkr]  = useState("");
  const [finalDateEn, setFinalDateEn] = useState("");
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
    const selectedMonthUkr = months[month];
    const selectedMonthEn = monthsEn[month];
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
  };

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
    formData.append(`zvit${projectNubmer}.${imgMainFileFormatt}`, imgMainFile);
    formData.append(
      `zvit${projectNubmer}_1.${imgCaseFileFormatt}`,
      imgCaseFile
    );
    axios
    .put(process.env.REACT_APP_BACKEND_LINK + "/update-report/publication", {
      id: id,
      publicationDate: finalDate,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
    axios
    .put(process.env.REACT_APP_BACKEND_LINK + "/update-report/link", {
      id: id,
      link: projectData.link,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
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
      .put(process.env.REACT_APP_BACKEND_LINK + "/update-report/main", {
        id: id,
        photo_1: `zvit${projectNubmer}.${imgMainFileFormatt}`,
        //  photo_title: `project${projectNubmer}.${imgCaseFileFormatt}`,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .put(process.env.REACT_APP_BACKEND_LINK + "/update-report/title", {
        id: id,
        // photo_main: `projectmain${projectNubmer}.${imgMainFileFormatt}`,
        photo_2: `zvit${projectNubmer}_1.${imgCaseFileFormatt}`,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .put(process.env.REACT_APP_BACKEND_LINK + "/update-report/location", {
        id: id,
        location: projectData.location,
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
    const index = regions.indexOf(selectedRegion);
    setProjectData((prevData) => ({
      ...prevData,
      location: selectedRegion,
    }));
    if (index !== -1) {
    
      const regionNewUkr = regionsUkrainian[index]
      const regionNewEn = regionsFull[index]
      console.log("regionNewUkr", regionNewUkr);
      console.log("regionNewEn", regionNewEn);
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

  useEffect(() => {
    updateFinalDate();
  }, [day, month, year]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_LINK + `/reports/${id}`).then((response) => {
      const {
        title,
        data,
        region,
        description,
        photo_1,
        photo_2,
        publicationDate,
      } = response.data;
      const utcDate = new Date(publicationDate);
      const kyivDate = new Date(utcDate);
      kyivDate.setHours(utcDate.getHours() + 2);
      setProjectData({ ...response.data, publicationDate: kyivDate });
      setDay(kyivDate.getDate());
      setMonth(kyivDate.getMonth() + 1);
      setYear(kyivDate.getFullYear());
      const photoTitleExtension = photo_1.split(".").pop();
      const photoMainExtension = photo_2.split(".").pop();
      setImgCaseFileFormatt(photoTitleExtension);
      setImgMainFileFormatt(photoMainExtension);
      setProjectNumber(id);
      setNewDataEn((prevData) => [
        { ...prevData[0], keyi18n: title },
        { ...prevData[1], keyi18n: data },
        { ...prevData[2], keyi18n: region },
        { ...prevData[3], keyi18n: description },
      ]);
      setNewDataUkr((prevData) => [
        { ...prevData[0], keyi18n: title },
        { ...prevData[1], keyi18n: data },
        { ...prevData[2], keyi18n: region },
        { ...prevData[3], keyi18n: description },
      ]);
      axios.get(process.env.REACT_APP_BACKEND_LINK + `/en`).then((response) => {
        const nameItem = response.data.find(
          (item) => item.keyi18n === title
        )?.value;
        const metaItem = response.data.find(
          (item) => item.keyi18n === data
        )?.value;
        const targetPopulationItem = response.data.find(
          (item) => item.keyi18n === region
        )?.value;
        const projectDurationItem = response.data.find(
          (item) => item.keyi18n === description
        )?.value;

        setNewDataEn((prevData) => [
          { ...prevData[0], value: nameItem },
          { ...prevData[1], value: metaItem },
          { ...prevData[2], value: targetPopulationItem },
          { ...prevData[3], value: projectDurationItem },
        ]);
      });

      axios.get(process.env.REACT_APP_BACKEND_LINK + `/ukr`).then((response) => {
        const nameItem = response.data.find(
          (item) => item.keyi18n === title
        )?.value;
        const metaItem = response.data.find(
          (item) => item.keyi18n === data
        )?.value;
        const targetPopulationItem = response.data.find(
          (item) => item.keyi18n === region
        )?.value;
        const projectDurationItem = response.data.find(
          (item) => item.keyi18n === description
        )?.value;

        setNewDataUkr((prevData) => [
          { ...prevData[0], value: nameItem },
          { ...prevData[1], value: metaItem },
          { ...prevData[2], value: targetPopulationItem },
          { ...prevData[3], value: projectDurationItem },
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
              Редагування звіту
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
              <div className="font-bold mb-1">Картинка на карті і в списку</div>
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
              <div className="font-bold  mb-1">
                Картинка на слайдері і в списку
              </div>
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
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 reports">
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
                    ]);
                  }}
                />
              </div>
             
              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="resultEn">Опис:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-44"
                  name="resultEn"
                  value={newDataUkr[3].value || ""}
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
                    ]);
                  }}
                />
              </div>
          
              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="resultEn">Опис:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-44"
                  name="resultEn"
                  value={newDataEn[3].value || ""}
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
          
              <div className="field  text-gray-400">Дата укр.: {newDataUkr[1].value}</div>
              <div className="field  text-gray-400">Дата англ.: {newDataEn[1].value}</div>
              <div className="field  text-gray-400">Регіон укр.: {newDataUkr[2].value}</div>
              <div className="field  text-gray-400">Регіон англ.: {newDataEn[2].value}</div>
            </div>
            <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="resultEn">Посилання:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="resultEn"
                  value={projectData.link}
                  onChange={(e) => {
                    setProjectData((prevData) => 
                    ({
                      ...prevData,
                      link: e.target.value,
                    }))
                  }}
                />
              </div>
          </div>
        </div>
      </div>
    );
  }
}
