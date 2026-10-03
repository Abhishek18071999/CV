import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { marquee, profile, stats } from "@/data/resume";
import { ApiConsole } from "./ApiConsole";
import { ease } from "./primitives";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, delay, ease },
});

export function Hero({ onCopyEmail }: { onCopyEmail: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div aria-hidden className="bg-grid mask-fade-b pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[38rem] w-[60rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12">
        <div>
          <motion.a
            {...rise(0.15)}
            href="#contact"
            className="group mb-8 inline-flex items-center gap-2.5 rounded-full border bg-card/60 py-1.5 pl-2 pr-4 text-sm text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            <span className="relative flex size-2.5 items-center justify-center">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to new opportunities
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>

          <h1 className="text-[clamp(3.4rem,10vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.055em]">
            <motion.span {...rise(0.25)} className="block">
              {profile.firstName}
            </motion.span>
            <motion.span {...rise(0.35)} className="block font-serif font-normal italic tracking-[-0.02em] text-primary">
              {profile.lastName}
            </motion.span>
          </h1>

          <motion.p {...rise(0.5)} className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
            <span className="text-foreground">{profile.role}</span> building the backend APIs behind flight search,
            pricing and booking — and the integrations that let partners plug into them.
          </motion.p>

          <motion.div {...rise(0.6)} className="mt-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onCopyEmail}
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get in touch
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
            </button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="inline-flex size-12 items-center justify-center rounded-full border bg-card/60 text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <FaLinkedinIn className="size-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="inline-flex size-12 items-center justify-center rounded-full border bg-card/60 text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <FaGithub className="size-4" />
            </a>
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3.5" />
              {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease }}
          style={{ transformPerspective: 1200 }}
        >
          <ApiConsole />
        </motion.div>
      </div>

      <motion.dl
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mx-auto mt-24 grid max-w-6xl grid-cols-2 gap-px overflow-hidden border-y bg-border px-0 sm:mt-28 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="bg-background px-5 py-7 sm:px-8">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-3xl font-medium tracking-tight sm:text-4xl">{stat.value}</dd>
            <dd className="mt-2 text-sm leading-snug text-muted-foreground">{stat.label}</dd>
          </div>
        ))}
      </motion.dl>

      <div className="mask-fade-x overflow-hidden border-b py-5" aria-hidden>
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="flex items-center gap-10 font-mono text-sm text-muted-foreground">
              {item}
              <span className="size-1 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
