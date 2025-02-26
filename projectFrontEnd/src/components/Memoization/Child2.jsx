import React, { useState } from "react";

const Child2 = () => {
  var [num, setNum] = useState(0);
  return (
    <div>
      <h2>This is a Number box</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <h3>The number is: {num}</h3>
    </div>
  );
};

export default Child2;
