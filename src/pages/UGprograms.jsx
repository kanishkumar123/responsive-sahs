import React, { useState, useEffect, useRef } from "react";
import "./UGPrograms.css";

const UGProgrammes = () => {
  const programmes = [
    {
      name: "B.Sc. Accident and Emergency Care Technology",
      duration: "3 + 1 Year Internship",
      tuition: "₹60,000",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, and Biology (Botany & Zoology).",
      overview:
        "The Accident and Emergency Care Technology course is a four-year program (3 Years + 1 Year Internship) that trains candidates in emergency medical techniques to become first responders to various medical emergencies. Students are equipped with knowledge and skills to manage patients in critical situations both inside and outside hospitals. Most of the training is conducted in the Accident and Emergency Medicine Department. These technicians play a crucial role in saving lives alongside the medical team. Graduates have good opportunities in multi-specialty hospitals in India and abroad.",
      careerProspects: [
        "Government / Private Trauma Centers",
        "Emergency Departments in Multispecialty Hospitals",
        "Ortho Specialty Centers",
        "Surgical Emergency Areas",
        "Pediatric Trauma Centers",
        "Trauma Ambulance Services",
      ],
      po: [
        "Identify disease-producing microorganisms, explain microbiology principles, and demonstrate specimen handling and sterilization methods; understand the nurse’s role in infection control.",
        "Understand basic nursing principles to meet the health needs of individuals, families, and communities across all healthcare settings.",
        "Identify ICU drugs, understand their pharmacology, routes of administration, uses, and side effects.",
        "Recognize major abdominal illnesses and trauma, recommend relevant investigations, and prevent resuscitation delays.",
        "Understand trauma care principles from minor injuries to humanitarian emergencies with emphasis on patient safety.",
        "Assess physical changes in childbearing women and recognize injuries specific to pregnancy and pediatrics.",
        "Perform comprehensive physical exams for traumatic and surgical emergencies.",
        "Perform trauma/general surgery assessments using FAST ultrasound.",
        "Assess cardiac patients using ECHO cardiogram.",
        "Apply Basic Life Support (BLS), Advanced Cardiovascular Life Support (ACLS), and common emergency first aid techniques.",
        "Make informed decisions on when to administer first aid and when to call for help.",
        "Implement emergency procedures accurately and effectively.",
      ],
    },
    {
      name: "B.Sc. Anaesthesia Technology",
      duration: "3 + 1 Year Internship",
      tuition: "₹90,000",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "The Anaesthesia Technology course is designed with relevance to the current requirements of Anaesthesia technologists in the health care industry. This program prepares students to be part of a multidisciplinary team in operating rooms—assisting Anaesthesiologists and surgical teams during the pre-operative to post-operative period, maintaining the operating room, and providing patient support in the recovery area. Anaesthesia technologists assist in the administration and monitoring of anaesthesia and possess extensive knowledge of anaesthesia techniques, instruments, and technology.",
      careerProspects: [
        "Anaesthesia Departments",
        "Operating Theatre Suites",
        "Emergency Departments",
        "Intensive Care Units (ICU)",
        "Day Surgery Clinics",
      ],
      po: [
        "Assist doctors and surgeons during surgical procedures.",
        "Operate anaesthesia equipment when required.",
        "Administer anaesthetic agents to patients pre-operatively.",
        "Monitor patients before, during, and after surgery, focusing on vital signs.",
        "Acquire knowledge and skills to determine and administer appropriate doses of anaesthetic agents.",
        "Work in multi-speciality hospitals as Anaesthesia Technologists.",
      ],
    },
    {
      name: "B.Sc. Cardiac Technology",
      duration: "3 + 1 Year Internship",
      tuition: "₹1,50,000",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "Cardiac technology is an area of specialization for Allied Health professionals. Cardiovascular technologists assist physicians in the diagnosis and treatment of cardiac and peripheral vascular conditions. Students are trained to diagnose and examine heart chambers, valves, and vessels using cardiac ultrasound equipment and electrocardiograms.",
      career:
        "Graduates can work in Hospitals, Cardiology Departments, Cardiac Rehabilitation Centres, Medical Manufacturing Companies, and Educational Institutions as Cardiovascular Technologists, Cardiac Sonographers, and Electrophysiology specialists.",
      po: [
        "PO1: Assist physicians in the diagnosis and treatment of cardiac and peripheral vascular conditions.",
        "PO2: Prepare patients for open-heart surgery and pacemaker implantation.",
        "PO3: Assist physicians with patient monitoring during surgery or procedures.",
        "PO4: Document evaluation results, progress reports, treatment plans, and other data using appropriate formats and systems.",
      ],
    },
    {
      name: "B.Sc. Emergency Medical Care Technology",
      duration: "3 + 1 Year Internship",
      tuition: "₹50,000",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "Emergency Medical Care Technology provides support for critically ill patients in pre-hospital and hospital settings. These professionals are trained to monitor equipment, administer first aid, and assist physicians during emergencies. They are also skilled in advanced life support, trauma care, and cardiac resuscitation techniques.",
      career:
        "Graduates can work in Emergency Departments, Trauma Centers, Ambulance Services, and various health care settings as Emergency Medical Technologists or in roles requiring life-saving techniques.",
      po: [
        "PO1: Assess, diagnose, and prioritize emergency conditions using evidence-based protocols and perform necessary life-saving interventions.",
        "PO2: Demonstrate expertise in performing ALS, BLS, airway management, trauma care, and cardiac resuscitation techniques.",
        "PO3: Gain hands-on experience with Emergency Medical Equipment.",
        "PO4: Develop rapid decision-making skills to handle emergency scenarios effectively.",
        "PO5: Enhance interpersonal and communication skills for effective coordination in critical situations.",
        "PO6: Adopt ethical practices, legal compliance, and patient confidentiality in health care settings.",
        "PO7: Encourage the use of scientific research to improve emergency care protocols and patient safety.",
        "PO8: Develop leadership skills to manage disaster response and emergency medical services.",
        "PO9: Commit to continuous professional development and keep up with new technologies and trends in emergency medical care.",
      ],
    },
    {
      name: "B.Sc. Forensic Science Technology",
      duration: "3 + 1 Year Internship",
      tuition: "₹70,000",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry & Biology (Botany & Zoology) or Mathematics.",
      overview:
        "Forensic Science Technology applies scientific principles to solve crimes. It includes training in crime scene investigation, evidence collection, forensic pathology, and psychological analysis. Students are trained in both theoretical and practical aspects of forensic science.",
      career:
        "Graduates can pursue careers in crime investigation, law enforcement, cyber security, government departments, and educational institutions as forensic scientists or forensic laboratory technicians.",
      po: [
        "PO1: Demonstrate competency in the collection, processing, analysis, and evaluation of evidence.",
        "PO2: Understand the role of forensic science within the criminal justice system.",
        "PO3: Use the scientific method for solving problems in forensic science.",
        "PO4: Demonstrate competency in crime scene investigation, including evidence recognition and preservation.",
        "PO5: Document and describe crime scenes and evidence accurately.",
        "PO6: Identify current and emerging trends in forensic science.",
        "PO7: Handle forensic laboratory methodologies for examining evidence.",
        "PO8: Develop written communication skills for presenting findings.",
        "PO9: Develop oral communication skills for discussing scientific findings and testifying in court.",
        "PO10: Procure accreditation and certification in forensic science communities.",
        "PO11: Interact with law enforcement and legal professionals in the forensic process.",
        "PO12: Maintain professionalism and ethical behavior in the forensic science field.",
      ],
    },
    {
      name: "B.Sc. Medical Lab Technology",
      duration: "3 + 1 Year Internship",
      tuition: "₹70,000",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "Medical Lab Technology involves training in laboratory procedures, equipment operation, and diagnostic testing. Students gain practical knowledge and skills in various aspects of laboratory medicine.",
      career:
        "Graduates can work in Hospitals, Pharmaceutical Laboratories, Public Health Laboratories, Research & Development, and as Supervisors or Consultants in the laboratory medicine industry.",
      po: [
        "PO1: Perform routine clinical laboratory procedures in Haematology, Chemistry, Immunohematology, and Microbiology.",
        "PO2: Demonstrate technical skills and professionalism in the laboratory.",
        "PO3: Operate and maintain laboratory equipment, following safety procedures.",
        "PO4: Follow ethical guidelines in laboratory practices.",
        "PO5: Stay updated with new knowledge and techniques in laboratory medicine.",
      ],
    },
    {
      name: "B.Sc. Neuro Science Technology",
      duration: "3 + 1 Year Internship",
      tuition: "₹60,000",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "Neuro Science Technology focuses on understanding the human central nervous system. Students gain knowledge in various aspects of neurology and learn how to assist with diagnostic procedures and neurotechnology products.",
      career:
        "Graduates can work in Neuro Centers, Hospitals, Clinics, Rehabilitation Centers, or specialize further in Neurology or Neurophysiology.",
      po: [
        "PO1: Perform diagnostic procedures such as EEG, evoked potentials, and nerve conduction studies.",
        "PO2: Interpret diagnostic results and discuss with the concerned neuro physician.",
        "PO3: Assist with EMG-guided injections under supervision.",
        "PO4: Understand and design neurotechnology products.",
        "PO5: Analyze and work on neurotechnology prototypes and products.",
        "PO6: Recognize the role of neurotechnology in healthcare and function effectively in multidisciplinary teams.",
        "PO7: Develop professional and ethical skills in healthcare.",
        "PO8: Work as a lecturer in life sciences programs.",
        "PO9: Understand machine settings and parameters for neurological tests.",
      ],
    },

    {
      name: "B.Sc. Operation Theatre Technology",
      duration: "3 + 1 Year Internship",
      tuition: "₹65,000",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "The Operation Theatre Technology program trains professionals to assist in both planned and emergency surgical procedures by preparing all necessary equipment in advance. They play a vital role in the administration of instruments, supplies, and surgical technology, ensuring that procedures run smoothly and efficiently.",
      careerProspects: [
        "Operating Theatre Suites",
        "Emergency Departments",
        "Intensive Care Units (ICU)",
        "Day Surgery Clinics",
      ],
      po: [
        "Demonstrate ability to prepare and maintain the operation theatre.",
        "Maintain equipment support in an acute care environment.",
        "Identify and preserve a sterile field during procedures.",
        "Follow proper infection control policies and procedures.",
        "Manage and maintain theatre equipment effectively.",
        "Prepare the patient for operative procedures.",
        "Provide intra-operative equipment and technical support.",
        "Assist anaesthetists during emergencies outside the OT.",
        "Manage hazardous waste and follow biomedical disposal protocols.",
        "Ensure availability of medical and diagnostic supplies.",
        "Monitor and assure quality in surgical environments.",
      ],
    },
    {
      name: "B.Sc. Perfusion Technology",
      duration: "3 + 1 Year Internship",
      tuition: "₹80,000",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "The B.Sc. Perfusion Technology course aims to produce competent Cardiac Perfusionists equipped with modern technology knowledge and patient care expertise. Perfusionists operate the heart-lung machine during cardiac surgeries and manage the patient's physiological status during cardiopulmonary bypass procedures. Graduates can work in cardiac centers, as ECMO specialists, in heart transplant teams, or as clinical specialists in medical industries.",
      careerProspects: [
        "Clinical Cardiac Perfusionist in Super Speciality Hospitals",
        "Clinical Applications Specialist/Product Specialist in Cardiac Surgery Device Companies",
        "Research Opportunities in Cardiac Specialties for Higher Studies",
      ],
      po: [
        "Conduct cardiopulmonary bypass using heart-lung machines and ancillary equipment.",
        "Closely monitor patient's blood flow and vital signs during open-heart surgeries.",
        "Administer intravenous fluids, blood products, and anaesthetic drugs as needed.",
        "Operate life-support devices such as ECMO, VAD, and IABP.",
        "Work as Perfusion Technologists in cardiac specialty hospitals.",
      ],
    },

    {
      name: "B.Sc. Physician Assistant",
      duration: "3 + 1 Year Internship",
      tuition: "₹1,00,000",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "B.Sc. Physician Assistant is a four-year (3 years + 1 year internship) undergraduate program designed to train students in a medical model to assist physicians and healthcare teams. The program enables students to conduct physical examinations, diagnose illnesses, interpret lab and imaging studies, counsel patients, assist in surgeries, and provide pre- and post-operative care. Physician Assistants work under the supervision of physicians and surgeons and contribute to the prevention and treatment of human illnesses.",
      careerProspects: [
        "Physician Assistants in hospitals under multiple specialties",
        "Member of emergency care in ambulances and rescue squads",
        "Medical equipment and software establishments",
        "Diagnostic centres",
        "Educational services",
      ],
      po: [
        "Apply basic science knowledge to the medical sciences.",
        "Demonstrate competency in clinical procedures performed by Physician Assistants.",
        "Demonstrate ability to perform a complete history and physical examination.",
        "Demonstrate ability to diagnose disease and create an appropriate treatment plan.",
        "Demonstrate the use of Evidence-Based Medicine to effectively diagnose and treat patients.",
        "Demonstrate cross-cultural and socioeconomic sensitivity in clinical practice settings involving special patient populations.",
        "Demonstrate effective communication skills in a healthcare setting.",
        "Demonstrate the ability to collaborate within an interprofessional health care team.",
        "Demonstrate ethical decision making in the practice of medicine.",
      ],
    },

    {
      name: "B.Sc. Radiology & Imaging Technology",
      duration: "3 + 1 Year Internship",
      tuition: "₹85,000",
      eligibility:
        "A Pass in H.S.C. Examination or equivalent examination with subjects (Academic Stream) Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "The B.Sc. Radiology & Imaging Technology program is designed for students aspiring to contribute to medical diagnostics and technological research. It provides a deep understanding of diagnostic imaging and radiological procedures. Students acquire both theoretical knowledge and hands-on experience in imaging modalities and departmental management. The program opens avenues in hospitals, research, academics, and medical equipment companies.",
      careerProspects: [
        "Pursue Master's degree and specialize in Imaging modalities",
        "Work as Imaging Technologists in public and private hospitals",
        "Join as Application Specialists in companies like GE Healthcare, Philips, Siemens, etc.",
        "Take teaching positions in educational institutions in India and abroad",
        "Engage in research activities in Medical Imaging Technology",
      ],
      po: [
        "Describe principles of physics and operation of the imaging equipment.",
        "Demonstrate knowledge of imaging modalities, relevant anatomy, image quality assurance, and diagnostic decision-making.",
        "Perform radiographic procedures ensuring safety of patients and personnel involved.",
        "Operate and maintain commonly used imaging equipment with safety and efficiency.",
        "Provide sufficient information to patients about imaging options, procedure purposes, benefits, possible adverse effects, and limitations.",
        "Recognize their role in the health care system and function effectively in a multidisciplinary health care team.",
        "Engage in self-assessment and structure continuing professional education for skill refinement and patient care advancement.",
        "Practice professional and ethical responsibilities with credibility, integrity, and social concern.",
      ],
    },

    {
      name: "B.Sc. Renal Dialysis Technology",
      duration: "3 + 1 Year Internship",
      tuition: "₹80,000",
      eligibility:
        "A Pass in 10+2 /H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "The B.Sc. Renal Dialysis Technology program trains healthcare professionals in performing and monitoring renal replacement therapies such as haemodialysis, peritoneal dialysis, and continuous renal replacement therapy. The program also includes procedures like hemoperfusion, plasmapheresis, liver dialysis, immunoadsorption, and other immunomodulation techniques for patients with chronic kidney disease or acute kidney injury. Students will learn the medical science of the renal system, principles of dialysis, troubleshooting, and advancements in dialysis technology.",
      careerProspects: [
        "Work as Renal Dialysis Technologists in hospitals and private dialysis centers",
        "Opportunities in teaching and research after pursuing higher education like Ph.D.",
        "Job opportunities overseas where training and experience are highly valued",
      ],
      po: [
        "Handle and operate dialysis machines.",
        "Perform cannulation and termination techniques.",
        "Prepare the dialyzer, reprocess and manage the delivery system.",
        "Maintain and calibrate equipment whenever required.",
        "Monitor and record patient vital signs.",
        "Assess patients for any complications during procedures.",
        "Perform home dialysis treatments.",
        "Administer local anaesthetics and drugs as needed.",
      ],
    },

    {
      name: "B.Sc. Respiratory Care Technology",
      duration: "3 + 1 Year Internship",
      tuition: "₹1,00,000",
      eligibility:
        "A Pass in 10+2 /H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "B.Sc. Respiratory Care Technology is a dynamic and essential program designed to train students in respiratory health and therapeutic technologies. The course focuses on the diagnosis, treatment, and management of respiratory disorders such as asthma, COPD, pneumonia, and respiratory failure. Students gain deep knowledge of the respiratory system’s anatomy and physiology, diagnostic techniques, therapeutic procedures, and the latest technologies in respiratory care. With the growing prevalence of respiratory diseases and an ageing population, skilled respiratory care technologists are in increasing demand in healthcare systems globally.",
      careerProspects: [
        "Work as Respiratory Care Therapists in hospitals",
        "Employment in Intensive Care Units (ICU), Critical Care Units (CCU), Neonatal Intensive Care Units (NICU), and Maternity Intensive Care Units (MICU)",
        "Support roles in diagnostic and therapeutic respiratory care teams alongside doctors and nurses",
      ],
      programmeOutcomes: [], // POs not provided in your message, can be added later if you have them
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);

  const contentRefs = useRef([]);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleCloseModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedProgram(null);
      setIsModalClosing(false);
    }, 300);
  };

  // Update height dynamically when the component renders or expanded index changes
  useEffect(() => {
    if (expandedIndex !== null) {
      const content = contentRefs.current[expandedIndex];
      if (content) {
        content.style.height = `${content.scrollHeight}px`; // Set height dynamically based on content
      }
    } else {
      contentRefs.current.forEach((content) => {
        if (content) {
          content.style.height = "0px"; // Reset height when collapsed
        }
      });
    }
  }, [expandedIndex]);

  return (
    <div className="container">
      <h1 className="title">Undergraduate Programmes</h1>
      <div className="programme-list">
        {programmes.map((programme, index) => (
          <div
            key={index}
            className={`programme-item ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(index)}
          >
            <div className="programme-title">{programme.name}</div>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="expanded-content"
            >
              <p>
                <strong>Duration:</strong> {programme.duration}
              </p>
              <p>
                <strong>Degree Level:</strong>{" "}
                {programme.degreeLevel || "Undergraduate"}
              </p>
              <p>
                <strong>Fees:</strong> {programme.tuition}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProgram(programme);
                }}
              >
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProgram && (
        <div
          className={`modal-overlay ${isModalClosing ? "hide" : ""}`}
          onClick={handleCloseModal}
        >
          <div
            className={`modal-content ${isModalClosing ? "hide" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProgram.name}</h2>
            <p>
              <strong>Duration:</strong> {selectedProgram.duration}
            </p>
            <p>
              <strong>Degree Level:</strong>{" "}
              {selectedProgram.degreeLevel || "Undergraduate"}
            </p>
            <p>
              <strong>Fees:</strong> {selectedProgram.tuition}
            </p>
            <p>
              <strong>Intake:</strong> {selectedProgram.intake}
            </p>
            <p>
              <strong>Eligibility:</strong>{" "}
              {selectedProgram.eligibility || "N/A"}
            </p>
            <p>
              <strong>Overview:</strong> {selectedProgram.overview || "N/A"}
            </p>

            {selectedProgram.careerProspects && (
              <>
                <h3>Career Prospects:</h3>
                <ul>
                  {selectedProgram.careerProspects.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UGProgrammes;
