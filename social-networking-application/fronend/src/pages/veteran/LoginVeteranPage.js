import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { storeToken } from "../../LocalStorageService"
const Joi = require('joi');

const LoginVeteranPage = () =>
{

    let navigate = useNavigate(); // Navigator
    const [state,setState] = useState(() =>
    {
        return {
            email: "",
            password: ""
        }

    }); // State to take input

    // input handler onChange function
    function inputHandler(event)
    {
        let { name,value } = event.target
        setState((prevState) => { return { ...prevState,[name]: value } })
    }

    //Login Input validator
    function validateLoginInput(data)
    {
        const loginValidation = Joi.object({
            email: Joi.string().min(6).email({ tlds: { allow: false } }).required(),
            password: Joi.string().min(6).required()
        });
        return loginValidation.validate(data);
    }

    // function for login button
    let loginButtonHandler = async () =>
    {
        let { error } = validateLoginInput(state);
        if (error)
        {
            alert("Error : " + error.message);
            return;
        }

        console.log("Validationg Check passed ");
        // send request to server
        try
        {
            var apiResponse = await axios.post("http://localhost:4000/veteran/login",state);
        }
        catch (error)
        {
            if (!error.response)
            {
                alert("Error : Server Not Responding");
            }
            else if (error.response.status === 401)
            {
                alert("Error : Invalid email or password");
            }
            else
            {
                alert("Error : Some Random Error Occured")
                console.log("error : " + error)
            }
            return
        }
        storeToken(apiResponse.data.token);
        navigate("/veteran/profile  ");
    }




    return (
        <div itemID='loginPage'>
            <h1>Login Page</h1>
            <div className="form-div">
                <label htmlFor="email"> Email</label>
                <input type="email" onChange={inputHandler} name="email" placeholder='Email' />
                <br />
                <label htmlFor="password"> Password</label>
                <input type="password" onChange={inputHandler} name="password" placeholder='password' />
                <br />
                <button onClick={loginButtonHandler}>Login</button>
                <p>if you are not registered</p>
                <button onClick={() =>
                {
                    navigate("/veteran/auth/register")
                }} >Register</button>
            </div>
        </div>
    )
}

export default LoginVeteranPage