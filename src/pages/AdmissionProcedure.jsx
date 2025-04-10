import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AdmissionProcedure.css";
import "react-toastify/dist/ReactToastify.css";

const AdmissionProcedure = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to get tab from URL (normalized to uppercase)
  const getTabFromURL = () => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("tab")?.toUpperCase() || "UG"; // Normalize case
  };

  // State for active tab
  const [activeTab, setActiveTab] = useState(getTabFromURL());

  // Listen for URL changes and update tab accordingly
  useEffect(() => {
    const getTabFromURL = () => {
      const queryParams = new URLSearchParams(location.search);
      return queryParams.get("tab")?.toUpperCase() || "UG"; // Normalize case
    };

    setActiveTab(getTabFromURL());
  }, [location.search]); // Only re-run when URL changes

  // Function to update tab
  const handleTabChange = (tab) => {
    const normalizedTab = tab.toUpperCase(); // Normalize to uppercase
    setActiveTab(normalizedTab);
    navigate(`?tab=${normalizedTab}`, { replace: true }); // Update URL
  };

  return (
    <div className="admission-procedure-container">
      <h2 className="title">Admission Procedure (2025-2026)</h2>

      {/* Tabs for UG and PG */}
      <div className="admission-tabs" data-active={activeTab}>
        <div
          className={`admission-tab ${activeTab === "UG" ? "active" : ""}`}
          onClick={() => handleTabChange("UG")}
        >
          Undergraduate (UG)
        </div>
        <div
          className={`admission-tab ${activeTab === "PG" ? "active" : ""}`}
          onClick={() => handleTabChange("PG")}
        >
          Postgraduate (PG)
        </div>
      </div>

      {/* Tab Content */}
      <div className="admission-content">
        {activeTab === "UG" ? (
          <div>
            <h3>UG Admission Procedure</h3>
            <p>
              Admissions for UG Degree programmes will be made on the basis of
              marks obtained in the qualifying examination and merit-based
              Counselling conducted by the Admission Monitoring Committee (AMC)
              of VMRF-DU. The eligibility criteria will be prescribed by the
              VMRF-DU rules & regulations from time to time.
            </p>
            <p>
              <strong>Age:</strong> Candidates should have completed the age of
              17 years on or before 31st December 2024.
            </p>
          </div>
        ) : (
          <div>
            <h3>PG Admission Procedure</h3>
            <p>
              Admissions for PG Degree programmes will be made on the basis of
              marks obtained in the qualifying examination and merit-based
              Counselling conducted by the Admission Monitoring Committee (AMC)
              of VMRF-DU. The eligibility criteria will be prescribed by the
              VMRF-DU rules & regulations from time to time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmissionProcedure;
