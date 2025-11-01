// src/components/IndustryPages/AutomotiveIndustry.js
import React from 'react';
import '../../styles/ServicePages.css';

const AutomotiveIndustry = () => {
  return (
    <div className="service-page">


      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="service-hero-content">
          <h1>Automotive Industry</h1>
          <p>Driving Digital Transformation in the Automotive Sector</p>
          <div className="hero-cta-buttons">
            <button className="hero-btn hero-btn-primary">Get Started</button>
            <button className="hero-btn hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">40%</div>
            <div className="hero-stat-label">Operational Efficiency</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">100+</div>
            <div className="hero-stat-label">Connected Vehicles</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">24/7</div>
            <div className="hero-stat-label">Supply Chain Visibility</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="content-wrapper">
          {/* Intro Section */}
          <div className="intro-section">
            <h2>Driving Digital Transformation in the Automotive Sector</h2>
            <p>
              The automotive industry is evolving faster than ever — from connected vehicles and smart manufacturing 
              to AI-driven supply chains and digital customer experiences. Our software development services empower 
              automotive companies to accelerate innovation, improve efficiency, and deliver intelligent mobility 
              solutions that meet modern demands.
            </p>
          </div>

          {/* Challenges Section */}
          <div className="challenges-section">
            <h3>Industry Challenges</h3>
            <div className="challenges-grid">
              <div className="challenge-item">
                <h4>Complex Supply Chains</h4>
                <p>Managing multi-tier suppliers, inventory, and logistics in real time.</p>
              </div>
              <div className="challenge-item">
                <h4>Data Integration & Visibility</h4>
                <p>Disparate systems lead to inefficiencies and delayed insights.</p>
              </div>
              <div className="challenge-item">
                <h4>Connected Vehicle Technologies</h4>
                <p>Need for secure IoT and telematics integration.</p>
              </div>
              <div className="challenge-item">
                <h4>Customer Experience</h4>
                <p>Rising expectations for digital engagement and personalization.</p>
              </div>
              <div className="challenge-item">
                <h4>Sustainability & Compliance</h4>
                <p>Meeting regulatory standards while optimizing production and emissions.</p>
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="solutions-section">
            <h3>Our Software Development Solutions</h3>
            <div className="solutions-grid">
              <div className="solution-card">
                <h4><span className="icon">🚗</span>Custom Software Development</h4>
                <p>
                  Tailor-made web and mobile applications for production tracking, dealer management, 
                  and customer engagement.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">📡</span>IoT & Connected Vehicle Solutions</h4>
                <p>
                  Integrate IoT sensors, telematics, and real-time analytics for vehicle monitoring, 
                  predictive maintenance, and driver insights.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">☁️</span>Cloud & Enterprise Modernization</h4>
                <p>
                  Migrate legacy systems to secure, scalable cloud platforms — enabling automation, 
                  faster deployments, and cost efficiency.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🤖</span>Data Analytics & AI Integration</h4>
                <p>
                  Use AI and machine learning to predict maintenance, optimize logistics, 
                  and analyze vehicle performance data.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">⚙️</span>Automation & Workflow Optimization</h4>
                <p>
                  Implement RPA and intelligent workflow solutions to streamline production, 
                  quality control, and logistics management.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="impact-section">
            <h3>Business Impact</h3>
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>30-40% Operational Efficiency</h4>
                  <p>Significant improvement in operational efficiency across production and supply chain.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Real-time Visibility</h4>
                  <p>Complete visibility across supply chain and production lines in real-time.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Reduced Downtime</h4>
                  <p>Minimize downtime through advanced predictive maintenance solutions.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Enhanced Customer Experience</h4>
                  <p>Improved customer satisfaction with personalized digital experiences.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="why-choose-section">
            <h3>Why Choose Us</h3>
            <div className="why-choose-grid">
              <div className="why-choose-card">
                <h4>Automotive Domain Expertise</h4>
                <p>Years of experience delivering technology solutions for manufacturers and mobility innovators.</p>
              </div>
              <div className="why-choose-card">
                <h4>End-to-End Delivery</h4>
                <p>From strategy and design to deployment and maintenance.</p>
              </div>
              <div className="why-choose-card">
                <h4>Agile & Scalable Teams</h4>
                <p>Rapid development cycles with flexible engagement models.</p>
              </div>
              <div className="why-choose-card">
                <h4>Technology Excellence</h4>
                <p>Expertise in .NET, React, AWS, Azure, and AI frameworks.</p>
              </div>
              <div className="why-choose-card">
                <h4>Long-Term Partnership</h4>
                <p>We build lasting relationships focused on innovation, reliability, and measurable growth.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2>Transform Your Automotive Operations with Technology</h2>
            <p>
              Whether you're a manufacturer, supplier, or mobility startup, we help you harness technology 
              to drive smarter, faster, and greener growth. Let's build the future of mobility together.
            </p>
            <a href="/contact" className="cta-btn">Start Your Transformation</a>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default AutomotiveIndustry;