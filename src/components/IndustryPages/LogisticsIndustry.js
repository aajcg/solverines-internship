// src/components/IndustryPages/LogisticsIndustry.js
import React from 'react';
import '../../styles/ServicePages.css';

const LogisticsIndustry = () => {
  return (
    <div className="service-page">


      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="service-hero-content">
          <h1>Logistics Industry</h1>
          <p>Driving Efficiency Across the Supply Chain</p>
          <div className="hero-cta-buttons">
            <button className="hero-btn hero-btn-primary">Get Started</button>
            <button className="hero-btn hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">50%</div>
            <div className="hero-stat-label">Cost Reduction</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">99.9%</div>
            <div className="hero-stat-label">Delivery Accuracy</div>
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
            <h2>Driving Efficiency Across the Supply Chain</h2>
            <p>
              The logistics industry runs on precision, timing, and visibility. In a world of global trade and 
              same-day delivery expectations, technology plays a vital role in ensuring seamless coordination 
              from source to destination. Our logistics software development services help businesses modernize 
              their operations with real-time data, automation, and intelligent route optimization.
            </p>
            <p>
              We design software that empowers logistics providers, freight companies, and supply chain operators 
              to streamline every step — from order management to last-mile delivery. By integrating IoT, AI, and 
              cloud platforms, we make your logistics network faster, transparent, and scalable.
            </p>
          </div>

          {/* Solutions Section */}
          <div className="solutions-section">
            <h3>Our Specialized Solutions</h3>
            <div className="solutions-grid">
              <div className="solution-card">
                <h4><span className="icon">🚚</span>Transportation Management Systems (TMS)</h4>
                <p>
                  Custom platforms for shipment planning, carrier management, freight auditing, 
                  and real-time tracking.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">📦</span>Warehouse Management Systems (WMS)</h4>
                <p>
                  Digitize warehouse operations with smart inventory tracking, automation, 
                  and data-driven space optimization.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🗺️</span>Fleet & Route Optimization</h4>
                <p>
                  Use predictive analytics and GPS tracking to optimize routes, reduce idle time, 
                  and cut transportation costs.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">👁️</span>Supply Chain Visibility Platforms</h4>
                <p>
                  End-to-end monitoring systems that offer real-time insights into shipment location, 
                  temperature, and delivery performance.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🔗</span>Integration & Automation</h4>
                <p>
                  Seamlessly connect ERP, CRM, and IoT systems to eliminate manual work and improve 
                  coordination across suppliers and clients.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="impact-section">
            <h3>Measurable Outcomes</h3>
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>30-50% Cost Reduction</h4>
                  <p>Significant reduction in logistics delays and manual operational tasks.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Real-time Operational Insights</h4>
                  <p>Comprehensive visibility through connected dashboards and analytics.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Optimized Resource Utilization</h4>
                  <p>Lower fuel and maintenance costs through intelligent route planning.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Enhanced Reliability</h4>
                  <p>Stronger supply chain reliability and improved customer satisfaction.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="why-choose-section">
            <h3>Delivering Innovation That Moves You Forward</h3>
            <div className="why-choose-grid">
              <div className="why-choose-card">
                <h4>Logistics Expertise</h4>
                <p>Deep understanding of supply chain dynamics, transportation, and warehouse management.</p>
              </div>
              <div className="why-choose-card">
                <h4>Technology Integration</h4>
                <p>Seamlessly integrate IoT, AI, and cloud technologies for comprehensive logistics solutions.</p>
              </div>
              <div className="why-choose-card">
                <h4>Operational Excellence</h4>
                <p>Focus on delivering measurable improvements in efficiency, cost, and customer satisfaction.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2>Make Your Supply Chain Smarter, Faster, and Future-Ready</h2>
            <p>
              We combine industry expertise with advanced software engineering to help logistics companies 
              achieve operational excellence. From warehouse to doorstep — we make your supply chain smarter, 
              faster, and future-ready.
            </p>
            <a href="/contact" className="cta-btn">Optimize Your Logistics Operations</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LogisticsIndustry;