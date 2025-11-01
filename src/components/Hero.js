import React from 'react';
import '../styles/App.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="video-background">
                <video autoPlay muted loop playsInline>
                    <source src="assets/bgvid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">Enterprise Solutions with OutSystems</h1>
                <p className="hero-subtitle">We help businesses innovate faster with secure, scalable applications.</p>
            </div>
        </section>
    );
};

export default Hero;