import React, { useEffect, useState } from "react";
import "./Contact.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Contact() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="contactPage">
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

      <Container className="contactContainer">
        <Card className="glassCard contactCard">
          <Card.Body>
            <h1 className="contactTitle">
              <span className="gradientText">Let’s connect</span>
            </h1>

            <p className="contactSubtitle">
              Open for opportunities — feel free to reach out 🚀
            </p>

            {/* EMAIL */}
            <div className="contactEmailBox">
              <p>Email me directly:</p>
              <a href="mailto:schabel.samir@gmail.com">schabel.samir@gmail.com</a>
            </div>

            {/* CTA BUTTON */}
            <div className="contactCta">
              <Button
                as="a"
                href="mailto:schabel.samir@gmail.com?subject=Job Opportunity"
                className="ctaPrimary"
              >
                Send Email
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;
