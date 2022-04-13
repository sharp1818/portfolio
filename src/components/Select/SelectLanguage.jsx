import React from "react";
import { useTranslation } from "react-i18next";
import { Select } from "./SelectLanguage.style";

const SelectLenguage = () => {
  const { i18n } = useTranslation("global");
  return (
    <>
      <div>SelectLenguage</div>
      <Select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="pt">Portugués</option>
      </Select>
    </>
  );
};

export default SelectLenguage;
