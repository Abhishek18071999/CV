# CommandMenu

A ⌘K command palette: a search field over grouped actions, filtered as you type and driven by the keyboard.

**When to use.** One per site, opened by Ctrl/⌘ K (the component listens for it when `onOpenChange` is passed), by the ⌘K button in `Nav`, and hinted by a `Kbd` in the footer. Group items as the CV does: **Navigate** (sections, with `arrow-right`), **Actions** (copy email with the address as its shortcut, download résumé, switch theme), **Elsewhere** (LinkedIn, GitHub with `external-link`).

**Props.** `open` + `onOpenChange(open)` · `groups` [{ heading, items: [{ label, icon?, shortcut?, keywords?, onSelect }] }] · `placeholder` (the site's: "Jump to a section or run an action…") · `emptyText` ("Nothing matches that.") · `hotkey` (default true) · `inline` renders the panel in place, without the overlay — for docs and previews · `label` the dialog's accessible name.

**Behaviour.** ↑/↓ (wrapping), Home/End move the highlight; Enter or a click runs the item and closes the menu; Esc, the × button or a click on the overlay close it. Focus moves to the input on open and returns to the trigger on close. Matching is a case-insensitive substring over the label and `keywords`.

**Do.** Keep labels as verb phrases for actions ("Copy email address") and plain nouns for places ("Experience").
**Don't.** Put destructive actions here, or more than about a dozen items.

_Hand-written from `artifacts/cv/src/components/cv/CommandMenu.tsx, ../ui/command.tsx, ../ui/dialog.tsx`; framer-motion entrances are omitted (see Motion in the brand book)._
