import React, { useEffect, useMemo, useState } from "react";
import "./About.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";

function About() {
  const [scrolled, setScrolled] = useState(false);

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
      { threshold: 0.15 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const skills = useMemo(
    () => [
      "Angular",
      "React",
      "Java",
      "Spring Boot",
      "TypeScript",
      "Python",
      "SQL",
      "REST APIs",
      "Git",
      "Machine Learning",
    ],
    [],
  );

  return (
    <div className="aboutPage">
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

          <Navbar.Toggle className="navToggle" />
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

      <header className="aboutHero">
        <Container className="aboutHeroInner">
          <div className="heroLeft reveal">
            <p className="badgePill">
              <span className="dot" /> About me
            </p>

            <h1 className="heroTitle">
              Software Developer focused on{" "}
              <span className="gradientText">modern web applications</span>
            </h1>

            <p className="heroSub">
              I build scalable and maintainable web applications with a strong
              focus on clean architecture, performance and user experience.
              Alongside frontend and backend development, I integrate data
              science and AI to create smarter, data-driven solutions.
            </p>

            <div className="ctaRow">
              <Button as={Link} to="/projects" className="ctaPrimary">
                View Projects
              </Button>
              <Button
                as={Link}
                to="/cv"
                variant="outline-light"
                className="ctaSecondary"
              >
                Download CV
              </Button>
            </div>
            <br />

            <div className="chipRow reveal">
              {skills.map((s) => (
                <Badge key={s} pill className="skillChip">
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          <div className="heroRight reveal">
            <div className="profileShell">
              <div className="profileGlow" />
              <img
                src="/Bewerbungsfoto_Samir.png"
                className="profileImg"
                alt="Samir Schabel portrait"
                draggable="false"
              />
              <div className="profileFooter">
                <span className="ping" />
                <span>Open for opportunities</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <main className="aboutMain">
        <Container>
          <div className="grid2">
            <Card className="glassCard reveal">
              <Card.Body>
                <h2 className="sectionTitle">About</h2>
                <p className="storyText">
                  I am a frontend-focused developer with a strong foundation in
                  fullstack development. My main goal is to build reliable,
                  scalable and user-friendly applications that solve real-world
                  problems.
                  <br />
                  <br />
                  I have experience working with modern frontend technologies
                  such as Angular and React, combined with backend development
                  using Java and Spring Boot.
                  <br />
                  <br />
                  In addition, I am expanding my expertise in data science and
                  artificial intelligence, enabling me to develop smarter and
                  more data-driven applications.
                  <br />
                  <br />I work in a structured and solution-oriented way, enjoy
                  solving complex problems and continuously improving both code
                  quality and performance.
                </p>
              </Card.Body>
            </Card>

            <Card className="glassCard reveal">
              <Card.Body>
                <h2 className="sectionTitle">Timeline</h2>

                <div className="timeline">
                  <div className="tItem">
                    <div className="tDot" />
                    <div className="tContent">
                      <div className="tWhen">2015</div>
                      <div className="tWhat">B.A. Pedagogy — TU Darmstadt</div>
                    </div>
                  </div>

                  <div className="tItem">
                    <div className="tDot" />
                    <div className="tContent">
                      <div className="tWhen">2018</div>
                      <div className="tWhat">
                        M.A. Comparative Religion — University of Hamburg
                      </div>
                    </div>
                  </div>

                  <div className="tItem">
                    <div className="tDot" />
                    <div className="tContent">
                      <div className="tWhen">2020 →</div>
                      <div className="tWhat">
                        Software Developer — Web & Java Development
                      </div>
                    </div>
                  </div>

                  <div className="tItem">
                    <div className="tDot" />
                    <div className="tContent">
                      <div className="tWhen">Now → 2026</div>
                      <div className="tWhat">
                        Data Science & AI — building data-driven applications
                      </div>
                    </div>
                  </div>
                </div>

                <div className="softDivider" />

                <h3 className="subTitle">What I enjoy</h3>
                <ul className="niceList">
                  <li>Solving complex problems</li>
                  <li>Building clean and scalable systems</li>
                  <li>Learning new technologies</li>
                  <li>Sports & consistency</li>
                </ul>
              </Card.Body>
            </Card>
          </div>

          <Card className="quoteCard reveal">
            <Card.Body>
              <div className="quoteMark">“</div>
              <div className="quoteText">
                I focus on building solutions that are not only functional, but
                also clean, scalable and reliable.
              </div>
              <div className="quoteFooter">— Samir</div>
            </Card.Body>
          </Card>
        </Container>
      </main>
    </div>
  );
}

export default About;
