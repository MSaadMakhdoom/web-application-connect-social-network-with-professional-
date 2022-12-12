import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';
const Joi = require('joi');
// Import Axios in project

const Register = () =>
{
    let navigate = useNavigate(); // Navigator
    // State Handler in input feilds
    const [state,setState] = useState(() =>
    {
        return {
            fullName: "",
            email: "",
            password: "",
            profession: "",
        }
    });
    
    // function to handle the inputs
    function handleInput(event)
    {
        let { name,value } = event.target;
        setState((prevState) =>
        {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    function validateRegistrationInput(data)
    {
        const registerValidation = Joi.object({
            fullName: Joi.string().min(6).required(),
            email: Joi.string().min(6).email({ tlds: { allow: false } }).required(),
            password: Joi.string().min(6).required(),
            profession: Joi.string().min(6).required()
        });
        return registerValidation.validate(data);
    }



    let handleSubmitButton = async () =>
    {
        console.log("Initial Data :  ",state);
        // validate Input Feilds
        let { error } = validateRegistrationInput(state);
        if (error)
        {
            alert("Error : " + error.message);
            return;
        }

        // If Validation Passed 
        console.log("Vetern Ready to Register : ",state);

        try
        {
            // If Got the error 409 Confilic Error
            await axios.post("http://localhost:4000/veteran/register",state);
        } catch (error)
        {
            //    Check weather this was code=409
            if (!error.response)
            {
                alert("--- Error: Server Not Responding --- ");
            }
            else if (error.response.status === 409)
            {
                alert("Email has already been taken")
            }
            else
            {
                alert("Some other(than email same) error Occured } " + error.message);
            }
            return;
        }

        alert("Registration Successfull");
        navigate("/veteran/auth/login");


    }


    return (
        <div itemID='register-page'>
            <h1>Register Veteran</h1>
            <div className="form-div">
                <label htmlFor="fullName"> Full Name </label>
                <input type="text" onChange={handleInput} name="fullName" placeholder='Fullname' value={state.fullName} autoComplete="off" />
                <br />
                <label htmlFor="profession"> Profession </label>
                <input type="text" onChange={handleInput} name="profession" placeholder='Professsion' value={state.profession} autoComplete="off" />
                <br />
                <label htmlFor="email"> Email Address</label>
                <input type="email" onChange={handleInput} name="email" placeholder='Email' value={state.email} autoComplete="off" />
                <br />
                <label htmlFor="password"> Password</label>
                <input type="password" onChange={handleInput} name="password" placeholder='Password' value={state.password} autoComplete="off" />
                <br />
                <button onClick={handleSubmitButton}>Register</button>
            </div>

        </div>
    )
}

export default Register