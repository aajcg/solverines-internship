// src/components/IndustryPages/FinancialServices.js
import React from 'react';
import '../../styles/ServicePages.css';

const FinancialServices = () => {
  return (
    <div className="service-page">
      {/* Header */}


      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="service-hero-content">
          <h1>Financial Services</h1>
          <p>Enabling the Future of Digital Finance</p>
          <div className="hero-cta-buttons">
            <button className="hero-btn hero-btn-primary">Get Started</button>
            <button className="hero-btn hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">99.9%</div>
            <div className="hero-stat-label">Security Compliance</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">50+</div>
            <div className="hero-stat-label">Fintech Solutions</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">24/7</div>
            <div className="hero-stat-label">Fraud Monitoring</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="content-wrapper">
          {/* Intro Section */}
          <div className="intro-section">
            <h2>Enabling the Future of Digital Finance</h2>
            <p>
              The financial services industry is undergoing massive disruption — from open banking and fintech innovation 
              to AI-driven automation and blockchain security. Our software development expertise helps banks, fintechs, 
              and financial institutions deliver secure, intelligent, and customer-first digital experiences that drive trust and growth.
            </p>
            <p>
              Financial organizations today are expected to be agile, transparent, and digitally native. We help our clients 
              modernize core systems, leverage cloud technology, and harness data to create financial ecosystems that are 
              faster, safer, and more customer-centric.
            </p>
          </div>

          {/* Solutions Section */}
          <div className="solutions-section">
            <h3>Our Core Capabilities</h3>
            <div className="solutions-grid">
              <div className="solution-card">
                <h4><span className="icon">🏦</span>Digital Banking Platforms</h4>
                <p>
                  We design scalable, intuitive banking applications that offer seamless account management, 
                  digital onboarding, and real-time transactions across mobile and web platforms.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">💳</span>Fintech Application Development</h4>
                <p>
                  Custom-built fintech products such as payment gateways, digital wallets, investment apps, 
                  and lending platforms — optimized for speed, compliance, and user experience.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">⛓️</span>Blockchain & Smart Contracts</h4>
                <p>
                  Implement secure, transparent systems for payments, asset management, and identity verification 
                  using distributed ledger technology.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🤖</span>AI-Powered Financial Analytics</h4>
                <p>
                  Leverage AI/ML to enhance fraud detection, credit scoring, and predictive analytics for 
                  smarter decision-making.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="impact-section">
            <h3>How We Add Value</h3>
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Legacy System Transformation</h4>
                  <p>Transform legacy banking systems into agile, cloud-based digital ecosystems.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Enhanced Security</h4>
                  <p>Improve fraud prevention and customer trust through AI and automation.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Real-time Insights</h4>
                  <p>Enable real-time data insights for faster investment and lending decisions.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Market Acceleration</h4>
                  <p>Build secure, scalable fintech applications that accelerate market entry.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Personalized Experiences</h4>
                  <p>Drive personalized financial experiences using advanced analytics and APIs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="why-choose-section">
            <h3>Your Technology Partner in Finance</h3>
            <div className="why-choose-grid">
              <div className="why-choose-card">
                <h4>Financial Expertise</h4>
                <p>Deep understanding of banking regulations, compliance, and financial workflows.</p>
              </div>
              <div className="why-choose-card">
                <h4>Security First</h4>
                <p>Enterprise-grade security measures to protect sensitive financial data.</p>
              </div>
              <div className="why-choose-card">
                <h4>Innovation Driven</h4>
                <p>Stay ahead with cutting-edge technologies like blockchain, AI, and cloud computing.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2>Shape the Future of Financial Technology</h2>
            <p>
              From core banking modernization to next-generation fintech innovation, we partner with financial 
              enterprises to architect robust, compliant, and intelligent software ecosystems. Let's shape the 
              future of financial technology — together.
            </p>
            <a href="/contact" className="cta-btn">Start Your Digital Transformation</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FinancialServices;