import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowDownToLine, Command, Moon, Sun } from "lucide-react";
import { navSections } from "@/data/resume";
import { cn } from "@/lib/utils";

type Props = {
  active: string | null;
  theme: "light" | "dark";
  resumeUrl: string;
  onToggleTheme: () => void;
  onOpenCommand: () => void;
};

const iconButton =
  "inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";

export function Nav({ active, theme, resumeUrl, onToggleTheme, onOpenCommand }: Props) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="no-print fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-primary"
      />
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="no-print fixed inset-x-0 top-3 z-50 flex justify-center px-4"
      >
        <nav
          aria-label="Primary"
          className="flex w-full max-w-3xl items-center gap-1 rounded-full border bg-background/75 p-1.5 shadow-lg shadow-black/5 backdrop-blur-xl"
        >
          <a
            href="#top"
            aria-label="Back to top"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-foreground font-serif text-lg italic text-background"
          >
            a
          </a>

          <ul className="mx-auto hidden items-center md:flex">
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={cn(
                    "relative block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                    active === section.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {active === section.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-muted"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.55 }}
                    />
                  )}
                  <span className="relative">{section.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-1 md:ml-0">
            <button
              type="button"
              onClick={onOpenCommand}
              aria-label="Open command menu"
              className="inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Command className="size-3.5" />
              <span className="font-mono text-xs">K</span>
            </button>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className={iconButton}
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.35 }}
              >
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </motion.span>
            </button>
            <a
              href={resumeUrl}
              download="Abhishek_Ahlawat_Resume.pdf"
              className="inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <ArrowDownToLine className="size-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </nav>
      </motion.header>
    </>
  );
}
