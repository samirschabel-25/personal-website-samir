import React from 'react'
import Card from 'react-bootstrap/Card';
import './css/Cards.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Cards() {
const [showWork, setShowWork] = useState(false);
const [showEdu, setShowEdu] = useState(false);
const [showSkills, setShowSkills] = useState(false);
const [showLanguages, setShowLanguages] = useState(false);
const [showH, setShowH] = useState(false);

const experiences = [
  {
    fromTo: "Feb 2023 - Jul 2025",
    title: "Junior Java Developer",
    company: "Peek & Cloppenburg Hamburg KG, Hamburg",
    bullets: [
      "Advising the E-Commerce department on operational and development initiatives",
      "Development of modern Angular.js web applications in the E-Commerce area",
      "Creation and further development of Java, SpringBoot and backend systems, from database to API",
      "Support and operation of OMCR and marketplace processes",
    ],
  },
  {
    fromTo: "May 2022 - Okt 2022",
    title: "Trainee Software Engineer",
    company: "Maiborn Wolff GmbH, Hamburg",
    bullets: [
      "Developing software architectures using Terraform and Microsoft Azure",
      "Developing modern web applications in direct customer-facing environments",
    ],
  },
  {
    fromTo: "Apr 2021 - Mar 2022",
    title: "Practicional Fellow",
    company: "Working Group for Islam in Science and Society (AIWG), Frankfurt a. Main",
    bullets: [
      "Project management in the field of religion- and culture-sensitive bereavement support",
      "Concept and implementation of online-supported grief cafés for Muslims",
    ],
  },
  {
    fromTo: "Dec 2019 - Dec 2020",
    title: "Public Relations",
    company: "Paritätischer Wohlfahrtsverband Hamburg e.V., Hamburg",
    bullets: [
      "Marketing and public relations for social projects",
      "Assisting the project lead",
      "Networking with social institutions in Hamburg",
    ],
  },
];

const educations = [
  {
    fromTo: "Sep 2025 - Jan 2026",
    title: "Further Education: Data Scientist (Artificial Intelligence)",
    company: "neuefische GmbH & Spiced Academy, Hamburg",
    bullets: [
      "Basic Python Programming with Jupyter Notebooks",
      "Machine Learning & Deep Learning",
      "EDA - Exploratory Data Analysis",
      "Data Visualization, Modelling & Evaluation",
      "Capstone Project: TCG Card Scanner with Condition Analysis and Pregrading",
    ],
  },
  {
    fromTo: "Feb 2022 - May 2022",
    title: "Further Education: Java Development",
    company: "neuefische GmbH, Hamburg",
    bullets: [
    "Java 17",
    "Backend Development with Spring Boot",
    "Frontend Development with React Typescript",
    "Databases: MongoDB",
    "Capstone Project: Yu-Gi-Oh! Card Creator & Card Database",
    ],
  },
  {
    fromTo: "Nov 2021 - Jan 2022",
    title: "Further Education: Web Development",
    company: "neuefische GmbH, Hamburg",
    bullets: [
    "JavaScript, HTML5, CSS3",
    "JavaScript Frameworks: React.js, Node.js",
    "Databases: MongoDB",
    "Capstone Project: Hawify - Housekeeping Application",
    ],
  },
  {
    fromTo: "Sep 2015 - Jul 2018",
    title: "Master of Arts (M.A.) in Comparative Religion",
    company: "University of Hamburg (Academy of World Religions), Hamburg",
    bullets: [
      "Comparing religious traditions with a focus on Islam, Christianity, Hinduism, Buddhism and Alivism",
      "Scientifical Assistant at the Academy of World Religions",
      "Graduation with distinction (1,3)",
      "Master's Thesis: 'The Angel spoke to Mary: The Concept of Revelation in the context of female prophethood in Islam '",
    ],
  },
   {
    fromTo: "Sep 2008 - May 2015",
    title: "Bachelor of Arts (B.A.) in Education",
    company: "Technical University of Darmstadt, Darmstadt",
    bullets: [
      "Comparing different educational systems and pedagogical concepts",
      "Graduation with distinction (2,3)",
      "Bachelor's Thesis: 'Plato's Allegory of the Cave and its relevance to today's Education'",
    ],
  },
];

const skills = [
  { src: "/src/assets/react.png", alt: "React" },
  { src: "/src/assets/angular.png", alt: "Angular" },
  { src: "/src/assets/html5.png", alt: "HTML5" },
  { src: "/src/assets/css3.png", alt: "CSS3" },
  { src: "/src/assets/java.png", alt: "Java" },
  { src: "/src/assets/springboot.png", alt: "Spring Boot" },
  { src: "/src/assets/postgres.png", alt: "PostgreSQL" },
  { src: "/src/assets/python.png", alt: "Python" },
  { src: "/src/assets/mongodb.png", alt: "MongoDB" },
  { src: "/src/assets/sql.png", alt: "SQL" },
  { src: "/src/assets/vscode.png", alt: "Visual Studio Code" },
  { src: "/src/assets/github.png", alt: "Github" },
  { src: "/src/assets/git.png", alt: "Git" },
];

