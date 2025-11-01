import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Footer Top Section */}
                <div className="footer-top">
                    {/* Logo and Contact Section */}
                    <div className="footer-section logo-section">
                        <div className="footer-logo">SOLVERINES</div>
                        <div className="footer-tagline">Transforming Businesses with Low Code Solutions using OutSystems</div>
                        <div className="social-links">
                            <a href="#" className="social-link" title="LinkedIn">
                                <span className="material-icons">business</span>
                            </a>
                            <a href="#" className="social-link" title="Instagram">
                                <span className="material-icons">camera_alt</span>
                            </a>
                            <a href="#" className="social-link" title="Facebook">
                                <span className="material-icons">thumb_up</span>
                            </a>
                            <a href="#" className="social-link" title="YouTube">
                                <span className="material-icons">play_arrow</span>
                            </a>
                        </div>
                        <div className="footer-contact">
                            <h4>Reach out to us:</h4>
                            <p>info@solverines.com</p>
                            <p>+91 75500 42242</p>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="footer-section services-section">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/services/low-code-development">Low Code Development</Link></li>
                            <li><Link to="/services/cloud-services">Cloud Services</Link></li>
                            <li><Link to="/services/application-services">Application Services</Link></li>
                            <li><Link to="/services/platform-service">Platform Service</Link></li>
                            <li><Link to="/services/data-analytics-ai">Data Analytics & AI</Link></li>
                            <li><Link to="/services/it-consulting">IT Consulting</Link></li>
                        </ul>
                    </div>

                    {/* Industries Section */}
                    <div className="footer-section industries-section">
                        <h3>Industries</h3>
                        <ul>
                            <li><a href="#">Automotive</a></li>
                            <li><a href="#">Consumer Goods</a></li>
                            <li><a href="#">Financial Services</a></li>
                            <li><a href="#">Healthcare</a></li>
                            <li><a href="#">Logistics</a></li>
                            <li><a href="#">Real Estates</a></li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="footer-section links-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">OutSystems</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Middle - Locations */}
                <div className="footer-middle">
                    <div className="footer-location">
                        <h4>Global Headquarters:</h4>
                        <p>Chennai, TN, India - 600032</p>
                    </div>
                    <div className="footer-location">
                        <h4>Other Locations:</h4>
                        <p>India, Japan, UAE, UK and USA</p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        © 2025 Solverines Technology Solutions Pvt. Ltd. All rights reserved.
                    </div>
                    <div className="footer-bottom-right">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;