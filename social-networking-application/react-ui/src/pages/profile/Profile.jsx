import "./profile.scss";
import Posts from "../../components/posts/Posts"
import { useLocation } from "react-router-dom";


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";

const Profile = () => {


  

  console.log("------------------ Login user id -------------")


  const userId =useLocation().pathname.split("/")[2];
  console.log("------------------  Profile -------------")
  console.log(userId)

  const [data,setData]=useState([]);


  
   
  console.log("Call Featch User Profile data") 

  useEffect(() => {
    axios.get("http://localhost:4000/users/edit-user/"+userId).then((res) => setData(res.data));
  }, []);


  console.log("After Featch User Profile data") 
  console.log(data)





console.log(data._id)
console.log(data.name)




console.log("--------------------------------------------------------------------------") 

  const handleClick = async (e) => 
  {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/follow/create-follow", {
   
      profileid: data._id,
      profile_name: data.fullName,

    
  
    });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profile">
      <div className="images">
      
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/e4/National_University_of_Computer_and_Emerging_Sciences_logo.png"
          alt=""
          className="profilePic"
        />
      </div>

      <div className="profileContainer">
        <div className="uInfo">
  
          <div className="center">
            <h2>{data.fullName}</h2>
           
            <h5>{data.profession}</h5>
           <h5> {data.stars}</h5>

            <button onClick={handleClick} >follow</button>
          </div>

        <div>
     </div>

     
         
      
          
          
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
