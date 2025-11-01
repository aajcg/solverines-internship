import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdownEnter = (dropdownName) => {
        setActiveDropdown(dropdownName);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img 
                        src="/assets/solverines logo b64.png" 
                        alt="Solverines" 
                        style={{ 
                            width: '250px', 
                            height: '40px', 
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '600',
                            fontSize: '24px'
                        }} 
                        onError={(e) => {
                            // Fallback if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    {/* Text fallback */}
                    <div 
                        style={{ 
                            display: 'none',
                            width: '250px', 
                            height: '40px', 
                            borderRadius: '4px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '600',
                            fontSize: '24px',
                            background: 'linear-gradient(135deg, #020060, #4087DA)',
                            color: 'white',
                            textDecoration: 'none'
                        }}
                    >
                        SOLVERINES
                    </div>
                </Link>
            </div>
            
            <nav className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <a href="#" className="nav-link">Out Systems</a>
                
                {/* Services Dropdown */}
                <div 
                    className="nav-link dropdown"
                    onMouseEnter={() => handleDropdownEnter('services')}
                    onMouseLeave={handleDropdownLeave}
                >
                    Services <span className="material-icons">keyboard_arrow_down</span>
                    <div className={`dropdown-menu ${activeDropdown === 'services' ? 'active' : ''}`}>
                        <Link to="/services/low-code-development">Low Code Development</Link>
                        <Link to="/services/cloud-services">Cloud Services</Link>
                        <Link to="/services/application-services">Application Services</Link>
                        <Link to="/services/platform-service">Platform Service</Link>
                        <Link to="/services/data-analytics-ai">Data Analytics & AI</Link>
                        <Link to="/services/it-consulting">IT Consulting</Link>
                    </div>
                </div>

                {/* Industries Dropdown */}
                <div 
                    className="nav-link dropdown"
                    onMouseEnter={() => handleDropdownEnter('industries')}
                    onMouseLeave={handleDropdownLeave}
                >
                    Industries <span className="material-icons">keyboard_arrow_down</span>
                    <div className={`dropdown-menu ${activeDropdown === 'industries' ? 'active' : ''}`}>
                        <Link to="/industries/automotive">Automotive</Link>
                        <Link to="/industries/consumer-goods">Consumer Goods</Link>
                        <Link to="/industries/financial-services">Financial Services</Link>
                        <Link to="/industries/healthcare">Healthcare</Link>
                        <Link to="/industries/logistics">Logistics</Link>
                        <Link to="/industries/real-estate">Real Estate</Link>
                    </div>
                </div>
            </nav>
            
            <Link to="/contact" className="contact-btn">
                Contact Us
                <span className="material-icons">arrow_forward</span>
            </Link>
        </header>
    );
};

export default Header;