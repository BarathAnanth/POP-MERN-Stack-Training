import React from "react";
import { createContext } from "react";
import Result from "./StudentResults";

export const ResPub = createContext();

const CoE = (res) => {
  return (
    <div>
      <h1>Result published</h1>
      <Result sgpa={res.sgpa} cgpa={res.cgpa} />
    </div>
  );
};

export default CoE;
