import React from "react";
import ProfileSection from "../Components/ProfileSection";
import founderImage from "../assets/founder1.png"; // Make sure the image is placed correctly

const founderRoles = [
  "Founder - Vinayaka Mission’s Research Foundation (Deemed to be University)",
];

const founderPoints = [
  "Dr. A. Shanmugasundaram a noble Philanthropist and Educationist, established the Thirumuruga Kirupananda Variyar Thavathiru Sundara Swamigal Medical Educational & Charitable Trust (TKVTSSMEC Trust) in the year 1981. It is a registered Trust, totality self-supporting, based at Salem, Tamilnadu, India.",
  "The Vinayaka Mission's Research Foundation (Deemed to be University) since its inception is sponsored by Vinayaka Mission's Research Foundation trust (VMRF).",
  "Thirumuruga Kirupananda Variyar Thavathiru Sundara Swamigal Medical Educational & Charitable Trust is the parent trust of VMRF trust.",
];

const FounderProfile = () => {
  return (
    <ProfileSection
      title="Meet our Founder"
      subtitle="Inspiring leadership that shaped our institution's vision"
      image={founderImage}
      name="Dr. A. Shanmugasundaram"
      roles={founderRoles}
      points={founderPoints}
    />
  );
};

export default FounderProfile;
