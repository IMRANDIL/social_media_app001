import React from "react";
import "./ProfileCard.css";
import CoverImg from "../../img/cover.jpg";
import ProfileImg from "../../img/profileImg.jpg";

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={CoverImg} alt="cover-img" />
        <img src={ProfileImg} alt="profile-img" />
      </div>

      <div className="profileName">
        <span>Lovely Sharma</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,999</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>

          <div className="follow">
            <span>3</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ProfileCard;