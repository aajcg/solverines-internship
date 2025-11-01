// src/components/ServicePages/ITConsulting.js
import React from 'react';
import '../../styles/ServicePages.css';

const ITConsulting = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="service-hero-content">
          <h1>IT Consulting</h1>
          <p>Strategic Technology Guidance for Business Growth</p>
          <div className="hero-cta-buttons">
            <button className="hero-btn hero-btn-primary">Get Started</button>
            <button className="hero-btn hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">300+</div>
            <div className="hero-stat-label">Consulting Projects</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">95%</div>
            <div className="hero-stat-label">Client Satisfaction</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">15+</div>
            <div className="hero-stat-label">Industries Served</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="content-wrapper">
          <div className="intro-section">
            <h2>Expert, Insightful, and Outcome-Driven Solutions</h2>
            <p>
              IT consulting helps organizations align technology initiatives with business goals. 
              By analyzing existing systems, processes, and workflows, IT consulting services provide 
              actionable strategies, optimize technology investments, and support digital transformation. 
              Whether planning new initiatives, modernizing infrastructure, or adopting new platforms, 
              IT consulting ensures technology delivers measurable business value.
            </p>
          </div>

          <div className="solutions-section">
            <h3>Our IT Consulting Services</h3>
            <div className="solutions-grid">
              <div className="solution-card">
                <h4><span className="icon">🧩</span>Technology Strategy & Planning</h4>
                <p>
                  Assess current IT infrastructure and define a roadmap for technology adoption. 
                  Recommend solutions, platforms, and best practices that align with organizational goals.
                </p>
              </div>
              <div className="solution-card">
                <h4><span className="icon">🚀</span>Digital Transformation Advisory</h4>
                <p>
                  Guide organizations through digital transformation initiatives. Identify opportunities 
                  for automation, cloud adoption, platform modernization, and process optimization.
                </p>
              </div>
              <div className="solution-card">
                <h4><span className="icon">🖥️</span>Platform & Application Consulting</h4>
                <p>
                  Provide expert advice on selecting, implementing, and optimizing platforms like OutSystems. 
                  Ensure applications are scalable, secure, and aligned with business processes.
                </p>
              </div>
              <div className="solution-card">
                <h4><span className="icon">🛡️</span>IT Governance & Risk Management</h4>
                <p>
                  Establish governance frameworks and risk management strategies to ensure compliance, 
                  security, and operational resilience across IT systems and platforms.
                </p>
              </div>
              <div className="solution-card">
                <h4><span className="icon">⚙️</span>Process Optimization & Innovation</h4>
                <p>
                  Analyze workflows and processes to identify inefficiencies. Recommend solutions, 
                  technology enhancements, and automation opportunities to improve productivity and outcomes.
                </p>
              </div>
            </div>
          </div>

          <div className="impact-section">
            <h3>Business Impact</h3>
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Aligned IT & Business Goals</h4>
                  <p>Bridge the gap between technology and strategy to maximize business outcomes.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Optimized IT Investments</h4>
                  <p>Ensure technology initiatives deliver measurable ROI and support innovation.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Risk & Compliance Assurance</h4>
                  <p>Strengthen IT governance to ensure secure, compliant, and resilient operations.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Operational Efficiency</h4>
                  <p>Improve productivity and streamline workflows through technology-driven process optimization.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="why-choose-section">
            <h3>Why Choose Solverines for IT Consulting?</h3>
            <div className="why-choose-grid">
              <div className="why-choose-card">
                <h4>Strategic Expertise</h4>
                <p>Our consultants combine business strategy and technology know-how to deliver impactful recommendations.</p>
              </div>
              <div className="why-choose-card">
                <h4>Cross-Industry Experience</h4>
                <p>We bring insights from multiple domains including finance, healthcare, logistics, and manufacturing.</p>
              </div>
              <div className="why-choose-card">
                <h4>Outcome-Oriented Delivery</h4>
                <p>We focus on tangible business outcomes, not just reports or frameworks.</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Transform Technology into a Growth Engine</h2>
            <p>
              IT consulting services help organizations maximize the value of technology investments. 
              From strategy and platform guidance to risk management and process optimization, IT consulting 
              enables efficient, secure, and innovative operations that support long-term business growth.
            </p>
            <a href="/contact" className="cta-btn">Get Started Today</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ITConsulting;