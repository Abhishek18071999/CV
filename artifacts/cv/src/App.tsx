import { useCallback, useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { Toaster, toast } from "sonner";
import resumePdf from "@assets/Abhishek_Resume.pdf";
import { navSections, profile } from "@/data/resume";
import { Nav } from "@/components/cv/Nav";
import { Hero } from "@/components/cv/Hero";
import { CommandMenu } from "@/components/cv/CommandMenu";
import { Contact, Education, Experience, SelectedWork, Skills } from "@/components/cv/Sections";

type Theme = "light" | "dark";
const THEME_KEY = "personal-portfolio-theme";

function initialTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    const ids = ["top", ...navSections.map((s) => s.id)];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active === "top" ? null : active;
}

function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [commandOpen, setCommandOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast.success("Email copied to clipboard", { description: profile.email });
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="grain min-h-screen overflow-x-clip">
        <a
          href="#experience"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>

        <Nav
          active={active}
          theme={theme}
          resumeUrl={resumePdf}
          onToggleTheme={toggleTheme}
          onOpenCommand={() => setCommandOpen(true)}
        />

        <main>
          <Hero onCopyEmail={copyEmail} />
          <Experience />
          <SelectedWork />
          <Skills />
          <Education />
          <Contact resumeUrl={resumePdf} onCopyEmail={copyEmail} />
        </main>

        <footer className="border-t">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>
              © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
            </p>
            <p className="no-print">
              Press{" "}
              <kbd className="rounded border bg-card px-1.5 py-0.5 font-mono text-xs text-foreground">Ctrl / ⌘ K</kbd>{" "}
              to navigate
            </p>
          </div>
        </footer>

        <CommandMenu
          open={commandOpen}
          onOpenChange={setCommandOpen}
          theme={theme}
          resumeUrl={resumePdf}
          onToggleTheme={toggleTheme}
          onCopyEmail={copyEmail}
        />
        <Toaster theme={theme} position="bottom-center" richColors={false} />
      </div>
    </MotionConfig>
  );
}

export default App;
