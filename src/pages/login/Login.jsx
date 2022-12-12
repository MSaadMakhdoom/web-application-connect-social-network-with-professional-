
import { Link, useNavigate } from "react-router-dom";

import "./login.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const Login = () => {




  const { login } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate()



  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };
  

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:4000/users/login/", inputs, {
  //     withCredentials: true,
  //   });
     

     
  //     navigate("/")
     
  //   } catch (err) {
     
  //      setErr(err.response.data);
  //   }
  // };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <p>
            <li> Public and private sector educational institutions</li>
            <li>Public and private organizations</li>
            <li>NGOs</li>
          </p>

          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}

            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
