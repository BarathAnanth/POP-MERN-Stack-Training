import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffectApi = () => {
  var [posts, setPost] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      setPost(res.data)
      console.log(posts)
    })
    .catch((err)=>{
      console.log("Couldn't fetch the API")
    })
  }, []);
  return(
    <div>
      <h1>This is a UseEffcect Example with API</h1>
      <p>Going to fetch data from json placeholder</p>
      <ol>
        {posts.map((post)=>(  
        <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  )
};

export default UseEffectApi;