# CodeWindow

A small framed request snippet: titled header with a live marker, method and path, headers and a one-line JSON body.

**When to use.** Inside a WorkCard to show an API's shape.

**Props.** `title` · `status` (default "● live"; `null` hides) · `method` · `path` · `headers` [[name, value]] · `body` object or string.

_Hand-written from `artifacts/cv/src/components/cv/Sections.tsx (ApiVisual)`; framer-motion entrances are omitted (see Motion in the brand book)._
