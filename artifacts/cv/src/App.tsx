import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download, 
  Code2, Database, Cloud, Wrench, Users, Terminal
} from "lucide-react";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

// Data
const skills = {
  "Programming Languages": ["C#", "Java", "Python"],
  "Backend & APIs": ["ASP.NET Web API", "REST APIs", "SOAP/XML", "gRPC", "JWT Authentication", "API Documentation", "Third-Party API Integration"],
  "Databases & Caching": ["MySQL", "MongoDB", "Redis"],
  "Cloud, AI & Concepts": ["AWS", "RAG (Retrieval-Augmented Generation)", "Data Structures & Algorithms"],
  "Tools & Practices": ["Git", "Log Management", "Error Handling", "Caching", "Polling", "Cron Jobs", "Debugging", "Production Support"],
  "Soft Skills": ["Client Communication", "Team Collaboration", "Mentoring", "Leadership", "Problem Solving"]
};

const experience = [
  {
    company: "Corefares Consulting Private Limited",
    role: "Software Engineer",
    period: "Jan 2025 – Present",
    location: "Bengaluru, India",
    points: [
      "Integrated TravelFusion SOAP/XML APIs for flight search, pricing, and booking, adding error handling, caching, and polling to improve reliability across booking workflows.",
      "Designed and developed Xtream, the company's core RESTful API platform, enabling third-party integrations with JWT-based authentication and clear API documentation.",
      "Built Developer Corner with API usage guides and implementation resources to improve partner onboarding and reduce integration friction.",
      "Implemented MongoDB-based log management with compression, full-text search, and dynamic decompression to support faster diagnostics and production issue analysis.",
      "Enhanced backend workflows for Branded Fares and Technical Stops while optimizing existing services for performance, scalability, and system stability.",
      "Supported clients during integration, UAT, and go-live by explaining API workflows, request/response structures, authentication, and troubleshooting production issues."
    ]
  },
  {
    company: "Trinetium Tech Private Limited",
    role: "Associate Software Engineer",
    period: "Jun 2024 – Dec 2024",
    location: "Bengaluru, India",
    points: [
      "Developed and integrated backend services to enhance application functionality and improve user experience.",
      "Identified, debugged, and resolved codebase issues, improving application performance, stability, and reliability.",
      "Implemented a flight reconciliation cron job to streamline data processing and reduce manual reconciliation effort."
    ]
  }
];

const education = [
  {
    degree: "MCA",
    institution: "Birla Institute of Technology",
    score: "80.55%",
    period: "Aug 2022 – Jun 2024"
  },
  {
    degree: "BCA",
    institution: "Maharshi Dayanand University",
    score: "71.73%",
    period: "Aug 2018 – Jun 2021"
  }
];

const certifications = [
  "Java with DSA, Spring Framework, and Spring Boot — PwSkills",
  "Communication Skills — TCS iON"
];

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

