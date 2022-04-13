import React from "react";
import { InfoContainer } from "./Info.style";
import { useTranslation } from "react-i18next";
import profileImage from "../../images/profile.jpg" 

const Info = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <InfoContainer>
          <div className="data-box">
            <div className="name"> Sharp Santillan</div>
            <div className="profile-image">
              <img src={profileImage} alt="profile" />
            </div>
            <div className="job">{t("info.web-developer")}</div>
          </div>
      </InfoContainer>
    </>
  );
};

export default Info;
