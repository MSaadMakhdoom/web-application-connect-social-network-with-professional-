import React from 'react'
import "./styles.css"
// Import redirect
import { useNavigate } from "react-router-dom";

function LandingPage()
{

    let nav = useNavigate()
    let navigator = (link) =>
    {
        console.log("Navigating to Login Page");
        return nav(link);
    }
    return (
        <div itemID='landing-page' >
            <div className='left-side'>
                <h2> Welcome to Our Application </h2>
                <h3> Group Members</h3>
                <h4> Kashif Kamran</h4>
                <h4> Muhammad Ahsan</h4>
                <h4> Muhammad Saad</h4>

            </div>
            <div className='right-side'>
                <h1>Select Your Role</h1>
                <div className='buttons-div'>
                    <button onClick={() => navigator('/veteran/auth/login')}>Login Veteran</button>
                    <button>Login Institute</button>
                    <button>Login Organization</button>
                </div>
            </div>
        </div >
    )
}

export default LandingPage