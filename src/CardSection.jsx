import React from "react";
import { FaUsers, FaBook, FaLaptop, FaNewspaper } from "react-icons/fa";
import "./CardSection.css";
import image1 from "./assets/Steering-Committee-Waydev.jpg";
import image2 from "./assets/20170509_Eng_Library_DJA_012_3.jpg";
import image3 from "./assets/photo-1606568156390-8f4edb5ef31f.jpeg";
import image4 from "./assets/collection-newspapers.jpg";

const CardSection = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image1} alt="Life @ SAHS" className="card-image" />
        <div className="overlay">
          <div className="icon">
            <FaUsers size={40} />
          </div>
          <h3>Life @ SAHS</h3>
        </div>
      </div>

      <div className="card">
        <img src={image2} alt="Library" className="card-image" />
        <div className="overlay">
          <div className="icon">
            <FaBook size={40} />
          </div>
          <h3>LIBRARY</h3>
        </div>
      </div>

      <div className="card">
        <img src={image3} alt="E-Learning" className="card-image" />
        <div className="overlay">
          <div className="icon">
            <FaLaptop size={40} />
          </div>
          <h3>E-Learning</h3>
        </div>
      </div>

      <div className="card">
        <img src={image4} alt="News" className="card-image" />
        <div className="overlay">
          <div className="icon">
            <FaNewspaper size={40} />
          </div>
          <h3>NEWS</h3>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
