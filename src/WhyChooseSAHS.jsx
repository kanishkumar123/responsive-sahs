import React from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaBookOpen,
  FaBriefcase,
  FaShieldAlt,
  FaGlobe,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";
import "./WhyChooseSAHS.css";

const features = [
  {
    icon: <FaCheckCircle />,
    title: "Certified Excellence",
    desc: "SAHS is a globally recognized institution with top accreditations.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Faculty",
    desc: "Our experienced professors ensure top-notch education and mentorship.",
  },
  {
    icon: <FaBookOpen />,
    title: "Diverse Programs",
    desc: "We offer a wide range of courses across various disciplines.",
  },
  {
    icon: <FaBriefcase />,
    title: "Career Opportunities",
    desc: "Strong industry partnerships for placements and internships.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe Campus",
    desc: "A secure and inclusive environment for all students.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Exposure",
    desc: "Opportunities for international exchange programs and collaborations.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation & Research",
    desc: "State-of-the-art labs and research opportunities for students.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Social Impact",
    desc: "SAHS promotes social responsibility through outreach programs.",
  },
];

const WhyChooseSAHS = () => {
  return (
    <section className="why-choose">
      <div className="container">
        <h2 className="section-title">Why Choose SAHS?</h2>
        <p className="section-subtitle">
          Discover what makes SAHS the right choice for your academic and career
          journey.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-box">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSAHS;
