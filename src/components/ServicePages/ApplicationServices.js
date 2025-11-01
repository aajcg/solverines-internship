// src/components/ServicePages/ApplicationServices.js
import React from 'react';
import '../../styles/ServicePages.css';

const ApplicationServices = () => {
  return (
    <div className="service-page">
      {/* Header - You might want to make this a shared component */}
      {/* <header className="header">
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
      </header> */}

      {/* Enhanced Hero Section */}
      <section className="service-hero">
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="service-hero-content">
          <h1>Application Services</h1>
          <p>Modern, Scalable, and High-Performance Application Solutions</p>
          <div className="hero-cta-buttons">
            <button className="hero-btn hero-btn-primary">Get Started</button>
            <button className="hero-btn hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">200+</div>
            <div className="hero-stat-label">Applications Delivered</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">24/7</div>
            <div className="hero-stat-label">Support & Maintenance</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">99.9%</div>
            <div className="hero-stat-label">Uptime Guarantee</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="content-wrapper">
          {/* Intro Section */}
          <div className="intro-section">
            <h2>Comprehensive Application Development & Management</h2>
            <p>
              Our Application Services encompass end-to-end development, modernization, 
              and maintenance of enterprise applications. We leverage cutting-edge technologies 
              and agile methodologies to deliver robust, scalable, and user-centric solutions 
              that drive business growth and digital transformation.
            </p>
            <p>
              From legacy system modernization to cloud-native application development, 
              we provide comprehensive services that ensure your applications are secure, 
              performant, and aligned with your business objectives.
            </p>
          </div>

          {/* Solutions Section */}
          <div className="solutions-section">
            <h3>Our Application Services</h3>
            <div className="solutions-grid">
              <div className="solution-card">
                <h4><span className="icon">🔄</span>Application Modernization</h4>
                <p>
                  Transform legacy applications into modern, cloud-native solutions 
                  with enhanced performance, security, and scalability while maintaining 
                  business continuity.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">☁️</span>Cloud-Native Development</h4>
                <p>
                  Build scalable and resilient applications using cloud-native architectures, 
                  microservices, and containerization for optimal performance and cost-efficiency.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">📱</span>Custom Application Development</h4>
                <p>
                  Develop tailored applications that address specific business needs, 
                  from enterprise resource planning to customer-facing mobile and web applications.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🔧</span>Application Maintenance & Support</h4>
                <p>
                  Provide ongoing maintenance, updates, and technical support to ensure 
                  your applications remain secure, up-to-date, and performant.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">⚡</span>API Development & Integration</h4>
                <p>
                  Design and develop robust APIs and integration solutions to connect 
                  your applications with third-party services and internal systems.
                </p>
              </div>

              <div className="solution-card">
                <h4><span className="icon">🛡️</span>Application Security</h4>
                <p>
                  Implement comprehensive security measures including vulnerability assessments, 
                  penetration testing, and secure coding practices to protect your applications.
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
                  <h4>Enhanced Efficiency</h4>
                  <p>Streamline business processes and improve operational efficiency with optimized applications.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Reduced Costs</h4>
                  <p>Lower total cost of ownership through modern architectures and efficient maintenance.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Improved Scalability</h4>
                  <p>Scale your applications seamlessly to meet growing business demands and user loads.</p>
                </div>
              </div>
              <div className="impact-item">
                <div className="impact-icon">✓</div>
                <div>
                  <h4>Future-Proof Solutions</h4>
                  <p>Ensure your applications remain relevant and adaptable to emerging technologies and market changes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="why-choose-section">
            <h3>Why Choose Solverines for Application Services?</h3>
            <div className="why-choose-grid">
              <div className="why-choose-card">
                <h4>Full-Cycle Development</h4>
                <p>We handle everything from concept and design to development, deployment, and ongoing maintenance.</p>
              </div>
              <div className="why-choose-card">
                <h4>Agile Methodology</h4>
                <p>We follow agile practices to ensure transparent communication, rapid delivery, and flexibility to change.</p>
              </div>
              <div className="why-choose-card">
                <h4>Expert Team</h4>
                <p>Our team comprises experienced developers, architects, and QA professionals dedicated to delivering excellence.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2>Transform Your Business with Powerful Applications</h2>
            <p>
              Our Application Services help you build, modernize, and maintain applications 
              that drive business growth, improve customer experiences, and stay ahead of 
              the competition in today's digital landscape.
            </p>
            <a href="/contact" className="cta-btn">Start Your Project Today</a>
          </div>
        </div>
      </section>

      {/* Footer - You might want to make this a shared component */}
      {/* <footer className="footer">
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
      </footer> */}
    </div>
  );
};

export default ApplicationServices;