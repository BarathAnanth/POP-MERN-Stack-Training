import { useState, useMemo } from "react";
function slowdouble(num) {
  return 2 * num;
}

const UseCallback = () => {
  var [num, setNum] = useState(0);
  var [theme, setTheme] = useState(false);
  var styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var numList = () => {
    return [num * 2, num * 4, num * 8];
  }; //useMemo just allows the dobling to slow down the page. Normally due to slow function, toggling b/w theme is also affected. UseMemo avoids this.
  return (
    <div style={styling}>
      <h1>UseCallback Example</h1>
      <h2>Number Box</h2>
      <input
        type="number"
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />{" "}
      <br />
      <h2>Numlist:</h2>
      {numList().map((val, idx) => (
        <h2 key={idx}>{val}</h2>
      ))}
      <button
        onClick={() => {
          setTheme(!theme);
        }}
      >
        Change Theme
      </button>
    </div>
  );
};
export default UseCallback;
