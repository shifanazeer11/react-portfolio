import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const stack = [
    { name: "HTML / CSS", lvl: "Advanced" },
    { name: "javaScript", lvl: "Advanced" },
    { name: "React ", lvl: "Comfortable" }

];

const journey = [
    { year: "2025", title: "First line of code", desc: "Started learning HTML — building my first static pages and understanding how the web works." },
    { year: "Mid 2025", title: "Learned CSS", desc: "Moved on to styling — layouts, flexbox, grid, and making things actually look good." },
    { year: "Late 2025", title: "Picked up JavaScript", desc: "Learned the fundamentals of JS — DOM manipulation, logic, and interactivity." },
    { year: "2026", title: "Added Firebase", desc: "Started building full apps with authentication, real-time databases, and hosting." },
    { year: "2026", title: "Started React", desc: "Began building component-based apps and understanding modern frontend architecture." },
    { year: "2026", title: "Still building", desc: "Now exploring 3D web experiences and interactive design." },
];

export default function About() {
    const rootRef = useRef(null);
    const headingRef = useRef(null);
    const charsWrapRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Split heading into chars for a reveal animation
            const heading = headingRef.current;
            if (heading) {
                const text = heading.textContent;
                heading.innerHTML = "";
                text.split("").forEach((ch) => {
                    const span = document.createElement("span");
                    span.textContent = ch === " " ? "\u00A0" : ch;
                    span.style.display = "inline-block";
                    heading.appendChild(span);
                });
                gsap.from(heading.children, {
                    y: 60,
                    opacity: 0,
                    rotateX: -40,
                    stagger: 0.02,
                    duration: 0.9,
                    ease: "power4.out",
                    delay: 0.2,
                });
            }
            // Portrait / blob reveal
            gsap.from(".About__portrait", {
                scale: 0.8,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.3,
            });

            // Stat counters
            document.querySelectorAll(".statBlock__num").forEach((el) => {
                const end = parseInt(el.dataset.value, 10);
                gsap.fromTo(
                    el,
                    { innerText: 0 },
                    {
                        innerText: end,
                        duration: 1.6,
                        ease: "power2.out",
                        snap: { innerText: 1 },
                        scrollTrigger: { trigger: el, start: "top 85%" },
                    }
                );
            });

            // Skills grid stagger-in on scroll
            gsap.from(".skillPill", {
                y: 24,
                opacity: 0,
                stagger: 0.06,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: { trigger: ".About__skills", start: "top 80%" },
            });

            // Journey timeline items sliding in from alternating sides
            gsap.utils.toArray(".journeyItem").forEach((item, i) => {
                gsap.from(item, {
                    x: i % 2 === 0 ? -60 : 60,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: { trigger: item, start: "top 85%" },
                });
            });

            // Timeline progress line grows with scroll
            gsap.fromTo(
                ".journeyLine__fill",
                { height: "0%" },
                {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".journeyLine",
                        start: "top 70%",
                        end: "bottom 60%",
                        scrub: 1,
                    },
                }
            );

            // Parallax blob movement on scroll
            gsap.to(".aboutPage__blob", {
                y: -120,
                rotate: 40,
                ease: "none",
                scrollTrigger: {
                    trigger: ".aboutPage",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            // Quote section reveal
            gsap.from(".About__quote blockquote", {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: { trigger: ".About__quote", start: "top 80%" },
            });
        }, rootRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="aboutPage" ref={rootRef}>
            <div className="aboutPage__blob" />

            {/* HERO */}
            <section className="aboutPage__hero">
                <div className="aboutPage__heroText">
                    <span className="aboutPage__eyebrow">About me</span>
                    <h1 className="aboutPage__heading" ref={headingRef}>
                        The person behind the code.
                    </h1>
                    <div className="aboutPage__intro">
                        <p>
                            I'm Shifa Nazeer — a frontend developer who believes good software
                            feels invisible: fast, clear, and never in the user's way.
                        </p>
                        <p>
                            I care about the whole picture — clean architecture underneath,
                            a calm and confident interface on top.
                        </p>
                    </div>
                </div>

                <div className="aboutPage__portrait">
                    <img src="/img1.png" alt="" />
                </div>
            </section>

            {/* STATS */}
            <section className="aboutPage__stats">
                <div className="statBlock">
                    <span className="statBlock__num" data-value="2">0</span>
                    <span className="statBlock__plus">+</span>
                    <p>Years of experience</p>
                </div>
                <div className="statBlock">
                    <span className="statBlock__num" data-value="10">0</span>
                    <span className="statBlock__plus">+</span>
                    <p>Products shipped</p>
                </div>
                <div className="statBlock">
                    <span className="statBlock__num" data-value="3">0</span>
                    <p>Countries worked with</p>
                </div>
            </section>

            {/* SKILLS */}
            <section className="aboutPage__skills">
                <h2 className="aboutPage__sectionTitle">
                    What I <em>work with.</em>
                </h2>
                <div className="skillsGrid">
                    {stack.map((s) => (
                        <div className="skillPill" key={s.name}>
                            <span>{s.name}</span>
                            <small>{s.lvl}</small>
                        </div>
                    ))}
                </div>
            </section>

            {/* JOURNEY TIMELINE */}
            <section className="aboutPage__journey">
                <h2 className="aboutPage__sectionTitle">
                    My <em>journey.</em>
                </h2>
                <div className="journeyLine">
                    <div className="journeyLine__fill" />
                </div>
                <div className="journeyList">
                    {journey.map((j) => (
                        <div className="journeyItem" key={j.year}>
                            <span className="journeyItem__year">{j.year}</span>
                            <h3>{j.title}</h3>
                            <p>{j.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* QUOTE */}
            <section className="aboutPage__quote">
                <blockquote>
                    "Design is easy to talk about but hard to do well — I try to let the
                    code and the interface earn their simplicity."
                </blockquote>
                <span>— Shifaa</span>
            </section>
        </div>
    );
}