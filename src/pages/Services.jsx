const Services = () => {
  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Web Development",
      description: "Modern and scalable web apps using latest technologies.",
      features: ["React/Vue.js", "Node.js Backend", "Database Design"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      icon: "🔍",
      title: "SEO Optimization",
      description: "Improve your Google ranking and online visibility.",
      features: ["Keyword Research", "On-page SEO", "Link Building"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      icon: "☁️",
      title: "Cloud Deployment",
      description: "Deploy your apps on Vercel, AWS, or Netlify.",
      features: ["Continuous Deployment", "Auto Scaling", "Monitoring"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface design.",
      features: ["Wireframing", "Prototyping", "User Testing"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      icon: "📊",
      title: "Analytics & Reports",
      description: "Detailed insights into your website performance.",
      features: ["Traffic Analysis", "Conversion Tracking", "Custom Reports"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      icon: "🛡️",
      title: "Security & Support",
      description: "Ongoing maintenance and 24/7 technical support.",
      features: ["SSL Certificates", "Backups", "24/7 Support"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive solutions tailored to your business needs</p>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image">
              <img 
                src={service.image} 
                alt={service.title}
                onError={(e) => e.target.src = `https://via.placeholder.com/400x300/0066ff/ffffff?text=${service.title.replace(/ /g, '+')}`}
              />
            </div>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </section>

      <section className="service-cta">
        <h2>Ready to transform your digital presence?</h2>
        <p>Get in touch with us today for a free consultation</p>
        <button className="cta-button-large">Get Started</button>
      </section>
    </div>
  );
};

export default Services;