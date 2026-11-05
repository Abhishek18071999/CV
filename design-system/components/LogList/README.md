# LogList

A miniature log search: a query row with a blinking cursor and a few levelled log lines.

**When to use.** Inside a WorkCard about tooling or observability.

**Props.** `query` · `rows` [{ level: "INFO" | "WARN", msg }] — INFO in primary, WARN in syntax-number. Mask identifiers (`pnr=***`).

_Hand-written from `artifacts/cv/src/components/cv/Sections.tsx (LogsVisual)`; framer-motion entrances are omitted (see Motion in the brand book)._
