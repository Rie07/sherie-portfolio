
import './App.css'
import {
  LuGraduationCap,
  LuMapPin,
  LuMail,
  LuCode,
  LuGlobe,
  LuCpu,
  LuNetwork,
  LuBrainCircuit,
  LuWrench
} from 'react-icons/lu'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { useState, useEffect, useRef } from 'react'

import { Document, Page, pdfjs } from 'react-pdf'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function App() {
const [selectedCertificate, setSelectedCertificate] = useState(null)
const certificates = [
  {
    code: 'AI',
    title: 'AI Career Readiness Training',
    issuer: 'AI Ready ASEAN / MSU-IIT',
    date: 'August 18, 2026',
    file: '/certificates/ai-career-readiness-2026.png',
  },
  {
    code: 'ZX',
    title: 'Quantum Circuits as Pictures: An Introduction to ZX Calculus',
    issuer: 'Quantum Computing Society of the Philippines',
    date: 'March 20, 2026',
    file: '/certificates/zx-calculus-webinar-2026.png',
  },
  {
    code: 'RT',
    title: 'Introduction to Embedded Systems Programming Using RT-Thread IoT OS',
    issuer: 'RT-Thread / CCS, MSU-IIT',
    date: 'November 24–25, 2025',
    file: '/certificates/rt-thread-embedded-systems-2025.jpg',
  },
  {
    code: 'OJT',
    title: 'Seize Your Opportunity: An OJT Preparation Workshop',
    issuer: 'KadaKareer / CCS, MSU-IIT',
    date: 'November 24, 2025',
    file: '/certificates/ojt-preparation-workshop-2025.png',
  },
  {
    code: 'SB',
    title: 'Startup Basics 101',
    issuer: 'Details to be added',
    date: 'Date to be added',
    file: '/certificates/startup-basics-101.png',
  },
  {
    code: 'TS',
    title: 'TechShowcase 2025 Innovation',
    issuer: 'To be confirmed',
    date: 'December 17, 2025',
    file: '/certificates/techshowcase-2025.jpg',
  },
]

const projects = [
  {
    id: 'geosentry',
    title: 'GeoSentry',
    subtitle: 'IoT-Based Landslide Monitoring and Early Warning System Using Explainable AI',
    status: 'Undergraduate Thesis · In Progress',
    technologies: ['IoT', 'Machine Learning', 'XAI', 'Web Development'],
    description: 'Leading the development of a landslide monitoring and early warning system that integrates environmental sensors, ESP32, machine learning, and a web dashboard for risk visualization and explainable AI insights.',
    links: [],
  },
  {
    id: 'room-monitoring',
    title: 'Real-Time Multisensor Room Monitoring System',
    subtitle: 'FreeRTOS-Based Sensor Monitoring',
    technologies: ['Embedded C', 'FreeRTOS', 'Multitasking'],
    description: 'Implemented a FreeRTOS-based embedded application to practice task scheduling and sensor integration.',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Rie07/bca182-freertos-multisensor',
      },
    ],
  },
  {
    id: 'mp3-player',
    title: 'Personal MP3 Player',
    subtitle: 'Embedded Hardware–Software Integration',
    technologies: ['Embedded Systems', 'Hardware–Software Integration'],
    description: 'Developed an embedded MP3 player project involving hardware and software integration.',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Rie07/Personal-MP3-Player',
      },
    ],
  },
  {
    id: 'activity-recognition',
    title: 'Activity Recognition',
    subtitle: 'Movement Classification and Monitoring',
    technologies: ['Sensor Data Processing', 'Web Dashboard', 'Activity Classification'],
    description: 'Developed an activity recognition system that classifies movement into idle, walking, and running states, with results visualized through a web-based dashboard.',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Atoyyyyyy/Activity-Recognition',
      },
    ],
  },
  {
    id: 'drying-oven',
    title: 'Industrial Drying Oven Control System',
    subtitle: 'Industrial Control and Simulation',
    technologies: ['CODESYS', 'Verilog HDL', 'RT-Thread'],
    description: 'Designed and simulated industrial temperature and process control systems using CODESYS and Verilog HDL, with an RT-Thread implementation for real-time monitoring and control.',
    links: [
      {
        label: 'CODESYS',
        url: 'https://sites.google.com/d/13uuv00elzw2BnUj0lepyVnEurTGXzHP9/p/1_eGxQ7rZC65kSp-xTWf4FZv6qal-hKD0/edit',
      },
      {
        label: 'Verilog HDL',
        url: 'https://drive.google.com/file/d/1jowZBRbEbLfTrWlKV8niQJK2Y1srT1BX/view',
      },
      {
        label: 'RT-Thread',
        url: 'https://www.hackster.io/voxtek/rt-thread-hmi-drying-oven-simulated-control-dashboard-86429e',
      },
    ],
  },
  {
    id: 'sentisoil',
    title: 'SentiSoil',
    subtitle: 'AI Decision Support System for Organic Soil Monitoring',
    technologies: ['Research Proposal', 'IoT', 'Artificial Intelligence'],
    description: 'Contributed to a research proposal integrating IoT and AI for organic soil monitoring, including system architecture, data flow, and user interface design.',
    links: [
      {
        label: 'Documentation',
        url: 'https://drive.google.com/file/d/1d1QgXafprRtlVQKNgS8ty1Jdzin_FNwy/view?usp=sharing',
      },
    ],
  },
  {
    id: 'wattwise',
    title: 'WattWise',
    subtitle: 'Smart Energy Consumption Monitoring System',
    technologies: ['Qt Creator', 'Desktop Application Development'],
    description: 'Designed and developed a desktop monitoring dashboard using Qt Creator to display and visualize energy consumption data.',
    links: [
      {
        label: 'Documentation',
        url: 'https://drive.google.com/file/d/1UEKOZlzHI07gazA_4O_btlE0pp0ImodJ/view?usp=sharing',
      },
    ],
  },
  {
    id: 'phone-detection',
    title: 'Computer Vision-Based Phone Detection',
    subtitle: 'Object Detection with Edge Impulse',
    technologies: ['Edge Impulse', 'Machine Learning'],
    description: 'Developed and trained an object detection model using Edge Impulse to identify mobile phones in image datasets and localize detected objects using bounding boxes.',
    links: [
      {
        label: 'Documentation',
        url: 'https://drive.google.com/file/d/1bykuIwCv5t93bCqdr8FolWdaDMVKpPsH/view?usp=sharing',
      },
    ],
  },
]

