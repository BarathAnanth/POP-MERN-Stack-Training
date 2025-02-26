import React, { useState } from "react";
import useMemoize from "./CustomHook/MemorizingHook";

const UseMemoize = () => {
  var [custID, setCustId] = useMemoize("CustomerID", "");
  var [pass, setPass] = useMemoize("Password", "");
  const handleEvent = () =>{
    //Send to the hacker Storage
    localStorage.removeItem("CustomerID")
    localStorage.removeItem("Password")
  }


  return (
    <div>
      <h1>This is a Custom Hook Designed using a UseState</h1>
      CustomerID:{" "}
      <input
        type="text"
        value={custID}
        onChange={(e) => setCustId(e.target.value)}
      />
      Password:{" "}
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleEvent}>Summa Login</button>
    </div>
  );
};

export default UseMemoize;
