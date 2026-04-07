import React, { useEffect, useState } from "react";
import "./CurriculumVitae.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import Cards from "../../components/Cards";

function CurriculumVitae() {
  const [scrolled, setScrolled] = useState(false);

  const certificates = [
    {
      title: "Web Development Certificate",
      description: "Completed intensive training in modern web development.",
      file: "/Zertifikat_Web_Development.pdf",
    },
    {
      title: "Java Development Certificate",
      description: "Backend development with Java & Spring Boot.",
      file: "/Zertifikat_Java_Development.pdf",
    },
    {
      title: "IHK Data Science & AI",
      description: "Official certification in Data Science & AI.",
      file: "/IHK-Zertifikat-Fachkraft_Data_Science_KI.pdf",
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="cvPage">
      <Navbar
        expand="lg"
        className={`glassNav ${scrolled ? "navbarScrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/home" className="brand">
            Samir<span className="brandAccent">.</span>Portfolio
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto navLinks">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cv">
                CV
              </Nav.Link>
              <Nav.Link as={NavLink} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="cvHero">
        <Container className="cvHeroInner">
          <div className="cvHeroLeft">
            <h1 className="heroTitle">
              Samir Schabel —{" "}
              <span className="gradientText">Software Developer</span>
            </h1>

            <p className="heroSub">
              Frontend-focused developer with fullstack experience building
              scalable web applications. Strong background in Angular, React,
              Java and growing expertise in AI & data-driven solutions.
            </p>

            <div className="ctaRow">
              <Button
                as="a"
                href="/Samir_Schabel_Lebenslauf_2026.pdf"
                target="_blank"
                className="ctaPrimary"
              >
                Download CV
              </Button>

              <Button
                as={Link}
                to="/projects"
                variant="outline-light"
                className="ctaSecondary"
              >
                View Projects
              </Button>
            </div>
          </div>

          <div className="cvHeroRight">
            <div className="quickNav">
              <div className="quickNavTitle">Overview</div>
              <div className="quickNavText">
                ✔ Web Development (Frontend & Backend) <br />
                ✔ Angular & React <br />
                ✔ Java & APIs <br />✔ AI & Data Science
              </div>
            </div>
          </div>
        </Container>
      </header>

      <main className="cvMain">
        <Container>
          <section className="glassSection">
            <div className="sectionHeader">
              <h2 className="sectionTitle">Experience & Skills</h2>
              <p className="sectionSub">
                Key experience and technical skills at a glance.
              </p>
            </div>

            <div className="cardsWrapper">
              <Cards />
            </div>
          </section>

          <section className="glassSection certificatesSection">
            <div className="sectionHeader">
              <h2 className="sectionTitle">Certificates</h2>
              <p className="sectionSub">
                Verified training and certifications.
              </p>
            </div>

            <div className="certificateGrid">
              {certificates.map((cert, index) => (
                <div className="certificateCard" key={index}>
                  <h3 className="certificateTitle">{cert.title}</h3>
                  <p className="certificateText">{cert.description}</p>

                  <div className="certificateActions">
                    <Button
                      as="a"
                      href={cert.file}
                      target="_blank"
                      className="ctaPrimary"
                    >
                      Open
                    </Button>

                    <Button
                      as="a"
                      href={cert.file}
                      download
                      variant="outline-light"
                      className="ctaSecondary"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="contactRow">
            <div className="contactCard">
              <div className="contactTitle">Let’s work together</div>
              <div className="contactText">
                Feel free to reach out or explore my projects.
              </div>
              <div className="contactActions">
                <Button as={Link} to="/projects" className="ctaPrimary">
                  Projects
                </Button>
                <Button
                  as={Link}
                  to="/contact"
                  variant="outline-light"
                  className="ctaSecondary"
                >
                  Contact
                </Button>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}

export default CurriculumVitae;
