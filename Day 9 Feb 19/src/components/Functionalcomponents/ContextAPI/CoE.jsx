import React from "react";

export const ResPub = createContext();

const CoE = () => {
  return (
    <ResultPublished.Provider value = {{sgpa:"10 SGPA", cgpa: "10 CGPA"}}>
      <h1>Result Published</h1>
    </ResultPublished.Provider>
  );
};

export default CoE;
