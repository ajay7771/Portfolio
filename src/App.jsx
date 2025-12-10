// src/App.jsx
import "./index.css";
import profile from "./profile.jpg";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
  <div className="logo-circle">Ajay</div>
  <span className="logo-text">Portfolio</span><span className="dot">.</span>
</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="section hero">
        <div className="hero-left">
          <p className="hero-intro">Hi, I’m</p>
          <h1>Ajay Babu Juvvala</h1>
          <h2>Front-End Developer</h2>
          <p className="hero-text">
            I build responsive, high-performance web applications using React,
            TypeScript, and modern UI frameworks. I love crafting intuitive,
            pixel-perfect user interfaces and seamless user experiences.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card">
            {/* <div  src="profile.jpg" alt="Profile" className="profile-photo"/> */}
            <img src={profile} alt="Profile" className="profile-photo" />

            <p className="profile-role">Front-End Developer</p>
            <p className="profile-location">Hyderabad, India</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
          Front-end developer with 2.5+ years of experience in building modern web applications.
        </p>
        <div className="about-grid">
          <div>
            <p>
              I’m an experienced Front-End Developer with over 2.5 years of professional
              experience building responsive, high-performance web applications using
              JavaScript and React.
            </p>
            <p>
              I enjoy translating UI/UX designs into clean, maintainable code and optimizing
              applications for performance across devices and browsers. I care about
              writing well-structured, well-documented code and implementing accessibility
              and performance best practices.
            </p>
            <p>
              I also collaborate closely with back-end teams and have a fundamental
              understanding of Java and back-end development, giving me a full-stack
              perspective when building features.
            </p>
          </div>
          <div className="about-details">
            <ul>
              <li><span>Experience:</span> 2.5+ years</li>
              <li><span>Role:</span> Front-End Developer</li>
              <li><span>Location:</span> Hyderabad, India</li>
              <li><span>Open to:</span> Front-End / React Developer roles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section section-alt">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build modern web applications.
        </p>
        <div className="skills-grid">
          {[
            "React.js",
            "JavaScript (ES6+)",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Redux",
            "Material UI",
            "Tailwind CSS",
            "Git"
          ].map((skill) => (
            <div key={skill} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Kagami India Pvt. Ltd</h3>
              <p className="experience-role">Front-End Developer</p>
            </div>
            <div className="experience-meta">
              <p>Feb 2022 – Jun 2024</p>
              <p>Hyderabad, India</p>
            </div>
          </div>
          <p className="experience-clients">
            Clients: Shilpacare (Uppal), TOGO Project (Africa), Deccan Auto Ltd (Hyderabad),
            P&amp;R Infra Project (Uttarakhand)
          </p>
          <ul className="experience-list">
            <li>
              Developed and maintained responsive, high-performance web applications using
              ReactJS, JavaScript, and CSS frameworks.
            </li>
            <li>
              Translated UI/UX mockups into clean, pixel-perfect interfaces in close
              collaboration with designers and product managers.
            </li>
            <li>
              Optimized applications for performance across devices and browsers to ensure a
              smooth user experience.
            </li>
            <li>
              Wrote clean, maintainable, well-documented code, implemented unit tests, and
              participated in code reviews.
            </li>
            <li>
              Debugged and resolved production issues, contributing to stable and reliable
              application releases.
            </li>
            <li>
              Implemented accessibility and performance best practices and integrated
              front-end components with back-end APIs.
            </li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section section-alt">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of projects that highlight my experience with React and front-end development.
        </p>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Multisector Enterprise Web Platform</h3>
            <p>
              Front-end development for a multisector enterprise platform used by clients in
              healthcare, automotive, and infrastructure sectors. Built with React and modern
              UI frameworks, focusing on performance and responsive design.
            </p>
          </div>

          <div className="project-card">
            <h3>Internal Admin Dashboard</h3>
            <p>
              Interactive dashboard for internal teams, featuring reusable components, charts,
              and filters. Implemented using React, TypeScript, and Tailwind CSS to enable
              quick iteration and clean UI.
            </p>
          </div>

          <div className="project-card">
            <h3>Reusable UI Component Library</h3>
            <p>
              Library of reusable UI components—forms, tables, buttons, modals—used across
              multiple projects to maintain consistency and speed up development.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>B-Tech (Mechanical Engineering)</h3>
              <p className="experience-role">RGUKT IIIT-NUZVIDU</p>
            </div>
            <div className="experience-meta">
              <p>2013 – 2017</p>
              <p>CGPA: 7.25</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section-alt">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Interested in working together or have an opportunity to discuss? Let’s connect.
        </p>
        <div className="contact-grid">
          <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:ajayjuvvala@gmail.com">ajayjuvvala@gmail.com</a>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <a href="tel:+919908374087">+91 99083 74087</a>
          </div>
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <a
              href="https://linkedin.com/in/ajay-babu-9a8235273"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/ajay-babu-9a8235273
            </a>
          </div>
          <div className="contact-item">
            <h3>Location</h3>
            <p>Hyderabad, India</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Ajay Babu Juvvala. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
