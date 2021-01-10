import React from 'react';

import { Navbar, Nav, Container } from "react-bootstrap";

import './styles.css';

const Header = () => {
    return (
        <header>
            <div className="filter">
                <Container>
                    <Navbar collapseOnSelect expand="lg" className="menu">
                        <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#skills">Skills</Nav.Link>
                                <Nav.Link href="#projects">Projects</Nav.Link>
                                <Nav.Link href="#footer">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="texts">
                        <h1>Hey! I'm Lucas.</h1>
                        <p>Software developer from Campinas, Brazil.</p>
                    </div>
                </Container>
            </div>
        </header>
    )
};

export default Header;