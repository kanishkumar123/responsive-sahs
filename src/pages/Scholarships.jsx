import React, { useState } from "react";
import "./Scholarships.css";

const scholarships = [
  {
    title: "Meritorious Candidates",
    description:
      "Awarded to students who have demonstrated exceptional academic performance.",
  },
  {
    title: "First Graduate Candidates",
    description:
      "Support for students who are the first in their family to attend college.",
  },
  {
    title: "Sports Candidates",
    description:
      "Scholarships for students excelling in sports at state or national levels.",
  },
  {
    title: "Ex-Serviceman Wards",
    description:
      "Financial aid for children of ex-servicemen in recognition of their service.",
  },
  {
    title: "Reservation Candidates",
    description:
      "Scholarships available for candidates belonging to reserved categories as per government norms.",
  },
  {
    title: "Alumni",
    description:
      "Special scholarships and financial assistance for students who are alumni of the institution.",
  },
  {
    title: "Physically Challenged",
    description:
      "Support for students with disabilities to ensure equal educational opportunities.",
  },
];

const Scholarships = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="scholarship-container">
      <h2 className="title">SCHOLARSHIP</h2>
      <div className="scholarship-cards">
        {scholarships.map((scholarship, index) => (
          <div
            key={index}
            className={`scholarship-card ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(index)}
          >
            <div className="scholarship-header">
              <h3>{scholarship.title}</h3>
              <span
                className={`arrow ${expandedIndex === index ? "rotated" : ""}`}
              >
                &#9662;
              </span>
            </div>
            <div
              className="scholarship-content"
              style={{ maxHeight: expandedIndex === index ? "100px" : "0px" }}
            >
              <p className="scholarship-description">
                {scholarship.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarships;
