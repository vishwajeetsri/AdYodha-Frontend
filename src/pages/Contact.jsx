import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);
      setSubmitted(true);
      alert(res.data.message);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      alert("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Have questions? We'd love to hear from you. Send us a message!</p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p>hello@adyoddha.com</p>
          </div>
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Phone</h3>
            <p>+1 (800) 123-4567</p>
          </div>
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Location</h3>
            <p>New York, USA</p>
          </div>
          <div className="info-card">
            <div className="info-icon">⏰</div>
            <h3>Hours</h3>
            <p>Mon-Fri: 9 AM - 6 PM EST</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {submitted && <div className="success-message">✓ Message sent successfully!</div>}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                placeholder="Tell us more..."
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;