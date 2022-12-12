import Post from "../post/Post";
import "./posts.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { getToken } from "../../LocalStorageService"

const Posts = () => {

console.log("post page");
console.log(localStorage.getItem("user"));

  const [data,setData]=useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:4000/posts/get-userposts", {
        headers: {
            authorization: `${getToken()}`
        }
    }
    ).then((res) => setData(res.data));
    }, []);
  
  return <div className="posts">
    {data.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
