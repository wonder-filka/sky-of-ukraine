import React from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/use-localstorage";
import i18n from "../../i18n";

function BtnLang() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ukr");

  const handleLenguageChangeUkr = () => {
    i18n.changeLanguage("ukr");
    setLanguage("ukr");
  };

  const handleLenguageChangeEng = () => {
    i18n.changeLanguage("en");
    setLanguage("en");
  };

  return (
    <div className="header-language">
      <button className="lang-btn" onClick={handleLenguageChangeUkr}>
        UA
      </button>
      <button className="lang-btn" onClick={handleLenguageChangeEng}>
        EN
      </button>
    </div>
  );
}

export default BtnLang;
