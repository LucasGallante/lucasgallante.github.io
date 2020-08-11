import React from 'react';

import './styles.css';

const Header = () => {
    return (
        <header>
            <div className="filter">
                <div className="top-bar-container">
                    <div className="title">
                        Portfolio
                    </div>
                    <div className="menu">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Skills</a>
                        <a href="#">Portfolio</a>
                        <a href="#" className="contact">Contact</a>
                    </div>
                </div>

                <div className="description">
                    <h1>Hi, I'm Lucas Gallante</h1>
                    <text>Software developer from Campinas, Brazil</text>
                </div>
            </div>
        </header>
    )
};

export default Header;