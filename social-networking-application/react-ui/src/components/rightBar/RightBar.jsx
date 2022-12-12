import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Add Hobby</span>
          <div className="user">
            <div className="userInfo">
              <input type="text" placeholder="hobby" name="hobby" />
            </div>

            <div className="buttons">
              <button>Add Hobby</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Vetrans Hobby </span>
          <div className="user">
            <div className="userInfo">
              <p>Get User API and display here</p>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Follower</span>
          <div className="user">
            <div className="userInfo">
              <span>Get Follower</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>

  );
};

export default RightBar;
