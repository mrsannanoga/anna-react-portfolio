import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import logo from "../assests/img/logo.jpeg";
import linkedin from "../assests/img/linkedin.svg";
import github from "../assests/img/github.svg";
import { Link } from "react-router-dom";


export const NavBar = () => {
    
    return (

        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to= "/">
                    <img src={logo} alt="Logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="skills"
                            className= 'nav-link navbar-link navbar-link'>Skills</Link>
                        <Link to="resume" 
                            className= 'nav-link navbar-link navbar-link'>Resume</Link>
                        <Link to="projects" 
                            className= 'nav-link navbar-link navbar-link'>Projects</Link>
                        <Link to="contact"
                            className= 'nav-link navbar-link navbar-link'>Contact</Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/mrs-anna-noga/"><img src={linkedin} alt="linkedin icon" /></a>
                            <a href="https://github.com/mrsannanoga"><img src={github} alt="github icon" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}