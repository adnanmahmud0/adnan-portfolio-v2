"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const projects = [
  { title: "JBay", eyebrow: "Marketplace · Jamaica", url: "https://jbay.shop/", image: "/project-jbay.png", description: "$10,000 production marketplace for vehicles and auto parts, connecting buyers and sellers through WhatsApp Business and seller locations.", metric: "Web + mobile delivery" },
  { title: "Sneaqers", eyebrow: "E-commerce automation", url: "https://sneaqers.nl/", image: "/project-sneaqers.png", description: "Custom administration and affiliate automation for a 3,730-product catalog, processing 1,000 products in approximately 1.23 minutes.", metric: "3,730 products" },
  { title: "Bella Car Wash", eyebrow: "Web + iOS workflow", url: "https://apps.apple.com/au/app/bella-car-wash/id6757344870", image: "/project-bella.svg", description: "Automated purchase, code scanning, station access, vehicle confirmation, wash activation, live progress and payment-hold workflows.", metric: "End-to-end automation" },
  { title: "Property Listing Validation", eyebrow: "Confidential UK client", image: "/project-property.svg", description: "Cross-platform scraping and validation that flags inaccurate listings, notifies contributors and manages connected Meta page content.", metric: "Windows PWA" },
  { title: "Full-Stack Turborepo Starter", eyebrow: "Developer platform", url: "https://github.com/adnanmahmud0/fullstack-turborepo-starter-kit", image: "/project-starter.svg", description: "Frontend, backend and mobile starters with database variants, Flutter and React Native options, CI/CD and reusable AI instructions.", metric: "Open source toolkit" },
  { title: "Tabha", eyebrow: "Travel affiliate platform", url: "https://tabha.net/", image: "/project-tabha.png", description: "Next.js travel platform with Travelpayouts integration, AI-assisted affiliate workflows, content administration and SEO tooling.", metric: "Next.js + Travelpayouts" },
];

const skillGroups = [
  ["Frontend", "React.js", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui"],
  ["Backend", "Express.js", "Python", "Flask", "JWT authentication"],
  ["Mobile & desktop", "React Native", "Flutter", "Electron.js", "Progressive Web Apps"],
  ["Data & DevOps", "MongoDB", "PostgreSQL", "MySQL", "Prisma", "Docker", "CI/CD"],
];

const experience = [
  { dates: "Jul 2025 — Present", company: "Sparktech Agency", role: "Executive Full Stack Developer · Team Lead · Project Manager", text: "Progressed from Trainee to Junior and then Executive Full Stack Developer, leading frontend and full-stack delivery while coordinating implementation priorities." },
  { dates: "Sep 2024 — Sep 2025", company: "Empower NextGen Ltd.", role: "Lead Creative Officer · Part-time", text: "Led creative direction, visual consistency and hands-on design support; served as a judge for Pro Skill Battle 2025." },
  { dates: "Jan 2023 — Jan 2025", company: "Q-bit Learning", role: "Frontend Developer · Part-time", text: "Contributed to frontend development and the organization’s learning-management website." },
  { dates: "Jan 2022 — Dec 2022", company: "Spark 71 Tech", role: "WordPress Developer · Part-time", text: "Developed and maintained WordPress websites for client projects." },
];

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: .7 } };

