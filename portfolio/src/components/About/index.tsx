import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

import picture from '../../assets/images/me.jpg';

import './styles.css';

const About = () => {
    return (
        <Container className="about" id="about">
            <div className="title">
                <h2>About</h2>
            </div>
            <div className="content">
                <div className="picture">
                    <Image src={picture} rounded></Image>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. diam penatibus aliquet tellus, in rutrum augue. Pellentesque. Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. Arcu, sed nisi, mi, arcu libero phasellus tincidunt.
                </div>
            </div>
        </Container>

    )
};

export default About;

