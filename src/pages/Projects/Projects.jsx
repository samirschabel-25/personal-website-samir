import React, { useEffect, useState } from "react";
import "./Projects.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Link, NavLink } from "react-router-dom";

const projects = [
  {
    title: "Hawify",
    liveUrl: "https://hawify.vercel.app",
    repoUrl: "https://github.com/samirschabel-25/hawify",
    status: "Live",
    desc: "Deployed auf Vercel. Fokus: saubere UI, schnelle Navigation, responsive Layout.",
    stack: ["React", "Vercel", "Frontend"],
  },
  {
    title: "Yu-Gi-Oh! Card Creator",
    liveUrl: "https://yugiohcardcreator.vercel.app",
    repoUrl: "https://github.com/samirschabel-25/yugiohcardcreator",
    status: "Live",
    desc: "Card Creator mit UI/UX-Fokus und Komponenten-Logik. Live Demo + Code im Repo.",
    stack: ["React", "UI", "Components"],
  },
  {
    title: "Emotion Detector AI",
    liveUrl: "https://emotion-detector-7sqn.vercel.app",
    repoUrl: "https://github.com/samirschabel-25/emotion-detector",
    status: "Live",
    desc: "Full-Stack Machine-Learning-Anwendung zur Erkennung von Emotionen in deutschsprachigen Texten. Entwickelt mit Scikit-Learn, FastAPI und React. Enthält Wahrscheinlichkeitsanalyse, Diagramm-Visualisierung und Analyse-Historie.",
    stack: [
      "Python",
      "Machine Learning",
      "Scikit-Learn",
      "FastAPI",
      "React",
      "NLP",
      "Vercel",
      "Render",
    ],
  },
];

function Projects() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal animation (ohne Library)
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
    <div className="projectsPage">
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

      <header className="projectsHero">
        <Container className="projectsHeroInner">
          <div className="projectsHeroLeft reveal">
            <p className="badgePill">
              <span className="dot" /> Projects
            </p>

            <h1 className="heroTitle">
              Live demos + <span className="gradientText">source code</span> for
              recruiters.
            </h1>

            <p className="heroSub">
              Hier findest du Live-Demos (Vercel) und die zugehörigen
              GitHub-Repositories. Ideal, wenn du schnell UI testen oder direkt
              Code reviewen möchtest.
            </p>

            <div className="ctaRow">
              <Button as="a" href="#live-projects" className="ctaPrimary">
                View Projects
              </Button>

              <Button
                as="a"
                href="https://github.com/samirschabel-25"
                target="_blank"
                rel="noreferrer"
                variant="outline-light"
                className="ctaSecondary"
              >
                GitHub Profile
              </Button>
            </div>
          </div>

          <div className="projectsHeroRight reveal">
            <div className="quickNav">
              <div className="quickNavTitle">Quick navigation</div>
              <a className="quickNavLink" href="#live-projects">
                Projects (Demo + Repo)
              </a>
              <a className="quickNavLink" href="#recruiter-note">
                Recruiter note
              </a>
            </div>

            <div className="miniHint">
              <div className="miniHintTitle">Tip</div>
              <div className="miniHintText">
                “Open Repo” bringt dich direkt zum Code (README, Struktur,
                Commits).
              </div>
            </div>
          </div>
        </Container>
      </header>

      <main className="projectsMain">
        <Container>
          <section id="live-projects" className="glassSection reveal">
            <div className="sectionHeader">
              <h2 className="sectionTitle">Projects</h2>
              <p className="sectionSub">
                Demo ansehen oder Code öffnen — beides in einem Klick.
              </p>
            </div>

            <Row className="g-4">
              {projects.map((p) => (
                <Col key={p.title} xs={12} md={6} lg={4}>
                  <Card className="projectCard h-100">
                    <Card.Body className="projectCardBody">
                      <div className="cardTop">
                        <div className="cardTitleRow">
                          <div className="projectTitleWrap">
                            <div className="projectIcon" aria-hidden="true" />
                            <Card.Title className="projectTitle">
                              {p.title}
                            </Card.Title>
                          </div>

                          <Badge
                            className={`statusPill ${
                              p.status === "Live" ? "statusLive" : "statusWip"
                            }`}
                          >
                            {p.status}
                          </Badge>
                        </div>

                        <Card.Text className="projectDesc">{p.desc}</Card.Text>

                        <div className="stackRow">
                          {p.stack.map((s) => (
                            <span key={s} className="stackTag">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="cardBottom">
                        <div className="linkCol">
                          <div className="linkRow">
                            <span className="linkLabel">Demo:</span>
                            <a
                              className="linkValue"
                              href={p.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              title={p.liveUrl}
                            >
                              {p.liveUrl.replace("https://", "")}
                            </a>
                          </div>
                          <div className="linkRow">
                            <span className="linkLabel">Repo:</span>
                            <a
                              className="linkValue"
                              href={p.repoUrl}
                              target="_blank"
                              rel="noreferrer"
                              title={p.repoUrl}
                            >
                              github.com/…
                            </a>
                          </div>
                        </div>

                        <div className="btnCol">
                          <Button
                            as="a"
                            href={p.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="ctaPrimary smallCta"
                          >
                            Open Demo →
                          </Button>

                          <Button
                            as="a"
                            href={p.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            variant="outline-light"
                            className="ctaSecondary smallCta outlineCta"
                          >
                            Open Repo ↗
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          <section id="recruiter-note" className="contactRow reveal">
            <div className="contactCard">
              <div className="contactTitle">Recruiter note</div>
              <div className="contactText">
                Jede Project-Card enthält Demo + Repository. Im Repo findest du
                README, Code-Struktur und Commits.
              </div>
              <div className="contactActions">
                <Button
                  as="a"
                  href="https://github.com/samirschabel-25"
                  target="_blank"
                  rel="noreferrer"
                  className="ctaPrimary"
                >
                  GitHub Profile
                </Button>
                <Button
                  as={Link}
                  to="/cv"
                  variant="outline-light"
                  className="ctaSecondary"
                >
                  Curriculum Vitae
                </Button>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}

export default Projects;
