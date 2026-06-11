---
title: "QMS Strategic Plan · Standalone Microsite"
subtitle: "An interactive single-page experience that turns a five-year strategic plan into something the community will actually read."
category: "qms"
role: "UX/UI design, interaction design, motion, front-end implementation, content design"
type: "Single-page interactive microsite"
summary: "A self-contained HTML microsite that presents Queen Margaret’s School’s 2026 strategic plan as a navigable, atmospheric experience: six pillars on a radial ring, each opening into illustrated nodes."
year: "2025–2026"
status: "Live"
tools: ["HTML", "CSS", "JavaScript", "Custom SVG iconography", "Figma", "Adobe Creative Cloud"]
tags: ["UX/UI", "Interaction Design", "Motion", "Front-end", "Information Architecture"]
featured: true
order: 2
hero:
  src: "../../assets/images/qms-strategic-plan/01-overview.png"
  alt: "QMS Strategic Plan 2026 microsite overview view, showing the six pillars arrayed around a central crest over a dawn forest scene."
gallery:
  - src: "../../assets/images/qms-strategic-plan/02-pillar.png"
    alt: "A single pillar selected on the radial navigator, with its sub-nodes fanned out and the ambient horizon tinted by the active pillar’s colour."
    caption: "Pillar selection. Sub-nodes fan out, and the ambient colour follows the active pillar."
    span: "full"
  - src: "../../assets/images/qms-strategic-plan/03-node.png"
    alt: "An individual node opened into a focused detail card with photography, headline, and a short narrative; the third interaction level of the microsite."
    caption: "Node detail. Focused card, photograph, headline, narrative. Esc to back out."
    span: "full"
---

## Overview

A school’s strategic plan is one of the most important documents it produces, and one of the least read. The usual format is a PDF that lands in an inbox once and never gets opened again. For QMS’s 2026 plan, *Growing Change Together*, I designed and built something that asks to be returned to: a self-contained interactive microsite that presents the plan as a navigable, atmospheric experience.

Six pillars sit on a radial ring around the QMS crest. Each pillar opens into a set of illustrated nodes with photography, headlines, and short narratives. The whole experience ships as a single HTML file with every asset inlined, so it can be emailed, archived, or hosted anywhere without a server.

## My role

End to end. UX/UI design, interaction design, motion, front-end implementation in HTML/CSS/JS, content design and editorial pacing, custom SVG iconography, and the production work to ship it as a single distributable file. I worked with the Headmaster and senior leadership on the plan’s structure and tone.

## Problem

Strategic plans have a content problem and a delivery problem.

- **Content problem.** The plan is intentionally broad: five years of intent across purpose, values, programs, people, facilities, and goals. In a PDF, that breadth flattens into a single grey wall of text. Readers can’t tell what’s a north star and what’s a tactic.
- **Delivery problem.** PDFs get downloaded, filed, and forgotten. The plan needed a home that anyone (board member, parent, staff, prospective family) could revisit on any device without hunting for a file.

## Users and audiences

- **Board of Governors.** Accountability, governance fit.
- **Senior leadership and faculty.** Alignment, operational planning.
- **Parents and prospective families.** What the school stands for, where it’s going.
- **Staff and admissions agents.** A single source they can show or send.

## Constraints

- Must ship as **a single HTML file** so it can be emailed, archived to the board portal, and viewed offline.
- **No build server, no runtime dependencies.** Everything inlines: fonts, photography, scripts, SVG icons.
- The visual language had to honour the QMS brand without dressing the plan up as a marketing campaign.
- **Accessible.** The audience includes board members on iPads, parents on phones, and staff using keyboards.

## Approach

I worked the problem from three angles at once: information architecture, atmosphere, and interaction.

### Information architecture

Six pillars in a fixed order that reads as a sentence:

> Purpose · Values · Programs · People · Facilities · Goals

Each pillar has its own short headline and a set of "nodes": concrete intentions like *Be curious*, *Boarding houses renovation*, and *International exchanges*. The radial layout isn’t decorative. It’s a way to show that the pillars are siblings, not steps. There is no first or last.

Inside each pillar, nodes are presented as a card-deck the user can step through. Photography anchors each node so the plan reads less like a policy document and more like a school.

### Atmosphere

The plan’s epigraph is *Growing Change Together*. I built that idea into the scene itself: a dawn-lit forest with parallax tree silhouettes, drifting mist, an animated starfield, and a horizon glow tinted by whichever pillar is active. As the visitor moves between pillars, the ambient colour cross-fades using `@property`-backed CSS transitions.

It’s atmospheric, not decorative. The scene exists because the plan is about a place (Vancouver Island) and about a five-year horizon that should feel hopeful, not corporate.

### Interaction

- **Radial navigator.** Pillars sit around a central crest. Click or arrow-key to move between them; the active pillar lights up and the ambient colour follows.
- **Satellite nodes.** Selecting a pillar fans out a row of nodes. Each node opens a focused card with the headline, supporting paragraph, and photograph.
- **Three keyboard levels.** Arrow keys to navigate the ring, Enter to open a node, Esc to back out. The whole thing is operable without touching the mouse.
- **One screen, no scrolling required.** The plan fits a viewport. Depth comes from interaction, not from a long page.

## Key decisions

- **Single-file delivery over a hosted site.** This is what made the project portable. The plan can live on the board portal, in an email attachment, or on a USB stick at a community meeting, and behave identically.
- **Atmosphere as content.** The scene reinforces the plan’s tone (calm, generational, place-rooted) more honestly than a stock-photo header could.
- **Tactile motion.** Star drift, mist, and parallax run on `transform` and `opacity` only. Smooth on phones, never blocking interaction.
- **No third-party libraries.** Zero npm dependencies in the deliverable. Easier to audit, easier to archive.
- **Editorial restraint.** Each node holds two to three sentences. The plan can be read in five minutes or sat with for an hour.

## Accessibility considerations

- The radial ring is a real `role="tablist"` with `role="tab"` pillars and `aria-selected` state.
- Full keyboard support (arrow keys, Enter, Esc) with visible focus rings.
- Decorative scene elements are `aria-hidden`.
- Photography includes descriptive alt text.
- Colour-coding never carries meaning on its own. Every active state is also a text label and a movement.
- Respects `prefers-reduced-motion`. The parallax and mist hold still, and transitions become instant.

## Outcome

The plan landed differently than a PDF would have. People returned to it, navigated between pillars, and used it as a reference in their own conversations. For the school, it became a piece of communication infrastructure rather than just a document.

Quantitative engagement metrics from a school strategic plan aren’t appropriate to publish here. Qualitatively:

- The plan became something the community engaged with rather than archived.
- The single-file format meant it could live in every place a stakeholder might look (board portal, email, internal share) without breaking.
- The atmospheric, tactile design reinforced the plan’s tone in a way a PDF couldn’t.

## What I’d improve next

- A "deep-dive" mode that lets a reader follow a single pillar across the year. For example, *Programs* with quarterly updates.
- Per-pillar shareable URLs so a parent can send a specific node to a friend.
- An ambient-audio toggle for the scene: soft forest sound at very low volume, opt-in only.

## Reflection

Most strategic plans get one read, on the day they’re released. This one was designed to be the thing a board member opens before a meeting, a parent shows a friend, and a teacher revisits in September. The job wasn’t to make a strategic plan beautiful. It was to give the plan a shape that matches what it’s trying to be: a five-year invitation, not a five-year file.
