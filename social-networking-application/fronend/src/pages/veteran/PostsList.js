import React,{ useState,useEffect } from 'react'
import axios from 'axios';
import { getToken } from "../../LocalStorageService"

function Post(props)
{
    return (
        <div className="post">
            <h4><strong>{props.postTitle}</strong></h4>
            <p>{props.postDescription}</p>
            <p><strong>{props.postDate}</strong></p>
        </div>
    )
}

function PostsList()
{
    const [newPostData,setNewPostData] = useState({
        postTitle: "",
        postDescription: ""
    });
    const [posts,setPosts] = useState([]);
    async function addPostBtn()
    {
        // Call API to send data to server
        if (newPostData.postTitle === "" || newPostData.postDescription === "")
        {
            alert("Please Enter Post Title and Description");
            return;
        }
        try
        {
            let apiResponse = await axios.post("http://localhost:4000/posts/add-post",newPostData,
                {
                    headers: {
                        authorization: `${getToken()}`
                    }
                });
            reloadPosts()
        } catch (error)
        {
            console.log("Error : ",error)
        }
    }
    useEffect(() =>
    {
        reloadPosts();
    },[])
    async function reloadPosts()
    {
        try
        {
            var apiResponse = await axios.get("http://localhost:4000/posts/get-userposts",
                {
                    headers: {
                        authorization: `${getToken()}`
                    }
                });
        } catch (error)
        {
            console.log("Error : ",error)
        }
        if (apiResponse.data)
        {
            setPosts(apiResponse.data);
        } else
            console.log("No Data Found : ",apiResponse)
    }
    async function onInputChange(event)
    {
        const { name,value } = event.target;

        setNewPostData((prevState) =>
        {
            return {
                ...prevState,
                [name]: value
            }
        });
    }
    return (
        <div id='post-section'>
            <h1>Posts Section</h1>
            <div className="newPost">
                <div>
                    <input type="text" onChange={onInputChange} className="text" name="postTitle" value={newPostData.postTitle} placeholder='Post Title' />
                    <button onClick={addPostBtn} >Add Post</button>
                </div>

                <textarea name="postDescription" onChange={onInputChange} id="" cols="30" rows="2" placeholder='Post Description' value={newPostData.postDescription}></textarea>
            </div>
            <div className="post-grid">

                {
                    posts.map((post) =>
                    {
                        return <Post key={post._id} postTitle={post.title} postDescription={post.description} postDate={post.date} />
                    })
                }
            </div>
        </div>
    )
}

export default PostsList;