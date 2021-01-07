import React from 'react';

import { Container, Image } from "react-bootstrap";

import picture from '../../assets/images/instagram-landing-page.png';

import './styles.css';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <Container>
                <div className="title">
                    <h2>Projects</h2>
                </div>
                <div className="content">
                    <div className="project-title">
                        <h6>Instagram Landing Page</h6>
                    </div>
                    <div className="project">
                        <div className="project-description">
                            This is a project that emulates the Instagram Landing Page. It was made using HTML and CSS. This is the <a href="#">code repository</a>.
                        </div>
                        <div className="project-image">
                            <Image src={picture}></Image>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Projects;