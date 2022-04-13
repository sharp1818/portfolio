import React, { useState, useEffect } from "react";

const useLanguage = () => {
  const [language, setLanguage] = useState("Español");

  useEffect(() => {

  }, []);

  return (
    <>
      <div>useLanguage</div>
    </>
  );
};

export default useLanguage;
