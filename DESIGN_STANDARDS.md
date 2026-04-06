# NX Witness Enterprise 2026 — Presentation Style Guide v3

## 0. Purpose
This document defines the visual, structural, and implementation rules for the NX Witness Enterprise 2026 presentation system. This is not a traditional slide deck. It is a code-driven presentation environment built for premium enterprise storytelling, live demo compatibility, and scalable component-based production.

The goal is to ensure that every slide feels: **clear, technically sophisticated, visually premium, consistent across authors, and performant.**

---

## 1. Implementation Environment
### Core Technologies
- **TypeScript (.tsx)** — primary implementation language
- **React** — component architecture for slide construction
- **HTML/JSX** — structural composition and slide layout
- **Tailwind CSS** — styling, spacing, responsiveness, and motion utilities
- **Lucide-React** — icon system
- **Vite** — development and build environment

### Implementation Principle
All slides must be built as: **modular, reusable, performance-efficient, and presentation-safe.** Visual polish must never compromise rendering speed, maintainability, responsiveness, or readability.

---

## 2. Design Language
The presentation follows a high-tech enterprise visual identity:
- **Glassmorphism** — layered transparency, subtle blur, luminous surfaces
- **Deep Space** — dark, dimensional, cinematic environments with depth and contrast

Common values: **intelligence, scale, technical sophistication, enterprise reliability, and operational control.**

---

## 3. Design Principles
Every slide must balance 3 qualities:
1. **Clarity** — understood within 3 seconds.
2. **Consistency** — one unified system.
3. **Energy** — alive and intentional.

**Rule: Precision is more premium than intensity.**

---

## 4. Slide System Architecture
### Approved Slide Types
HeroSlide, ProblemSlide, FeatureSlide, ComparisonSlide, KpiSlide, ArchitectureSlide, DemoSlide, QuoteSlide, ClosingSlide.

### Shared Structural Components
SlideShell, SlideHeader, SlideBody, PrimaryVisual, SupportingCard, MetricCluster, IconLabel, FeatureList, CalloutBadge.

---

## 5. Core Layout System (5/12 and 7/12)
### A. Default Composition
- **Left Column (5/12)**: Narrative content (label, heading, sub-heading, body, stats/bullets).
- **Right Column (7/12)**: Primary visual (UI, video, map, diagram, infographic).

### B. Approved Layout Exceptions
Break the split only for: Title/Hero, Quote, Comparison (symmetrical), KPI Dashboard, Architecture diagrams, Full-bleed, and Closing slides.

---

## 6. Spacing System
### Global Rhythm
- **Slide outer padding**: `px-12 py-10`
- **Major section gap**: `gap-8`
- **Internal content gap**: `gap-5` to `gap-6`
- **Tight metadata grouping**: `gap-2` to `gap-3`

### Card Rhythm
- **Supporting card padding**: `p-5` or `p-6`
- **Metric card padding**: `p-4` or `p-5`

---

## 7. Content Density Rules
- **One Message per Slide**: Each slide must communicate one primary idea.
- **Copy Limits**: Heading (1-3 lines), Sub-heading (1-2), Body (2-4, max 6), Feature bullets (3 max).
- **Visual Limits**: 1 primary visual, 2 supporting cards, 1 motion system.

---

## 8. Typography Hierarchy
- **Main Heading**: `text-5xl font-black text-white leading-tight tracking-tighter`
- **Sub-heading**: `text-xl md:text-2xl text-slate-400 font-light leading-relaxed`
- **Category Label**: `text-sm font-black text-emerald-500 uppercase tracking-[0.3em] font-mono underline decoration-emerald-500/50 underline-offset-8 decoration-2`
- **Body Text**: `text-lg text-slate-400 leading-relaxed font-normal`
- **Feature Title**: `text-base font-bold text-white mb-1`
- **Feature Description**: `text-base text-slate-500 leading-relaxed` (Standard 16px list description)
- **Feature Meta**: `text-xs text-slate-500 leading-relaxed`
- **Metric Value**: `text-2xl md:text-3xl font-black text-white`
- **Metric Label**: `text-xs uppercase tracking-[0.2em] text-slate-500`