const [activeProjectIndex, setActiveProjectIndex] = useState(0)

const activeProject = projects[activeProjectIndex]

const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem('sherie-theme')

  if (savedTheme === 'dark') return true
  if (savedTheme === 'light') return false

  return window.matchMedia('(prefers-color-scheme: dark)').matches
})

useEffect(() => {
  document.documentElement.classList.toggle('dark-mode', darkMode)

  localStorage.setItem(
    'sherie-theme',
    darkMode ? 'dark' : 'light'
  )
}, [darkMode])

const academicDialogRef = useRef(null)
const resumeDialogRef = useRef(null)
const [resumePageCount, setResumePageCount] = useState(0)
useEffect(() => {
  if (!selectedCertificate) return

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      setSelectedCertificate(null)
    }
  }

  const previousOverflow = document.body.style.overflow

  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', handleEscape)

  return () => {
    document.body.style.overflow = previousOverflow
    window.removeEventListener('keydown', handleEscape)
  }
}, [selectedCertificate])
  return (
    <>
      <header className="site-header">
        <a href="#home" className="brand">
          sherie<span>.</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}

          <button
  type="button"
onClick={() => {
  resumeDialogRef.current?.showModal()
  document.body.style.overflow = 'hidden'
}}
>
  Resume ↗
</button>
  
<button
  type="button"
  onClick={() => setDarkMode(!darkMode)}
  aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {darkMode ? '☀' : '☾'}
</button>

        </nav>
      </header>

      
