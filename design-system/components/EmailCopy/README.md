# EmailCopy

A large pill that shows an email address in mono and copies it on click.

**When to use.** The contact block, beside a primary "Send an email" button. The tag flips to jade "Copied" for 1.6s.

**Props.** `email` (required) · `onCopy(email)` — the site shows a toast ("Email copied to clipboard") from here.

**Do.** Keep the address unbroken; it truncates with an ellipsis on narrow screens.
**Don't.** Use it for anything other than a copyable identifier.

_Hand-written from `artifacts/cv/src/components/cv/Sections.tsx (Contact)`; framer-motion entrances are omitted (see Motion in the brand book)._
