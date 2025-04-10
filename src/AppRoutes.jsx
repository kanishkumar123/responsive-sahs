import React from "react";
import { Routes, Route } from "react-router-dom";

// Import new combined HeaderNavbar component
import HeaderNavbar from "./HeaderNavbar"; // Create this new file
import Footer from "./Footer";

// Components for home page
import Hero from "./Hero";
import CardSection from "./CardSection";
import WhyChooseSAHS from "./WhyChooseSAHS";

// Pages
import UGProgrammes from "./pages/UGprograms";
import PGProgrammes from "./pages/PGprograms";
import AboutSahs from "./pages/AboutSahs";
import AboutVmrf from "./pages/AboutVmrf";
import FeeStructure from "./pages/FeeStructure";
import AdmissionProcedure from "./pages/AdmissionProcedure";
import CourseDetailsPage from "./pages/CourseDetails";
import Founder from "./pages/Founder";
import ChancellorProfile from "./pages/Chancellor";
import Scholarships from "./pages/Scholarships";
import Administrators from "./pages/Administrators";
import Accreditations from "./pages/Accreditations";
import VisionMission from "./pages/VisionMission";
import NewsCarousel from "./NewsCarousel";
import CounterSection from "./CounterSection";
import "./App.css"; // Import your CSS file for styling
import "./HeaderNavbar.css"; // Import the CSS for the new HeaderNavbar component

import NewsAdminForm from "./Components/NewsAdminForm.jsx"; // Import the news admin form
import useContentOffset from "./utils/useContentOffset.js";

// 🏠 Home layout - use the combined header/navbar component
const Home = () => (
  <>
    <HeaderNavbar />
    <div className="content-wrapper">
      <Hero />
      <NewsCarousel />
      <CardSection />
      <CounterSection />
      <WhyChooseSAHS />
      <Footer />
    </div>
  </>
);

// 📄 Common layout for other pages - also uses combined header/navbar
const PageLayout = ({ children }) => (
  <>
    <HeaderNavbar />
    <div className="page-with-nav">
      {children}
      <Footer />
    </div>
  </>
);

// 🔁 Routes
const AppRoutes = () => {
  useContentOffset();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/ug-programs"
        element={
          <PageLayout>
            <UGProgrammes />
          </PageLayout>
        }
      />
      <Route
        path="/pg-programs"
        element={
          <PageLayout>
            <PGProgrammes />
          </PageLayout>
        }
      />
      <Route
        path="/about-sahs"
        element={
          <PageLayout>
            <AboutSahs />
          </PageLayout>
        }
      />
      <Route
        path="/about-vmrf"
        element={
          <PageLayout>
            <AboutVmrf />
          </PageLayout>
        }
      />
      <Route
        path="/fee-structure"
        element={
          <PageLayout>
            <FeeStructure />
          </PageLayout>
        }
      />
      <Route
        path="/admission-procedure"
        element={
          <PageLayout>
            <AdmissionProcedure />
          </PageLayout>
        }
      />
      <Route
        path="/ug-pos"
        element={
          <PageLayout>
            <CourseDetailsPage />
          </PageLayout>
        }
      />
      <Route
        path="/founder"
        element={
          <PageLayout>
            <Founder />
          </PageLayout>
        }
      />
      <Route
        path="/chancellor"
        element={
          <PageLayout>
            <ChancellorProfile />
          </PageLayout>
        }
      />
      <Route
        path="/vision-mission"
        element={
          <PageLayout>
            <VisionMission />
          </PageLayout>
        }
      />
      <Route
        path="/scholarships"
        element={
          <PageLayout>
            <Scholarships />
          </PageLayout>
        }
      />
      <Route
        path="/administrators"
        element={
          <PageLayout>
            <Administrators />
          </PageLayout>
        }
      />
      <Route
        path="/accreditations"
        element={
          <PageLayout>
            <Accreditations />
          </PageLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
