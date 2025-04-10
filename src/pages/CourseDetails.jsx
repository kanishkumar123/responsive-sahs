import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CourseDetails.css";

const courses = {
  UG: [
    {
      name: "B.Sc. Accident and Emergency Care Technology",
      duration: "3 + 1 Year Internship",
      tuition: "₹60,000",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, and Biology (Botany & Zoology).",
      overview:
        "The Accident and Emergency Care Technology course is a four-year program (3 Years + 1 Year Internship) that trains candidates in emergency medical techniques to become first responders to various medical emergencies. Students are equipped with knowledge and skills to manage patients in critical situations both inside and outside hospitals. Most of the training is conducted in the Accident and Emergency Medicine Department. These technicians play a crucial role in saving lives alongside the medical team. Graduates have good opportunities in multi-specialty hospitals in India and abroad.",
      career: [
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
      career: [
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
      career: [
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
      career: [
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
      career: [
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
      career: [
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
      career: [
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
      career: [
        "Work as Respiratory Care Therapists in hospitals",
        "Employment in Intensive Care Units (ICU), Critical Care Units (CCU), Neonatal Intensive Care Units (NICU), and Maternity Intensive Care Units (MICU)",
        "Support roles in diagnostic and therapeutic respiratory care teams alongside doctors and nurses",
      ],
      programmeOutcomes: ["none   "], // POs not provided in your message, can be added later if you have them
    },
  ],
  PG: [
    {
      name: "M.Sc. Anaesthesia Technology",
      duration: "2 Years",
      tuition: "₹1,00,000",
      eligibility:
        "Candidates should have passed in B.Sc. in Anaesthesia Technology / Operation Theatre Technology (or) its equivalent qualification of any University recognized by the UGC.",
      overview:
        "M.Sc. in Anaesthesia Technology is a two-year postgraduate program designed to provide in-depth theoretical and practical knowledge in the field of anaesthesia. Students gain advanced skills in assisting anaesthesiologists during elective and emergency surgeries, operating anaesthetic equipment such as workstations, ventilators, and syringe pumps, administering anaesthetic drugs under supervision, and managing post-operative and ICU care. The course also covers quality control, asepsis maintenance, and the basics of cardiopulmonary resuscitation. Through seminars, research projects, dissertations, and clinical internships, students are trained to become competent professionals in anaesthesia technology.",
      career: [
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
      career: [
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
      career: [
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
      career: [
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
      career: [
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
      career: [
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
      career: [
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
      career: [
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
      career: [
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
      career: [
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
  ],
};

const CourseDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to get tab from URL (normalized to uppercase)
  const getTabFromURL = (location) => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("tab")?.toUpperCase() || "UG"; // Normalize case
  };

  const [activeTab, setActiveTab] = useState(getTabFromURL(location));
  const [selectedCourse, setSelectedCourse] = useState(courses[activeTab][0]);

  useEffect(() => {
    const tabFromURL = getTabFromURL(location);
    setActiveTab(tabFromURL);
    setSelectedCourse(courses[tabFromURL][0]);
  }, [location]); // Include location in the dependency array

  const handleTabChange = (tab) => {
    const normalizedTab = tab.toUpperCase(); // Normalize to uppercase
    setActiveTab(normalizedTab);
    setSelectedCourse(courses[normalizedTab][0]);
    navigate(`?tab=${normalizedTab}`, { replace: true }); // Update URL
  };

  return (
    <div className="course-details-container">
      <h2 className="title">Course Details</h2>

      {/* Tabs */}
      <div className="course-tabs" data-active={activeTab}>
        <div
          className={`course-tab ${activeTab === "UG" ? "active" : ""}`}
          onClick={() => handleTabChange("UG")}
        >
          Undergraduate (UG)
        </div>
        <div
          className={`course-tab ${activeTab === "PG" ? "active" : ""}`}
          onClick={() => handleTabChange("PG")}
        >
          Postgraduate (PG)
        </div>
      </div>

      {/* Course Dropdown */}
      {courses[activeTab].length > 0 && (
        <select
          className="course-dropdown"
          value={selectedCourse.name}
          onChange={(e) => {
            const course = courses[activeTab].find(
              (c) => c.name === e.target.value
            );
            setSelectedCourse(course);
          }}
        >
          {courses[activeTab].map((course, index) => (
            <option key={index} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
      )}

      {/* Course Details */}
      {selectedCourse && (
        <div className="course-details">
          <h2>{selectedCourse.name}</h2>
          <p>
            <strong>Duration:</strong> {selectedCourse.duration}
          </p>
          <p>
            <strong>Fees:</strong> {selectedCourse.tuition}
          </p>
          <p>
            <strong>Eligibility:</strong> {selectedCourse.eligibility}
          </p>
          <p>
            <strong>Overview:</strong> {selectedCourse.overview}
          </p>
          <p>
            <strong>Career Prospects:</strong> {selectedCourse.career}
          </p>

          {/* Conditionally show POs if available */}
          {selectedCourse.po?.length > 0 && (
            <div className="program-outcomes">
              <h3>Programme Outcomes (POs):</h3>
              <ul>
                {selectedCourse.po.map((po, index) => (
                  <li key={index}>{po}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
