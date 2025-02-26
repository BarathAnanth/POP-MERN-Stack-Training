import { useState,useEffect } from "react"
function useeffect()
{
  var [txt1,settxt1] = useState("")
  var [txt2,settxt2] = useState("")
  useEffect(()=>
  {
    console.log(txt1)
  },[txt1]);
  return (
    <section>
      <h2>Use effect example</h2>
      <h2>text:{txt1}</h2>
      <input type="text"onChange={(event)=>{
        settxt1(txt1=event.target.value)
      }}></input>
    </section>
  )
}
export default useeffect