import type { PointerEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  accent: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className="mb-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-primary">{index}</span>
          <span className="h-px w-8 bg-border" />
          {eyebrow}
        </p>
        <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.03em] text-balance sm:text-5xl md:text-6xl">
          {title} <span className="font-serif text-[1.08em] font-normal italic text-primary">{accent}</span>
        </h2>
      </div>
      {children}
    </Reveal>
  );
}

/** A card whose background lights up under the pointer. */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      onPointerMove={onMove}
      className={cn(
        "spotlight rounded-3xl border bg-card/60 transition-colors duration-300 hover:border-foreground/20",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
