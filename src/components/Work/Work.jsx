import React from "react";
import { WorkContainer, TitleLayout } from "./Work.style";
import "@sl-codeblaster/react-3d-animated-card";
import Card from "react-animated-3d-card";
import { useTranslation } from "react-i18next";
import logo1 from "../../images/portafolio/1.png";
import logo2 from "../../images/portafolio/2.png";
import logo3 from "../../images/portafolio/3.png";
import logo4 from "../../images/portafolio/4.png";
import logo5 from "../../images/portafolio/5.png";
import logo6 from "../../images/portafolio/6.png";

const Work = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <TitleLayout>
        <div className="title">{t("portfolio.Portfolio")}</div>
        <div className="resume">{t("portfolio.This is a list of some public projects that I've participated")}</div>
      </TitleLayout>
      <WorkContainer>
        <a href="https://music-app-sepia.vercel.app/" target="_blank">
          <Card
            style={{
              backgroundColor: "white",
              width: "450px",
              height: "220px",
              cursor: "pointer",
            }}
            onClick={() => console.log("Card clicked")}
          >
            <img src={logo1} alt="" />
          </Card>
        </a>
        <a href="https://ssmovieapp.herokuapp.com/" target="_blank">
          <Card
            style={{
              backgroundColor: "white",
              width: "450px",
              height: "220px",
              cursor: "pointer",
            }}
            onClick={() => console.log("Card clicked")}
          >
            <img src={logo2} alt="" />
          </Card>
        </a>
        <a href="https://esgplay.net/" target="_blank">
          <Card
            style={{
              backgroundColor: "white",
              width: "450px",
              height: "220px",
              cursor: "pointer",
            }}
            onClick={() => console.log("Card clicked")}
          >
            <img src={logo3} alt="" />
          </Card>
        </a>
        <a href="https://cardsperu.com/recargasperu/" target="_blank">
          <Card
            style={{
              backgroundColor: "white",
              width: "450px",
              height: "220px",
              cursor: "pointer",
            }}
            onClick={() => console.log("Card clicked")}
          >
            <img src={logo4} alt="" />
          </Card>
        </a>
        <a href="https://casamarket.la/" target="_blank">
          <Card
            style={{
              backgroundColor: "white",
              width: "450px",
              height: "220px",
              cursor: "pointer",
            }}
            onClick={() => console.log("Card clicked")}
          >
            <img src={logo5} alt="" />
          </Card>
        </a>
        <a href="https://www.cruzdelsur.com.pe/" target="_blank">
          <Card
            style={{
              backgroundColor: "white",
              width: "450px",
              height: "220px",
              cursor: "pointer",
            }}
            onClick={() => console.log("Card clicked")}
          >
            <img src={logo6} alt="" />
          </Card>
        </a>
      </WorkContainer>
    </>
  );
};

export default Work;
