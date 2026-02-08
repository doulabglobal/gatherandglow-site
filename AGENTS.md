# AGENTS.md
## Gather & Glow Website – CODEX Operating Instructions

This file defines how autonomous agents (CODEX) should work in this repository.
It is **authoritative** for all automated or semi-automated changes.

---

## 1. Project Context

- **Project:** Gather & Glow marketing website
- **Stack:** Docusaurus 3, React, TypeScript, Yarn
- **Hosting:** Cloudflare Pages
- **OS target:** Windows (PowerShell)
- **Primary goals:**
  - Maintain brand consistency
  - Avoid breaking routes, builds, or styling
  - Apply changes incrementally and safely

---

## 2. Non-Negotiable Rules (STOP RULES)

CODEX **MUST STOP and ask** before proceeding if any of the following occur:

1. A requested change may:
   - Break navigation
   - Remove or rename existing pages
   - Alter routing behavior
2. A file shows:
   - Encoding issues (mojibake)
   - Unexpected formatting drift
3. A change would:
   - Delete content not explicitly requested
   - Replace brand colors or fonts without instruction
4. A build or typecheck fails.

**STOP means:** do not guess, do not auto-fix, ask for guidance.

---

## 3. Allowed Change Scope (SAFE ZONES)

CODEX may proceed without confirmation **only** in these areas:

### Styling
- `src/css/custom.css`
- Adding new CSS variables
- Refining spacing, colors, typography
- Extending existing classes (never rename without approval)

### Content (copy only)
- Text inside:
  - `src/pages/*.tsx`
  - Markdown files
- Headings, paragraphs, CTA labels

### Images
- Adding **placeholder images only**
- Using `/static/img/` or external stock placeholders
- Never deleting real images unless instructed

---

## 4. Restricted Areas (REQUIRE EXPLICIT OK)

CODEX must ask before touching:

- `docusaurus.config.ts`
- Navbar or footer structure
- Build config (Cloudflare, Node version)
- Routing logic
- Package versions or dependencies

---

## 5. Styling & Brand Rules

### Fonts
- Body: `DM Sans`
- Headings: `Noto Serif Display`
- Never introduce new fonts unless explicitly requested.

### Brand Colors (authoritative)
Use CSS variables only — **never hardcode hex values** in components.

Primary palette:
- Taupe: `#967969`
- Taupe dark: `#86756A`
- Cream accent: `#EBDAC6`
- Soft background: `#F0EFEC`
- Cream light: `#F6EFE9`
- Dark slate: `#393F4A`

All new colors must be added as variables in `:root`.

---

## 6. HERO & CARD SYSTEM RULES

### Hero Sections
- Hero must span full section width (not card-style unless specified)
- Image layers must remain intact:
  - image
  - gradient overlay
  - content foreground
- Do not remove `.hero--lp` logic

### Cards
- Cards in the same row **must be equal height**
- Images must use fixed heights via CSS
- Use existing `.gg-card*` variants

---

## 7. Image Placeholders

When placeholders are required:
- Prefer realistic stock-style placeholders
- Use descriptive filenames (e.g. `hero-services-placeholder.jpg`)
- Never inline base64 images

---

## 8. Windows / PowerShell Conventions

- Assume PowerShell, not Bash
- Do not use `&&` chains
- Prefer one command per line
- Paths must be Windows-safe

Example:
```powershell
yarn build
yarn start
