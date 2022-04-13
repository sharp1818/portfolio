import React from "react";
import "./App.style.jsx";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Contact } from "./App.style";
import ScrollNav from "./components/ScrollNav/ScrollNav";
import Form from "./components/Form/Form";
import ContactMap from "./components/ContactMap/ContactMap";
import Footer from "./components/Footer/Footer";
import SelectLanguage from "./components/Select/SelectLanguage.jsx";
import Info from "./components/Info/Info.jsx";
import Work from "./components/Work/Work.jsx";
import Skills from "./components/Skills/Skills.jsx";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollNav />
      <SelectLanguage />
      <Info/>
      <Skills/>
      <Work/>
      <Contact>
        <div className="form-box">
          <Form />
        </div>
        <ContactMap />
      </Contact>
      <Footer />
    </>
  );
};

export default App;
