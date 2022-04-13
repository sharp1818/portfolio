import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { SkillsContainer } from "./Skills.style";
import { useTranslation } from "react-i18next";

const Skills = () => {
    const [t] = useTranslation("global");
  return (
    <>
      <SkillsContainer>
          <div className="title">{t("skills.title")}</div>
          <div className="skillbar">
              <div className="skill">Node.js</div>
              <ProgressBar completed={70} />
          </div>
          <div className="skillbar">
              <div className="skill">Git</div>
              <ProgressBar completed={70} />
          </div>
          <div className="skillbar">
              <div className="skill">React.js</div>
              <ProgressBar completed={80} />
          </div>
          <div className="skillbar">
              <div className="skill">Vue.js</div>
              <ProgressBar completed={80} />
          </div>
          <div className="skillbar">
              <div className="skill">Sass</div>
              <ProgressBar completed={70} />
          </div>
          <div className="skillbar">
              <div className="skill">Axios</div>
              <ProgressBar completed={70} />
          </div>
          <div className="skillbar">
              <div className="skill">Express.js</div>
              <ProgressBar completed={70} />
          </div>
          <div className="skillbar">
              <div className="skill">MongoDB</div>
              <ProgressBar completed={70} />
          </div>
          <div className="skillbar">
              <div className="skill">MySql</div>
              <ProgressBar completed={70} />
          </div>
          <div className="skillbar">
              <div className="skill">Firebase</div>
              <ProgressBar completed={60} />
          </div>

      </SkillsContainer>
    </>
  );
};

export default Skills;
