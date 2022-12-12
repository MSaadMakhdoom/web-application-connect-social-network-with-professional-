import "./post.scss";

import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import { Link } from "react-router-dom";

const Post = ({ post }) => {
  
  //TEMPORARY
  const liked = false;

  console.log("Post id")
  console.log(post.userid)

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            
            <div className="details">
              <Link
                to={`/profile/${post.userid}`}
                
                style={{ textDecoration: "none", color: "inherit" }}
              >
                
                <span className="name">{post.username}</span>
              </Link>
              
            </div>
          </div>
         
        </div>
        <div className="content">
          <p>{post.postdescription}</p>
         <h4>Star {post.setstars} </h4>
        </div>
        <div className="info">
          
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Post;
