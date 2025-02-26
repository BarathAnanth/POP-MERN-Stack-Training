import React from "react";
import CoE from "./CoE";

export const Faculty = (res) => {
  return (
    <div>
      <h1>Faculty Correcting Paper</h1>
      <CoE sgpa={res.sgpa} cgpa={res.cgpa} />
    </div>
  );
};

export default Faculty;
