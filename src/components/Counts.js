import React from 'react';
import useCounter from '../hooks/useCounter';
import '../styles/App.css';

const Counts = () => {
    const [expertsCount, expertsRef] = useCounter(75);
    const [certificationsCount, certificationsRef] = useCounter(150);
    const [projectsCount, projectsRef] = useCounter(120);
    const [experienceCount, experienceRef] = useCounter(12);

    return (
        <section className="counts">
            <div className="counts-content">
                <h2 className="counts-title">Why Choose Solverines for OutSystems Development Services?</h2>
            </div>
            
            <div className="divider"></div>
            
            <div className="counts-grid">
                <div className="count-item">
                    <div className="count-number" ref={expertsRef}>{expertsCount}+</div>
                    <div className="count-label">OutSystem Experts</div>
                </div>

                <div className="count-item">
                    <div className="count-number" ref={certificationsRef}>{certificationsCount}+</div>
                    <div className="count-label">Certifications</div>
                </div>

                <div className="count-item">
                    <div className="count-number" ref={projectsRef}>{projectsCount}+</div>
                    <div className="count-label">Projects Delivered</div>
                </div>

                <div className="count-item">
                    <div className="count-number" ref={experienceRef}>{experienceCount}+</div>
                    <div className="count-label">Years of Experience</div>
                </div>
            </div>
        </section>
    );
};

export default Counts;