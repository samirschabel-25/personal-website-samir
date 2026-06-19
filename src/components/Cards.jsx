import React, { useMemo } from "react";
import Card from "react-bootstrap/Card";
import "./css/Cards.css";

function Cards() {
  const experiences = useMemo(
    () => [
      {
        fromTo: "2023 – 2025",
        title: "Junior Java Developer",
        company: "Peek & Cloppenburg",
        bullets: [
          "Built Angular-based web applications in E-Commerce",
          "Developed REST APIs with Java & Spring Boot",
          "Worked on scalable backend systems",
        ],
      },
      {
        fromTo: "2022",
        title: "Trainee Software Engineer",
        company: "Maiborn Wolff",
        bullets: [
          "Worked with Azure & Terraform",
          "Developed modern web applications",
        ],
      },
    ],
    [],
  );

  const educations = useMemo(
    () => [
      {
        fromTo: "2025 – 2026",
        title: "Data Science & AI",
        company: "neuefische / Spiced",
        bullets: [
          "Machine Learning & Deep Learning",
          "Data Analysis & Visualization",
          "Capstone: AI Card Scanner",
        ],
      },
      {
        fromTo: "2022",
        title: "Java Development",
        company: "neuefische",
        bullets: ["Spring Boot", "APIs", "React"],
      },
    ],
    [],
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

  return (
    <div className="cards-grid">
      <Card className="card-general">
        <h3 className="card-title">Work Experience</h3>
        <Timeline items={experiences} />
      </Card>

      <Card className="card-general">
        <h3 className="card-title">Education</h3>
        <Timeline items={educations} />
      </Card>

      <Card className="card-general">
        <h3 className="card-title">Key Skills</h3>
        <ul className="simple-list">
          <li>Angular & React</li>
          <li>Java & Spring Boot</li>
          <li>REST APIs & Databases</li>
          <li>Python & Machine Learning</li>
        </ul>
      </Card>
    </div>
  );
}

export default Cards;
