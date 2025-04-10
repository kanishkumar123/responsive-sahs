/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Accreditations.css";
import image1 from "../assets/Naac.jpg";
import image2 from "../assets/Nirf.jpg";
import image3 from "../assets/Nabh.png";
import image4 from "../assets/Nabl.jpg";
import image5 from "../assets/Iso.jpg";
import image6 from "../assets/R-WorldRanking.png";
import image7 from "../assets/QSGauge.jpg";
import image8 from "../assets/gu-RANKING.png";
import image9 from "../assets/IIRF.png";
import image10 from "../assets/EducationWorld.jpg";
import image11 from "../assets/MDRA.jpg";
import image12 from "../assets/GreenRanking.png";
import image13 from "../assets/InnovativeUniversity.png";
import image14 from "../assets/IIC.jpg";
import image15 from "../assets/ARIIA.png";

const accreditations = [
  {
    title: "NAAC",
    description:
      "National Assessment and Accreditation Council awarded a high rating.",
    image: image1,
  },
  {
    title: "NIRF",
    description: "Ranked under the National Institutional Ranking Framework.",
    image: image2,
  },
  {
    title: "NABH",
    description:
      "National Accreditation Board for Hospitals & Healthcare Providers.",
    image: image3,
  },
  {
    title: "NABL",
    description:
      "National Accreditation Board for Testing and Calibration Laboratories.",
    image: image4,
  },
  {
    title: "ISO",
    description: "Certified for quality and international standards.",
    image: image5,
  },
  {
    title: "R-World Ranking",
    description: "Ranked among top universities worldwide.",
    image: image6,
  },
  {
    title: "QS | GAUGE",
    description: "Recognized by QS Stars for excellence in education.",
    image: image7,
  },
  {
    title: "GU Ranking",
    description: "Recognized by QS Stars for excellence in education.",
    image: image8,
  },
  {
    title: "IIRF",
    description: "Recognized by QS Stars for excellence in education.",
    image: image9,
  },
  {
    title: "Education World",
    description: "Recognized by QS Stars for excellence in education.",
    image: image10,
  },
  {
    title: "MDRA",
    description: "Recognized by QS Stars for excellence in education.",
    image: image11,
  },
  {
    title: "Green Ranking",
    description: "Ranked for environmental sustainability.",
    image: image12,
  },
  {
    title: "Innovative University of the year 2022",
    description: "Awarded for innovation in education.",
    image: image13,
  },
  {
    title: "IIC-Star-Rating",
    description: "Recognized by QS Stars for excellence in education.",
    image: image14,
  },
  {
    title: "ARIIA",
    description: "Recognized for research and innovation in academics.",
    image: image15,
  },
];

const Accreditations = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="accreditation-container">
      <h2 className="title">Accreditations & Recognitions</h2>
      <motion.div
        className="accreditation-grid"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {accreditations.map((item, index) => (
          <motion.div
            key={index}
            className={`accreditation-card ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(index)}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.5)" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="accreditation-image"
            />
            <h3 className="accreditation-name">{item.title}</h3>
            <motion.div
              className="accreditation-content"
              animate={{
                maxHeight: expandedIndex === index ? "100px" : "0px",
                opacity: expandedIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p>{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Accreditations;
