import React from 'react';
import '../../styles/ServicePages.css';

const CloudServices = () => {
    return (
        <div className="service-page">
            {/* Header is already included in App.js */}
            
            {/* Enhanced Hero Section */}
            <section className="service-hero">
                <div className="hero-background-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                </div>

                <div className="service-hero-content">
                    <h1>Cloud Services</h1>
                    <p>Transform Your Business with the Power of the Cloud</p>
                    
                    <div className="hero-cta-buttons">
                        <button className="hero-btn hero-btn-primary">Get Started</button>
                        <button className="hero-btn hero-btn-secondary">Learn More</button>
                    </div>
                </div>

                <div className="hero-stats">
                    <div className="hero-stat">
                        <div className="hero-stat-number">500+</div>
                        <div className="hero-stat-label">Cloud Deployments</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-number">99.9%</div>
                        <div className="hero-stat-label">Uptime Guarantee</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-number">24/7</div>
                        <div className="hero-stat-label">Expert Support</div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="service-content">
                <div className="content-wrapper">
                    {/* Introduction */}
                    <div className="intro-section">
                        <h2>Flexible, Secure, and Scalable Cloud Solutions</h2>
                        <p>Across the evolving business landscape, cloud technology serves as a key enabler of agility, scalability, and efficiency. Cloud solutions empower organizations to enhance flexibility, optimize costs, and strengthen operational performance while maintaining security and reliability. Whether initiating a cloud journey or optimizing existing infrastructure, comprehensive cloud services ensure seamless transformation and long-term success.</p>
                    </div>

                    {/* Core Services */}
                    <div className="solutions-section">
                        <h3>Our Cloud Solutions</h3>
                        <div className="solutions-grid">
                            <div className="solution-card">
                                <h4><span className="icon">📋</span>Cloud Strategy & Planning</h4>
                                <p>We work closely with you to design a cloud strategy that fits your business goals. Our experts help you choose the right cloud model—public, private, or hybrid—and ensure a smooth transition.</p>
                            </div>

                            <div className="solution-card">
                                <h4><span className="icon">⚙️</span>Cloud Management & Support</h4>
                                <p>Keep your cloud environment running efficiently with our ongoing management and support. We monitor performance, ensure security, and provide continuous improvements to meet your growing needs.</p>
                            </div>

                            <div className="solution-card">
                                <h4><span className="icon">🔒</span>Security & Data Protection</h4>
                                <p>Your data's safety is our top priority. We implement strong security measures and best practices to protect your business information and ensure compliance with industry standards.</p>
                            </div>

                            <div className="solution-card">
                                <h4><span className="icon">☁️</span>Cloud Application Development</h4>
                                <p>Build and deploy cloud-native applications that are resilient, scalable, and optimized for modern architectures. Our cloud engineers leverage microservices, containers, and serverless technologies.</p>
                            </div>

                            <div className="solution-card">
                                <h4><span className="icon">💾</span>Business Continuity & Backup</h4>
                                <p>Be prepared for the unexpected. Our backup and recovery solutions ensure that your critical data and applications are always protected and quickly recoverable during any disruption.</p>
                            </div>

                            <div className="solution-card">
                                <h4><span className="icon">💰</span>Optimization & Cost Efficiency</h4>
                                <p>Get the most out of your cloud investment. We analyze your usage, improve efficiency, and help you save costs while maintaining high performance and reliability.</p>
                            </div>
                        </div>
                    </div>

                    {/* Impact */}
                    <div className="impact-section">
                        <h3>Business Impact</h3>
                        <div className="impact-grid">
                            <div className="impact-item">
                                <div className="impact-icon">✓</div>
                                <div>
                                    <h4>Increased Flexibility</h4>
                                    <p>Scale resources up or down based on demand, enabling rapid response to business needs.</p>
                                </div>
                            </div>

                            <div className="impact-item">
                                <div className="impact-icon">✓</div>
                                <div>
                                    <h4>Cost Optimization</h4>
                                    <p>Reduce capital expenditure and operational costs with pay-as-you-go cloud models.</p>
                                </div>
                            </div>

                            <div className="impact-item">
                                <div className="impact-icon">✓</div>
                                <div>
                                    <h4>Enhanced Security</h4>
                                    <p>Benefit from enterprise-grade security infrastructure and compliance capabilities.</p>
                                </div>
                            </div>

                            <div className="impact-item">
                                <div className="impact-icon">✓</div>
                                <div>
                                    <h4>Global Accessibility</h4>
                                    <p>Access applications and data from anywhere, enabling remote work and global collaboration.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose */}
                    <div className="why-choose-section">
                        <h3>Why Choose Solverines for Cloud Services?</h3>
                        <div className="why-choose-grid">
                            <div className="why-choose-card">
                                <h4>Expert Teams</h4>
                                <p>Cloud architects and engineers with deep expertise in AWS, Azure, and Google Cloud.</p>
                            </div>
                            <div className="why-choose-card">
                                <h4>Proven Track Record</h4>
                                <p>Successfully migrated and managed cloud infrastructure for enterprises across industries.</p>
                            </div>
                            <div className="why-choose-card">
                                <h4>24/7 Support</h4>
                                <p>Round-the-clock monitoring, maintenance, and support to ensure your cloud runs smoothly.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="cta-section">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>Let's discuss how cloud services can accelerate your digital transformation and drive business growth.</p>
                        <a href="#" className="cta-btn">Get Started Today</a>
                    </div>
                </div>
            </section>

            {/* Footer is already included in App.js */}
        </div>
    );
};

export default CloudServices;