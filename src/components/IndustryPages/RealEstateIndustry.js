// src/components/IndustryPages/RealEstateIndustry.js
import React from 'react';
import '../../styles/ServicePages.css';

const RealEstateIndustry = () => {
  return (
    <div className="service-page">


      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="service-hero-content">
          <h1>Real Estate Industry</h1>
          <p>Transforming Real Estate with Digital Intelligence</p>
          <div className="hero-cta-buttons">
            <button className="hero-btn hero-btn-primary">Get Started</button>
            <button className="hero-btn hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">50%</div>
            <div className="hero-stat-label">Faster Sales Cycle</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">1000+</div>
            <div className="hero-stat-label">Properties Managed</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">24/7</div>
            <div className="hero-stat-label">Property Visibility</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="content-wrapper">
          {/* Intro Section */}
          <div className="intro-section">
            <h2>Transforming Real Estate with Digital Intelligence</h2>
            <p>
              The real estate industry is no longer just about property — it's about data, experience, and speed. 
              Buyers expect transparency, agents need automation, and developers demand real-time insights. Our 
              software development services help real estate businesses go digital — enabling smarter property 
              management, data-driven sales, and seamless customer engagement through modern, integrated platforms.
            </p>
            <p>
              From listing to closing, we build technology that simplifies and accelerates real estate operations. 
              Whether you're a real estate developer, property management firm, or brokerage, our team designs 
              customized digital solutions that enhance visibility, automate routine processes, and create meaningful 
              customer interactions.
            </p>
          </div>

          {/* Solutions Section */}
          <div className="solutions-section">
            <h3>Our Core Solutions</h3>
            <div className="solutions-grid">
              <div className="solution-card">
                <h4><span className="icon">🏢</span>Real Estate Management Systems</h4>
                <p>
                  Centralized web and mobile platforms for property listings, bookings, lease management, 
                  and tenant communication — all in one place.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">📊</span>CRM & Sales Automation</h4>
                <p>
                  Smart CRMs tailored for real estate workflows — track leads, manage pipelines, and 
                  automate follow-ups to close deals faster.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">📈</span>Data Analytics & Predictive Insights</h4>
                <p>
                  Use AI-driven analytics to evaluate property trends, forecast demand, and make 
                  informed investment decisions.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">☁️</span>Cloud Integration & Security</h4>
                <p>
                  Migrate your data and operations to secure, scalable cloud infrastructure with 
                  role-based access and advanced encryption for client confidentiality.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="impact-section">
            <h3>Value We Deliver</h3>
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Accelerated Sales Cycles</h4>
                  <p>Faster property sales and leasing cycles through streamlined processes.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Enhanced Transparency</h4>
                  <p>Increased transparency and customer engagement across all touchpoints.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Process Automation</h4>
                  <p>Reduced manual tasks through intelligent automation and workflow optimization.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Data-Driven Decisions</h4>
                  <p>Actionable insights on pricing, demand, and occupancy for better decision-making.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Improved Collaboration</h4>
                  <p>Enhanced collaboration between agents, buyers, and developers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="why-choose-section">
            <h3>Building the Future of Real Estate</h3>
            <div className="why-choose-grid">
              <div className="why-choose-card">
                <h4>Industry Expertise</h4>
                <p>Deep understanding of real estate workflows, market dynamics, and customer needs.</p>
              </div>
              <div className="why-choose-card">
                <h4>Technology Innovation</h4>
                <p>Leverage AI, cloud computing, and mobile technologies to transform real estate operations.</p>
              </div>
              <div className="why-choose-card">
                <h4>Customer-Centric Approach</h4>
                <p>Focus on creating seamless, engaging experiences for both agents and customers.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2>Redefine Real Estate Through Innovation</h2>
            <p>
              We combine technology, creativity, and domain expertise to help real estate businesses thrive in a 
              competitive market. From digital platforms to data-driven strategies, we turn every property interaction 
              into a smarter, seamless experience.
            </p>
            <a href="/contact" className="cta-btn">Transform Your Real Estate Business</a>
          </div>
        </div>
      </section>


    </div>
  );
};

export default RealEstateIndustry;