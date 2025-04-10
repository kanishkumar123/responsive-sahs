import React from "react";
import ProfileCard from "./ProfileCard";
import DescriptionPoint from "./DescriptionPoint";
import "./ProfileSection.css";

const ProfileSection = ({ title, subtitle, image, name, roles, points }) => {
  return (
    <section className="profile-section">
      <div className="profile-header">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
      <ProfileCard image={image} name={name} roles={roles} />
      <div className="profile-description">
        {points.map((point, index) => (
          <DescriptionPoint key={index} text={point} />
        ))}
      </div>
    </section>
  );
};

export default ProfileSection;
