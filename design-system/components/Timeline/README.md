# Timeline

One role in the experience timeline: a sticky meta column and a ruled column of bullets with hover-lit dots.

**When to use.** Each job, newest first, 80px apart.

**Props.** `period` · `company` · `role` · `location` · `current` (adds the current pill) · `bullets` [{ lead, text }] — lead is a 2–4 word noun phrase, rendered bold with a full stop · `stack` string[].

**Do.** Start each bullet text with a past-tense verb and end with a concrete result.

_Hand-written from `artifacts/cv/src/components/cv/Sections.tsx (Experience)`; framer-motion entrances are omitted (see Motion in the brand book)._
