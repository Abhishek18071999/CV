import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpenText,
  Braces,
  CalendarClock,
  Copy,
  FileSearch,
  Handshake,
  Plane,
  Search,
  Workflow,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  certifications,
  education,
  experience,
  profile,
  skillGroups,
  work,
  type Work,
} from "@/data/resume";
import { cn } from "@/lib/utils";
import { Chip, Reveal, SectionHeading, SpotlightCard, ease } from "./primitives";

/* ───────────────────────── Experience ───────────────────────── */

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-36">
      <SectionHeading index="01" eyebrow="Experience" title="Where I've been" accent="shipping." />

      <ol className="relative space-y-20">
        {experience.map((role) => (
          <li key={role.company} className="grid gap-8 md:grid-cols-[15rem_1fr] md:gap-14">
            <Reveal className="md:sticky md:top-28 md:self-start">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{role.period}</p>
              <h3 className="mt-3 text-2xl font-medium tracking-tight">{role.company}</h3>
              <p className="mt-1 text-muted-foreground">{role.role}</p>
              <p className="mt-1 text-sm text-muted-foreground/80">{role.location}</p>
              {role.current && (
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] text-primary">
                  <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                  current
                </span>
              )}
            </Reveal>

            <div className="relative border-l pl-6 sm:pl-10">
              <ul className="space-y-7">
                {role.bullets.map((bullet, i) => (
                  <motion.li
                    key={bullet.lead}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.05, ease }}
                    className="group relative"
                  >
                    <span className="absolute -left-[calc(1.5rem+4.5px)] top-2 size-2 rounded-full border-2 border-background bg-border transition-colors group-hover:bg-primary sm:-left-[calc(2.5rem+4.5px)]" />
                    <p className="text-[1.05rem] leading-relaxed text-muted-foreground text-pretty">
                      <span className="font-medium text-foreground">{bullet.lead}.</span> {bullet.text}
                    </p>
                  </motion.li>
                ))}
              </ul>
              <Reveal className="mt-8 flex flex-wrap gap-2">
                {role.stack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </Reveal>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ───────────────────────── Selected work ───────────────────────── */

const workIcons: Record<string, typeof Braces> = {
  xtream: Braces,
  travelfusion: Plane,
  logs: FileSearch,
  devcorner: BookOpenText,
  recon: CalendarClock,
  fares: Workflow,
  golive: Handshake,
};

function ApiVisual() {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border bg-background/70 font-mono text-[12px] leading-6">
      <div className="flex items-center justify-between border-b px-4 py-2 text-muted-foreground">
        <span>xtream / search</span>
        <span className="text-primary">● live</span>
      </div>
      <pre className="overflow-x-auto px-4 py-3">
        <span className="text-primary">POST</span> <span className="text-foreground">/api/v1/flights/search</span>
        {"\n"}
        <span className="text-syntax-key">Authorization</span>
        <span className="text-muted-foreground">: </span>
        <span className="text-syntax-string">Bearer eyJhbGciOi…</span>
        {"\n"}
        <span className="text-syntax-key">Content-Type</span>
        <span className="text-muted-foreground">: </span>
        <span className="text-syntax-string">application/json</span>
        {"\n\n"}
        <span className="text-muted-foreground">{"{ "}</span>
        <span className="text-syntax-key">"origin"</span>
        <span className="text-muted-foreground">: </span>
        <span className="text-syntax-string">"BLR"</span>
        <span className="text-muted-foreground">, </span>
        <span className="text-syntax-key">"destination"</span>
        <span className="text-muted-foreground">: </span>
        <span className="text-syntax-string">"DEL"</span>
        <span className="text-muted-foreground">, </span>
        <span className="text-syntax-key">"adults"</span>
        <span className="text-muted-foreground">: </span>
        <span className="text-syntax-number">1</span>
        <span className="text-muted-foreground">{" }"}</span>
      </pre>
    </div>
  );
}

