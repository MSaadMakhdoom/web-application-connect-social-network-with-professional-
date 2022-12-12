import "./share.scss";
import {  useNavigate } from "react-router-dom";

import { useState } from "react";

import axios from "axios";

import { AuthContext } from "../../context/authContext";

import { useContext } from "react";

const Share = () => {

  const { currentUser } = useContext(AuthContext);

  console.log ("share page")
  console.log (currentUser.id)
  console.log("frontend share page");
  console.log();
  //how to get cookie access token            


  

  const [inputs, setInputs] = useState({

    userid:currentUser._id,
    username:currentUser.name,
    postdescription: "",
    setstars: "",

  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate()


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/post/create-post", inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <div className="share">
      <div className="container">
        <form>
          <div className="top">
            <input
              type="text"
              placeholder="Event discription"
              name="postdescription"
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Event Star"
              name="setstars"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div className="bottom">
            <div className="right">
              <button onClick={handleClick}  >New community service event</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
