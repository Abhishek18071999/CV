import { useEffect, useMemo, useState, type PointerEvent } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ExternalLink,
  Download,
  Code2,
  Database,
  Cloud,
  Wrench,
  Users,
  Terminal,
  ShieldCheck,
  Layers,
} from "lucide-react";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const highlights = [
  { value: "2x", label: "Faster API response time" },
  { value: "40+", label: "APIs designed for revenue-critical backend workflows" },
  { value: "100%", label: "On-time delivery for product launches" },
];

const projects = [
  {
    title: "Partner Integration Engine",
    description:
      "Built a high-availability API platform for partner integrations, pricing orchestration, and resilient backend message flows.",
    impact: ["Reduced failed retries by 72%", "Enabled 95% API uptime during peak demand"],
    tags: ["API architecture", "SOAP/XML", "Caching", "Resiliency"],
  },
  {
    title: "Developer Partner Portal",
    description:
      "Designed a self-service portal for third-party integrations, documentation, and onboarding that accelerated activation by 35%.",
    impact: ["Improved partner activation speed", "Cut support tickets by 28%"],
    tags: ["API docs", "Partner enablement", "Developer experience"],
  },
  {
    title: "Operations & Monitoring Platform",
    description:
      "Implemented logging, observability, and reconciliation pipelines to support rapid diagnostics and production stability.",
    impact: ["Shortened incident response time", "Delivered dependable reconciliation automation"],
    tags: ["MongoDB", "Logging", "Cron jobs", "Production support"],
  },
];

const skills = {
  "Programming Languages": ["C#", "Java", "Python"],
  "Backend & APIs": [
    "ASP.NET Web API",
    "REST APIs",
    "SOAP/XML",
    "gRPC",
    "JWT Authentication",
    "API Documentation",
    "Third-Party API Integration",
  ],
  "Databases & Caching": ["MySQL", "MongoDB", "Redis", "Caching"],
  "Cloud & Infrastructure": [
    "AWS",
    "RAG (Retrieval-Augmented Generation)",
    "Data Structures & Algorithms",
    "Production support",
  ],
  "Tools & Practices": [
    "Git",
    "Log Management",
    "Error Handling",
    "Caching",
    "Polling",
    "Cron Jobs",
    "Debugging",
    "Observability",
  ],
  "Soft Skills": ["Client Communication", "Team Collaboration", "Mentoring", "Leadership", "Problem Solving"],
};

const experience = [
  {
    company: "Corefares Consulting Private Limited",
    role: "Software Engineer",
    period: "Jan 2025 – Present",
    location: "Bengaluru, India",
    result: "Modernized API workflows for marketplace connectivity, reliability, and partner onboarding.",
    bullets: [
      "Designed and launched the Xtream API platform for flight search, pricing, and bookings.",
      "Created a Developer Corner with docs, examples, and integration guides to speed onboarding.",
      "Built MongoDB-driven logging and diagnostics to improve production observability.",
    ],
  },
  {
    company: "Trinetium Tech Private Limited",
    role: "Associate Software Engineer",
    period: "Jun 2024 – Dec 2024",
    location: "Bengaluru, India",
    result: "Delivered backend automation and reconciliation flows to improve data accuracy and service reliability.",
    bullets: [
      "Built backend services to improve application performance and reliability.",
      "Automated flight reconciliation workflows to reduce manual work.",
      "Resolved production issues and improved stability for customer-facing services.",
    ],
  },
];

const sectionMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
};

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [reduceMotion, setReduceMotion] = useState(false);
  const scrollY = useMotionValue(0);
  const progress = useTransform(scrollY, [0, 1], ["0%", "100%"]);
  const [countersActive, setCountersActive] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, systems: 0, partners: 0 });

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("personal-portfolio-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(motionQuery.matches);
    const motionHandler = () => setReduceMotion(motionQuery.matches);
    motionQuery.addEventListener("change", motionHandler);
    return () => motionQuery.removeEventListener("change", motionHandler);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    window.localStorage.setItem("personal-portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const progressValue = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      scrollY.set(Math.min(1, Math.max(0, progressValue)));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  useEffect(() => {
    if (!countersActive) return;
    const target = { projects: 3, systems: 24, partners: 12 };
    const interval = window.setInterval(() => {
      setCounts((prev) => ({
        projects: Math.min(target.projects, prev.projects + 1),
        systems: Math.min(target.systems, prev.systems + 2),
        partners: Math.min(target.partners, prev.partners + 1),
      }));
    }, 80);
    return () => window.clearInterval(interval);
  }, [countersActive]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  const skillGroups = useMemo(
    () => [
      {
        title: "Backend & APIs",
        icon: <Layers size={18} />,
        items: skills["Backend & APIs"],
      },
      {
        title: "Data & Observability",
        icon: <Database size={18} />,
        items: skills["Databases & Caching"],
      },
      {
        title: "Cloud & Infrastructure",
        icon: <Cloud size={18} />,
        items: skills["Cloud & Infrastructure"],
      },
      {
        title: "Practices & Ops",
        icon: <ShieldCheck size={18} />,
        items: skills["Tools & Practices"],
      },
    ],
    [],
  );

  const setMousePosition = (event: PointerEvent<HTMLDivElement>) => {
    setMouse({ x: event.clientX, y: event.clientY });
  };

  return (
    <TooltipProvider>
      <div
        onPointerMove={setMousePosition}
        className="relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground"
      >
        <motion.div
          style={{ width: progress }}
          className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-primary to-secondary"
        />

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ x: mouse.x * 0.02, y: mouse.y * 0.02 }}
            className="absolute left-10 top-12 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
          />
          <motion.div
            animate={{ x: mouse.x * -0.015, y: mouse.y * -0.01 }}
            className="absolute right-0 top-28 h-80 w-80 rounded-full bg-secondary/15 blur-3xl"
          />
          <motion.div
            animate={{ x: mouse.x * 0.01, y: mouse.y * -0.02 }}
            className="absolute left-1/2 top-36 h-56 w-56 -translate-x-1/2 rounded-full bg-foreground/10 blur-3xl"
          />
        </div>

        <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <motion.a
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              href="#about"
              className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground hover:text-foreground transition-colors"
            >
              ABHISHEK
            </motion.a>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -2, scale: 1.04 }}
                  className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={!reduceMotion ? { y: -2, scale: 1.02 } : {}}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-10 items-center justify-center rounded-full border border-border/70 bg-card px-4 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                {theme === "dark" ? "Light" : "Dark"}
              </motion.button>
              <motion.a
                whileHover={!reduceMotion ? { y: -2, scale: 1.02 } : {}}
                whileTap={{ scale: 0.98 }}
                href="/Abhishek_Resume.pdf"
                download
                className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition"
              >
                <Download size={16} />
                Resume
              </motion.a>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 pb-24">
          <section id="about" className="grid gap-10 pt-16 md:grid-cols-[1.35fr_0.95fr] md:items-end">
            <motion.div initial="hidden" animate="visible" variants={sectionMotion} className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-primary shadow-sm shadow-primary/10">
                Backend architecture with product-grade polish
              </div>

              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Abhishek Ahlawat — Software Engineer</p>
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-3xl text-5xl font-semibold leading-tight text-foreground sm:text-6xl md:text-7xl"
                >
                  Architecting premium backend platforms, APIs, and integrations with 
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">startup-grade polish</span>.
                </motion.h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground/90 sm:text-xl">
                  I create reliable engineering foundations and elevated developer experiences that make teams faster, safer, and more confident.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    whileHover={!reduceMotion ? { y: -5, scale: 1.02 } : {}}
                    className="group rounded-[2rem] border border-border/60 bg-card p-6 shadow-[0_24px_80px_-56px_rgba(0,112,255,0.18)] transition-transform"
                  >
                    <p className="text-3xl font-semibold text-foreground">{item.value}</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                onViewportEnter={() => setCountersActive(true)}
                className="grid gap-4 sm:grid-cols-3"
              >
                <motion.div
                  whileHover={!reduceMotion ? { y: -4, scale: 1.01 } : {}}
                  className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-[0_24px_80px_-56px_rgba(56,189,248,0.18)] transition-transform"
                >
                  <p className="text-4xl font-semibold text-foreground">{counts.projects}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.35em] text-muted-foreground">Product launches</p>
                </motion.div>
                <motion.div
                  whileHover={!reduceMotion ? { y: -4, scale: 1.01 } : {}}
                  className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-[0_24px_80px_-56px_rgba(139,92,246,0.18)] transition-transform"
                >
                  <p className="text-4xl font-semibold text-foreground">{counts.systems}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.35em] text-muted-foreground">Systems & APIs</p>
                </motion.div>
                <motion.div
                  whileHover={!reduceMotion ? { y: -4, scale: 1.01 } : {}}
                  className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-[0_24px_80px_-56px_rgba(16,185,129,0.18)] transition-transform"
                >
                  <p className="text-4xl font-semibold text-foreground">{counts.partners}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.35em] text-muted-foreground">Partners supported</p>
                </motion.div>
              </motion.div>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={!reduceMotion ? { y: -3, scale: 1.02 } : {}}
                  whileTap={{ scale: 0.97 }}
                  href="mailto:abhishekahlawatjeron@gmail.com"
                  className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-foreground/10 transition"
                >
                  Hire me
                </motion.a>
                <motion.a
                  whileHover={!reduceMotion ? { y: -2, scale: 1.02 } : {}}
                  href="https://www.linkedin.com/in/abhishek-ahlawat-2350ab232"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm font-medium text-muted-foreground transition hover:text-primary"
                >
                  LinkedIn →
                </motion.a>
                <motion.a
                  whileHover={!reduceMotion ? { y: -2, scale: 1.02 } : {}}
                  href="https://github.com/Abhishek18071999"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm font-medium text-muted-foreground transition hover:text-primary"
                >
                  GitHub →
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionMotion}
              className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card/95 p-8 shadow-[0_90px_160px_-90px_rgba(0,112,255,0.25)] backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/10 to-transparent" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Impact</p>
                    <h2 className="mt-4 text-3xl font-semibold text-foreground">Trusted for product-critical systems.</h2>
                  </div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-sm shadow-primary/10">
                    <Users size={20} />
                  </div>
                </div>

                <div className="grid gap-4">
                  <motion.div
                    whileHover={!reduceMotion ? { y: -3 } : {}}
                    className="rounded-[2rem] border border-border/50 bg-background/80 p-6"
                  >
                    <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Architecture</p>
                    <p className="mt-3 text-base leading-7 text-foreground/85">
                      Built strong backend foundations with observability, resilience, and product confidence.
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={!reduceMotion ? { y: -3 } : {}}
                    className="rounded-[2rem] border border-border/50 bg-background/80 p-6"
                  >
                    <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Delivery</p>
                    <p className="mt-3 text-base leading-7 text-foreground/85">
                      Delivered launch-ready workflows that reduce risk and make operations smoother.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="experience" className="space-y-10 pt-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionMotion} className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-primary">Experience</p>
              <h2 className="text-4xl font-semibold text-foreground">Leadership through execution.</h2>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                I design backend products with clear value for partners, operations, and business stakeholders. Every project is built to be measurable, maintainable, and product-led.
              </p>
            </motion.div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.article
                  key={item.company}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={sectionMotion}
                  transition={{ delay: index * 0.08, ...sectionMotion.transition }}
                  whileHover={!reduceMotion ? { y: -6, scale: 1.01 } : {}}
                  whileTap={{ scale: 0.995 }}
                  className="group overflow-hidden rounded-[2rem] border border-border/60 bg-card p-8 shadow-[0_28px_100px_-80px_rgba(0,112,255,0.22)] transition-transform"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">{item.period}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-foreground">{item.role}</h3>
                      <p className="text-sm text-primary mt-2">{item.company} · {item.location}</p>
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                      Impact
                    </span>
                  </div>

                  <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">{item.result}</p>

                  <ul className="mt-6 space-y-4">
                    {item.bullets.map((point, idx) => (
                      <li key={idx} className="flex gap-4 text-muted-foreground">
                        <span className="mt-1 text-primary">
                          <Terminal size={16} />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="projects" className="space-y-10 pt-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionMotion} className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-primary">Selected work</p>
              <h2 className="text-4xl font-semibold text-foreground">Projects that landed trusted outcomes.</h2>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={sectionMotion}
                  transition={{ delay: index * 0.08, ...sectionMotion.transition }}
                  whileHover={!reduceMotion ? { y: -6, scale: 1.01 } : {}}
                  whileTap={{ scale: 0.995 }}
                  className="group rounded-[2rem] border border-border/60 bg-card p-7 shadow-xl shadow-primary/5 transition-transform hover:border-primary/40"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Featured</p>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      <ExternalLink size={14} />
                      Backend
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description}</p>

                  <div className="mt-6 space-y-3 text-sm text-foreground/80">
                    {project.impact.map((impact, idx) => (
                      <p key={idx} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                        {impact}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border/50 bg-background/80 px-3 py-1 text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="skills" className="space-y-10 pt-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionMotion} className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-primary">Capabilities</p>
              <h2 className="text-4xl font-semibold text-foreground">A specialized toolkit for backend product growth.</h2>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={sectionMotion}
                  transition={{ delay: index * 0.06, ...sectionMotion.transition }}
                  whileHover={!reduceMotion ? { y: -4, scale: 1.01 } : {}}
                  whileTap={{ scale: 0.995 }}
                  className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-xl shadow-primary/5 transition-transform"
                >
                  <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                      {group.icon}
                    </span>
                    {group.title}
                  </div>
                  <div className="grid gap-3">
                    {group.items.map((item) => (
                      <div key={item} className="rounded-3xl border border-border/50 bg-background/80 px-4 py-3 text-sm text-foreground/80">
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="contact" className="space-y-10 pt-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sectionMotion} className="rounded-[3rem] border border-border/60 bg-primary/5 p-10 shadow-[0_60px_120px_-70px_rgba(28,81,255,0.18)]">
              <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-primary">Ready to collaborate</p>
                  <h2 className="mt-4 text-4xl font-semibold text-foreground">Let's build the backend experience that powers your next launch.</h2>
                </div>
                <motion.div whileHover={!reduceMotion ? { y: -4 } : {}} className="flex flex-col gap-4 rounded-[2rem] bg-card p-8 text-foreground shadow-xl shadow-primary/5">
                  <p className="text-sm text-muted-foreground">Reach out and I’ll respond within one business day.</p>
                  <a
                    href="mailto:abhishekahlawatjeron@gmail.com"
                    className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background transition hover:bg-foreground/90"
                  >
                    Contact via email
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </main>

        <footer className="border-t border-border/50 bg-background/90 py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Abhishek Ahlawat — Built for recruiters, hiring managers, and product teams.
        </footer>
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
