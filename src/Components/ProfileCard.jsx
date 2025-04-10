import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ image, name, roles = [] }) => {
  return (
    <div className="profile-content">
      <div className="profile-image-container">
        <img src={image} alt={name} className="profile-image" />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        {roles.map((role, index) => (
          <h3 key={index} className="profile-role">
            {role}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
