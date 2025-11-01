import React from 'react';
import '../styles/App.css';

const Industries = () => {
    const industries = [
        {
            icon: 'directions_car',
            title: 'Automotive',
            description: 'Drive innovation in automotive with digital solutions for manufacturing, supply chain optimization, and connected vehicle platforms.'
        },
        {
            icon: 'shopping_cart',
            title: 'Consumer Goods',
            description: 'Transform consumer experiences with personalized shopping platforms, inventory management, and omnichannel retail solutions.'
        },
        {
            icon: 'local_shipping',
            title: 'Logistics',
            description: 'Streamline operations with intelligent tracking systems, route optimization, and automated warehouse management solutions.'
        },
        {
            icon: 'local_hospital',
            title: 'Healthcare',
            description: 'Revolutionize patient care with secure health platforms, telemedicine solutions, and AI-powered diagnostic tools.'
        },
        {
            icon: 'account_balance',
            title: 'Financial Services',
            description: 'Build secure fintech solutions with digital banking platforms, fraud detection systems, and regulatory compliance tools.'
        },
        {
            icon: 'home',
            title: 'Real Estate',
            description: 'Modernize property management with virtual tours, automated leasing processes, and smart building technologies.'
        }
    ];

    return (
        <section className="industries">
            <h2 className="industries-title">Industries We Serve</h2>
            
            <div className="industries-container">
                {industries.map((industry, index) => (
                    <div key={index} className="industry-card">
                        <div className="industry-icon">
                            <span className="material-icons">{industry.icon}</span>
                        </div>
                        <h3 className="industry-title">{industry.title}</h3>
                        <p className="industry-details">{industry.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Industries;