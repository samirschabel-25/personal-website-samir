import React from 'react'
import './Projects.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function Projects() {
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
              <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
          </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <h1 className='projects_title'>In Progress</h1>
    </>
  )
}

export default Projects