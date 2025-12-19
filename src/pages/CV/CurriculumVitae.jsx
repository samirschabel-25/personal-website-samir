import React from 'react'
import './CurriculumVitae.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cards from '../../components/Cards';

function CurriculumVitae() {

    const [show, setShow] = useState(false);

  return (
    <>  
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Samir's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/cv">Curriculum Vitae</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    <Container className="mt-4">
        <h1 className='title'>Curriculum Vitae</h1>
        <Cards/>

    </Container>


    </>
  )
}

export default CurriculumVitae