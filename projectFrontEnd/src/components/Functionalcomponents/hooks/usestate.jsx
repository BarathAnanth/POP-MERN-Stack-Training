import { useState } from 'react'

function usestate()
{
  var ival = 0;
  var [num,Setnum] = useState(0);
  var [txt,settxt] = useState("initial")
  /*function val(){
    var value = document.getElementById("v").value // function implemented using anonymous function inline
    settxt(txt=value)
  }*/
  return (
    <div>
      <h2>States</h2>
      <h3>Updating value:{num}</h3>
      <button onClick={()=>{Setnum(num-1)}} >-</button>
      <button onDoubleClick={()=>{Setnum(num=0)}}>reset</button>
      <button onClick={()=>{Setnum(num+1)}}>+</button>
      <h2>Text:{txt}</h2>
      <input id="v" onChange={()=>{var value = document.getElementById("v").value;settxt(txt=value)}} type='text'></input>
    </div>
  );
}
export default usestate