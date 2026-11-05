# StatusPill

A live-status pill with a pinging or pulsing primary dot.

**When to use.** `invite` (default) above the hero title — "Open to new opportunities", linking to contact. `current` under the present role in the timeline.

**Props.** `variant` "invite" | "current" · `children` the text (current defaults to "current") · `href` makes the invite pill a link with an up-right arrow.

**Don't.** Show more than one invite pill per page. Animations stop under reduced motion.

_Hand-written from `artifacts/cv/src/components/cv/Hero.tsx, Sections.tsx (Experience)`; framer-motion entrances are omitted (see Motion in the brand book)._
