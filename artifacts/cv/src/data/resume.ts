export const profile = {
  firstName: "Abhishek",
  lastName: "Ahlawat",
  role: "Software Engineer",
  focus: "Backend APIs & travel-tech integrations",
  location: "Bengaluru, India",
  timezone: "Asia/Kolkata",
  email: "abhishekahlawatjeron@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhishek-ahlawat-2350ab232",
  github: "https://github.com/Abhishek18071999",
  summary:
    "Software developer building backend APIs and travel technology integrations across flight search, pricing, booking, and reconciliation — with end-to-end integrations for TBO, TravelFusion, AerTicket, Atlas, and Sabre.",
};

export const navSections = [
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const stats = [
  { value: "2+", label: "Years shipping production backends" },
  { value: "3", label: "Languages — C#, Java, Python" },
  { value: "5", label: "Travel supplier & GDS integrations" },
  { value: "80.55%", label: "MCA, Birla Institute of Technology" },
];

export type Bullet = { lead: string; text: string };

export type Role = {
  company: string;
  role: string;
  period: string;
  start: string;
  location: string;
  current?: boolean;
  bullets: Bullet[];
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "Corefares Consulting",
    role: "Software Engineer",
    period: "Jan 2025 — Present",
    start: "2025",
    location: "Bengaluru, India",
    current: true,
    bullets: [
      {
        lead: "Supplier integrations",
        text: "Designed and implemented end-to-end integrations with TBO, TravelFusion, AerTicket, and Atlas APIs (SOAP/XML/JSON) for flight search, pricing, and booking — with caching, polling, and resilient error handling for high-availability booking workflows.",
      },
      {
        lead: "Sabre Fare Rules & Reprice",
        text: "Added Fare Rules and Reprice features to the Sabre integration, enabling accurate fare validation and up-to-date pricing during the booking flow.",
      },
      {
        lead: "Xtream API platform",
        text: "Designed and developed the company's core RESTful API platform, enabling third-party and OTA integrations with JWT-based authentication and clear API documentation.",
      },
      {
        lead: "Developer Corner",
        text: "Built API usage guides and implementation resources to improve partner onboarding and reduce integration friction.",
      },
      {
        lead: "Log management",
        text: "Implemented MongoDB-based logging with compression, full-text search, and dynamic decompression for faster diagnostics and production issue analysis.",
      },
      {
        lead: "Production reliability",
        text: "Identified and resolved production issues across booking and pricing workflows, improving system stability and reducing recurring incidents.",
      },
      {
        lead: "Branded Fares & Technical Stops",
        text: "Enhanced backend workflows while optimizing existing services for performance, scalability, and system stability.",
      },
      {
        lead: "Client go-lives",
        text: "Supported clients through integration, UAT, and go-live — explaining API workflows, request/response structures, authentication, and troubleshooting production issues.",
      },
      {
        lead: "Mentoring",
        text: "Trained junior engineers on system architecture and integration workflows, helping them ramp up quickly on the codebase and API design patterns.",
      },
    ],
    stack: ["C#", "ASP.NET Web API", "REST", "SOAP/XML", "JWT", "MongoDB", "Redis", "Sabre"],
  },
  {
    company: "Trinetium Tech",
    role: "Associate Software Engineer",
    period: "Jun 2024 — Dec 2024",
    start: "2024",
    location: "Bengaluru, India",
    bullets: [
      {
        lead: "Backend services",
        text: "Developed and integrated backend services to enhance application functionality and improve user experience.",
      },
      {
        lead: "Stability",
        text: "Identified, debugged, and resolved codebase and production issues, improving application performance, stability, and reliability.",
      },
      {
        lead: "Flight reconciliation",
        text: "Implemented a reconciliation cron job to streamline data processing and reduce manual reconciliation effort.",
      },
    ],
    stack: ["Backend services", "Cron jobs", "Debugging", "MySQL"],
  },
];

export type Work = {
  id: string;
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  visual?: "api" | "flow" | "logs";
  span: string;
};

