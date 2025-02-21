import React, { useState } from "react";

const Child1 = () => {
  var [text, setText] = useState("");

  return (
    <div>
      <h2>This is a text box</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3>The text is: {text}</h3>
    </div>
  );
};

export default Child1;
