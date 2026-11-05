# Nav

A floating, blurred pill navigation bar: monogram, section links with an active pill, ⌘K, theme toggle and an ink Resume button.

**When to use.** Fixed 12px from the top of every page, centred, max 768px. Pair with the 2px primary scroll-progress bar (`.ah-progress`).

**Props.** `items` [{ id, label }] · `active` the current section id · `theme` "ink" | "paper" (picks the sun/moon icon) · `onToggleTheme` · `onOpenCommand` (pass `null` to hide ⌘K) · `resumeHref`, `resumeLabel`, `resumeDownload` · `monogram` (default "a") · `onNavigate(id)`.

**Don't.** Add more than five links; links hide below 640px, leaving the actions.

_Hand-written from `artifacts/cv/src/components/cv/Nav.tsx`; framer-motion entrances are omitted (see Motion in the brand book)._
