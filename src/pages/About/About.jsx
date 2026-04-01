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

  // kleine Reveal-Animation per IntersectionObserver (ohne Library)
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
      "React",
      "Java",
      "Spring Boot",
      "TypeScript",
      "Python",
      "SQL / PostgreSQL",
      "REST APIs",
      "Git",
      "Data Science",
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

      <header className="aboutHero">
        <Container className="aboutHeroInner">
          <div className="heroLeft reveal">
            <p className="badgePill">
              <span className="dot" /> About me
            </p>

            <h1 className="heroTitle">
              Building <span className="gradientText">modern apps</span> with a
              calm, solution-oriented mindset.
            </h1>

            <p className="heroSub">
              Full Stack Developer with hands-on experience in modern Web- and
              Spring Boot applications — currently strengthening my profile at
              the intersection of Web Development, Java and Data Science & AI.
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
                Open CV
              </Button>
            </div>

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
              <div className="profileGlow" aria-hidden="true" />
              <img
                src="/myself2.png"
                className="profileImg"
                alt="Portrait of Samir"
                draggable="false"
              />
              <div className="profileFooter">
                <span className="ping" aria-hidden="true" />
                <span>Hamburg • Open for opportunities</span>
              </div>
            </div>

            <div className="miniCards">
              <div className="miniCard">
                <div className="miniTitle">Now</div>
                <div className="miniText">
                  Data Science & AI Upskilling (until Jan 2026)
                </div>
              </div>
              <div className="miniCard">
                <div className="miniTitle">Focus</div>
                <div className="miniText">
                  React UIs • Spring Boot APIs • ML
                </div>
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
                <h2 className="sectionTitle">My Story</h2>
                <p className="storyText">
                  Born on April, 19th, 1988, the technical affinity started very
                  early in my childhood. But I never thought that this interest
                  would once lead me one day to a career in IT. After completing
                  my school education with focus on economics I started my
                  studies in the field of paedagogy at the Technical University
                  of Darmstadt. Right after graduating and recieving my
                  Bachelors degree in 2015, I continued my studies in the field
                  of Comparative Religion at the University of Hamburg, where I
                  graduated with a Masters degree in 2018 with an average grade
                  of 1.3. After trying my best to continue my career at the
                  university I finally decided to follow my passion for
                  technology and started a further education as a Web Developer
                  at neuefische GmbH in Hamburg. Soon after completing the
                  course I had the opportunity to add another further education
                  as a Java Developer. And since then I have been working as a
                  Full Stack Developer with focus on Web Development and Java
                  Development. I’m a dedicated team player with hands-on
                  experience developing modern Web - and Spring Boot
                  applications. Currently, I’m completing a Data Science & AI
                  upskilling program running through the end of January 2026,
                  further strengthening my skill set at the intersection of Web
                  Development, Java Development, and Data Science. I work
                  independently and in a well-structured way, with strong
                  initiative and a calm, solution-oriented mindset—allowing me
                  to deliver convincing results even in new or high-pressure
                  situations. As a trusted point of contact, I’m known for
                  professional, collaborative communication with leaders,
                  colleagues, and internal as well as external stakeholders. In
                  my free time, I enjoy jogging, singing, reading books,
                  creating content, and traveling to new places and being the
                  coach of a junior soccer team.
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
                      <div className="tWhat">
                        B.A. (Pedagogy) — TU Darmstadt
                      </div>
                    </div>
                  </div>

                  <div className="tItem">
                    <div className="tDot" />
                    <div className="tContent">
                      <div className="tWhen">2018</div>
                      <div className="tWhat">
                        M.A. (Comparative Religion) — University of Hamburg
                        (1.3)
                      </div>
                    </div>
                  </div>

                  <div className="tItem">
                    <div className="tDot" />
                    <div className="tContent">
                      <div className="tWhen">2020 →</div>
                      <div className="tWhat">
                        Full Stack Developer — Web Development & Java (Spring
                        Boot)
                      </div>
                    </div>
                  </div>

                  <div className="tItem">
                    <div className="tDot" />
                    <div className="tContent">
                      <div className="tWhen">Now → Jan 2026</div>
                      <div className="tWhat">
                        Data Science & AI Upskilling — building projects at the
                        intersection of web & ML
                      </div>
                    </div>
                  </div>
                </div>

                <div className="softDivider" />

                <h3 className="subTitle">What I enjoy</h3>
                <ul className="niceList">
                  <li>Jogging & staying consistent</li>
                  <li>Singing & creative work</li>
                  <li>Reading & learning</li>
                  <li>Traveling to new places</li>
                  <li>Coaching a junior soccer team</li>
                </ul>
              </Card.Body>
            </Card>
          </div>

          <Card className="quoteCard reveal">
            <Card.Body>
              <div className="quoteMark">“</div>
              <div className="quoteText">
                I value calm communication, structured work, and practical
                solutions — especially when things get complex.
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
