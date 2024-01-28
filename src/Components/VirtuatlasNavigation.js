import React from 'react'
import { Container, Navbar , Nav } from 'react-bootstrap'
import "../App.css";

function VirtuatlasNavigation() {
  return (
    <div>
      <Navbar data-bs-theme="dark" className="navigation">
        <Container className="mt-2" fluid>
          <Navbar.Brand href="#home" className="me-3 ms-3">
            <img
              alt="Virtuatlas-Logo"
              src="logo-removebg-preview.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-1"
            />{" "}
            Virtuatlas
          </Navbar.Brand>
          <Nav className="me-auto navitems p-1">
            <Nav.Link href="#home" className="nav-item menu me-2">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="nav-item menu me-2">
              Explore
            </Nav.Link>
            <Nav.Link
              href="https://www.google.com/maps"
              className="nav-item menu me-2"
              target="_blank"
            >
              Maps
            </Nav.Link>
            <Nav.Link href="#Enroute" className="nav-item menu me-2">
              Enroute
            </Nav.Link>
            <Nav.Link href="#Services" className="nav-item menu me-2">
              Services
            </Nav.Link>
            <Nav.Link href="#Myjourney" className="nav-item menu me-2">
              My Journeys
            </Nav.Link>
            <Nav.Link href="#hubspots" className="nav-item menu me-2">
              Hub Spots
            </Nav.Link>
            <Nav.Link href="#Contactus" className="nav-item menu me-2">
              Contact Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default VirtuatlasNavigation