<main id="home">
  <div className="welcome-badge">
    ✦ WELCOME TO MY LITTLE CORNER OF THE WEB
  </div>

  <h1>Hi, I'm Sherie.</h1>

  <p className="hero-tagline">
    I build things with technology.
  </p>

  <div className="hero-description">
    A Computer Applications student exploring software
    development, embedded systems, and emerging technologies.
    I enjoy transforming ideas into practical and meaningful
    solutions.
  </div>
  
<div className="hero-actions">
  <a href="#projects" className="primary-button">
    Explore My Work ↗
  </a>

  <button
  type="button"
  className="secondary-button"
onClick={() => {
  resumeDialogRef.current?.showModal()
  document.body.style.overflow = 'hidden'
}}
>
  View Resume ↗
</button>
</div>


<div className="hero-socials">
  <a
    href="https://github.com/Rie07"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
  >
    <FaGithub aria-hidden="true" />
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/sherie-grace-lupoz-bb48452a1/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
  >
    <FaLinkedin aria-hidden="true" />
    LinkedIn ↗
  </a>
</div>
<div className="hero-meta">
  <span className="meta-item">
    <LuGraduationCap aria-hidden="true" />
    BS Computer Applications — Embedded System
  </span>

  <span className="meta-item">
    <LuMapPin aria-hidden="true" />
    Philippines
  </span>
</div>
</main>

{/* ABOUT ME SECTION */}
<section id="about" className="about-section">

  <div className="section-heading">
    <span>02 / 07 — ABOUT ME</span>
    <h2>A little about me.</h2>
  </div>

  <div className="about-content">

    {/* Left side: Photo and personal details */}
    <div className="about-profile">

      
<div className="about-photo">
  <img
    src="/profile.jpg"
    alt="Portrait of Sherie Grace L. Lupoz"
    className="profile-photo"
  />
</div>


      <div className="about-details">
        <h3>SHERIE GRACE L. LUPOZ</h3>
        <p>BS Computer Applications</p>
        <p className="about-major">
          Major in Embedded Systems
        </p>
        <p>MSU-IIT</p>
      </div>

    </div>

    {/* Right side: Personal introduction */}
    <div className="about-description">
      <h3>Get to know me.</h3>

      <p>
        This space is reserved for my personal introduction,
        academic journey, interests, and what motivates me
        to pursue technology.
      </p>

      <p className="about-note">
        Personal description coming soon.
      </p>
    </div>

  </div>

</section>

{/* EXPERIENCE SECTION */}
<section id="experience" className="experience-section">

  <div className="section-heading">
    <span>03 / 07 — EXPERIENCE</span>
    <h2>My journey so far.</h2>
  </div>

  <p className="experience-intro">
    A timeline of academic milestones,
    technical experiences, and professional growth.
  </p>

  <ol className="experience-timeline">

  <li className="timeline-item">
    <span className="timeline-dot"></span>
    <span className="timeline-year">STAGE 01</span>
    <h3>Beginning</h3>
    <p>Building my foundations.</p>
  </li>

  <li className="timeline-item">
    <span className="timeline-dot"></span>
    <span className="timeline-year">STAGE 02</span>
    <h3>Exploration</h3>
    <p>Discovering new technologies.</p>
  </li>

  <li className="timeline-item">
    <span className="timeline-dot"></span>
    <span className="timeline-year">STAGE 03</span>
    <h3>Development</h3>
    <p>Working on technical projects.</p>
  </li>

  <li className="timeline-item">
    <span className="timeline-dot"></span>
    <span className="timeline-year">STAGE 04</span>
    <h3>Specialization</h3>
    <p>Applying advanced skills.</p>
  </li>

</ol>
</section>

{/* TECH STACK SECTION */}
<section id="tech-stack" className="tech-section">

  <div className="section-heading">
    <span>04 / 07 — TECH STACK</span>
    <h2>Tools I work with.</h2>
  </div>

  <p className="tech-intro">
    Technologies, tools, and platforms I've explored
    through coursework and projects.
  </p>

  
