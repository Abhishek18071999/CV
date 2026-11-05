/* Ahlawat — component props. window.Ahlawat.<Component>. Documentation only. */
import type { ReactNode, CSSProperties } from "react";

export type IconName = "arrow-up-right" | "arrow-right" | "arrow-down-to-line" | "map-pin" | "command" | "moon" | "sun" | "copy" | "external-link" | "search" | "x" | "award" | "braces" | "plane" | "file-search" | "book-open-text" | "calendar-clock" | "workflow" | "handshake" | "github" | "linkedin";

export interface ButtonProps { variant?: "primary" | "ink" | "outline" | "ghost"; size?: "sm" | "md" | "lg"; icon?: IconName; iconPosition?: "start" | "end"; arrow?: boolean; glow?: boolean; href?: string; target?: string; download?: string | boolean; label?: string; disabled?: boolean; type?: "button" | "submit"; onClick?: () => void; children?: ReactNode; }
export interface EmailCopyProps { email: string; onCopy?: (email: string) => void; }
export interface KbdProps { children: ReactNode; }
export interface SectionHeadingProps { index: string; eyebrow: string; title: string; accent?: string; as?: "h1" | "h2" | "h3"; children?: ReactNode; }
export interface ChipProps { children: ReactNode; }
export interface StatusPillProps { variant?: "invite" | "current"; href?: string; children?: ReactNode; }
export interface StatGridProps { items: { value: string; label: string }[]; }
export interface MarqueeProps { items: string[]; duration?: number; }
export interface SkillTagProps { state?: "default" | "hit" | "dim"; as?: "span" | "li"; children: ReactNode; }
export interface ScoreRingProps { value: number; }
export interface SpotlightCardProps { padded?: boolean; as?: string; className?: string; style?: CSSProperties; children?: ReactNode; }
export interface IconTileProps { icon: IconName; }
export interface WorkCardProps { icon?: IconName; kicker?: string; title: string; description?: string; tags?: string[]; children?: ReactNode; }
export interface BackdropProps { placement?: "top" | "bottom"; glow?: boolean; grain?: boolean; style?: CSSProperties; children?: ReactNode; }
export interface NavProps { items: { id: string; label: string }[]; active?: string | null; theme?: "ink" | "paper"; onToggleTheme?: () => void; onOpenCommand?: (() => void) | null; onNavigate?: (id: string) => void; resumeHref?: string; resumeLabel?: string; resumeDownload?: string; monogram?: string; homeHref?: string; }
export interface TimelineProps { period: string; company: string; role: string; location?: string; current?: boolean; bullets: { lead: string; text: string }[]; stack?: string[]; }
export interface SearchFieldProps { value?: string; defaultValue?: string; onChange?: (value: string) => void; placeholder?: string; label?: string; }
export interface ApiConsoleProps { endpoints?: Record<string, { method?: string; path: string; latency: number; status?: string; body: unknown }>; defaultTab?: string; animate?: boolean; minHeight?: number | string; label?: string; }
export interface CodeWindowProps { title: string; status?: string | null; method?: string; path?: string; headers?: [string, string][]; body?: object | string; }
export interface FlowDiagramProps { nodes?: string[]; highlight?: number; }
export interface LogListProps { query?: string; rows: { level: "INFO" | "WARN"; msg: string }[]; }
export interface CommandItem { id?: string; label: string; icon?: IconName; shortcut?: string; keywords?: string[]; onSelect?: () => void; }
export interface CommandMenuProps { open?: boolean; onOpenChange?: (open: boolean) => void; groups: { heading?: string; items: CommandItem[] }[]; placeholder?: string; emptyText?: string; hotkey?: boolean; inline?: boolean; label?: string; className?: string; }
export interface IconProps { name: IconName; size?: number; strokeWidth?: number; label?: string; className?: string; }
