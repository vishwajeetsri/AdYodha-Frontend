import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Grow Your Business Online</h1>
          <p>We build fast, scalable, and modern websites for companies worldwide.</p>
          <Link to="/services" className="cta-button">
            Explore Our Services
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
            alt="Business Growth"
            className="hero-img"
            onError={(e) => e.target.src = 'https://via.placeholder.com/600x400/0066ff/ffffff?text=Business+Growth'}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-card">
          <h3>500+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-card">
          <h3>1000+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card">
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Optimized performance for better user experience</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Enterprise-grade security for your data</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <h3>Responsive</h3>
            <p>Works perfectly on all devices and screen sizes</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h3>Scalable</h3>
            <p>Grows with your business needs</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🤝</div>
            <h3>Support</h3>
            <p>24/7 dedicated customer support</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💡</div>
            <h3>Innovation</h3>
            <p>Latest technologies and best practices</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;