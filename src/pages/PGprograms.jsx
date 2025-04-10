import React, { useState, useEffect, useRef } from "react";
import "./PGPrograms.css";

const PGProgrammes = () => {
  const programmes = [
    {
      name: "M.Sc. Anaesthesia Technology",
      duration: "2 Years",
      tuition: "₹1,00,000",
      eligibility:
        "Candidates should have passed in B.Sc. in Anaesthesia Technology / Operation Theatre Technology (or) its equivalent qualification of any University recognized by the UGC.",
      overview:
        "M.Sc. in Anaesthesia Technology is a two-year postgraduate program designed to provide in-depth theoretical and practical knowledge in the field of anaesthesia. Students gain advanced skills in assisting anaesthesiologists during elective and emergency surgeries, operating anaesthetic equipment such as workstations, ventilators, and syringe pumps, administering anaesthetic drugs under supervision, and managing post-operative and ICU care. The course also covers quality control, asepsis maintenance, and the basics of cardiopulmonary resuscitation. Through seminars, research projects, dissertations, and clinical internships, students are trained to become competent professionals in anaesthesia technology.",
      careerProspects: [
        "Work as Anaesthesia Technologists or Assistants in operation theatres in corporate hospitals and medical colleges (India & abroad)",
        "Teaching professions in the field of Anaesthesia Technology",
        "Clinical support roles in surgical units and critical care units",
      ],
      po: [
        "PO1: Demonstrate the ability to evaluate, plan, administer anaesthesia, and provide post-operative care including pain relief, becoming competent in independent practice.",
        "PO2: Demonstrate knowledge to carry out Basic Life Support (BLS) and Advanced Cardiovascular Life Support (ACLS) and train others.",
        "PO3: Manage critically ill patients in the Intensive Care Unit (ICU).",
        "PO4: Apply knowledge of pain management in both acute and chronic pain cases.",
        "PO5: Demonstrate understanding of normal and abnormal human structure and function applied to anaesthesia.",
        "PO6: Understand basic methodology of medical education and develop teaching competence.",
        "PO7: Communicate effectively in clinical settings and demonstrate leadership in OR/ICU environments.",
        "PO8: Maintain anaesthesia records, perform audits, and understand medico-legal aspects.",
        "PO9: Understand research methodologies and clinical trials.",
        "PO10: Critically review scientific literature and update knowledge through journals and ongoing learning.",
      ],
    },

    {
      name: "M.Sc. Accident and Emergency Care Technology",
      duration: "2 Years",
      tuition: "₹1,00,000",
      eligibility:
        "Candidates should have passed in B.Sc. in a relevant field / B.Sc. in Anaesthesia Technology / B.Sc. Physician Assistant / BPT / B.Sc. Nursing (or) its equivalent qualification of any recognized University.",
      overview:
        "M.Sc. Accident and Emergency Care Technology is a two-year postgraduate program designed to train candidates with a wide spectrum of knowledge in emergency care. The curriculum emphasizes pre-hospital transport, stabilization of life-threatening emergencies, trauma management, infectious disease preparedness, telemedicine, and geriatric emergency care. Students are trained in simulation-based education and develop critical decision-making skills essential for providing effective pre-hospital and emergency care.",
      careerProspects: [
        "Emergency Medical Technician (EMT) roles in Government and Private Hospitals",
        "Emergency Medical Therapist in tertiary care hospitals in India and abroad",
        "Specialist in transport and ventilator handling",
        "Member of Emergency Medical Services (EMS) in pre-hospital settings",
        "EMT in air ambulances, wilderness response, industrial services, and offshore response",
        "Teaching faculty and researchers in the field of emergency care",
      ],
      po: [
        "PO1: Assist in diagnostic, therapeutic, and community interventions to treat critically ill patients and perform life-saving procedures.",
        "PO2: Deliver patient care and ambulance transportation, proficient in airway management, central lines, dialysis lines, and catheterization.",
        "PO3: Exhibit professional medical knowledge and interpersonal skills; contribute to documentation and clinical research.",
        "PO4: Maintain clinical records, investigation charts, and support database development for future research.",
        "PO5: Understand nursing principles to address health needs in all healthcare settings and describe ICU drugs and their usage.",
        "PO6: Manage trauma care including injuries in women, children, and the elderly with focus on quality and patient safety.",
        "PO7: Assess physical changes in pregnancy and pediatric trauma; perform physical exams for trauma and surgical emergencies.",
        "PO8: Perform trauma and surgical evaluations using FAST Ultrasound and assess cardiac patients using echocardiogram.",
        "PO9: Demonstrate knowledge in BLS, ACLS, NTLS & ATLS protocols for common emergency and first aid scenarios.",
        "PO10: Manage ambulance and air ambulance transport for critically ill patients and respond to mass casualty incidents with prioritization and emergency treatment.",
      ],
    },
    {
      name: "M.Sc. Advanced Care Paramedic",
      duration: "2 Years",
      tuition: "₹50,000",
      eligibility:
        "Candidates should have passed in B.Sc. in a relevant field / BPT / B.Sc. Nursing Degree (or) its equivalent qualification of any recognized University.",
      overview:
        "The M.Sc. Advanced Care Paramedic program is designed to elevate the careers of practicing paramedics by providing master's level education aligned with professional and personal growth. The course emphasizes clinical expertise, decision-making in diverse healthcare environments, and leadership development. Students gain hands-on training in advanced emergency medical services, intensive care, trauma management, pediatric and geriatric emergencies, and the use of diagnostic tools like ECHO and Ultrasound. This comprehensive training equips them to handle critical care scenarios and take on leading roles in emergency healthcare services.",
      careerProspects: [
        "Trauma and Emergency Care roles in Government and Private Hospitals",
        "Positions in Emergency Departments of Multispecialty Hospitals",
        "Roles in Ortho Specialty and Surgical Emergency Centers",
        "Pediatric Trauma Center positions",
        "Emergency response professionals in Trauma Ambulance Services",
        "High-demand paramedic roles abroad with scope for leadership and specialization",
      ],
      po: [
        "PO1: Demonstrate advanced knowledge and critical care management for patients in emergency situations.",
        "PO2: Provide advanced life support including adult, pediatric, and neonatal resuscitation protocols.",
        "PO3: Manage specialized care including trauma, neurocritical, surgical, and obstetric emergencies.",
        "PO4: Exhibit effective communication and teamwork within healthcare and paramedical teams.",
        "PO5: Apply evidence-based practices and critical thinking by analyzing research and implementing best practices.",
        "PO6: Serve as educators and mentors in paramedicine training programs.",
        "PO7: Lead and manage healthcare teams and paramedical services effectively.",
        "PO8: Handle complex patient situations including multi-trauma, hazardous material exposure, and acute medical emergencies.",
        "PO9: Coordinate emergency response efforts and develop comprehensive emergency management plans.",
      ],
    },

    {
      name: "M.Sc. Cardiac Cath and Interventional Technology",
      duration: "2 Years",
      tuition: "₹1,00,000",
      eligibility:
        "Candidates should have passed in B.Sc. Cardiac Technology / Perfusion Technology / Physician Assistant / B.Sc. Life Sciences (or) its equivalent qualification of any recognized University.",
      overview:
        "M.Sc. Cardiac Cath and Interventional Technology is a two-year postgraduate program focused on training students to perform various diagnostic and interventional procedures related to cardiovascular health. The course provides in-depth knowledge of techniques such as locating blockages in blood vessels (angiogram), measuring pressures and oxygen levels in different heart chambers (hemodynamic assessments), assessing ventricular function, obtaining myocardial biopsies, and diagnosing congenital heart defects and valve diseases. Students gain hands-on skills in catheter-based procedures and develop proficiency in assisting cardiac interventions under supervision.",
      careerProspects: [
        "Work in Cardiac Catheterization Labs as Technologists or Assistants",
        "Support roles in Interventional Cardiology Units",
        "Cardiac diagnostics roles in multispecialty hospitals",
        "Eligibility for certification as Registered Cardiovascular Invasive Specialist (RCIS), RCE, or Cardiopulmonary Technologist",
        "Employment in both government and private hospitals in India and abroad",
        "Opportunities for advanced clinical and research roles in cardiac diagnostics and interventions",
      ],
      po: [
        "PO1: Perform diagnostic and interventional cardiac catheterizations, including insertion of catheters to capture X-rays, angiograms, and recordings for heart structure and function assessment.",
        "PO2: Assist physicians in monitoring patients during cardiac procedures and surgeries, ensuring safety and clinical accuracy.",
        "PO3: Document patient evaluation results, treatment plans, and procedure outcomes using standardized systems and formats.",
        "PO4: Become eligible for recognized certifications such as Registered Cardiac Electrophysiology Specialist (RCE), Cardiovascular Invasive Specialist (CI registry), and Registered Cardiovascular Invasive Specialist (RCIS), with applicable licensing and experience requirements.",
      ],
    },

    {
      name: "M.Sc. Echocardiography",
      duration: "2 Years",
      tuition: "₹1,00,000",
      eligibility:
        "Candidates should have passed in B.Sc. Cardiac Technology / Perfusion Technology / Physician Assistant (or) its equivalent qualification of any recognized University.",
      overview:
        "M.Sc. Echocardiography is a two-year postgraduate program designed to train students in advanced cardiac sonography techniques. This includes evaluating heart chamber sizes, valve functions, and blood flow patterns using echocardiography and Doppler imaging in various disease conditions like CHD, IHD, VHD, and cardiomyopathies. Students are trained to perform detailed heart scans, identify abnormalities, prepare reports, and collaborate effectively with physicians. The program ensures high clinical exposure through affiliations with tertiary care hospitals and provides a foundation in both theoretical knowledge and hands-on diagnostic practice.",
      careerProspects: [
        "Hospitals – as Echocardiogram Technicians, Sonographers, and Diagnostic Imaging Specialists",
        "Educational Institutions – as teaching faculty in Echocardiography and related subjects",
        "Medical Device Manufacturing Companies – involved in the production of pacemakers, catheters, stents, and balloons",
        "Industrial Medical Facilities – performing cardiac scans and diagnostics in workplace health units",
      ],
      po: [
        "PO1: Study and apply various echocardiographic scanning techniques to assess heart anatomy and function.",
        "PO2: Perform echocardiography for ischemic heart disease, valvular disorders, and pediatric cardiac conditions.",
        "PO3: Conduct non-cardiac ultrasound diagnostics where applicable.",
        "PO4: Perform error analysis and quality assurance in diagnostic imaging.",
        "PO5: Operate, calibrate, and troubleshoot imaging equipment including ultrasound and ECG machines.",
        "PO6: Generate diagnostic reports based on echocardiographic and ultrasound data.",
        "PO7: Assist physicians during procedures and provide patient monitoring support.",
        "PO8: Utilize ultrasound technology to construct detailed cardiac images for clinical assessment.",
        "PO9: Conduct fetal echocardiography to assess the cardiac health of the fetus.",
        "PO10: Be eligible for roles such as Echocardiogram Technician, Medical Sonographer, Neonatal Sonographer, and Pediatric Sonographer.",
      ],
    },

    {
      name: "M.Sc. Forensic Science Technology",
      duration: "2 Years",
      tuition: "₹1,00,000",
      eligibility:
        "Candidates should have passed in B.Sc. Criminology / Forensic Science / Forensic Science Technology / Physics / Chemistry / Botany / Zoology / Applied Science (or) its equivalent qualification of any recognized University.",
      overview:
        "M.Sc. Forensic Science Technology is a postgraduate program designed to impart deep knowledge and hands-on expertise in the application of scientific principles to criminal investigations. The program equips students with practical skills in forensic identification, analytical toxicology, cyber forensics, forensic medicine, and crime scene investigation techniques. With a strong foundation in forensic ethics and law, students will learn critical analysis, documentation, and problem-solving approaches. It also fosters research skills and prepares students to work independently or in teams, staying updated with emerging trends in the field of forensic science.",
      careerProspects: [
        "Forensic Science Laboratories (FSLs)",
        "Central Bureau of Investigation (CBI)",
        "Intelligence Bureau (IB)",
        "Hospitals and Clinical Laboratories",
        "Private Detective Agencies",
        "Police Departments and Crime Branch Units",
        "Quality Control Bureaus",
        "Law Firms and Legal Investigation Units",
        "Banks – for fraud investigation and security departments",
        "Academic Institutions – as faculty or research associates",
        "Defence and Armed Forces – in forensic divisions",
      ],
      po: [
        "PO1: Demonstrate knowledge and application of core forensic science principles in criminal investigations.",
        "PO2: Conduct scientific analysis of evidence including toxicology, fingerprints, documents, and biological materials.",
        "PO3: Exhibit skills in cyber forensics and digital evidence management.",
        "PO4: Apply knowledge of forensic medicine and pathology in interpreting post-mortem findings.",
        "PO5: Utilize forensic photography and documentation methods to accurately capture and record evidence.",
        "PO6: Develop analytical thinking and independent problem-solving skills in forensic casework.",
        "PO7: Understand and adhere to ethical guidelines and legal protocols in forensic practice.",
        "PO8: Exhibit effective communication and teamwork skills within interdisciplinary investigative teams.",
        "PO9: Engage in research activities and present findings in a scientifically sound and professional manner.",
        "PO10: Stay updated with emerging forensic technologies, methods, and legislative changes relevant to criminal justice.",
      ],
    },

    {
      name: "M.Sc. Medical Lab Technology",
      duration: "2 Years",
      tuition: "₹1,00,000",
      eligibility:
        "Candidates should have passed in B.Sc. Medical Lab Technology / Biochemistry / Microbiology / Biotechnology / Genetics / Chemistry (with ancillary subject of Biochemistry & Microbiology) (or) its equivalent qualification of any recognized University.",
      overview:
        "M.Sc. in Medical Lab Technology is a postgraduate program that prepares students to become skilled professionals in advanced clinical diagnostic techniques. The course focuses on work-based experience, exposure to modern laboratory practices, and career planning from the first year. With a curriculum driven by hands-on learning, quality assurance, and scientific accuracy, students develop a comprehensive understanding of laboratory operations in haematology, microbiology, clinical chemistry, and immunohematology. The faculty emphasizes staying updated with evolving technologies, ensuring graduates are ready to meet the growing demand in the healthcare and diagnostics sectors.",
      careerProspects: [
        "Clinical Laboratory Technologist in hospitals and diagnostic labs",
        "Pharmaceutical and Public Health Laboratories",
        "Research and Product Development Units",
        "Quality Assurance and Laboratory Management",
        "Consultant to Laboratory Medicine Industry",
        "Sales & Marketing for Laboratory and Diagnostic Equipment",
        "Faculty or Tutor in Laboratory Medicine Programs",
      ],
      po: [
        "PO1: Perform advanced clinical laboratory procedures in Haematology, Chemistry, Immunohematology, and Microbiology within quality control standards under supervision.",
        "PO2: Demonstrate technical expertise, ethical conduct, and professional behavior expected of a clinical lab technician.",
        "PO3: Effectively transition knowledge and experience from academic settings to real-world employment situations.",
        "PO4: Apply systematic problem-solving techniques to identify procedural errors, equipment malfunctions, and verify lab results with accuracy.",
        "PO5: Operate, maintain, and troubleshoot laboratory equipment with adherence to quality and safety protocols.",
        "PO6: Perform within the professional guidelines and ethics of national and international clinical laboratory associations and local regulatory bodies.",
        "PO7: Engage in continuous professional development and remain updated with the latest advancements in laboratory medicine.",
      ],
    },

    {
      name: "M.Sc. Physician Assistant",
      duration: "2 Years",
      tuition: "₹1,00,000",
      eligibility:
        "A pass in B.Sc. Physician Assistant (or) its equivalent qualification of any recognized University.",
      overview:
        "The M.Sc. Physician Assistant program is a two-year postgraduate course designed to prepare students to function as trained healthcare professionals who support doctors by delivering diagnostic, therapeutic, and preventive medical services. The curriculum includes the selection of one broad specialty (either Medicine or Surgery) and three allied sub-specialties, allowing students to focus their clinical training. They work in healthcare settings like house officers, gaining hands-on experience in patient care, assisting in clinical procedures, maintaining medical records, and contributing to administrative tasks. The program also encourages research through a mandatory dissertation. Graduates are trained to bridge the gap between staff nurses and specialists, making them valuable assets in multidisciplinary medical teams and tertiary care settings.",
      careerProspects: [
        "Coronary Care Units",
        "Organ Transplant Units",
        "Orthopaedic Units",
        "Trauma Care Centers",
        "Critical Care Units",
        "Multi-Specialty Clinics and Hospitals",
        "Corporate Health Centers",
        "Health Resorts and Rehabilitation Centers",
        "Educational Institutions and Research Organizations",
      ],
      jobRoles: [
        "Dietician",
        "Cardio Physician Assistant",
        "Professor",
        "Healthcare Assistant",
        "Medical Assistant",
        "Ortho Physician Assistant",
        "Personal Health Facilitator",
      ],
      po: [
        "PO1: Work as a trained healthcare assistant bridging the gap between nursing staff and specialist/super-specialist doctors.",
        "PO2: Provide diagnostic, therapeutic, and preventive healthcare services in a clinical setting under supervision.",
        "PO3: Take medical histories, perform clinical examinations, and assist in various diagnostic and therapeutic procedures.",
        "PO4: Choose and gain expertise in one broad specialty and three allied sub-specialties.",
        "PO5: Acquire hands-on clinical skills by functioning like house officers in real-time healthcare environments.",
        "PO6: Demonstrate administrative and medical record-keeping skills supportive to clinical workflows.",
        "PO7: Engage in health sciences research and complete a dissertation on a relevant clinical or healthcare topic.",
        "PO8: Prepare to take on academic roles in Allied Health Science institutions and mentor undergraduate students.",
      ],
    },

    {
      name: "M.Sc. Radiology & Imaging Technology",
      duration: "2 Years",
      tuition: "₹1,00,000",
      eligibility:
        "Candidates should have passed in B.Sc. Allied Health Sciences in relevant field / Science graduates with Diploma in relevant field / Science graduates with PG Diploma in relevant field obtained from a recognized university or Govt. institution.",
      overview:
        "The M.Sc. Radiology & Imaging Technology program is a postgraduate course designed for students interested in expanding their expertise in diagnostic imaging, medical research, and technological innovation. The curriculum equips students with in-depth theoretical and practical knowledge of advanced imaging techniques such as MRI, CT, Ultrasound, and PET-CT. Graduates are trained to operate radiological equipment independently, ensure radiation safety, manage imaging departments, and assist healthcare professionals in accurate disease diagnosis. The program fosters continual learning, professional development, and prepares students for high-level roles in clinical, technical, and research settings both in India and abroad.",
      careerProspects: [
        "Radiation Safety Officer",
        "Application Specialist",
        "Clinical Sales Specialist",
        "Technical Supervisor",
        "Academics / Research",
      ],
      po: [
        "PO1: Explain basic principles for medical imaging based on advanced image modalities: MRI, CT, Ultrasound, and PET-CT.",
        "PO2: Analyze data and apply image processing and post-processing techniques across different modalities.",
        "PO3: Describe principles of physics and operation of various imaging equipment.",
        "PO4: Demonstrate knowledge of imaging modalities, relevant anatomy, image quality assurance, and diagnostic decision making.",
        "PO5: Acquire knowledge in diagnostic radiology, radiographic techniques, image quality, and quality assurance.",
        "PO6: Understand and apply transform domain non-iterative 2D and 3D reconstruction techniques.",
        "PO7: Perform radiographic procedures with safety and care for both patients and staff.",
        "PO8: Operate and maintain commonly used imaging equipment with efficiency and safety.",
        "PO9: Communicate effectively with patients regarding procedures, benefits, risks, and limitations of imaging methods.",
        "PO10: Understand the statistical nature of radiation energy generation, propagation, and detection.",
        "PO11: Recognize their role in the healthcare system and collaborate effectively in multidisciplinary teams.",
        "PO12: Uphold ethical and professional responsibilities with credibility, integrity, and social responsibility.",
      ],
    },

    {
      name: "M.Sc. Renal Dialysis Technology",
      duration: "2 Years",
      tuition: "₹1,00,000",
      eligibility:
        "A pass in B.Sc. relevant field / MBBS / BDS / B.Sc. Nursing / B.Sc. Physician Assistant (or) its equivalent qualification of any recognized University.",
      overview:
        "M.Sc. Renal Dialysis Technology is a specialized postgraduate program designed to equip students with comprehensive knowledge and advanced skills required to work as dialysis technologists in both government and corporate hospitals. The program emphasizes hands-on training through seminars, clinical postings, topic discussions, and presentations. Students are also exposed to clinical experiments and research projects, including dissertation work, to enhance their expertise and contribute meaningfully to the field.",
      careerProspects: [
        "Dialysis Technologist in Government and Corporate Hospitals (India & Abroad)",
        "Academic/Teaching roles in educational institutions (India & Abroad)",
      ],
      po: [
        "PO1: Perform advanced-level cannulation and termination techniques.",
        "PO2: Prepare the dialyzer, reprocessing units, and delivery systems efficiently.",
        "PO3: Execute and manage dialysis procedures, including equipment operation, monitoring, maintenance, and troubleshooting.",
        "PO4: Maintain and calibrate dialysis-related equipment as needed.",
        "PO5: Monitor and accurately record patient vital signs during dialysis procedures.",
        "PO6: Assess patients for complications during procedures and respond appropriately.",
        "PO7: Conduct home dialysis treatments independently.",
        "PO8: Administer local anesthetics and required medications during procedures.",
      ],
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
      <h1 className="title">Postgraduate Programmes</h1>
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
                <strong>Fees:</strong> {programme.fees}
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

      {/* Modal */}
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
              <strong>Fees:</strong> {selectedProgram.fees}
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

export default PGProgrammes;
