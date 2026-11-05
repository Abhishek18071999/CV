# ApiConsole

The hero's signature: a mock API client with endpoint tabs, a status line and syntax-highlighted JSON that types itself in.

**When to use.** Once, beside the hero headline — it says "backend engineer" without a word.

**Props.** `endpoints` { key: { method?, path, latency, status?, body } } (defaults to the CV's profile / stack / shipped) · `defaultTab` · `animate` (default true; off under reduced motion) · `minHeight` · `label` for the tablist.

**Do.** Keep bodies short (≤ 12 lines) and true. **Don't** put secrets or real tokens in bodies.

_Hand-written from `artifacts/cv/src/components/cv/ApiConsole.tsx`; framer-motion entrances are omitted (see Motion in the brand book)._
