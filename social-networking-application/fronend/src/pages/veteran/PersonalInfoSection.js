import React,{ useState,useEffect } from 'react';
import { getToken } from "../../LocalStorageService";
import axios from 'axios';

function Hobby(props)
{

    if (props.hobbies)
    {
        return (
            <div className="hobby-div" >
                {props.hobbies.map((hobby) =>
                {
                    return (
                        <div className="hobby">
                            <h5>{hobby}</h5>
                        </div>
                    )
                })}
            </div>
        )
    }
    else
    {
        return (
            <h3>No Hobbies Added</h3>
        )
    }
}
function PersonalInfoSection(props)
{

    const [inputNewHobby,setNewHobby] = useState("")


    async function handleAddBtn()
    {
        if (inputNewHobby == "")
        {
            alert("Please Enter a Hobby")
            return
        }
        // Call add Post API with header and authentication params
        try
        {
            let apiResponse = axios.post("http://localhost:4000/veteran/add-newhobby",{ hobby: inputNewHobby },
                {
                    headers: {
                        authorization: `${getToken()}`
                    }
                })
            console.log("API Response : ",apiResponse.data)
        } catch (error)
        {
            console.log("Catch Error")
        }
        setNewHobby("")
    }
    function newHobbyInputChange(event)
    {
        console.log("New Hobby Input Change : ",event.target.value)
        setNewHobby(event.target.value)
    }
    return (
        <div className="personalInfo">

            <div className="right-div">
                <h4> Name : <strong> {props.name}</strong></h4>
                <h5> Profession <strong> {props.profession}</strong></h5>
                <div className="stars-div">
                    <h5> Stars : <strong>{props.stars} ⭐</strong></h5>
                    <h5>Badge : ( Badge Here )</h5>
                </div>
                <div className="extra-info">
                    <h3>Contact Info</h3>
                    <h5> Email : {props.email}</h5>
                </div>
            </div>
            <div className="left-div">
                <div className="newHobby">
                    <input onChange={newHobbyInputChange} type="text" value={inputNewHobby} placeholder='Add New Hobby' />
                    <button onClick={handleAddBtn}>Add</button>
                </div>
                <Hobby hobbies={props.hobbies} />

            </div>
        </div>
    )
}

export default PersonalInfoSection;