const languages = [
  { src: "/src/assets/germany.png", alt: "German - Business fluent" },
  { src: "/src/assets/english.png", alt: "English - Mother tongue" },
  { src: "/src/assets/arabic.png", alt: "Arabic - Beginner" },
];

const hobbies = [
  { src: "/src/assets/runner.jpg", alt: "Jogging" },
  { src: "/src/assets/singing.jpg", alt: "Singing" },
  { src: "/src/assets/book.jpg", alt: "Reading" },
  { src: "/src/assets/contentcreator.jpg", alt: "Content Creating" },
  { src: "/src/assets/traveling.jpg", alt: "Traveling" },
];

  return (
    <>
    <div className='card-container'>
     <Card className='card-general'>
  <video
    className="w-100"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={"/src/assets/work.mp4"} type="video/mp4" />
  </video>

   <Button className='btn-modal' onClick={() => setShowWork(true)}>Work Experience</Button>
      <Modal
        size="lg"
        show={showWork}
        onHide={() => setShowWork(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Work Experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <div className="timeline">
    {experiences.map((exp, idx) => (
      <div className="timeline-item" key={idx}>
        <div className="timeline-left">
          <span className="timeline-dot" />
          <span className="timeline-date">{exp.fromTo}</span>
        </div>

        <div className="timeline-right">
          <div className="timeline-title">{exp.title}</div>
          <div className="timeline-company">{exp.company}</div>

          <ul className="timeline-bullets">
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</Modal.Body>
      </Modal>
</Card>

<Card className='card-general'>
  <video
    className="w-100"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={"/src/assets/edu.mp4"} type="video/mp4" />
  </video>

 <Button className='btn-modal' onClick={() => setShowEdu(true)}>Education</Button>
      <Modal
        size="lg"
        show={showEdu}
        onHide={() => setShowEdu(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Education
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <div className="timeline">
    {educations.map((edu, idx) => (
      <div className="timeline-item" key={idx}>
        <div className="timeline-left">
          <span className="timeline-dot" />
          <span className="timeline-date">{edu.fromTo}</span>
        </div>

        <div className="timeline-right">
          <div className="timeline-title">{edu.title}</div>
          <div className="timeline-company">{edu.company}</div>

          <ul className="timeline-bullets">
            {edu.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</Modal.Body>
      </Modal>

</Card>

<Card className='card-general'>
  <video
    className="w-100"
    autoPlay 
    muted
    loop
    playsInline
  >
    <source src={"/src/assets/skills.mp4"} type="video/mp4" />
  </video>

     <Button className='btn-modal' onClick={() => setShowSkills(true)}>Programming Skills</Button>
      <Modal
        size="lg"
        show={showSkills}
        onHide={() => setShowSkills(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Programming Skills
          </Modal.Title>
        </Modal.Header>
      <Modal.Body>
  <div className="skills-grid">
    {skills.map((s, i) => (
      <div className="skill-card" key={i} title={s.alt}>
        <img className="skill-icon" src={s.src} alt={s.alt} />
        <div className="skill-label">{s.alt}</div>
      </div>
    ))}
  </div>
</Modal.Body>
      </Modal>
</Card>

</div>

   <div className='card-container'>
     <Card className='card-general'>
  <video
    className="w-100"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={"/src/assets/language_2.mp4"} type="video/mp4" />
  </video>

    <Button className='btn-modal' onClick={() => setShowLanguages(true)}>Language Skills</Button>
      <Modal
        size="lg"
        show={showLanguages}
        onHide={() => setShowLanguages(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Language Skills
          </Modal.Title>
        </Modal.Header>
      <Modal.Body>
  <div className="skills-grid">
    {languages.map((l, i) => (
      <div className="skill-card" key={i} title={l.alt}>
        <img className="skill-icon" src={l.src} alt={l.alt} />
        <div className="skill-label">{l.alt}</div>
      </div>
    ))}
  </div>
</Modal.Body>
      </Modal>
</Card>

   <Card className='card-general'>
  <video
    className="w-100"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={"/src/assets/hobbies.mp4"} type="video/mp4" />
  </video>

   <Button className='btn-modal' onClick={() => setShowH(true)}>Hobbies</Button>
      <Modal
        size="lg"
        show={showH}
        onHide={() => setShowH(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Hobbies
          </Modal.Title>
        </Modal.Header>
      <Modal.Body>
  <div className="skills-grid">
    {hobbies.map((h, i) => (
      <div className="skill-card" key={i} title={h.alt}>
        <img className="skill-icon" src={h.src} alt={h.alt} />
        <div className="skill-label">{h.alt}</div>
      </div>
    ))}
  </div>
</Modal.Body>
      </Modal>

</Card>
</div>
    </>
  )
}

export default Cards