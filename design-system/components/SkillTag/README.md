# SkillTag

A filterable skill label with three states: default, hit and dim.

**When to use.** The skills grid, grouped under a title row with a two-digit mono count. When a filter is active, matches become `hit` and the rest `dim`.

**Props.** `state` "default" | "hit" | "dim" · `children` · `as` (use "li" inside `.ah-skill-list`).

**Do.** Pair with SearchField and an `aria-live` count ("3 matches for “sql”").

_Hand-written from `artifacts/cv/src/components/cv/Sections.tsx (Skills)`; framer-motion entrances are omitted (see Motion in the brand book)._
