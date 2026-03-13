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
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1

    // sanfter Tilt (nicht zu heftig)
    const ry = (x - 0.5) * 10; // rotateY
    const rx = (0.5 - y) * 8; // rotateX

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
      {/* Deko-Blobs im Hintergrund */}
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
              <span className="dot" /> Fullstack • Data Science • AI
            </p>

            <h1 className="heroTitle">
              Welcome to <span className="gradientText">my Portfolio</span>
            </h1>

            <p className="heroSub">
              Ich baue moderne Web-Apps, arbeite gerne mit Daten & KI und liebe
              saubere, skalierbare Lösungen – Frontend wie Backend.
            </p>

            <p className="heroCert">
              🎓 IHK-zertifiziert in Data Science &amp; Künstlicher Intelligenz
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

            <div className="statGrid">
              <div className="statCard">
                <div className="statNumber">⚡</div>
                <div className="statText">
                  <div className="statLabel">Focus</div>
                  <div className="statValue">Clean UI & APIs</div>
                </div>
              </div>
              <div className="statCard">
                <div className="statNumber">🧠</div>
                <div className="statText">
                  <div className="statLabel">Interests</div>
                  <div className="statValue">AI • CV • DS</div>
                </div>
              </div>
              <div className="statCard">
                <div className="statNumber">🛠️</div>
                <div className="statText">
                  <div className="statLabel">Stack</div>
                  <div className="statValue">React • Java • Python</div>
                </div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="profileShell" style={profileStyle}>
              <div className="profileGlow" aria-hidden="true" />
              <img
                src="/myself2.png"
                className="profileImg"
                alt="Portrait of Samir"
                draggable="false"
              />
              <div className="profileFooter">
                <span className="ping" aria-hidden="true" />
                <span>Open for opportunities</span>
              </div>
            </div>

            <div className="scrollHint" aria-hidden="true">
              <span className="mouse" />
              <span className="scrollText">Scroll</span>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}

export default Home;
