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
      title: "Zertifikat neuefische GmbH – Web Development",
      description: "Zertifikat des Trägers im Bereich Web Development.",
      file: "/public/Zertifikat_Web_Development.pdf",
    },
    {
      title: "Zertifikat neuefische GmbH – Java Development",
      description: "Zertifikat des Trägers im Bereich Java Development.",
      file: "/public/Zertifikat_Java_Development.pdf",
    },
    {
      title:
        "Weiterbildungszertifikat Spiced Academy & neuefische GmbH – Data Science & KI",
      description:
        "Zertifikat des Trägers im Bereich Data Science und Künstliche Intelligenz.",
      file: "/public/Data_Science_AI_Zertifikat.pdf",
    },
    {
      title: "IHK Zertifikat – Data Science & KI",
      description:
        "IHK-Zertifikat im Bereich Data Science und Künstliche Intelligenz.",
      file: "/public/IHK-Zertifikat-Fachkraft_Data_Science_KI.pdf",
    },
    {
      title: "IHK Zertifikat – Data AI Foundations",
      description: "Zertifikat des IHK-Programms mit Data AI Foundations.",
      file: "/public/IHK-Zertifikat-Data_AI_Foundations.pdf",
    },
    {
      title: "IHK Zertifikat – Machine Learning",
      description: "Zertifikat des IHK-Programms mit Machine Learning.",
      file: "/public/IHK-Zertifikat-Machine_Learning.pdf",
    },
    {
      title: "IHK Zertifikat – Advanced AI Capstone Project",
      description:
        "Zertifikat des IHK-Programms mit Advanced AI Capstone Project.",
      file: "/public/IHK-Zertifikat-Advanced_AI_Capstone_Project.pdf",
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("isVisible");
        });
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="cvPage">
      <div className="bgBlobs" aria-hidden="true">
        <span className="blob blob1" />
        <span className="blob blob2" />
        <span className="blob blob3" />
      </div>

      <Navbar
        expand="lg"
        className={`glassNav ${scrolled ? "navbarScrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/home" className="brand">
            Samir<span className="brandAccent">.</span>Portfolio
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navToggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navLinks">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cv">
                Curriculum Vitae
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
          <div className="cvHeroLeft reveal">
            <p className="badgePill">
              <span className="dot" /> Curriculum Vitae
            </p>

            <h1 className="heroTitle">
              A clean overview of my{" "}
              <span className="gradientText">experience</span>, education &
              skills.
            </h1>

            <p className="heroSub">
              Hier findest du meinen Lebenslauf im Überblick. Wenn du willst,
              kannst du ihn auch direkt als PDF herunterladen.
            </p>

            <div className="ctaRow">
              <Button
                as="a"
                href="/Samir_Schabel_Lebenslauf_2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="ctaPrimary"
              >
                Download PDF
              </Button>

              <Button
                as={Link}
                to="/projects"
                variant="outline-light"
                className="ctaSecondary"
              >
                See Projects
              </Button>
            </div>
          </div>

          <div className="cvHeroRight reveal">
            <div className="quickNav">
              <div className="quickNavTitle">Quick navigation</div>
              <a className="quickNavLink" href="#cv-cards">
                CV cards
              </a>
              <a className="quickNavLink" href="#cv-certificates">
                Certificates
              </a>
              <a className="quickNavLink" href="#cv-contact">
                Contact
              </a>
            </div>

            <div className="miniHint">
              <div className="miniHintTitle">Tip</div>
              <div className="miniHintText">
                Klick auf die Cards, um Details schneller zu scannen.
              </div>
            </div>
          </div>
        </Container>
      </header>

      <main className="cvMain">
        <Container>
          <section id="cv-cards" className="glassSection reveal">
            <div className="sectionHeader">
              <h2 className="sectionTitle">Curriculum Vitae</h2>
              <p className="sectionSub">
                Alles Wichtige kompakt — Experience, Education, Skills.
              </p>
            </div>

            <div className="cardsWrapper">
              <Cards />
            </div>
          </section>

          <section
            id="cv-certificates"
            className="glassSection reveal certificatesSection"
          >
            <div className="sectionHeader">
              <h2 className="sectionTitle">Certificates</h2>
              <p className="sectionSub">
                Hier findest du meine Zertifikate und Nachweise als
                PDF-Download.
              </p>
            </div>

            <div className="certificateGrid">
              {certificates.map((cert, index) => (
                <div className="certificateCard" key={index}>
                  <div className="certificateIcon">🎓</div>
                  <h3 className="certificateTitle">{cert.title}</h3>
                  <p className="certificateText">{cert.description}</p>

                  <div className="certificateActions">
                    <Button
                      as="a"
                      href={cert.file}
                      target="_blank"
                      rel="noreferrer"
                      className="ctaPrimary"
                    >
                      Open PDF
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

          <section id="cv-contact" className="contactRow reveal">
            <div className="contactCard">
              <div className="contactTitle">Want to get in touch?</div>
              <div className="contactText">
                Schreib mir gerne — oder schau dir direkt meine Projekte an.
              </div>
              <div className="contactActions">
                <Button as={Link} to="/projects" className="ctaPrimary">
                  Projects
                </Button>
                <Button
                  as={Link}
                  to="/about"
                  variant="outline-light"
                  className="ctaSecondary"
                >
                  About me
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
