import "./post.scss";

import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import { Link } from "react-router-dom";

const Post = ({ post }) => {
  


  console.log("Post id")
  console.log(post.userid)

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            
            <div className="details">
              <Link
                to={`/profile/${post.vet_id}`}
                
                style={{ textDecoration: "none", color: "inherit" }}
              >
                
                <span className="name">{post.vet_id}</span>
                <h6>{post.date}</h6>
              </Link>
              
            </div>
          </div>
         
        </div>
        <div className="content">
          <p>{post.title}</p>
         <h4> {post.description} </h4>
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