function Home() {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.8]);
  const headerBlur = useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(12px)"]);

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      
      {/* Header / Navbar */}
      <motion.header 
        style={{ opacity: headerOpacity, backdropFilter: headerBlur }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80"
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono text-sm font-semibold tracking-tight text-primary">
            AHL<span className="text-foreground">AWAT</span>
          </div>
          <button className="flex items-center gap-2 text-xs font-mono bg-primary/10 text-primary px-4 py-2 rounded-full hover:bg-primary/20 transition-colors border border-primary/20">
            <Download size={14} />
            <span>DOWNLOAD CV</span>
          </button>
        </div>
      </motion.header>

      <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        
        {/* Hero Section */}
        <section className="mb-24">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-foreground">
              Abhishek <br/> Ahlawat<span className="text-primary">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed mb-8">
              Software Engineer specializing in <span className="text-foreground font-medium">backend APIs</span> and travel-tech integrations.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm font-mono text-muted-foreground mb-12">
              <a href="mailto:abhishekahlawatjeron@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} /> abhishekahlawatjeron@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <Phone size={16} /> 7497846599
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Bengaluru, Karnataka
              </span>
            </div>

            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 bg-card border border-border px-5 py-2.5 rounded-md hover:border-primary/50 hover:bg-secondary transition-all group">
                <Linkedin size={18} className="group-hover:text-primary transition-colors" />
                <span className="font-medium text-sm">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 bg-card border border-border px-5 py-2.5 rounded-md hover:border-primary/50 hover:bg-secondary transition-all group">
                <Github size={18} className="group-hover:text-primary transition-colors" />
                <span className="font-medium text-sm">GitHub</span>
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Summary */}
        <section className="mb-24">
          <FadeIn>
            <div className="grid md:grid-cols-[1fr_3fr] gap-8">
              <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider pt-1">About</h2>
              <div className="text-lg text-foreground/80 leading-relaxed font-light">
                <p>
                  Software Developer with experience building backend APIs and travel technology integrations for flight search, pricing, booking, reconciliation, and client onboarding workflows. Skilled in C#, Java, Python, ASP.NET Web API, REST APIs, SOAP/XML, gRPC, JWT authentication, MongoDB logging, caching, polling, and production troubleshooting. Strong in API design, third-party integrations, technical documentation, client communication, and improving backend reliability and scalability.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Experience */}
        <section className="mb-24">
          <FadeIn>
            <div className="grid md:grid-cols-[1fr_3fr] gap-8">
              <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider pt-1">Experience</h2>
              <div className="relative border-l border-border/50 pl-8 ml-2 md:ml-0 md:pl-8 space-y-16">
                
                {experience.map((job, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-[3px] border-background bg-primary shadow-[0_0_0_2px_rgba(0,212,255,0.2)]" />
                    
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mt-1">
                        <span className="font-medium text-primary">{job.company}</span>
                        <span className="text-muted-foreground/50">•</span>
                        <span className="text-muted-foreground font-mono text-xs">{job.period}</span>
                        <span className="text-muted-foreground/50">•</span>
                        <span className="text-muted-foreground">{job.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {job.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-muted-foreground leading-relaxed flex gap-3">
                          <span className="text-primary/50 mt-1.5 flex-shrink-0">
                            <Terminal size={14} />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

              </div>
            </div>
          </FadeIn>
        </section>

        {/* Skills */}
        <section className="mb-24">
          <FadeIn>
            <div className="grid md:grid-cols-[1fr_3fr] gap-8">
              <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider pt-1">Technical Skills</h2>
              <div className="space-y-8">
                {Object.entries(skills).map(([category, items], idx) => {
                  
                  const icons: Record<string, React.ReactNode> = {
                    "Programming Languages": <Code2 size={16} />,
                    "Backend & APIs": <ExternalLink size={16} />,
                    "Databases & Caching": <Database size={16} />,
                    "Cloud, AI & Concepts": <Cloud size={16} />,
                    "Tools & Practices": <Wrench size={16} />,
                    "Soft Skills": <Users size={16} />
                  };

                  return (
                    <div key={idx}>
                      <h3 className="text-base font-semibold mb-4 flex items-center gap-2 text-foreground/90">
                        <span className="text-primary">{icons[category]}</span>
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill, sIdx) => (
                          <motion.span 
                            key={sIdx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + (sIdx * 0.03), duration: 0.3 }}
                            className="bg-secondary/50 border border-border/50 text-foreground/80 px-3 py-1.5 rounded-md text-xs font-mono hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Education & Certs */}
        <section className="mb-24">
          <FadeIn>
            <div className="grid md:grid-cols-[1fr_3fr] gap-8">
              <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider pt-1">Education & Certs</h2>
              
              <div className="grid sm:grid-cols-2 gap-8">
                
                {/* Education */}
                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <div key={idx} className="bg-card border border-border/50 p-5 rounded-lg hover:border-primary/30 transition-colors">
                      <h3 className="font-bold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-sm text-primary mb-3">{edu.institution}</p>
                      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                        <span>{edu.period}</span>
                        <span className="bg-background px-2 py-1 rounded text-foreground">{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="space-y-4">
                  {certifications.map((cert, idx) => {
                    const [title, issuer] = cert.split(" — ");
                    return (
                      <div key={idx} className="bg-card border border-border/50 p-5 rounded-lg hover:border-primary/30 transition-colors">
                        <h3 className="font-medium text-sm text-foreground mb-2 leading-relaxed">{title}</h3>
                        <p className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-primary/40" />
                          {issuer}
                        </p>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </FadeIn>
        </section>
        
        {/* Footer */}
        <footer className="border-t border-border/40 pt-8 pb-12 mt-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono text-muted-foreground">
              © {new Date().getFullYear()} Abhishek Ahlawat.
            </p>
            <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
              <span>System Status:</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Operational
              </span>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
