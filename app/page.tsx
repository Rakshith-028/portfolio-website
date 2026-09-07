"use client";

import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  Send,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "REST APIs",
  "Python",
  "C++",
  "SQL",
  "Git & GitHub",
  "AI / ML",
];

const projects = [
  {
    number: "01",
    title: "Memora AI",
    category: "Artificial Intelligence",
    description:
      "An intelligent memory system designed to store, retrieve, score and manage contextual information using AI-powered memory lifecycle techniques.",
    icon: BrainCircuit,
    tags: ["AI", "Next.js", "APIs", "Memory Systems"],
  },
  {
    number: "02",
    title: "CodePilot",
    category: "Developer Tool",
    description:
      "A developer-focused application designed to improve coding workflows through a modern interface, structured development tools and intelligent assistance.",
    icon: Code2,
    tags: ["Web Development", "AI", "Developer Tools"],
  },
  {
    number: "03",
    title: "Clinic SaaS",
    category: "Full Stack SaaS",
    description:
      "A modern clinic management SaaS application built to organize patient workflows, appointments and administrative operations.",
    icon: BriefcaseBusiness,
    tags: ["Next.js", "SaaS", "Dashboard", "Full Stack"],
  },
  {
    number: "04",
    title: "Study Alarm",
    category: "Productivity",
    description:
      "A productivity-focused study system designed to help students stay consistent, manage focused sessions and build better study routines.",
    icon: GraduationCap,
    tags: ["Productivity", "Automation", "Student Tool"],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setFormStatus("Message sent successfully.");
      form.reset();
    } catch {
      setFormStatus("Unable to send message. Please try again.");
    }
  };

  return (
    <main>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#home" className="brand">
            R<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="https://github.com/Rakshith-028"
            target="_blank"
            rel="noreferrer"
            className="nav-github"
          >
            GitHub
          </a>

          <button
            className="menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </nav>

      <section id="home" className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-content">
          <div className="availability">
            <span className="availability-dot" />
            Open to opportunities
          </div>

          <p className="hero-intro">HELLO, I&apos;M</p>

          <h1>
            Rakshith
            <span>.</span>
          </h1>

          <h2>Full Stack Developer & B.Tech AIML Student</h2>

          <p className="hero-description">
            I build modern web applications and explore intelligent systems
            that combine clean interfaces with practical engineering.
            Currently pursuing B.Tech in Artificial Intelligence & Machine
            Learning at VIPS.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View my work
              <ArrowRight size={19} />
            </a>

            <a
              href="https://github.com/Rakshith-028"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>04+</strong>
              <span>Featured Projects</span>
            </div>

            <div className="stat-line" />

            <div>
              <strong>AIML</strong>
              <span>B.Tech Student</span>
            </div>

            <div className="stat-line" />

            <div>
              <strong>Full Stack</strong>
              <span>Development</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-grid">
          <div>
            <p className="section-label">01 / ABOUT</p>

            <h2 className="section-title">
              Building ideas into
              <br />
              <span>real experiences.</span>
            </h2>
          </div>

          <div className="about-content">
            <p>
              I&apos;m Rakshith, a B.Tech Artificial Intelligence & Machine
              Learning student at VIPS with a strong interest in full stack web
              development and intelligent software systems.
            </p>

            <p>
              I enjoy turning ideas into working products, from modern web
              interfaces and dashboards to AI-driven applications. My focus is
              on building software that is useful, understandable and visually
              polished.
            </p>

            <p>
              During my full stack web development internship, I worked on
              practical web development tasks involving responsive interfaces,
              APIs, application logic and complete web application workflows.
            </p>

            <div className="about-cards">
              <div className="info-card">
                <GraduationCap />
                <div>
                  <span>Education</span>
                  <strong>B.Tech AIML</strong>
                  <small>VIPS, New Delhi</small>
                </div>
              </div>

              <div className="info-card">
                <Code2 />
                <div>
                  <span>Focus</span>
                  <strong>Full Stack Web</strong>
                  <small>Development & AI</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="container">
          <p className="section-label">02 / SKILLS</p>

          <div className="section-header-row">
            <h2 className="section-title">
              Technologies I
              <br />
              <span>work with.</span>
            </h2>

            <p>
              A growing toolkit for building modern applications across
              frontend, backend and AI-oriented development.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{skill}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <p className="section-label">03 / SELECTED WORK</p>

          <div className="section-header-row">
            <h2 className="section-title">
              Projects that
              <br />
              <span>define my journey.</span>
            </h2>

            <p>
              A selection of projects covering AI, SaaS, developer tools and
              productivity.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article className="project-card" key={project.title}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number}</span>
                    <Icon size={32} />
                  </div>

                  <p className="project-category">{project.category}</p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Rakshith-028"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View on GitHub
                    <ExternalLink size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <p className="section-label">04 / CONTACT</p>

            <h2 className="section-title">
              Have an idea?
              <br />
              <span>Let&apos;s connect.</span>
            </h2>

            <p className="contact-description">
              I&apos;m open to learning opportunities, collaborations and
              interesting software projects.
            </p>

            <a href="mailto:rakshith0228@gmail.com" className="email-link">
              <Mail size={20} />
              rakshith0228@gmail.com
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                placeholder="Tell me about your idea..."
                rows={5}
                required
              />
            </label>

            <button type="submit" className="primary-button form-button">
              Send message
              <Send size={18} />
            </button>

            {formStatus && <p className="form-status">{formStatus}</p>}
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div>
            <a href="#home" className="brand">
              R<span>.</span>
            </a>
            <p>Designed & built by Rakshith.</p>
          </div>

          <div className="footer-right">
            <a
              href="https://github.com/Rakshith-028"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="mailto:rakshith0228@gmail.com">
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}