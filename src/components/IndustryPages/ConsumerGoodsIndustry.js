// src/components/IndustryPages/ConsumerGoodsIndustry.js
import React from 'react';
import '../../styles/ServicePages.css';

const ConsumerGoodsIndustry = () => {
  return (
    <div className="service-page">


      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="service-hero-content">
          <h1>Consumer Goods</h1>
          <p>Transforming Retail and Consumer Experiences</p>
          <div className="hero-cta-buttons">
            <button className="hero-btn hero-btn-primary">Get Started</button>
            <button className="hero-btn hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">40%</div>
            <div className="hero-stat-label">Sales Growth</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">99%</div>
            <div className="hero-stat-label">Inventory Accuracy</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">24/7</div>
            <div className="hero-stat-label">Customer Engagement</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="content-wrapper">
          {/* Intro Section */}
          <div className="intro-section">
            <h2>Driving Digital Transformation in Consumer Goods</h2>
            <p>
              The consumer goods industry is undergoing rapid digital transformation, with evolving customer 
              expectations, omnichannel retail, and data-driven decision-making becoming critical to success. 
              Our software solutions help consumer goods companies optimize operations, enhance customer 
              experiences, and drive sustainable growth in a competitive marketplace.
            </p>
            <p>
              From supply chain optimization to personalized marketing and e-commerce platforms, we deliver 
              comprehensive digital solutions that empower consumer goods brands to stay ahead of market trends 
              and consumer demands.
            </p>
          </div>

          {/* Solutions Section */}
          <div className="solutions-section">
            <h3>Our Consumer Goods Solutions</h3>
            <div className="solutions-grid">
              <div className="solution-card">
                <h4><span className="icon">🛒</span>E-commerce & Digital Storefronts</h4>
                <p>
                  Build scalable e-commerce platforms and digital storefronts that provide seamless 
                  shopping experiences across all devices and channels.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">📊</span>Inventory & Supply Chain Management</h4>
                <p>
                  Optimize inventory levels, reduce stockouts, and improve supply chain visibility 
                  with intelligent forecasting and real-time tracking.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🎯</span>Customer Analytics & Personalization</h4>
                <p>
                  Leverage AI and machine learning to understand customer behavior, deliver personalized 
                  recommendations, and enhance customer loyalty.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">📱</span>Mobile Applications</h4>
                <p>
                  Develop engaging mobile apps for customers and sales teams, enabling seamless 
                  shopping experiences and efficient field operations.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🔍</span>Quality Control & Compliance</h4>
                <p>
                  Implement systems for quality assurance, regulatory compliance, and product 
                  traceability throughout the supply chain.
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
                  <h4>Enhanced Customer Experience</h4>
                  <p>Deliver personalized, seamless shopping experiences across all touchpoints.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Optimized Operations</h4>
                  <p>Streamline supply chain, inventory management, and retail operations.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Data-Driven Insights</h4>
                  <p>Make informed decisions with real-time analytics and market intelligence.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Increased Agility</h4>
                  <p>Quickly adapt to changing market conditions and consumer preferences.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="why-choose-section">
            <h3>Why Partner With Us</h3>
            <div className="why-choose-grid">
              <div className="why-choose-card">
                <h4>Industry Expertise</h4>
                <p>Deep understanding of consumer goods retail dynamics and customer behavior.</p>
              </div>
              <div className="why-choose-card">
                <h4>Omnichannel Focus</h4>
                <p>Seamlessly integrate online and offline experiences for unified customer journeys.</p>
              </div>
              <div className="why-choose-card">
                <h4>Innovation Driven</h4>
                <p>Leverage cutting-edge technologies to create competitive advantages.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2>Transform Your Consumer Goods Business</h2>
            <p>
              Whether you're a manufacturer, distributor, or retailer, our digital solutions help you 
              stay competitive in the fast-evolving consumer goods landscape. Let's work together to 
              create exceptional customer experiences and drive sustainable growth.
            </p>
            <a href="/contact" className="cta-btn">Start Your Digital Journey</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ConsumerGoodsIndustry;