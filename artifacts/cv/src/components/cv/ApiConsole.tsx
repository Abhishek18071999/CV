import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const endpoints = {
  profile: {
    path: "/v1/engineers/abhishek",
    latency: 38,
    body: {
      name: "Abhishek Ahlawat",
      role: "Software Engineer",
      company: "Corefares Consulting",
      location: "Bengaluru, IN",
      focus: ["backend APIs", "travel-tech integrations"],
      openToWork: true,
    },
  },
  stack: {
    path: "/v1/engineers/abhishek/stack",
    latency: 24,
    body: {
      languages: ["C#", "Java", "Python"],
      apis: ["REST", "SOAP/XML", "gRPC"],
      auth: "JWT",
      data: ["MongoDB", "MySQL", "Redis"],
      cloud: "AWS",
    },
  },
  shipped: {
    path: "/v1/engineers/abhishek/shipped",
    latency: 51,
    body: {
      platform: "Xtream REST API",
      integrations: ["TBO", "TravelFusion", "AerTicket", "Atlas", "Sabre"],
      tooling: ["Developer Corner", "MongoDB log search"],
      workflows: ["Branded Fares", "Technical Stops"],
      automation: "Flight reconciliation cron",
    },
  },
} as const;

type EndpointKey = keyof typeof endpoints;

const tokenPattern = /("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?/g;

function highlight(line: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of line.matchAll(tokenPattern)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(line.slice(last, index));
    const [token, str, colon, literal] = match;
    if (str && colon) {
      parts.push(
        <span key={index} className="text-syntax-key">
          {str}
        </span>,
        <span key={`${index}c`} className="text-muted-foreground">
          {colon}
        </span>,
      );
    } else if (str) {
      parts.push(
        <span key={index} className="text-syntax-string">
          {str}
        </span>,
      );
    } else {
      parts.push(
        <span key={index} className={literal ? "text-primary" : "text-syntax-number"}>
          {token}
        </span>,
      );
    }
    last = index + token.length;
  }
  if (last < line.length) parts.push(line.slice(last));
  return parts;
}

export function ApiConsole() {
  const [active, setActive] = useState<EndpointKey>("profile");
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(0);

  const endpoint = endpoints[active];
  const lines = useMemo(() => JSON.stringify(endpoint.body, null, 2).split("\n"), [endpoint]);

  useEffect(() => {
    setLoading(true);
    setVisible(0);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setLoading(false);
      setVisible(lines.length);
      return;
    }
    let interval: number | undefined;
    const timeout = window.setTimeout(() => {
      setLoading(false);
      interval = window.setInterval(() => {
        setVisible((v) => {
          if (v >= lines.length) window.clearInterval(interval);
          return Math.min(lines.length, v + 1);
        });
      }, 45);
    }, 420);
    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [lines]);

  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-[1.4rem] bg-gradient-to-b from-primary/30 via-border to-transparent opacity-60" />
      <div className="relative overflow-hidden rounded-[1.35rem] border bg-card shadow-2xl shadow-black/20">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <div
            role="tablist"
            aria-label="Example API responses"
            className="ml-3 flex gap-1 rounded-lg bg-muted p-0.5 font-mono text-[11px]"
          >
            {(Object.keys(endpoints) as EndpointKey[]).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={active === key}
                onClick={() => setActive(key)}
                className={cn(
                  "relative rounded-md px-2.5 py-1 transition-colors",
                  active === key ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === key && (
                  <motion.span
                    layoutId="console-tab"
                    className="absolute inset-0 rounded-md bg-background shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{key}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-b px-4 py-2.5 font-mono text-xs">
          <p className="truncate">
            <span className="mr-2 rounded bg-primary/15 px-1.5 py-0.5 font-semibold text-primary">GET</span>
            <span className="text-muted-foreground">{endpoint.path}</span>
          </p>
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="shrink-0 text-muted-foreground"
              >
                pending…
              </motion.span>
            ) : (
              <motion.span
                key="ok"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex shrink-0 items-center gap-2"
              >
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-primary">200 OK</span>
                <span className="text-muted-foreground">{endpoint.latency}ms</span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <pre className="min-h-[19rem] overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-6 sm:text-[13px]">
          {loading ? (
            <div className="space-y-2.5 pt-1" aria-hidden>
              {[72, 54, 64, 40, 58].map((w, i) => (
                <div
                  key={i}
                  className="h-3 animate-pulse rounded bg-muted"
                  style={{ width: `${w}%`, animationDelay: `${i * 80}ms` }}
                />
              ))}
            </div>
          ) : (
            <code>
              {lines.slice(0, visible).map((line, i) => (
                <div key={`${active}-${i}`} className="flex">
                  <span className="mr-4 w-5 shrink-0 select-none text-right text-muted-foreground/40">{i + 1}</span>
                  <span className="whitespace-pre">{highlight(line)}</span>
                </div>
              ))}
              {visible < lines.length && <span className="ml-9 inline-block h-4 w-2 animate-pulse bg-primary" />}
            </code>
          )}
        </pre>
      </div>
    </div>
  );
}
