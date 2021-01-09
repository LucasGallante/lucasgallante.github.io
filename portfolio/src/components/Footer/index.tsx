import React from 'react';

import { Container } from "react-bootstrap";

import './styles.css';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <Container>
                <div className="title">
                    <h2>Get in touch</h2>
                </div>
                <div className="contacts">
                    <div className="links">
                        <a href="https://www.linkedin.com/in/lucasggleal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/LucasGallante" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://www.instagram.com/luscaleal/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                    <div className="info">
                        <span>luscas.leal@gmail.com</span>
                        <span>+55 19 98117-3907</span>
                    </div>
                </div>
            </Container>
        </footer>
    )
};

export default Footer;