function FlowVisual() {
  const nodes = ["Client", "Xtream", "Supplier"];
  return (
    <div className="mt-8 flex items-center gap-1.5 font-mono text-[11px]">
      {nodes.map((node, i) => (
        <div key={node} className="contents">
          <span
            className={cn(
              "shrink-0 rounded-lg border px-2.5 py-1.5",
              i === 1 ? "border-primary/40 bg-primary/10 text-primary" : "bg-background/70 text-muted-foreground",
            )}
          >
            {node}
          </span>
          {i < nodes.length - 1 && (
            <span className="relative h-px flex-1 bg-border">
              <span
                className="absolute -top-[2.5px] size-1.5 animate-flow rounded-full bg-primary"
                style={{ animationDelay: `${i * 1.2}s` }}
              />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function LogsVisual() {
  const rows = [
    { level: "INFO", msg: "booking.confirm pnr=*** 201" },
    { level: "WARN", msg: "supplier.poll retry 2/3" },
    { level: "INFO", msg: "cache.hit fares:BLR-DEL" },
  ];
  return (
    <div className="mt-8 space-y-1.5 font-mono text-[11px]">
      <div className="flex items-center gap-2 rounded-lg border bg-background/70 px-2.5 py-1.5 text-muted-foreground">
        <Search className="size-3" />
        <span>
          supplier<span className="animate-pulse text-primary">|</span>
        </span>
      </div>
      {rows.map((row) => (
        <div key={row.msg} className="flex gap-2 truncate px-1 text-muted-foreground">
          <span className={row.level === "WARN" ? "text-syntax-number" : "text-primary"}>{row.level}</span>
          <span className="truncate">{row.msg}</span>
        </div>
      ))}
    </div>
  );
}

function WorkCard({ item, index }: { item: Work; index: number }) {
  const Icon = workIcons[item.id] ?? Braces;
  return (
    <Reveal delay={(index % 3) * 0.06} className={cn("col-span-1", item.span)}>
      <SpotlightCard className="flex h-full flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex size-10 items-center justify-center rounded-xl border bg-background/70 text-primary">
            <Icon className="size-[18px]" />
          </span>
          <span className="pt-2 text-right font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
            {item.kicker}
          </span>
        </div>
        <h3 className="mt-6 text-xl font-medium tracking-tight sm:text-2xl">{item.title}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{item.description}</p>
        {item.visual === "api" && <ApiVisual />}
        {item.visual === "flow" && <FlowVisual />}
        {item.visual === "logs" && <LogsVisual />}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-7">
          {item.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="border-y bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionHeading index="02" eyebrow="Selected work" title="Systems I've" accent="built.">
          <p className="max-w-xs text-muted-foreground md:text-right">
            Production systems in travel tech — where a failed request is a missed booking.
          </p>
        </SectionHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {work.map((item, i) => (
            <WorkCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Skills ───────────────────────── */

export function Skills() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const matches = (skill: string) => !q || skill.toLowerCase().includes(q);
  const total = skillGroups.reduce((n, g) => n + g.items.filter(matches).length, 0);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-36">
      <SectionHeading index="03" eyebrow="Skills" title="The" accent="toolkit.">
        <label className="relative flex w-full items-center md:w-72">
          <Search className="pointer-events-none absolute left-4 size-4 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Looking for a skill?"
            aria-label="Filter skills"
            className="h-11 w-full rounded-full border bg-card/60 pl-10 pr-10 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear filter"
              className="absolute right-3 rounded-full p-1 text-muted-foreground hover:text-foreground"
            >
              <X className="size-3.5" />
            </button>
          )}
        </label>
      </SectionHeading>

      <p aria-live="polite" className={cn("mb-6 font-mono text-xs text-muted-foreground", !q && "sr-only")}>
        {total} {total === 1 ? "match" : "matches"} for “{query.trim()}”
      </p>

      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => {
          const hits = group.items.filter(matches).length;
          return (
            <Reveal key={group.title} delay={(gi % 3) * 0.06}>
              <div className={cn("transition-opacity duration-300", q && hits === 0 && "opacity-35")}>
                <div className="mb-4 flex items-baseline justify-between border-b pb-3">
                  <h3 className="font-medium">{group.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const hit = q && matches(skill);
                    return (
                      <li
                        key={skill}
                        className={cn(
                          "rounded-lg border px-3 py-1.5 text-sm transition-all duration-300",
                          hit
                            ? "border-primary/50 bg-primary/10 text-primary"
                            : q
                              ? "opacity-40"
                              : "bg-card/60 text-foreground/85 hover:border-foreground/25",
                        )}
                      >
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ───────────────────────── Education ───────────────────────── */

function ScoreRing({ value }: { value: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative size-16 shrink-0">
      <svg viewBox="0 0 64 64" className="size-full -rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" strokeWidth="4" className="stroke-border" />
        <motion.circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          className="stroke-primary"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - value / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-mono text-[11px]">
        {Math.round(value)}%
      </span>
    </div>
  );
}

export function Education() {
  return (
    <section id="education" className="border-t">
      <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionHeading index="04" eyebrow="Education" title="Foundations &" accent="credentials." />
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-4">
            {education.map((item, i) => (
              <Reveal key={item.short} delay={i * 0.08}>
                <SpotlightCard className="flex items-center gap-5 p-6 sm:p-7">
                  <ScoreRing value={item.score} />
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
                    <h3 className="mt-1.5 text-lg font-medium tracking-tight sm:text-xl">{item.degree}</h3>
                    <p className="text-muted-foreground">
                      {item.school} · <span className="text-foreground">{item.score}%</span>
                    </p>
                  </div>
                  <span className="hidden font-serif text-5xl italic text-muted-foreground/30 sm:block">
                    {item.short}
                  </span>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <SpotlightCard className="h-full p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-xl border bg-background/70 text-primary">
                  <Award className="size-[18px]" />
                </span>
                <h3 className="text-lg font-medium">Certifications</h3>
              </div>
              <ul className="mt-6 divide-y">
                {certifications.map((cert) => (
                  <li key={cert.title} className="py-4 first:pt-0 last:pb-0">
                    <p className="font-medium leading-snug">{cert.title}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Contact ───────────────────────── */

function useLocalTime(timeZone: string) {
  const format = () =>
    new Intl.DateTimeFormat("en-IN", { timeZone, hour: "2-digit", minute: "2-digit", hour12: true }).format(
      new Date(),
    );
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), 15_000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);
  return time;
}

export function Contact({ resumeUrl, onCopyEmail }: { resumeUrl: string; onCopyEmail: () => void }) {
  const time = useLocalTime(profile.timezone);
  const links = [
    { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedinIn },
    { label: "GitHub", href: profile.github, icon: FaGithub },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_100%,#000_30%,transparent_100%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-80 w-[50rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/15 blur-[120px]"
      />
      <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-40">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-primary">05</span>
            <span className="h-px w-8 bg-border" />
            Contact
          </p>
          <h2 className="max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.045em] text-balance">
            Let's build something <span className="font-serif font-normal italic text-primary">reliable.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground text-pretty">
            Hiring for backend, API or integration work? I'd love to hear about it.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <button
            type="button"
            onClick={onCopyEmail}
            className="group inline-flex h-14 min-w-0 items-center justify-between gap-4 rounded-full border bg-card px-6 text-left transition-colors hover:border-primary/50 sm:justify-start"
          >
            <span className="truncate font-mono text-sm sm:text-base">{profile.email}</span>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Copy className="size-3" /> Copy
            </span>
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Send an email
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
          </a>
        </Reveal>

        <Reveal delay={0.15} className="mt-20 grid gap-8 border-t pt-10 sm:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Based in</p>
            <p className="mt-2">{profile.location}</p>
            <p className="mt-1 font-mono text-sm text-muted-foreground">{time} IST</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Elsewhere</p>
            <ul className="mt-2 space-y-1.5">
              {links.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
                  >
                    <Icon className="size-3.5" />
                    {label}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Résumé</p>
            <a
              href={resumeUrl}
              download="Abhishek_Ahlawat_Resume.pdf"
              className="group mt-2 inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              Download PDF
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-y-0.5 group-hover:rotate-90" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
