import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CloudServices from './components/ServicePages/CloudServices';
import LowCodeDevelopment from './components/ServicePages/LowCodeDevelopment';
import DataAnalyticsAI from './components/ServicePages/DataAnalyticsAI';
import ApplicationServices from './components/ServicePages/ApplicationServices';
import ProductEngineering from './components/ServicePages/ProductEngineering';
import ITConsulting from './components/ServicePages/ITConsulting';
import PlatformService from './components/ServicePages/PlatformService';

// Import Industry Pages
import AutomotiveIndustry from './components/IndustryPages/AutomotiveIndustry';
import FinancialServices from './components/IndustryPages/FinancialServices';
import HealthcareIndustry from './components/IndustryPages/HealthcareIndustry';
import RealEstateIndustry from './components/IndustryPages/RealEstateIndustry';
import LogisticsIndustry from './components/IndustryPages/LogisticsIndustry';
import ConsumerGoodsIndustry from './components/IndustryPages/ConsumerGoodsIndustry';

import './styles/App.css';
import './styles/ServicePages.css';
import './styles/Footer.css';

function App() {
  useEffect(() => {
    // Scroll header functionality
    const handleScroll = () => {
      const header = document.querySelector(".header");
      const logoImg = header?.querySelector(".logo img");

      if (window.scrollY > 5) {
        header?.classList.add("scrolled");
        if (logoImg) logoImg.src = "assets/logo2.png";
      } else {
        header?.classList.remove("scrolled");
        if (logoImg) logoImg.src = "assets/solverines logo b64.png";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Consistent Header across all pages */}
        <Header />
        
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Service Routes */}
          <Route path="/services/cloud-services" element={<CloudServices />} />
          <Route path="/services/low-code-development" element={<LowCodeDevelopment />} />
          <Route path="/services/data-analytics-ai" element={<DataAnalyticsAI />} />
          <Route path="/services/application-services" element={<ApplicationServices />} />
          <Route path="/services/product-engineering" element={<ProductEngineering />} />
          <Route path="/services/it-consulting" element={<ITConsulting />} />
          <Route path="/services/platform-service" element={<PlatformService />} />
          
          {/* Industry Routes */}
          <Route path="/industries/automotive" element={<AutomotiveIndustry />} />
          <Route path="/industries/financial-services" element={<FinancialServices />} />
          <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
          <Route path="/industries/real-estate" element={<RealEstateIndustry />} />
          <Route path="/industries/logistics" element={<LogisticsIndustry />} />
          <Route path="/industries/consumer-goods" element={<ConsumerGoodsIndustry />} />
          
          {/* 404 Fallback - You might want to create a NotFound component */}
          <Route path="*" element={<Home />} />
        </Routes>

        {/* Enhanced Footer across all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;