// src/components/IndustryPages/HealthcareIndustry.js
import React from 'react';
import '../../styles/ServicePages.css';

const HealthcareIndustry = () => {
  return (
    <div className="service-page">


      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="service-hero-content">
          <h1>Healthcare Industry</h1>
          <p>Building a Smarter, Healthier Future with Technology</p>
          <div className="hero-cta-buttons">
            <button className="hero-btn hero-btn-primary">Get Started</button>
            <button className="hero-btn hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">99.9%</div>
            <div className="hero-stat-label">Data Security</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">50+</div>
            <div className="hero-stat-label">Healthcare Systems</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">24/7</div>
            <div className="hero-stat-label">Patient Care</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="content-wrapper">
          {/* Intro Section */}
          <div className="intro-section">
            <h2>Building a Smarter, Healthier Future with Technology</h2>
            <p>
              Healthcare organizations today are reimagining patient care through digital transformation. 
              From telemedicine to AI-assisted diagnostics, technology is reshaping how hospitals, clinics, 
              and providers operate. Our healthcare software development services help organizations deliver 
              better outcomes, enhance patient engagement, and achieve compliance through secure, data-driven solutions.
            </p>
            <p>
              We combine healthcare domain expertise with advanced technologies like cloud computing, IoT, and AI 
              to design systems that are scalable, secure, and efficient. Whether it's improving clinical workflows 
              or enhancing interoperability across hospital systems, our solutions bring clarity and precision to 
              every level of care.
            </p>
          </div>

          {/* Solutions Section */}
          <div className="solutions-section">
            <h3>Our Key Solutions</h3>
            <div className="solutions-grid">
              <div className="solution-card">
                <h4><span className="icon">📋</span>Electronic Health Record (EHR) Systems</h4>
                <p>
                  Develop integrated EHR platforms that ensure accurate, secure, and accessible patient 
                  information across departments and facilities.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">📱</span>Telemedicine & Remote Care Platforms</h4>
                <p>
                  Enable virtual consultations, secure communication, and remote monitoring to expand 
                  care beyond hospital walls.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🔬</span>AI-Powered Diagnostics & Analytics</h4>
                <p>
                  Use predictive analytics and AI to assist doctors with early diagnosis, treatment 
                  recommendations, and risk analysis.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🏥</span>Hospital Management Systems</h4>
                <p>
                  Digitize scheduling, billing, staff management, and resource allocation for greater 
                  operational control.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="impact-section">
            <h3>Impact We Create</h3>
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Reduced Administrative Workload</h4>
                  <p>Streamline operations through intelligent process automation and workflow optimization.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Improved Patient Experience</h4>
                  <p>Enhanced patient satisfaction with personalized care and real-time engagement tools.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Clinical Accuracy & Efficiency</h4>
                  <p>Greater precision in diagnosis and treatment through data-driven decision-making.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Compliance & Data Integrity</h4>
                  <p>Stronger compliance with healthcare regulations and enhanced data security across all systems.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="why-choose-section">
            <h3>Empowering Healthcare Through Technology</h3>
            <div className="why-choose-grid">
              <div className="why-choose-card">
                <h4>Healthcare Expertise</h4>
                <p>Deep understanding of healthcare workflows, compliance requirements, and patient care processes.</p>
              </div>
              <div className="why-choose-card">
                <h4>Secure & Compliant</h4>
                <p>HIPAA-compliant solutions with enterprise-grade security to protect sensitive patient data.</p>
              </div>
              <div className="why-choose-card">
                <h4>Innovation Focused</h4>
                <p>Leverage cutting-edge technologies like AI, IoT, and cloud computing to transform healthcare delivery.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2>Deliver Healthcare That's Connected, Intelligent, and Future-Ready</h2>
            <p>
              We don't just build software — we create digital ecosystems that help save lives, streamline operations, 
              and empower caregivers. Partner with us to deliver healthcare that's connected, intelligent, and future-ready.
            </p>
            <a href="/contact" className="cta-btn">Transform Your Healthcare Services</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HealthcareIndustry;