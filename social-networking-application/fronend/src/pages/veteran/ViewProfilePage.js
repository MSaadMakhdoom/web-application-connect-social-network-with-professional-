import React,{ useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function ViewProfilePage()
{
    const location = useLocation();
    const [veteranInfo,setVeteranInfo] = useState({
        fullName: "",
        profession: "",
        email: "",
        hobbies: []
    });
    // Function to load Data
    async function loadData()
    {
        console.log("Loading Data Profile Data");
        try
        {
            
        }
        catch (error)
        {
            console.log("Error While Loading Profile Data : ",error);
        }

        // Call API to get veteran Info
    }
    useEffect(() =>
    {
        loadData();
    },[]);
    console.log("Data SHould be passed")
    return (
        <div id="view-profile" >
            <h1>FullName : {veteranInfo.fullName}</h1>
        </div>
    )
}

export default ViewProfilePage;