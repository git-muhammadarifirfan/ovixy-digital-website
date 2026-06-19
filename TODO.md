# TODO List - Ovixy Digital Conversion Roadmap

This document outlines the steps for converting the Ovixy Digital landing page into a premium React + TypeScript + Tailwind + GSAP + Lenis website.

## Phase 1 — Project Audit & Setup ✅
- [x] Read and understand the custom styling specifications, responsive metrics, and aesthetic boundaries.
- [x] Create the initial `TODO.md` file.
- [x] Install external packages (`gsap`, `@gsap/react`, `lenis`) and verify setup.
- [x] Set descriptive parameters in `metadata.json`.

## Phase 2 — Asset & Styles Migration ✅
- [x] Migrate global typography, styling rules, and fonts (Bricolage Grotesque, Material Symbols/lucide icons) to React.
- [x] Implement appropriate styling sheets and Tailwind custom configurations.
- [x] Check Vite layout setup.

## Phase 3 — Component Refactor & Structured Data ✅
- [x] Create `/src/data/siteData.ts` representing high-quality mock data for projects, pricing, services, and testimonials based on the HTML templates.
- [x] Create `/src/components/Preloader.tsx` for premium minimalistic intro.
- [x] Create `/src/components/Navbar.tsx` for neo-brutalist sticky bar.
- [x] Create `/src/components/Hero.tsx` for responsive headline, intro CTA, and floating device image container.
- [x] Create `/src/components/SectionTitle.tsx` for visual subtitle titles.
- [x] Create `/src/components/ProjectCard.tsx` for showing detail-focused popups.
- [x] Create `/src/components/PricingCard.tsx` for structured packages details.
- [x] Create `/src/components/ServiceCard.tsx` for bento grids layout items.
- [x] Create `/src/components/Footer.tsx` with top bounds.

## Phase 4 — Lenis Smooth Scroll Integration ✅
- [x] Define global Lenis smooth scrolling via a React helper or lifecycle wrapper.
- [x] Configure integration between Lenis and GSAP ScrollTrigger to ensure seamless scrolling update events.

## Phase 5 — GSAP Animation System ✅
- [x] **Preloader animation**: Slide out or clip path reveal on complete, transitioning elegantly to the hero.
- [x] **Hero Parallax Reveal**: Staggered letters or words with background elements reacting smoothly.
- [x] **Staggered Text Reveal**: ScrollTrigger reveal for texts, headings, and descriptions using precise split offsets.
- [x] **Scroll Reveal Section**: Interactive card layouts displaying card-by-card staggered entrance animations.
- [x] **Button Neo-Brutalism Micro-motions**: Elevating hover & active states with offset shadows.

## Verification Phase ✅
- [x] Verify clean compilation via `npm run build` or `compile_applet`.
- [x] Review user instructions and confirm complete visual alignment.

