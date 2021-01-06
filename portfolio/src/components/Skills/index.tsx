import React from 'react';
import {Container, ProgressBar} from "react-bootstrap";

import './styles.css';

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <Container>
                <div className="title">
                    <h2>Skills</h2>
                </div>
                <div className="content">
                    <div className="left-row">
                        <ProgressBar now={75} label="Python"/>
                        <ProgressBar now={70} label="Java"/>
                        <ProgressBar now={70} label="Swift"/>
                        <ProgressBar now={70} label="Ruby"/>
                        <ProgressBar now={60} label="ReactJS"/>
                    </div>
                    <div className="right-row">
                        <ProgressBar now={60} label="SQL"/>
                        <ProgressBar now={60} label="JavaScript"/>
                        <ProgressBar now={50} label="React Native"/>
                        <ProgressBar now={50} label="Node.js"/>
                        <ProgressBar now={50} label="CSS"/>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Skills;