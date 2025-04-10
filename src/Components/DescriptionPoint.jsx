import React from "react";
import "./DescriptionPoint.css";

const DescriptionPoint = ({ text }) => {
  return (
    <div className="description-point">
      <p>{text}</p>
    </div>
  );
};

export default DescriptionPoint;
