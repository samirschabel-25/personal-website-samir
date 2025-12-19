import React from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
function Home() {
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
    <Container className="mt-4">
        <h1 className='title'>Welcome to my Portfolio Website</h1>
        <p className='title'>Welcome to my Portfolio Website. Feel free to explore my CV and About sections for more information.</p>
    </Container>
    <div className='imgcontainer'>
     <img src="/myself2.png" className='profilepicture' alt="Placeholder" />
    </div>
    </>
  )
}

export default Home