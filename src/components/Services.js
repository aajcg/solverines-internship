import React, { useState, useRef, useEffect } from 'react';
import '../styles/App.css';

const Services = () => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const servicesGridRef = useRef(null);
    
    const services = [
        {
            icon: 'code',
            title: 'Low Code Development',
            description: 'Accelerate application development with low-code platforms for rapid deployment and scalability'
        },
        {
            icon: 'analytics',
            title: 'Data Analytics & AI',
            description: 'Harness the power of data and automation to drive smarter decision-making and operational efficiency'
        },
        {
            icon: 'cloud',
            title: 'Cloud Services',
            description: 'In today\'s fast-paced digital landscape, businesses need to be agile, scalable, and secure'
        },
        {
            icon: 'apps',
            title: 'Application Services',
            description: 'In an era where digital transformation is key, our Application Services are designed to deliver robust solutions'
        },
        {
            icon: 'engineering',
            title: 'Product Engineering',
            description: 'In today\'s fast-paced market, the ability to innovate, develop, and deliver high-quality products is crucial'
        }
    ];

    const cardWidth = 320 + 20; // card width + gap
    const maxPosition = -cardWidth * (services.length - 3); // Show 3 cards at a time

    const updateSlider = (position) => {
        if (servicesGridRef.current) {
            servicesGridRef.current.style.transform = `translateX(${position}px)`;
        }
    };

    const handlePrev = () => {
        if (currentPosition < 0) {
            const newPosition = currentPosition + cardWidth;
            setCurrentPosition(newPosition);
            updateSlider(newPosition);
        }
    };

    const handleNext = () => {
        if (currentPosition > maxPosition) {
            const newPosition = currentPosition - cardWidth;
            setCurrentPosition(newPosition);
            updateSlider(newPosition);
        }
    };

    const handleDotClick = (index) => {
        const newPosition = -index * cardWidth;
        setCurrentPosition(newPosition);
        updateSlider(newPosition);
    };

    useEffect(() => {
        updateSlider(currentPosition);
    }, [currentPosition]);

    return (
        <section className="services">
            <div className="services-header">
                <div>
                    <h2 className="services-title">What we do?</h2>
                    <p className="services-subtitle">We combine the logic, creativity, and curiosity to build, solve, and create</p>
                </div>
                <div className="nav-arrows">
                    <div className="nav-arrow" onClick={handlePrev}>
                        <span className="material-icons">arrow_back</span>
                    </div>
                    <div className="nav-arrow" onClick={handleNext}>
                        <span className="material-icons">arrow_forward</span>
                    </div>
                </div>
            </div>
            
            <div className="services-container">
                <div className="services-grid" ref={servicesGridRef}>
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                <span className="material-icons" style={{ fontSize: '72px', color: '#020060' }}>
                                    {service.icon}
                                </span>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="pagination">
                {services.map((_, index) => (
                    <div 
                        key={index}
                        className={`pagination-dot ${Math.abs(currentPosition) / cardWidth === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Services;