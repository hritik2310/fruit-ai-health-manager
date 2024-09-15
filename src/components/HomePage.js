import React from 'react';
import './HomePage.css'; 
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Fruit.Ai</h1>
      <p>"Be Healthy!"</p>

      <div className="services-grid">
        <div className="service-card chat" onClick={() => navigate('/chat')}>
          Chat.
        </div>
        <div className="service-card plane1" onClick={() => navigate('/Home')}>
          
        </div>
        <div className="service-card plane2" onClick={() => navigate('/Home')}>
          
        </div>
        <div className="service-card translator" onClick={() => navigate('/translator')}>
          <i className="fas fa-language"></i> Translator
        </div>
        <div className="service-card faqs" onClick={() => navigate('/faqs')}>
          FAQs
        </div>
        <div className="service-card about" onClick={() => navigate('/about')}>
          About
        </div>
      </div>

      <div className="pagination">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default HomePage;