---

## 9. Brand Voice & Copy Style
- **Feel**: Confident, technical, concise, outcome-driven, enterprise-grade.
- **Preferred**: Operational visibility, centralized monitoring, automated response, reliability at scale.
- **Avoid**: Vague hype, generic adjectives, long paragraphs.

---

## 10. Color System
- **Primary Dark**: `slate-950` (#020617)
- **Secondary Dark**: `slate-900` (#0f172a)
- **Action / Accent**: `blue-500` (#3b82f6)
- **Accent Glow**: `blue-400` (#60a5fa)
- **Alerts**: Amber/Red. **Success**: Green.

---

## 11. Background & Surface Styling
- **Backgrounds**: Dark, deep, dimensional. Use subtle radial gradients or soft vignettes.
- **Surfaces**: Subtle transparency and soft blur. Avoid over-frosted cards.

---

## 12. Container System
- **Primary Visual**: `rounded-3xl border border-slate-800/80 shadow-2xl overflow-hidden`
- **High-Impact Visual**: `rounded-3xl shadow-2xl overflow-hidden`
- **Supporting Card**: `rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm`
- **Metric Card**: `rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5`

---

## 13. Icon System (Lucide-React)
- **Primary**: `size-5`, **Secondary**: `size-4`, **Emphasis**: `size-6` or `size-7`.
- **Colors**: White/Slate (neutral), Blue (active), Amber/Red (alert).

---

## 14. Data Visualization Rules
- **KPI Cards**: 1 primary number, 1 label, 1 short descriptor.
- **Charts**: Limited color count, Blue emphasis, muted slate secondary, no nonessential chrome.
- **Topology**: Consistent node sizes and line thickness. Glow for active nodes only.

---

## 15. Demo Slide Rules
- **Max 3 callouts** per visual. One highlighted workflow per slide.
- **Labels**: Short and directive (e.g., "Real-time alert routing").

---

## 16. Motion System
- **Entrance**: Staggered (60-120ms), 300-500ms duration, fade + translate.
- **Emphasis**: `group-hover:scale-105 transition-transform`, icon glow, pulse for nodes.
- **Rule of One**: Only one dominant motion language per slide.

---

## 17. Video Treatment
- Use as foreground element, blend with UI: `bg-gradient-to-t from-slate-950/40`.
- Match corner radius (`rounded-3xl`).

---

## 18. Responsiveness & Presentation Safety
- Target 16:9, centered composition, avoid edge-critical content.
- Never rely on color alone for meaning. Keep text readable from a distance.

---

## 19. Asset Governance
- No blurry screenshots, consistent corner radius, same shadow language, high-res exports only.

---

## 20. Front-End Implementation Rules
- Reuse patterns, prefer configurable sections, avoid fragile absolute positioning, reduce complexity for stability.

---

## 21. QA Framework
### Design QA
Obvious message? One focal point? Consistent spacing? Text density controlled? Meaningful motion? Premium feel?

### Engineering QA
Reusable structure? Responsive? Performant? Efficient effects? Predictable behavior?

---

## 22. Default Tailwind Reference
- **Layout**: `grid grid-cols-12`, `col-span-5`, `col-span-7`, `gap-8`, `px-12 py-10`
- **Containers**: `rounded-3xl`, `rounded-2xl`, `border border-slate-800/80`, `shadow-2xl`, `bg-slate-900/70`, `backdrop-blur-sm`
- **Typography**: `text-4xl md:text-5xl font-black text-white`, `text-xl md:text-2xl text-slate-400`, `text-xs font-black text-blue-500 uppercase tracking-[0.3em]`
- **Effects**: `shadow-[0_0_20px_rgba(59,130,246,0.3)]`, `bg-gradient-to-t from-slate-950/40`, `group-hover:scale-105 transition-transform`

---

## 23. Governance
Current version: **v3**. New patterns must be documented.

---

## 24. Final Standard
It should feel like a **premium enterprise product**, a deliberate **software-driven visual system**, and a **confident story.** Never a generic template or a crowded collage.
