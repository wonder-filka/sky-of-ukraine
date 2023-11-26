import React from "react";
import useLocalStorage from "../../hooks/use-localstorage";
// eslint-disable-next-line no-unused-vars
import i18n from "../../i18n";

export default function Lang() {
  // eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useLocalStorage("language", "en");

  return <div className="Header"></div>;
}
