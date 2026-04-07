import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = (e) => {
    const el = heroRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const ry = (x - 0.5) * 10;
    const rx = (0.5 - y) * 8;

    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => setTilt({ rx: 0, ry: 0 });

  const profileStyle = useMemo(
    () => ({
      transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)`,
    }),
    [tilt],
  );

  return (
    <div className="homePage">
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
            Samir Schabel
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

      <main
        className="hero"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={heroRef}
      >
        <Container className="heroInner">
          <div className="heroLeft">
            <p className="badgePill">
              <span className="dot" /> Frontend Developer • Java Developer
            </p>

            <h1 className="heroTitle">
              Hi, I'm <span className="gradientText">Samir Schabel</span>
            </h1>

            <p className="heroSub">
              I build scalable web applications using Front - and Backend
              Technologies like Spring Boot, Angular and React, focusing on
              clean architecture, performance and great user experience.
            </p>

            <p className="heroCert">
              🎓 Certified in Web Development 🎓 Certified in Java
              Development(Fullstack)
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

            <div className="statGrid">
              <div className="statCard">
                <div className="statNumber">⚡</div>
                <div className="statText">
                  <div className="statLabel">Focus</div>
                  <div className="statValue">Scalable Web Apps</div>
                </div>
              </div>
              <div className="statCard">
                <div className="statNumber">🧠</div>
                <div className="statText">
                  <div className="statLabel">Expertise</div>
                  <div className="statValue">
                    Angular • React • Spring Boot{" "}
                  </div>
                </div>
              </div>
              <div className="statCard">
                <div className="statNumber">🛠️</div>
                <div className="statText">
                  <div className="statLabel">Tech</div>
                  <div className="statValue">React • Java</div>
                </div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="profileShell" style={profileStyle}>
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
      </main>
    </div>
  );
}

export default Home;
