// src/components/ServicePages/PlatformServices.js
import React from 'react';
import '../../styles/ServicePages.css';

const PlatformServices = () => {
  return (
    <div className="service-page">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img 
            src="/assets/solverines-logo-b64.png" 
            alt="Solverines" 
            style={{ 
              width: '250px', 
              height: '40px', 
              borderRadius: '4px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontWeight: '600',
              fontSize: '24px'
            }} 
          />
        </div>
        
        <nav className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="#" className="nav-link">Out Systems</a>
          <div className="nav-link dropdown">
            Services <span className="material-icons">keyboard_arrow_down</span>
            <div className="dropdown-menu">
              <a href="/services/low-code-development">Low Code Development</a>
              <a href="/services/cloud-services">Cloud Services</a>
              <a href="/services/application-services">Application Services</a>
              <a href="/services/platform-service">Platform Service</a>
              <a href="/services/data-analytics-ai">Data Analytics & AI</a>
              <a href="/services/it-consulting">IT Consulting</a>
            </div>
          </div>
          <div className="nav-link dropdown">
            Industries <span className="material-icons">keyboard_arrow_down</span>
            <div className="dropdown-menu">
              <a href="#">Automotive</a>
              <a href="#">Consumer Goods</a>
              <a href="#">Financial Services</a>
              <a href="#">Healthcare</a>
              <a href="#">Logistics</a>
              <a href="#">Real Estate</a>
            </div>
          </div>
        </nav>
        
        <a href="/contact" className="contact-btn">
          Contact Us
          <span className="material-icons">arrow_forward</span>
        </a>
      </header>

      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="service-hero-content">
          <h1>Platform Services</h1>
          <p>Unlock the Full Potential of Your Digital Platform</p>
          <div className="hero-cta-buttons">
            <button className="hero-btn hero-btn-primary">Get Started</button>
            <button className="hero-btn hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">200+</div>
            <div className="hero-stat-label">Platforms Managed</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">99.9%</div>
            <div className="hero-stat-label">System Uptime</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">24/7</div>
            <div className="hero-stat-label">Platform Support</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="content-wrapper">
          <div className="intro-section">
            <h2>Flexible, Scalable, and Efficient Platform Solutions</h2>
            <p>
              Modern businesses need platforms that accelerate application delivery, streamline operations, 
              and support growth. Platform services help organizations maximize the value of their development 
              environment, enabling faster innovation, improved collaboration, and reliable performance. 
              Whether deploying new applications, managing existing ones, or integrating with other systems, 
              comprehensive platform services ensure your platform operates at peak efficiency.
            </p>
          </div>

          <div className="solutions-section">
            <h3>Our Platform Services</h3>
            <div className="solutions-grid">
              <div className="solution-card">
                <h4><span className="icon">🧭</span>Platform Strategy & Planning</h4>
                <p>
                  Define a clear OutSystems platform roadmap aligned with business objectives. 
                  Assess requirements, implement best practices, and design strategies to optimize 
                  application delivery and platform utilization.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🛠️</span>Platform Administration & Management</h4>
                <p>
                  Keep your OutSystems environment running smoothly with proactive monitoring, 
                  maintenance, and upgrades. We manage configurations, permissions, and environment 
                  setups to ensure consistent performance and reliability.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🔗</span>Integration & Connectivity</h4>
                <p>
                  Connect OutSystems applications with other systems and APIs to enable seamless 
                  data flow and collaboration. Design and implement integrations that unify the digital ecosystem.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">⚙️</span>Performance Monitoring & Optimization</h4>
                <p>
                  Ensure your applications and platform perform at their best. We provide monitoring, 
                  analytics, and optimization services to maintain speed, stability, and scalability.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🔒</span>Governance, Security & Compliance</h4>
                <p>
                  Protect your platform and applications with robust governance and security practices. 
                  We implement access controls, auditing, and compliance measures to keep your digital environment secure.
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
                  <h4>Enhanced Platform Efficiency</h4>
                  <p>Improve operational reliability and reduce downtime through proactive monitoring and optimization.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Seamless Integration</h4>
                  <p>Ensure smooth connectivity across applications and systems for a unified digital experience.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Secure Operations</h4>
                  <p>Strengthen compliance, access control, and governance frameworks to protect your digital assets.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Optimized Performance</h4>
                  <p>Maintain consistent, scalable performance across your entire OutSystems environment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="why-choose-section">
            <h3>Why Choose Solverines for Platform Services?</h3>
            <div className="why-choose-grid">
              <div className="why-choose-card">
                <h4>End-to-End Expertise</h4>
                <p>From platform setup to continuous optimization, we manage the full lifecycle of your OutSystems environment.</p>
              </div>
              <div className="why-choose-card">
                <h4>Proven Methodologies</h4>
                <p>We apply best practices in scalability, governance, and performance management tailored to your business.</p>
              </div>
              <div className="why-choose-card">
                <h4>Continuous Support</h4>
                <p>Our dedicated support ensures seamless operations and quick resolution of any platform issues.</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Maximize the Value of Your OutSystems Platform</h2>
            <p>
              Our platform services enable businesses to maximize the value of their development environment. 
              From strategy and administration to integration and optimization, we deliver end-to-end services 
              that improve efficiency, accelerate delivery, and ensure long-term platform success.
            </p>
            <a href="/contact" className="cta-btn">Get Started Today</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-section logo-section">
              <div className="footer-logo">SOLVERINES</div>
              <div className="footer-tagline">Transforming Businesses with Low Code Solutions using OutSystems</div>
              <div className="social-links">
                <a href="#" className="social-link" title="LinkedIn">in</a>
                <a href="#" className="social-link" title="Instagram">ig</a>
                <a href="#" className="social-link" title="Facebook">f</a>
                <a href="#" className="social-link" title="YouTube">▶</a>
              </div>
              <div className="footer-contact">
                <h4>Reach out to us:</h4>
                <p>info@solverines.com</p>
                <p>+91 75500 42242</p>
              </div>
            </div>

            <div className="footer-section services-section">
              <h3>Services</h3>
              <ul>
                <li>Low Code Development</li>
                <li>Cloud Services</li>
                <li>Application Services</li>
                <li>Platform Service</li>
                <li>Data Analytics & AI</li>
                <li>IT Consulting</li>
              </ul>
            </div>

            <div className="footer-section industries-section">
              <h3>Industries</h3>
              <ul>
                <li>Automotive</li>
                <li>Consumer Goods</li>
                <li>Financial Services</li>
                <li>Healthcare</li>
                <li>Logistics</li>
                <li>Real Estate</li>
              </ul>
            </div>

            <div className="footer-section links-section">
              <h3>Quick Links</h3>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>OutSystems</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="footer-middle">
            <div className="footer-location">
              <h4>Global Headquarters:</h4>
              <p>Chennai, TN, India - 600032</p>
            </div>
            <div className="footer-location">
              <h4>Other Locations:</h4>
              <p>India, Japan, UAE, UK and USA</p>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
              © 2025 Solverines Technology Solutions Pvt. Ltd. All rights reserved.
            </div>
            <div className="footer-bottom-right">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlatformServices;