import React from 'react'
import './About.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from "react-bootstrap/Card";
import { Link, NavLink } from 'react-router-dom';
function About() {
  return (
   <>  
   <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Samir's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
              <Nav.Link as={NavLink} to="/cv">Curriculum Vitae</Nav.Link>
          </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

     <div className='imgcontainer_a'>
     <img src="/myself2.png" className='profilepicture' alt="Placeholder" />
    </div>

      <Card className="shadow-sm" style={{ maxWidth: 1200, margin: "24px auto", textAlign: "justify"}}>

      <Card.Body>
        <p>
          Born on April, 19th, 1988, the technical affinity started very early in my childhood. 
          But I never thought that this interest would once lead me one day to a career in IT.
          After completing my school education with focus on economics I started my studies in the field of paedagogy at the Technical University of Darmstadt.
          Right after graduating and recieving my Bachelors degree in 2015, I continued my studies in the field of Comparative Religion at the University of Hamburg,
          where I graduated with a Masters degree in 2018 with an average grade of 1.3. After trying my best to continue my career at the university I finally decided to follow my passion for 
          technology and started a further education as a Web Developer at neuefische GmbH in Hamburg. Soon after completing the course I had the opportunity to add another further education as a Java Developer.
          And since then I have been working as a Full Stack Developer with focus on Web Development and Java Development.
          I’m a dedicated team player with hands-on experience developing modern Web - and Spring Boot applications.
          Currently, I’m completing a Data Science & AI upskilling program running through the end of January 2026, 
          further strengthening my skill set at the intersection of Web Development, Java Development, and Data Science. 
          I work independently and in a well-structured way, with strong initiative and a calm, solution-oriented mindset—allowing me to 
          deliver convincing results even in new or high-pressure situations. 
          As a trusted point of contact, I’m known for professional, collaborative communication with leaders, colleagues, and internal as well as external stakeholders.

          In my free time, I enjoy jogging, singing, reading books, creating content, and traveling to new places and being the coach of a junior soccer team.
        </p>
      </Card.Body>
    </Card>

    
    </>
  )
}

export default About