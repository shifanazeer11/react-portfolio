import React, { useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaGithub, FaPlay } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const projectsData = [
  {
    title: "Spotify Clone",
    description:
      "A responsive Spotify-inspired music player built with HTML, CSS, and JavaScript, featuring playlists, album artwork, music controls, and an interactive player interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/sportify.png",
    video: "public/sportify.mp4",
    liveLink: "https://shifanazeer11.github.io/Spotify-Cloun-/",
    githubLink: "https://github.com/shifanazeer11/Spotify-Cloun-",
  },
 
   {
    title: "Currency Converter",
    description:
      "A responsive currency converter that allows users to convert currencies using real-time exchange rates through an API, with a simple and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    image: "public/Currency.png",
    video: "/currency.mp4",
    liveLink: "https://shifanazeer11.github.io/currency-converter/",
    githubLink: "https://github.com/shifanazeer11/currency-converter",
  },

  {
    title: "Tic Tac Toe",
    description:
      "A fun and interactive Tic Tac Toe game built with HTML, CSS, and JavaScript, featuring a responsive game board, player turns, win detection, and game reset functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/tic tac.png",
    video: "public/tictak.mp4",
    liveLink: "https://shifanazeer11.github.io/tic-tac-toe/",
    githubLink: "https://github.com/shifanazeer11/tic-tac-toe",
  },

  {
    title: "ATM Machine System",
    description:
      "An interactive ATM Machine System that simulates real-world banking operations including PIN authentication, balance checking, cash withdrawal, deposit, and account transactions.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    image: "public/ATM.png",
    video: "public/atm.mp4",
    liveLink: "https://shifanazeer11.github.io/ATM-machine-system/",
    githubLink: "https://github.com/shifanazeer11/ATM-machine-system",
  },

   {
    title: "Career Guidance Website",
    description:
      "A career guidance platform designed to help students explore career options, discover educational resources, and make better decisions about their academic and professional future.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "public/career.png",
    video: "public/career.mp4",
    liveLink: "https://shifanazeer11.github.io/career-guidance/",
    githubLink: "https://github.com/shifanazeer11/career-guidance",
  },
  {
    title: "GSAP Image Gallery",
    description:
      "An interactive animated image gallery built with GSAP, featuring smooth scrolling effects, engaging transitions, and modern animations for an immersive browsing experience.",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    image: "public/gallery.png",
    video: "public/GSAP.mp4",
    liveLink: "https://shifanazeer11.github.io/Gsap-gallery/",
    githubLink: "https://github.com/shifanazeer11/Gsap-gallery",
  },

  {
    title: "Firebase Authentication",
    description:
      "A user authentication project built with Firebase that provides secure login and signup functionality, allowing users to create accounts and authenticate through a simple interface.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    image: "public/firee.png",
    video: "public/firebase.mp4",
    liveLink: "https://shifanazeer11.github.io/authentication-with-firebase/",
    githubLink: "https://github.com/shifanazeer11/authentication-with-firebase",
  },
];

function Projects() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const videoRefs = useRef([]);

  useEffect(() => {
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

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 80, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play();
    }
    gsap.to(cardsRef.current[index], {
      y: -12,
      scale: 1.03,
      boxShadow: "0 25px 50px rgba(162, 89, 255, 0.35)",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    gsap.to(cardsRef.current[index], {
      y: 0,
      scale: 1,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section className="projects" id="projects">

      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>
      <div className="grid-bg"></div>

      <div className="projects-container">

        <div className="projects-heading" ref={headingRef}>
          <p className="intro">My Work</p>
          <h2>
            <span> Featured Projects</span>
          </h2>
          <p className="description1">
            A few projects I've built — hover over each card to see a quick
            preview, or click through to view live and source code.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              className="project-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >

              <div className="project-media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-thumb"
                />
              <video
  ref={(el) => (videoRefs.current[index] = el)}
  src={project.video}
  loop
  playsInline
  className="project-video"
></video>

                <div className="play-badge">
                  <FaPlay />
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-tags">
                  {project.tech.map((t, i) => (
                    <span className="tech-tag" key={i}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link live"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link code"
                  >
                    Code <FaGithub />
                  </a>
                </div>
              </div>

              <div className="card-glow"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;