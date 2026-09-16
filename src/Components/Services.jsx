import React, { useEffect, useRef } from "react";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    icon: <FaCode />,
    title: "Web Development",
    text: "Building fast, scalable and modern websites using Html, Css, React, JavaScript and clean, maintainable code.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI Design",
    text: "Designing clean, user-friendly interfaces that focus on great experience along with beautiful visuals.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    text: "Making sure every website looks and works perfectly across all devices — mobile, tablet and desktop.",
  },
];

const skillsData = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 75 },
  { name: "UIDesign", level: 75 },
  { name: "Responsive Design", level: 80 },
];

function Services() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const skillBarsRef = useRef([]);

  useEffect(() => {
    // Heading fade-up on scroll
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "restart none none reverse",
        },
      }
    );

    // Cards staggered reveal + slight rotation on scroll
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60, rotateX: 15 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    );

    // Skill bars fill up on scroll
    skillBarsRef.current.forEach((bar) => {
      if (!bar) return;
      const level = bar.getAttribute("data-level");
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${level}%`,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-list",
            start: "top 85%",
            toggleActions: "restart none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="services" id="services">

      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>
      <div className="grid-bg"></div>

      <div className="services-container">

        <div className="services-heading" ref={headingRef}>
          <p className="intro">What I Offer</p>
          <h2>
            My services
          </h2>
          <p className="description1">
            Here are a few things I do best — combining code and design
            to build complete digital experiences.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              className="service-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="skills-section">
          <h3 className="skills-title">
            My <span>Skills</span>
          </h3>

          <div className="skills-list">
            {skillsData.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-top">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    data-level={skill.level}
                    ref={(el) => (skillBarsRef.current[index] = el)}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;