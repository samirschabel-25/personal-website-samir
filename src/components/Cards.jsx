import React, { useMemo, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./css/Cards.css";

function Cards() {
  const [activeModal, setActiveModal] = useState(null);

  const experiences = useMemo(
    () => [
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
        company:
          "Working Group for Islam in Science and Society (AIWG), Frankfurt a. Main",
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
    ],
    []
  );

  const educations = useMemo(
    () => [
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
    ],
    []
  );

  const skills = useMemo(
    () => [
      { src: "/react.png", alt: "React" },
      { src: "/angular.png", alt: "Angular" },
      { src: "/html5.png", alt: "HTML5" },
      { src: "/CSS3.png", alt: "CSS3" },
      { src: "/java.png", alt: "Java" },
      { src: "/springboot.png", alt: "Spring Boot" },
      { src: "/postgres.png", alt: "PostgreSQL" },
      { src: "/python.png", alt: "Python" },
      { src: "/mongodb.png", alt: "MongoDB" },
      { src: "/sql.png", alt: "SQL" },
      { src: "/vscode.png", alt: "Visual Studio Code" },
      { src: "/github.png", alt: "Github" },
      { src: "/git.png", alt: "Git" },
    ],
    []
  );

  const languages = useMemo(
    () => [
      { src: "/germany.png", alt: "German - Business fluent" },
      { src: "/english.png", alt: "English - Mother tongue" },
      { src: "/arabic.png", alt: "Arabic - Beginner" },
    ],
    []
  );

  const hobbies = useMemo(
    () => [
      { src: "/runner.jpg", alt: "Jogging" },
      { src: "/singing.jpg", alt: "Singing" },
      { src: "/book.jpg", alt: "Reading" },
      { src: "/contentcreator.jpg", alt: "Content Creating" },
      { src: "/traveling.jpg", alt: "Traveling" },
    ],
    []
  );

  function Timeline({ items }) {
    return (
      <div className="timeline">
        {items.map((item, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-left">
              <span className="timeline-dot" />
              <span className="timeline-date">{item.fromTo}</span>
            </div>

            <div className="timeline-right">
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-company">{item.company}</div>

              <ul className="timeline-bullets">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }

  function IconGrid({ items }) {
    return (
      <div className="skills-grid">
        {items.map((s, i) => (
          <div className="skill-card" key={i} title={s.alt}>
            <img className="skill-icon" src={s.src} alt={s.alt} />
            <div className="skill-label">{s.alt}</div>
          </div>
        ))}
      </div>
    );
  }

  const sections = useMemo(
    () => [
      {
        key: "work",
        video: "/work.mp4",
        button: "Work Experience",
        title: "Work Experience",
        body: <Timeline items={experiences} />,
      },
      {
        key: "edu",
        video: "/edu.mp4",
        button: "Education",
        title: "Education",
        body: <Timeline items={educations} />,
      },
      {
        key: "skills",
        video: "/skills.mp4",
        button: "Programming Skills",
        title: "Programming Skills",
        body: <IconGrid items={skills} />,
      },
      {
        key: "languages",
        video: "/language_2.mp4",
        button: "Language Skills",
        title: "Language Skills",
        body: <IconGrid items={languages} />,
      },
      {
        key: "hobbies",
        video: "/hobbies.mp4",
        button: "Hobbies",
        title: "Hobbies",
        body: <IconGrid items={hobbies} />,
      },
    ],
    [educations, experiences, hobbies, languages, skills]
  );

  const currentSection = sections.find((s) => s.key === activeModal);

  return (
    <>
      <div className="cards-grid">
        {sections.map((s) => (
          <Card className="card-general" key={s.key}>
            <div className="card-media">
              <video
                className="card-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={s.video} type="video/mp4" />
              </video>
            </div>

            <Button className="btn-modal" onClick={() => setActiveModal(s.key)}>
              {s.button}
            </Button>
          </Card>
        ))}
      </div>

      <Modal
        size="lg"
        show={Boolean(currentSection)}
        onHide={() => setActiveModal(null)}
        scrollable
        centered
        aria-labelledby="cv-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="cv-modal-title">{currentSection?.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{currentSection?.body}</Modal.Body>
      </Modal>
    </>
  );
}

export default Cards;
