import { ArrowDownToLine, ArrowRight, Copy, ExternalLink, Moon, Sun } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { navSections, profile } from "@/data/resume";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  theme: "light" | "dark";
  resumeUrl: string;
  onToggleTheme: () => void;
  onCopyEmail: () => void;
};

export function CommandMenu({ open, onOpenChange, theme, resumeUrl, onToggleTheme, onCopyEmail }: Props) {
  const run = (action: () => void) => () => {
    onOpenChange(false);
    action();
  };

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Jump to a section or run an action…" />
      <CommandList>
        <CommandEmpty>Nothing matches that.</CommandEmpty>
        <CommandGroup heading="Navigate">
          <CommandItem onSelect={run(() => window.scrollTo({ top: 0, behavior: "smooth" }))}>
            <ArrowRight />
            Top
          </CommandItem>
          {navSections.map((section) => (
            <CommandItem key={section.id} onSelect={run(() => go(section.id))}>
              <ArrowRight />
              {section.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Actions">
          <CommandItem onSelect={run(onCopyEmail)}>
            <Copy />
            Copy email address
            <CommandShortcut className="hidden font-mono tracking-normal sm:inline">{profile.email}</CommandShortcut>
          </CommandItem>
          <CommandItem
            onSelect={run(() => {
              const link = document.createElement("a");
              link.href = resumeUrl;
              link.download = "Abhishek_Ahlawat_Resume.pdf";
              link.click();
            })}
          >
            <ArrowDownToLine />
            Download resume (PDF)
          </CommandItem>
          <CommandItem onSelect={run(onToggleTheme)}>
            {theme === "dark" ? <Sun /> : <Moon />}
            Switch to {theme === "dark" ? "light" : "dark"} theme
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Elsewhere">
          <CommandItem onSelect={run(() => window.open(profile.linkedin, "_blank", "noopener"))}>
            <ExternalLink />
            LinkedIn
          </CommandItem>
          <CommandItem onSelect={run(() => window.open(profile.github, "_blank", "noopener"))}>
            <ExternalLink />
            GitHub
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