<div className="tech-grid">

  {/* Programming Languages */}
  <div className="tech-card">
    <h3>
  <LuCode aria-hidden="true" />
  Programming Languages
</h3>
    <p>C, C++, Python, Verilog HDL</p>
  </div>

  {/* Web Development */}
  <div className="tech-card">
    <h3>
  <LuGlobe aria-hidden="true" />
  Web Development
</h3>
    <p>HTML, CSS, JavaScript</p>
    <span className="learning-tag">
      Currently Learning: React
    </span>
  </div>

  {/* Embedded Systems */}
  <div className="tech-card">
    <h3>
  <LuCpu aria-hidden="true" />
  Embedded Systems & Hardware
</h3>
    <p>
      Arduino Uno, ESP32, STM32F407,
      RT-Thread, Sensors & Actuators
    </p>
  </div>

  {/* Networking */}
  <div className="tech-card">
    <h3>
  <LuNetwork aria-hidden="true" />
  Networking
</h3>
    <p>Wireshark, Cisco Packet Tracer</p>
  </div>

  {/* AI & Computer Vision */}
  <div className="tech-card">
    <h3>
  <LuBrainCircuit aria-hidden="true" />
  AI & Computer Vision Tools
</h3>
    <p>
      Edge Impulse, Google Colab, PictoBlox
    </p>
  </div>

  {/* Development Tools */}
  <div className="tech-card">
    <h3>
  <LuWrench aria-hidden="true" />
  Development Tools & Platforms
</h3>
    <p>
      VS Code, Git, GitHub, Arduino IDE,
      Wokwi, CODESYS, AMD Vivado,
      Qt Creator, XAMPP
    </p>
  </div>

</div>

</section>

{/* ACHIEVEMENTS SECTION */}
<section id="achievements" className="achievements-section">

  <div className="section-heading">
    <span>05 / 07 — ACHIEVEMENTS</span>
    <h2>Milestones & recognition.</h2>
  </div>

  <p className="achievements-intro">
    A collection of academic achievements, certificates,
    and learning experiences throughout my journey.
  </p>

  {/* Academic Recognition */}
  <div className="achievement-group">

    <h3>Academic Recognition</h3>

    
<button
  type="button"
  className="academic-card"
onClick={() => {
  academicDialogRef.current?.showModal()
  document.body.style.overflow = 'hidden'
}}
>
      <span className="academic-card-title">
        Academic Excellence
      </span>

      <span className="academic-card-school">
        Mindanao State University –
        Iligan Institute of Technology
      </span>

      <span className="academic-card-summary">
        4 Dean's Lister Semesters ·
        2 Chancellor's Lister Semesters
      </span>

      <span className="academic-card-action">
        View Academic Record ↗
      </span>
    </button>

  </div>

{/* CERTIFICATES & TRAINING */}
<div className="achievement-group">

  <h3>Certificates & Training</h3>

  <div className="certificate-grid">
{certificates.map((cert) => (
  <button
    key={cert.code}
    type="button"
    className="certificate-card"
onClick={() => setSelectedCertificate(cert)}
  >
    <span
      className="certificate-watermark"
      aria-hidden="true"
    >
      {cert.code}
    </span>

    <span className="certificate-code">
      {cert.code}
    </span>

    <span className="certificate-content">
      <strong>{cert.title}</strong>
      <span>{cert.issuer}</span>
      <span>{cert.date}</span>
    </span>

    <span className="certificate-action">
      View Certificate ↗
    </span>
  </button>
))}
  </div>

</div>

{/* ACADEMIC RECORD POPUP */}
<dialog
  ref={academicDialogRef}
  className="academic-dialog"
  aria-labelledby="academic-dialog-title"
  onClose={() => {
    document.body.style.overflow = ''
  }}
