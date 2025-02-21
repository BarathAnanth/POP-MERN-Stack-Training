import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Memo = () => {
  return (
    <div>
      <h1>This is Memo Component</h1>
      <Child1 />
      <br />
      <hr />
      <br />
      <Child2 />
    </div>
  );
};

export default Memo;
