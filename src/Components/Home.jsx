import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <section className="home" id="home">

      {/* Background Effects */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>
      <div className="grid-bg"></div>

      <div className="home-container">

        {/* LEFT CONTENT */}
        <div className="home-content">

          <div className="available">
            <span></span>
            Available for work
          </div>

          <p className="intro">
            Hello, I'm
          </p>

          <h1>
            Shifa <span>Nazeer</span>
          </h1>

          <h2>
            I'm a <span>Web Developer</span>
          </h2>

          <p className="description">
            I build modern, responsive and interactive websites
            that turn creative ideas into beautiful digital experiences.
          </p>

          <div className="home-buttons">

            <Link to="/project" className="primary-btn">
              View My Work
              <span>↗</span>
            </Link>

            <Link to="/contact" className="secondary-btn">
              Contact Me
            </Link>

          </div>

          <div className="social-icons-row">
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

          {/* Small Stats */}
          <div className="stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-line"></div>

            <div className="stat">
              <h3>2+</h3>
              <p>Years Learning</p>
            </div>

            <div className="stat-line"></div>
            <div className="stat">
              <h3>100%</h3>
              <p>Passion</p>
            </div>
          </div>
        </div>

        {/* RIGHT 3D CARD */}
        <div className="visual-area">

          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>

          <div className="floating-dot dot-one"></div>
          <div className="floating-dot dot-two"></div>
          <div className="floating-dot dot-three"></div>


          {/* Developer Card */}
          <div className="developer-card">

            <div className="card-top">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>developer.js</p>

              <div className="card-icon">✦</div>
            </div>


            <div className="code-content">

              <p>
                <span className="purple">const</span>
                <span className="cyan">developer</span> 
              </p>

              <p className="indent">
                <span className="pink">name</span>:{" "}
                <span className="green">"Shifa Nazeer"</span>,
              </p>

              <p className="indent">
                <span className="pink">role</span>:{" "}
                <span className="green">"Web Developer"</span>,
              </p>

              <p className="indent">
                <span className="pink">skills</span>: [
              </p>

              <p className="indent-two">
                <span className="green">"React"</span>,
              </p>

              <p className="indent-two">
                <span className="green">"JavaScript"</span>,
              </p>

              <p className="indent-two">
                <span className="green">"HTML & CSS"</span>
              </p>

              <p className="indent">
                ],
              </p>

              <p>
                {"}"}
              </p>

            </div>


            {/* Card Bottom */}
            <div className="card-bottom">

              <div className="profile-circle">
                <img src="/img1.png" alt="" />
              </div>

              <div>
                <h4>Creative Developer</h4>
                <p>Building the web ✨</p>
              </div>

              <div className="status">
                <span></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;