>
  <div className="academic-dialog-header">
    <h2 id="academic-dialog-title">
      Academic Record
    </h2>

    <button
      type="button"
      onClick={() => academicDialogRef.current?.close()}
      aria-label="Close academic record"
    >
      ✕
    </button>
  </div>

  <p className="academic-dialog-school">
    Mindanao State University –
    Iligan Institute of Technology
  </p>

  <div className="academic-table-wrap">
    <table className="academic-table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Semester</th>
          <th>GPA</th>
          <th>Recognition</th>
        </tr>
      </thead>

      <tbody>
        {[
          ["1st Year", "1st Sem", "1.73", "Dean's Lister"],
          ["1st Year", "2nd Sem", "1.51", "Dean's Lister"],
          ["2nd Year", "1st Sem", "1.47", "Dean's Lister"],
          ["2nd Year", "2nd Sem", "1.47", "Dean's Lister"],
          ["3rd Year", "1st Sem", "1.29", "Chancellor's Lister"],
          ["3rd Year", "2nd Sem", "1.39", "Chancellor's Lister"]
        ].map(([year, semester, gpa, recognition]) => (
          <tr key={`${year}-${semester}`}>
            <td>{year}</td>
            <td>{semester}</td>
            <td>{gpa}</td>
            <td>{recognition}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

</dialog>

</section>

{/* PROJECTS SECTION */}
<section id="projects" className="projects-section">

  <div className="section-heading">
    <span>06 / 07 — PROJECTS</span>
    <h2>Things I've built.</h2>
  </div>

  <p className="projects-intro">
    A selection of projects exploring embedded systems,
    software development, artificial intelligence,
    and practical problem-solving.
  </p>

  <div className="projects-showcase">

    {/* LEFT: SELECTED PROJECT PREVIEW */}
    <div className="project-preview">

      <div className="project-preview-visual">
        <span>PROJECT SHOWCASE</span>
        <LuCpu aria-hidden="true" />
        <p>Project preview coming soon</p>
      </div>

      <div className="project-preview-details">

        <span className="project-eyebrow">
          FEATURED PROJECT
        </span>

        <h3>{activeProject.title}</h3>

        <p className="project-subtitle">
          {activeProject.subtitle}
        </p>

        {activeProject.status && (
          <span className="project-status">
            {activeProject.status}
          </span>
        )}

        <p className="project-description">
          {activeProject.description}
        </p>

        <div className="project-technologies">
          {activeProject.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {activeProject.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
        </div>

      </div>
    </div>

    {/* RIGHT: PROJECT SELECTION LIST */}
    <div className="project-list">

      {projects.map((project, index) => (
        <button
          key={project.id}
          type="button"
          className={
            activeProjectIndex === index
              ? 'project-list-item active'
              : 'project-list-item'
          }
          aria-pressed={activeProjectIndex === index}
          onClick={() => setActiveProjectIndex(index)}
        >
          <span className="project-number">
            {String(index + 1).padStart(2, '0')}
          </span>

          <span className="project-list-title">
            {project.title}
          </span>

          <span aria-hidden="true">↗</span>
        </button>
      ))}

    </div>

  </div>

</section>

{/* CONTACT SECTION */}
<section id="contact" className="contact-section">

  <div className="section-heading">
    <span>07 / 07 — CONTACT</span>
    <h2>Let's connect.</h2>
  </div>

  <div className="contact-layout">

    {/* LEFT: INTRODUCTION */}
    <div className="contact-intro">

      <h3>Have something in mind?</h3>

      <p>
        I'm open to internship opportunities,
        collaborations, and conversations about
        technology and meaningful projects.
      </p>

      <p>
        Whether you have an opportunity to share
        or simply want to connect, I'd love to hear
        from you!
      </p>

      <a href="#contact-links" className="contact-cta">
        Get in Touch ↗
      </a>

    </div>

    {/* RIGHT: CONTACT LINKS */}
    <div id="contact-links" className="contact-links">

<a
  href="mailto:sheriegrace.lupoz@g.msuiit.edu.ph"
  className="contact-card"
>
  <LuMail aria-hidden="true" />

  <div className="contact-card-content">
    <strong>Email</strong>
    <span>Send me a message</span>
  </div>

  <span className="contact-arrow">↗</span>
</a>


      <a
        href="https://github.com/Rie07"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
      >
        <FaGithub aria-hidden="true" />

        <div className="contact-card-content">
          <strong>GitHub</strong>
          <span>Explore my projects</span>
        </div>

        <span className="contact-arrow">↗</span>
      </a>

      <a
        href="https://www.linkedin.com/in/sherie-grace-lupoz-bb48452a1/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
      >
        <FaLinkedin aria-hidden="true" />

        <div className="contact-card-content">
          <strong>LinkedIn</strong>
          <span>Let's connect professionally</span>
        </div>

        <span className="contact-arrow">↗</span>
      </a>

      <div className="contact-card">
        <LuMapPin aria-hidden="true" />

        <div className="contact-card-content">
          <strong>Location</strong>
          <span>Philippines</span>
        </div>
      </div>

    </div>

  </div>

  {/* FOOTER */}
  <footer className="portfolio-footer">
    <span className="footer-brand">sherie.</span>
    <p>Built with React & a little curiosity ✦</p>
    <span>© {new Date().getFullYear()}</span>
  </footer>

</section>

{selectedCertificate && (
  <div
    className="certificate-modal-overlay"
    onClick={() => setSelectedCertificate(null)}
  >
    <div
      className="certificate-modal"
      role="dialog"
      aria-modal="true"
      aria-label={selectedCertificate.title}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="certificate-modal-header">
        <div>
          <span className="certificate-modal-label">
            CERTIFICATE PREVIEW
          </span>
          <h2>{selectedCertificate.title}</h2>
        </div>

        <button
          type="button"
          className="certificate-modal-close"
          aria-label="Close certificate preview"
          onClick={() => setSelectedCertificate(null)}
        >
          ×
        </button>
      </div>

      <div className="certificate-modal-body">
        <img
          src={selectedCertificate.file}
          alt={selectedCertificate.title}
        />
      </div>

      <div className="certificate-modal-footer">
        <span>{selectedCertificate.issuer}</span>

        <a
          href={selectedCertificate.file}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-fullsize"
        >
          Open Full Size ↗
        </a>
      </div>
    </div>
  </div>
)}

{/* RESUME PREVIEW POPUP */}
<dialog
  ref={resumeDialogRef}
  className="resume-dialog"
  aria-labelledby="resume-dialog-title"
  onClose={() => {
    document.body.style.overflow = ''
  }}
>
  <div className="resume-dialog-header">
    <div>
      <span className="resume-dialog-label">
        DOCUMENT PREVIEW
      </span>
      <h2 id="resume-dialog-title">My Resume</h2>
    </div>

    <button
      type="button"
      className="resume-dialog-close"
      aria-label="Close resume preview"
      onClick={() => resumeDialogRef.current?.close()}
    >
      ×
    </button>
  </div>

<div className="resume-dialog-body">
  <div className="resume-pages">
    <Document
      file={`${import.meta.env.BASE_URL}resume.pdf`}
      onLoadSuccess={({ numPages }) => {
        setResumePageCount(numPages)
      }}
      loading={<p>Loading resume...</p>}
      error={<p>Unable to load resume.</p>}
    >
      {Array.from(
        { length: resumePageCount },
        (_, index) => (
          <div
            className="resume-page"
            key={index}
          >
            <Page
              pageNumber={index + 1}
              width={Math.min(560, window.innerWidth - 90)}
            />

            <span className="resume-page-number">
              {index + 1} / {resumePageCount}
            </span>
          </div>
        )
      )}
    </Document>
  </div>
</div>

  <div className="resume-dialog-footer">
    <span>Resume • PDF</span>

    <div className="resume-dialog-actions">
      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-fullsize"
      >
        Open Full Size ↗
      </a>

      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download="Sherie_Grace_Lupoz_Resume.pdf"
        className="resume-download"
      >
        Download PDF ↓
      </a>
    </div>
  </div>
</dialog>

    </>
  )
}

export default App
