import React,{ useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom'
import PersonalInfoSection from './PersonalInfoSection';
import { getToken } from "../../LocalStorageService";
import PostsList from './PostsList';
import axios from 'axios';
import VeteransSection from './VeteranSection';
import { Component } from 'react';


const VeteranProfilePage = () =>
{
    let navigate = useNavigate(); // Navigator

    const [veteranData,setVeteranData] = useState(() =>
    {
        return {
            name: "",
            email: "",
            stars: 0,
            profession: "",
            hobbies: []
        }
    });
    useEffect(() =>
    {
        let apiResponse = axios.get("http://localhost:4000/veteran/get-profiledata",
            {
                headers: {
                    authorization: `${getToken()}`
                }
            }
        ).then((apiResponse) =>
        {
            console.log("API Response Here : ",apiResponse.data)
            if (!apiResponse.data)
            {
                console.log("Navigate to Login Page")
                navigate("/veteran/auth/login")
                return;
            }
            setVeteranData((prevState) =>
            {
                return {
                    ...prevState,
                    name: apiResponse.data.fullName,
                    email: apiResponse.data.email,
                    stars: apiResponse.data.stars,
                    profession: apiResponse.data.profession,
                    hobbies: apiResponse.data.hobbies
                }
            });
            console.log("Veteran Data : ",veteranData)

        }).catch((error) =>
        {
            console.log("Catch Error")
            return
        });
    },[]);


    return (

        <div>
            {veteranData && <PersonalInfoSection name={veteranData.name} profession={veteranData.profession} stars={veteranData.stars} email={veteranData.email} hobbies={veteranData.hobbies} />}
            <div className="folPost-container">
                <PostsList />
                <VeteransSection />
            </div>

        </div >
    );

};

export default VeteranProfilePage;
