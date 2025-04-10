import React from "react";
import chancellorImage from "../assets/Chancellor.jpg";
import ProfileSection from "../Components/ProfileSection";

const ChancellorProfile = () => {
  return (
    <ProfileSection
      title="Meet Our Chancellor"
      subtitle="Visionary leadership guiding our academic excellence"
      image={chancellorImage}
      name="Dr. A.S. Ganesan"
      roles={[
        "Chancellor - Vinayaka Mission’s Research Foundation",
        "Managing Director - Vinayaka Medical Care Centre Pvt. Ltd",
      ]}
      points={[
        "Dr. A.S. Ganesan is a distinguished leader whose journey from Madras Medical College to becoming the Chancellor of VMRF reflects dedication, vision, and a commitment to societal progress.",
        "He spearheaded the establishment of the School of Economics and Public Policy and the Law School at the Chennai campus.",
        "Holds the prestigious Fellowship of the Royal College of Physicians (FRCP).",
        "Founded the Ganesan Incubation and Entrepreneurship Centre (GIEC), nurturing over 25 startups.",
        "Under his guidance, VMRF has established global collaborations with Ohio University, Seattle University, York University, and Oakland University.",
        "A committed philanthropist, Dr. Ganesan expanded healthcare access to rural areas and donated ₹4 Crores for a community hall in Paiyanoor.",
        "Dr. Ganesan lives in Chennai with his wife, Dr. Anuradha, Vice President of VMRF, and their two children.",
      ]}
    />
  );
};

export default ChancellorProfile;
