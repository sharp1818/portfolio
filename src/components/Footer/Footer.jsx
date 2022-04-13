import React from "react";
import { FooterContainer } from "./Footer.style";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <FooterContainer>{t("footer.copyright")}</FooterContainer>
    </>
  );
};

export default Footer;
