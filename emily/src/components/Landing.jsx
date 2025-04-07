import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* Header / Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="title">TABLE BY EMILY</h1>
          <p className="subtitle">Private Chef Services for Everyone</p>
          <div className="cta-buttons">
            <button className="cta-button">Check Out Our Past Meals</button>
            <button className="cta-button">Pull Up A Chair, Let’s Chat</button>
          </div>
        </div>
        
        {/* Optional wireframe “table” illustration (just a placeholder SVG) */}
        <div className="hero-illustration">
          <svg
            width="300"
            height="200"
            viewBox="0 0 300 200"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          >
            {/* Table top */}
            <rect x="50" y="70" width="200" height="50" fill="none" />
            {/* Table text */}
            <text
              x="150"
              y="95"
              textAnchor="middle"
              style={{ font: 'bold 12px sans-serif' }}
            >
              TABLE BY EMILY
            </text>
            <text
              x="150"
              y="110"
              textAnchor="middle"
              style={{ font: '12px sans-serif' }}
            >
              PRIVATE CHEF SERVICES
            </text>
            <text
              x="150"
              y="125"
              textAnchor="middle"
              style={{ font: '12px sans-serif' }}
            >
              FOR EVERYONE
            </text>
            {/* Chair illustration */}
            <rect x="220" y="40" width="20" height="20" fill="none" />
            <line x1="220" y1="40" x2="220" y2="60" />
            <line x1="240" y1="40" x2="240" y2="60" />
            <line x1="220" y1="60" x2="225" y2="80" />
            <line x1="240" y1="60" x2="245" y2="80" />
          </svg>
        </div>
      </header>

      {/* Example extra section (recipes, photos, etc.) */}
      <section className="info-section">
        <h2>Our Story</h2>
        <p>
          We believe everyone deserves a delicious meal at their table. With Table
          by Emily, you get personalized menus curated for your taste and dietary
          preferences, cooked fresh in your home.
        </p>
      </section>

    </div>
  );
};

export default LandingPage;
