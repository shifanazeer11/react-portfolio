import React, { useEffect, useRef, useState } from "react";
import { db } from "../Components/Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const headingRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "restart none none reverse",
        },
      }
    );

    gsap.fromTo(
      infoRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 85%",
          toggleActions: "restart none none reverse",
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "restart none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      alert("Message saved to Firebase!");

      setSent(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error("Error saving message:", error);
      alert("Message save nahi hua. Console check karo.");
    }
  };

  return (
    <section className="contact" id="contact">

      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>
      <div className="grid-bg"></div>

      <div className="contact-container">

        <div className="contact-heading" ref={headingRef}>
          <p className="intro">
            Get In Touch</p>
          <h2>
            <span>  Contact Me</span>
          </h2>
          <p className="description1">
            Have a project in mind or just want to say hi? My inbox is
            always open — I'll get back to you as soon as I can.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info" ref={infoRef}>

            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>your-email@example.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+92 300 0000000</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Karachi, Pakistan</p>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {sent ? "Message Sent ✓" : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;