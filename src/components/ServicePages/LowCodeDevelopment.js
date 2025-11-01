// src/components/ServicePages/LowCodeDevelopment.js
import React from 'react';
import '../../styles/ServicePages.css';

const LowCodeDevelopment = () => {
  return (
    <div className="service-page">

      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="service-hero-content">
          <h1>Low Code Development</h1>
          <p>Accelerate Digital Transformation with OutSystems</p>
          <div className="hero-cta-buttons">
            <button className="hero-btn hero-btn-primary">Get Started</button>
            <button className="hero-btn hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">10x</div>
            <div className="hero-stat-label">Faster Development</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">500+</div>
            <div className="hero-stat-label">Apps Delivered</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">99%</div>
            <div className="hero-stat-label">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="content-wrapper">
          {/* Intro Section */}
          <div className="intro-section">
            <h2>Rapid, Scalable, and Enterprise-Grade Solutions</h2>
            <p>
              OutSystems enables organizations to build complex, mission-critical applications 
              in a fraction of the time compared to traditional development. Our low-code 
              development services leverage the full power of OutSystems to deliver robust, 
              scalable, and secure applications that drive business growth and digital innovation.
            </p>
            <p>
              Whether you need customer-facing applications, internal business tools, or 
              complex enterprise systems, our OutSystems expertise ensures rapid delivery 
              without compromising on quality, security, or performance.
            </p>
          </div>

          {/* Solutions Section */}
          <div className="solutions-section">
            <h3>Our Low Code Development Services</h3>
            <div className="solutions-grid">
              <div className="solution-card">
                <h4><span className="icon">🚀</span>Rapid Application Development</h4>
                <p>
                  Accelerate your digital initiatives with rapid application development 
                  using OutSystems. Build complex applications 10x faster than traditional 
                  coding while maintaining enterprise-grade quality and security standards.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🔧</span>Custom Application Development</h4>
                <p>
                  Develop tailored applications that perfectly match your business processes 
                  and requirements. From CRM systems to complex workflow applications, we 
                  deliver solutions that drive operational efficiency.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">📱</span>Mobile App Development</h4>
                <p>
                  Create engaging, responsive mobile applications that work seamlessly across 
                  all devices. Build once and deploy everywhere with OutSystems' cross-platform 
                  mobile development capabilities.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🔄</span>Legacy System Modernization</h4>
                <p>
                  Transform outdated legacy systems into modern, agile applications. 
                  Migrate your existing systems to OutSystems to improve performance, 
                  enhance user experience, and reduce maintenance costs.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">⚡</span>Process Automation</h4>
                <p>
                  Automate complex business processes and workflows with intelligent 
                  applications. Streamline operations, reduce manual errors, and improve 
                  overall business efficiency.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🔗</span>System Integration</h4>
                <p>
                  Seamlessly integrate OutSystems applications with your existing enterprise 
                  systems, databases, and third-party services. Ensure smooth data flow and 
                  process continuity across your organization.
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
                  <h4>Accelerated Time-to-Market</h4>
                  <p>Launch applications 10x faster than traditional development methods.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Reduced Development Costs</h4>
                  <p>Lower total cost of ownership with faster development and easier maintenance.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Enhanced Agility</h4>
                  <p>Quickly adapt to changing business needs with flexible, scalable applications.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Improved User Experience</h4>
                  <p>Deliver modern, intuitive interfaces that boost user adoption and satisfaction.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="why-choose-section">
            <h3>Why Choose Solverines for Low Code Development?</h3>
            <div className="why-choose-grid">
              <div className="why-choose-card">
                <h4>OutSystems Expertise</h4>
                <p>Certified OutSystems developers with extensive experience in enterprise-grade applications.</p>
              </div>
              <div className="why-choose-card">
                <h4>Full-Cycle Development</h4>
                <p>End-to-end services from requirements analysis to deployment and maintenance.</p>
              </div>
              <div className="why-choose-card">
                <h4>Proven Methodology</h4>
                <p>Agile development approach ensuring quality, transparency, and timely delivery.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2>Transform Your Business with Rapid Application Development</h2>
            <p>
              Our low-code development services using OutSystems help organizations accelerate 
              digital transformation, reduce costs, and stay ahead of the competition. Whether 
              you're building new applications or modernizing existing systems, we deliver 
              solutions that drive real business value.
            </p>
            <a href="/contact" className="cta-btn">Start Your Project Today</a>
          </div>
        </div>
      </section>


    </div>
  );
};

export default LowCodeDevelopment;