export const work: Work[] = [
  {
    id: "xtream",
    title: "Xtream API Platform",
    kicker: "Core platform · Corefares",
    description:
      "The company's core RESTful API — the front door for third-party partners. JWT-secured, documented end-to-end, and built for integrations to plug in without hand-holding.",
    tags: ["REST", "ASP.NET Web API", "JWT", "API design"],
    visual: "api",
    span: "md:col-span-4",
  },
  {
    id: "travelfusion",
    title: "Supplier & GDS Integrations",
    kicker: "TBO · TravelFusion · AerTicket · Atlas · Sabre",
    description:
      "End-to-end flight search, pricing, and booking across SOAP/XML and JSON suppliers — hardened with caching, polling, and resilient error handling. Plus Fare Rules & Reprice on Sabre.",
    tags: ["SOAP/XML", "JSON", "Caching", "Polling"],
    visual: "flow",
    span: "md:col-span-2",
  },
  {
    id: "logs",
    title: "Compressed Log Search",
    kicker: "Observability",
    description:
      "MongoDB log store with compression, full-text search, and on-demand decompression for fast incident triage.",
    tags: ["MongoDB", "Full-text search"],
    visual: "logs",
    span: "md:col-span-2",
  },
  {
    id: "devcorner",
    title: "Developer Corner",
    kicker: "Developer experience",
    description:
      "Usage guides and implementation resources that turn partner onboarding from a meeting series into a reading session.",
    tags: ["Docs", "Onboarding"],
    span: "md:col-span-2",
  },
  {
    id: "recon",
    title: "Flight Reconciliation",
    kicker: "Automation · Trinetium",
    description:
      "A scheduled reconciliation job that streamlined data processing and cut manual reconciliation effort.",
    tags: ["Cron jobs", "Data processing"],
    span: "md:col-span-2",
  },
  {
    id: "fares",
    title: "Branded Fares & Technical Stops",
    kicker: "Booking workflows",
    description:
      "Extended booking flows for richer fare products and multi-leg routing, while tuning existing services for performance and stability.",
    tags: ["Performance", "Scalability"],
    span: "md:col-span-3",
  },
  {
    id: "golive",
    title: "Client Integrations & Go-Live",
    kicker: "Partner success",
    description:
      "The engineer in the room during UAT and launch — walking clients through auth, request/response shapes, and resolving production issues live.",
    tags: ["UAT", "Production support", "Communication"],
    span: "md:col-span-3",
  },
];

export const skillGroups = [
  { title: "Languages", items: ["C#", "Java", "Python"] },
  {
    title: "Backend & APIs",
    items: [
      "ASP.NET Web API",
      "REST APIs",
      "SOAP/XML",
      "gRPC",
      "JWT Authentication",
      "API Documentation",
      "Third-Party & GDS Integration",
      "TBO",
      "TravelFusion",
      "AerTicket",
      "Atlas",
      "Sabre",
    ],
  },
  { title: "Databases & Caching", items: ["MySQL", "MongoDB", "Redis"] },
  {
    title: "Cloud & Concepts",
    items: ["AWS", "RAG (Retrieval-Augmented Generation)", "Data Structures & Algorithms"],
  },
  {
    title: "Tools & Practices",
    items: [
      "Git",
      "Log Management",
      "Error Handling",
      "Caching",
      "Polling",
      "Cron Jobs",
      "Debugging",
      "Production Support",
    ],
  },
  {
    title: "Soft Skills",
    items: ["Client Communication", "Team Collaboration", "Mentoring", "Leadership", "Problem Solving"],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    school: "Birla Institute of Technology",
    period: "Aug 2022 — Jun 2024",
    score: 80.55,
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    school: "Maharshi Dayanand University",
    period: "Aug 2018 — Jun 2021",
    score: 71.73,
  },
];

export const certifications = [
  { title: "Java with DSA, Spring Framework & Spring Boot", issuer: "PwSkills" },
  { title: "Communication Skills", issuer: "TCS iON" },
];

export const marquee = [
  "C#",
  "ASP.NET Web API",
  "REST",
  "SOAP/XML",
  "gRPC",
  "JWT",
  "Sabre",
  "TBO",
  "TravelFusion",
  "MongoDB",
  "Redis",
  "MySQL",
  "AWS",
  "Java",
  "Python",
  "RAG",
  "Caching",
  "Polling",
  "Cron Jobs",
];
