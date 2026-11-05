# Button

Pill-shaped action in four variants: primary (mint/jade), ink (inverted), outline (glass) and ghost.

**When to use.** `primary` for the one action that matters on a screen ("Get in touch", "Send an email") — add `arrow` for the up-right arrow that turns 45° on hover, and `glow` only in the hero. `ink` for the persistent nav action (Resume). `outline` for social links as round icon buttons. `ghost` for toolbar icons (theme toggle, ⌘K).

**Props.** `variant` "primary" | "ink" | "outline" | "ghost" (default primary) · `size` "sm" 36px | "md" 48px | "lg" 56px · `icon` an Icon name, drawn before the label (or alone: the button turns square-round) · `iconPosition` "start" | "end" · `arrow` · `glow` · `href` renders an `<a>` (`target`, `download`) · `label` the accessible name for icon-only buttons · `onClick`, `disabled`.

**Do.** One primary per view. Always give icon-only buttons a `label`.
**Don't.** Square corners, or a primary on a primary-soft surface. On Paper the white-on-jade label is 4.46:1: keep it at 16px medium, never smaller.

_Hand-written from `artifacts/cv/src/components/cv/Hero.tsx, Nav.tsx, Sections.tsx (Contact)`; framer-motion entrances are omitted (see Motion in the brand book)._
