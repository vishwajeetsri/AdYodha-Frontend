const Services = () => {
  return (
    <section id="services" className="section">
      <h2>Our Services</h2>
      <div className="cards">
        <div className="card">
          <h3>Web Development</h3>
          <p>Modern and scalable web apps using MERN stack.</p>
        </div>

        <div className="card">
          <h3>SEO Optimization</h3>
          <p>Improve your Google ranking and visibility.</p>
        </div>

        <div className="card">
          <h3>Cloud Deployment</h3>
          <p>Deploy your apps on Vercel, AWS, or Netlify.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;