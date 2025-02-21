import React, { useState } from "react";

function slowFuntion(num){
    for(var i=0; i<1000; i++){}
    return num*2
}

const UseMemo = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(false);
  var styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  return (
    <>
      <div style={styling}>
      <button onClick={()=>setTheme(!theme)} style={{marginTop: 10}}>Toggle Theme</button>
        <h1>This is UseMemo Example</h1>
        Number Box:{" "}
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <h2>The Number is {number}</h2>
        <h2>The 2*Number is {slowFuntion(number)}</h2>
        </div>
    </>
  );
};

export default UseMemo;
