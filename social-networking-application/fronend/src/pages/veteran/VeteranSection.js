import React,{ useState,useEffect } from 'react'
// import useNavigate hook
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { getToken } from "../../LocalStorageService"
function Veteran(props)
{
  let navigate = useNavigate();
  return (

    <div className="veteran-div">
      <h5><strong>{props.name}</strong></h5>
      <p>{props.profession}</p>
      <button onClick={() =>
      {
        navigate(`/veteran/view-profile`,{ state: { id: props.id } });
      }}>View Profile</button>
    </div >
  )
}

// =============================================

function VeteransSection()
{
  const [veteranList,setVeteranList] = useState([]);
  async function loadAllVetersn()
  {
    console.log("Loading All Veterans");
    // Call API to get all veterans
    try
    {

      let apiResponse = await axios.get("http://localhost:4000/veteran/get-allVeterans",
        {
          headers: {
            authorization: `${getToken()}`
          }
        });
      setVeteranList(apiResponse.data);
    }
    catch (error)
    {
      console.log("Error Occured while Loading Veterans : ",error)
    }
  }
  useEffect(() =>
  {
    loadAllVetersn();
  },[])
  return (
    <div id="veterans-section">
      <h1>Veterns</h1>
      <div className="veterans-list">
        {
          veteranList.map((veteran,index) =>
          {
            return <Veteran id={veteran._id} key={veteran._id} name={veteran.fullName} profession={veteran.profession} />
          })
        }

      </div>
    </div>
  )
}

export default VeteransSection;