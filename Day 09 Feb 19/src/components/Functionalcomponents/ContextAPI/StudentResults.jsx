import React from "react";
import { useContext } from "react";

const StudentResults = () => {
  const result = useContext(ResultPublished);
  return (
    <div>
      <h1>Result:</h1>
      <h2>SGPA: {res.sgpa}</h2>
      <h2>CGPA: {res.cgpa}</h2>
    </div>
  );
};

export default StudentResults;
