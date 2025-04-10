import React from "react";
import "./VisionMission.css"; // Import your CSS file

const VisionMission = () => {
  return (
    <div className="container">
      <h1 className="title">Vinayaka Mission's Research Foundation</h1>
      <p className="subtitle">
        (Deemed to be University under section 3 of the UGC Act 1956)
      </p>

      <div className="vision-mission-card">
        <h2 className="heading">VISION</h2>
        <p>
          To impart knowledge to nurture leaders driven by research, innovation
          and excellence and to foster a diverse community committed to the
          well-being of humanity.
        </p>
      </div>

      <div className="vision-mission-card">
        <h2 className="heading">MISSION</h2>
        <p>
          To empower learners through world-class, multidisciplinary education
          to become competent individuals who contribute to society.
        </p>
      </div>

      <div className="vision-mission-card">
        <h2 className="heading">QUALITY POLICY</h2>
        <p className="subtitle">
          <strong>
            Vinayaka Mission’s Research Foundation (Deemed to be University)
            commits to:
          </strong>
        </p>
        <p>
          A culture of Excellence through integrity, Diversity and Empathy and
          to empower our community by integrating Care, Accountability, and
          Respect into our core operations.
        </p>
        <p>
          An inclusive environment of learning, research, and innovation by
          placing strong emphasis on ethical practices, social responsibility,
          and continuous improvement in shaping future leaders who can
          contribute positively to society.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
