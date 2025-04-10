import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./FeeStructure.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const FeeStructure = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pdfFileName = "Fee_Structure_AHS_VMKVMC_2025_26.pdf"; // PDF in 'public' folder

  const handleDownload = () => {
    toast.success("Downloading Fee Structure PDF", {
      position: "bottom-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

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

  const ugFees = [
    {
      program: "B.Sc Anaesthesia Technology",
      tuition: "₹90,000",
      other: "₹27,200",
    },
    {
      program: "B.Sc Cardiac Technology",
      tuition: "₹1,50,000",
      other: "₹27,200",
    },
    {
      program: "B.Sc Medical Lab Technology",
      tuition: "₹70,000",
      other: "₹27,200",
    },
    {
      program: "B.Sc Operation Theatre Technology",
      tuition: "₹65,000",
      other: "₹27,200",
    },
    {
      program: "B.Sc Perfusion Technology",
      tuition: "₹80,000",
      other: "₹27,200",
    },
    {
      program: "B.Sc Radiology & Imaging Technology",
      tuition: "₹85,000",
      other: "₹27,200",
    },
    {
      program: "B.Sc Renal Dialysis Technology",
      tuition: "₹80,000",
      other: "₹27,200",
    },
    {
      program: "B.Sc Physician Assistant",
      tuition: "₹1,00,000",
      other: "₹27,200",
    },
    {
      program: "B.Sc Neuro Science Technology",
      tuition: "₹60,000",
      other: "₹27,200",
    },
    {
      program: "B.Sc Accident and Emergency Care Technology",
      tuition: "₹60,000",
      other: "₹27,200",
    },
    { program: "Bachelor of Optometry", tuition: "₹90,000", other: "₹27,200" },
    {
      program: "B.Sc Forensic Science Technology",
      tuition: "₹70,000",
      other: "₹27,200",
    },
    {
      program: "B.Sc Respiratory Care Technology",
      tuition: "₹1,00,000",
      other: "₹27,200",
    },
    {
      program: "B.Sc Emergency Medical Care Technology",
      tuition: "₹50,000",
      other: "₹27,200",
    },
  ];

  const pgFees = [
    {
      program: "M.Sc Accident and Emergency Care Technology",
      tuition: "₹1,00,000",
      other: "₹26,000",
    },
    {
      program: "M.Sc Renal Dialysis Technology",
      tuition: "₹1,00,000",
      other: "₹26,000",
    },
    {
      program: "M.Sc Radiology & Imaging Technology",
      tuition: "₹1,00,000",
      other: "₹26,000",
    },
    {
      program: "M.Sc Echocardiography",
      tuition: "₹1,00,000",
      other: "₹26,000",
    },
    {
      program: "M.Sc Cardiac Cath and Intervention Technology",
      tuition: "₹1,00,000",
      other: "₹26,000",
    },
    { program: "Master of Optometry", tuition: "₹1,00,000", other: "₹26,000" },
    {
      program: "M.Sc Medical Lab Technology",
      tuition: "₹1,00,000",
      other: "₹26,000",
    },
    {
      program: "M.Sc Anaesthesia Technology",
      tuition: "₹1,00,000",
      other: "₹26,000",
    },
    {
      program: "M.Sc Physician Assistant",
      tuition: "₹1,00,000",
      other: "₹26,000",
    },
    {
      program: "M.Sc Forensic Science Technology",
      tuition: "₹1,00,000",
      other: "₹26,000",
    },
    {
      program: "M.Sc Advance Care Paramedic",
      tuition: "₹50,000",
      other: "₹26,000",
    },
  ];

  return (
    <div className="fee-structure-container">
      <h2 className="title">Fee Structure (2025-2026)</h2>

      {/* Tabs for UG and PG */}
      <div className="fee-tabs" data-active={activeTab}>
        <div
          className={`fee-tab ${activeTab === "UG" ? "active" : ""}`}
          onClick={() => handleTabChange("UG")}
        >
          Undergraduate (UG)
        </div>
        <div
          className={`fee-tab ${activeTab === "PG" ? "active" : ""}`}
          onClick={() => handleTabChange("PG")}
        >
          Postgraduate (PG)
        </div>
      </div>

      {/* Table Content */}
      <table className="fee-structure-table">
        <thead>
          <tr>
            <th>Programme</th>
            <th>Tuition Fee (Per Annum)</th>
            <th>Other Fee</th>
          </tr>
        </thead>
        <tbody>
          {(activeTab === "UG" ? ugFees : pgFees).map((fee, index) => (
            <tr key={index}>
              <td>{fee.program}</td>
              <td>{fee.tuition}</td>
              <td>{fee.other}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Notes Section */}
      <p className="fee-notes">
        <strong>Hostel Rent:</strong> ₹25,500/- | <strong>Mess Fee:</strong>{" "}
        ₹42,000/- (2 Installments) |<strong>Total:</strong> ₹67,500/-
      </p>

      {/* Download PDF Button */}
      <a
        href={`public/${pdfFileName}`}
        download
        className="download-pdf-btn"
        onClick={handleDownload}
      >
        📄 Download Fee Structure PDF
      </a>
    </div>
  );
};

export default FeeStructure;
