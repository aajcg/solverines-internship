// src/components/ServicePages/DataAnalyticsAI.js
import React from 'react';
import '../../styles/ServicePages.css';

const DataAnalyticsAI = () => {
  return (
    <div className="service-page">

      {/* Enhanced Hero Section */}
      <section className="service-hero">
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="service-hero-content">
          <h1>Data Analytics & AI</h1>
          <p>Enhance OutSystems Applications with Intelligent Insights</p>
          <div className="hero-cta-buttons">
            <button className="hero-btn hero-btn-primary">Get Started</button>
            <button className="hero-btn hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">100+</div>
            <div className="hero-stat-label">Analytics Integrations</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">50+</div>
            <div className="hero-stat-label">AI-Driven Apps</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">99%</div>
            <div className="hero-stat-label">Insight Accuracy</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="content-wrapper">
          {/* Intro */}
          <div className="intro-section">
            <h2>Scalable, Insightful, and Actionable Solutions</h2>
            <p>
              OutSystems enables rapid application development, and combined with analytics and AI integrations, 
              it helps organizations extract actionable insights, optimize operations, and improve decision-making. 
              By connecting OutSystems apps with analytics and AI tools, businesses can create smarter, data-driven 
              applications without disrupting existing workflows.
            </p>
          </div>

          {/* Solutions */}
          <div className="solutions-section">
            <h3>Our Data Analytics & AI Capabilities</h3>
            <div className="solutions-grid">
              <div className="solution-card">
                <h4><span className="icon">📊</span>Data Strategy & Planning</h4>
                <p>
                  Define a roadmap for integrating analytics and AI capabilities with OutSystems applications. 
                  Identify key data sources, analytics requirements, and reporting needs to drive informed decisions.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">📈</span>Analytics & Reporting</h4>
                <p>
                  Build interactive dashboards and reports within OutSystems applications or through external 
                  tools like Power BI or Tableau. Track business metrics, app usage, and user behavior to improve efficiency.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🤖</span>AI & Intelligent Automation Integrations</h4>
                <p>
                  Develop a comprehensive roadmap for integrating analytics and AI capabilities. Assess critical 
                  data sources, define analytics objectives, and establish reporting frameworks to support informed, 
                  data-driven decision-making.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">⚙️</span>Performance Monitoring & Optimization</h4>
                <p>
                  Monitor OutSystems application performance using built-in monitoring tools. Analyze trends, 
                  detect issues, and optimize workflows for better reliability and user experience.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🗂️</span>Data Management & Connectivity</h4>
                <p>
                  Integrate and manage data from multiple sources, internal and external, ensuring accurate, 
                  secure, and accessible information for analytics and AI initiatives.
                </p>
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
                  <h4>Actionable Insights</h4>
                  <p>Empower decision-makers with meaningful analytics and predictive intelligence.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Workflow Automation</h4>
                  <p>Streamline operations and reduce manual intervention through AI-powered automation.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Enhanced Performance</h4>
                  <p>Continuously monitor and optimize app performance through data-driven insights.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Scalable Intelligence</h4>
                  <p>Ensure OutSystems applications remain scalable, efficient, and future-ready.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div className="why-choose-section">
            <h3>Why Choose Solverines for Data Analytics & AI?</h3>
            <div className="why-choose-grid">
              <div className="why-choose-card">
                <h4>Seamless OutSystems Integration</h4>
                <p>We specialize in integrating AI and analytics directly into OutSystems apps with minimal disruption.</p>
              </div>
              <div className="why-choose-card">
                <h4>End-to-End Data Solutions</h4>
                <p>From data collection to actionable insights, we cover the entire analytics lifecycle.</p>
              </div>
              <div className="why-choose-card">
                <h4>Data-Driven Innovation</h4>
                <p>We help enterprises innovate smarter through predictive analytics and automation.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h2>Empower Your OutSystems Apps with Intelligence</h2>
            <p>
              Data Analytics and AI integrations enhance OutSystems applications by providing actionable insights, 
              automating workflows, and improving decision-making. These services ensure applications remain scalable, 
              efficient, and equipped for intelligent business operations.
            </p>
            <a href="/contact" className="cta-btn">Get Started Today</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DataAnalyticsAI;