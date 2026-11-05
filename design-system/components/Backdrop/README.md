# Backdrop

The atmospheric ground: a 56px blueprint grid that fades out, a blurred primary glow, and optional film grain.

**When to use.** Behind the hero (`placement` "top") and the closing contact section ("bottom"). Nowhere else.

**Props.** `placement` "top" | "bottom" · `glow` (default true) · `grain` · `children` the section content.

**Don't.** Stack it with other gradients or images.

_Hand-written from `artifacts/cv/src/components/cv/Hero.tsx, Sections.tsx (Contact), index.css (.bg-grid, .grain)`; framer-motion entrances are omitted (see Motion in the brand book)._