export default function Portfolio() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const portraitY = useTransform(scrollYProgress, [0, .22], [0, reduceMotion ? 0 : 70]);

  return <main>
    <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Md. Adnan Mahmud, home">AM<span>.</span></a>
      <div className="nav-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a></div>
      <a className="nav-resume" href="/Md-Adnan-Mahmud-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={15} /></a>
    </nav>

    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-copy" initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .85, delay: .15 }}>
        <p className="eyebrow"><span /> Available for selected projects</p>
        <h1><span>SOFTWARE</span><span>ENGINEER</span></h1>
        <p className="hero-lede">Building production web, mobile, automation and developer-platform solutions for teams and international clients.</p>
        <div className="hero-actions"><a className="button primary" href="#work">Explore work <ArrowDownRight size={18} /></a><a className="button ghost" href="/Md-Adnan-Mahmud-Resume.pdf" target="_blank" rel="noopener noreferrer">Open résumé <Download size={17} /></a></div>
      </motion.div>
      <div className="portrait-stage"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="portrait-glow" /><motion.div style={{ y: portraitY }} className="portrait-wrap" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .25 }}><Image src="/assest/adnan-hero-hd.png" alt="Md. Adnan Mahmud, software engineer" width={1024} height={1536} priority /></motion.div><div className="floating-tag tag-one">React · Next.js</div><div className="floating-tag tag-two">Automation · DevOps</div></div>
      <motion.aside className="hero-aside" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .55 }}><p>Full Stack · Frontend<br />Automation · DevOps</p><div className="hero-stat"><strong>3+</strong><span>years across frontend and full-stack roles</span></div><div className="hero-stat"><strong>10+</strong><span>production and client platforms delivered</span></div></motion.aside>
      <p className="hero-location"><MapPin size={15} /> Dhaka, Bangladesh</p>
    </section>

    <section className="marquee" aria-label="Areas of expertise"><div>FULL STACK • FRONTEND • AUTOMATION • MOBILE • DEVOPS • PRODUCT DELIVERY • FULL STACK • FRONTEND • AUTOMATION • MOBILE • DEVOPS • PRODUCT DELIVERY •</div></section>

    <section className="section" id="work"><motion.div {...reveal} className="section-heading"><p className="eyebrow"><span /> Selected work</p><h2>Products that moved<br />from idea to impact.</h2><p>Production marketplaces, workflow automation, mobile services and reusable engineering systems.</p></motion.div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><div className="project-media"><Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 800px) 100vw, 50vw" unoptimized={project.image.startsWith("http")} /></div><div className="project-body"><p>{project.eyebrow}</p><h3>{project.title}</h3><span className="metric">{project.metric}</span><p className="project-description">{project.description}</p>{project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer">View project <ArrowUpRight size={17} /></a> : null}</div></article>)}</div></section>

    <section className="section split-section" id="experience"><motion.div {...reveal} className="sticky-heading"><p className="eyebrow"><span /> Experience</p><h2>Progress built<br />through delivery.</h2><p>Engineering, coordination and creative leadership across product teams.</p></motion.div><div className="timeline">{experience.map((item, index) => <article key={item.company} className="timeline-item"><span className="timeline-number">0{index + 1}</span><p>{item.dates}</p><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.text}</p></article>)}</div></section>

    <section className="section" id="about"><motion.div {...reveal} className="about-grid"><div><p className="eyebrow"><span /> About</p><h2>I turn complex requirements into practical, maintainable products.</h2></div><div className="about-copy"><p>Software engineer with more than three years across frontend and full-stack roles, delivering production applications, marketplace platforms, workflow automation, data-validation systems and developer tooling.</p><p>I stay close to both the product and the implementation—planning delivery, guiding visual quality and contributing hands-on across interfaces, backend workflows and deployment.</p></div></motion.div><div className="skills-grid">{skillGroups.map(([title, ...skills]) => <div className="skill-card" key={title}><span>{title}</span>{skills.map(skill => <p key={`${title}-${skill}`}>{skill}</p>)}</div>)}</div></section>

    <section className="section education-section"><motion.div {...reveal} className="section-heading compact"><p className="eyebrow"><span /> Education & leadership</p><h2>Learning, leading and contributing.</h2></motion.div><div className="education-grid"><article><span>2026 — 2027</span><h3>MS in Management Information Systems</h3><p>Daffodil International University · Expected April 2027</p></article><article><span>2021 — 2025</span><h3>BSc in Computer Science</h3><p>Daffodil International University</p></article><article><span>Community</span><h3>Research & student leadership</h3><p>Health Information Reach Lab · DIU Computer Programming Club · Prothom Alo Bondhushava</p></article></div></section>

    <section className="contact" id="contact"><motion.div {...reveal}><p className="eyebrow"><span /> Let’s build something useful</p><h2>Have a product, workflow<br />or platform in mind?</h2><a href="mailto:adnan@adnanmahmud.me" className="contact-link">Start a conversation <ArrowUpRight /></a></motion.div></section>

    <footer><div><a className="footer-brand" href="#top">MD. ADNAN MAHMUD</a><p>Software Engineer · Dhaka, Bangladesh</p></div><div className="footer-links"><a href="mailto:adnan@adnanmahmud.me"><Mail size={16} /> Email</a><a href="tel:+8801327228777"><Phone size={16} /> Phone</a><a href="https://github.com/adnanmahmud0" target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a><a href="https://www.linkedin.com/in/adnanmahmud99/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="/Md-Adnan-Mahmud-Resume.pdf" target="_blank" rel="noopener noreferrer"><BriefcaseBusiness size={16} /> Résumé</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Md. Adnan Mahmud</span><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
