import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);
      alert(res.data.message);
    } catch (err) {
      alert("Error sending message");
    }
  };

  return (
    <section id="contact" className="section contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Message" onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;