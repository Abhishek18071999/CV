# SearchField

A pill search input with a leading search icon and a clear button.

**When to use.** Filtering an on-page list (skills). Not a site search.

**Props.** `value` + `onChange(value)` (controlled) or `defaultValue` · `placeholder` (the site's: "Looking for a skill?") · `label` accessible name.

**Do.** Announce the result count in an `aria-live` mono line under the heading.

_Hand-written from `artifacts/cv/src/components/cv/Sections.tsx (Skills)`; framer-motion entrances are omitted (see Motion in the brand book)._
