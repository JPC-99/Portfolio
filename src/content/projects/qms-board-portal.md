---
title: "QMS Board of Governors Microsite"
subtitle: "A private, role-aware WordPress microsite that centralizes board resources and makes governance materials easier to access."
category: "qms"
role: "UX/UI design, WordPress implementation, role-based interface logic, information architecture"
type: "Internal microsite · WordPress"
summary: "A private microsite that brings board and committee resources behind a single role-aware dashboard. Designed and built in WordPress, with a content model the QMS team can maintain themselves."
year: "2024–2025"
status: "Live (internal)"
tools: ["WordPress", "PHP", "WPCode", "CSS", "Figma"]
tags: ["UX/UI", "Implementation", "Information Architecture"]
featured: true
confidential: true
order: 1
confidentialityNote: "Details and visuals are redacted to protect private governance materials. The screenshot below shows the role-aware dashboard surface only. No real board documents, governance files, or member names are displayed."
hero:
  src: "../../assets/images/qms-board-portal/dashboard.png"
  alt: "Queen Margaret's School Board of Governors portal dashboard showing role-aware tiles for Board, Finance Committee, Governance Committee, Calendar, and an executive-only documents area."
---

## Overview

The Queen Margaret's School Board of Governors needed a single, predictable place for governance work. Materials lived in email, scattered SharePoint links, and personal folders, which slowed meeting prep and put pressure on the people maintaining the resources.

I designed and built a role-based WordPress microsite that brings the right materials forward for the right people: board members, committee members, executives, and the small team that keeps the content current.

## My role

End-to-end. UX/UI design, information architecture, role-based interface logic, WordPress implementation, and the visual system. I worked alongside the Headmaster, Board Chair, and committee leads, with input from IT on security and maintainability.

## Context

QMS has an active Board of Governors with Governance and Finance committees, plus executive-level work that needs to surface to a smaller group. The board uses the portal between and during meetings, often on mobile, often quickly.

A portal already existed at a private subdomain, but content discovery and role boundaries weren't doing enough of the work. Editors without deep WordPress experience also needed a safe way to update content without breaking anything.

## Problem

Three things were creating friction:

- **Scattered resources.** Governance materials lived across email, SharePoint, and personal links. Members spent time looking instead of preparing.
- **One-size-fits-all navigation.** Everyone saw the same options, even when most weren't relevant to their role.
- **Maintainer pressure.** Updates required a technical hand or risked breaking the layout. That bottleneck is invisible until you hit it on a meeting day.

## Users and stakeholders

- Board of Governors members
- Board Chair and Head of School
- Governance and Finance committee members
- Executive roles (Head of School, senior leadership)
- Admin, Editor, and Author-level staff who maintain content
- IT, focused on security and maintainability

## Constraints

- Private subdomain, no public marketing surface
- WordPress, with existing theme and plugin commitments
- Sensitive content that couldn't leak through caching, previews, or role mistakes
- Editors of varying technical comfort
- Limited budget for new plugins; preference for code we already understood

## Approach

I focused on three things that would do the most work: a role-aware dashboard, a tile-based layout people could scan in seconds, and a quietly defensible visual system built from the QMS palette.

### Role-aware dashboard

Rather than building one menu and hiding things, I built dashboard tiles whose visibility is driven by the user's role:

- **Board of Governors:** universal access for all governing roles
- **Finance Committee:** Finance, Board, and Calendar
- **Governance Committee:** Governance, Board, and Calendar
- **Calendar:** visible to all roles
- **CAIS · Documents Hub:** surfaces only for executive roles

Admin, Executive, and Editor roles see the full set, so the people maintaining the portal don't accidentally lose visibility into what other roles see.

### Information architecture

The dashboard is the spine. Each tile leads to a focused area with its own clear hierarchy. The calendar sits inside the same shell, so meeting prep, agendas, and dates aren't in separate worlds.

### Visual system

A small set of category accents borrowed from the QMS palette gives each surface a quiet identity without making the portal feel decorative:

- Finance: deep green (`#046852`)
- Governance: blue (`#005487`)
- Calendar: navy (`#172a54`)
- Board: QMS green (`#75bb43`)

Rounded corners, generous spacing, real focus states, and subtle hover lifts make tiles feel obviously interactive. That matters for first-time and infrequent users.

### Implementation

Built on the existing WordPress stack using WPCode for safe, reviewable PHP role checks, shortcodes for reusable components, and scoped CSS for the visual system. I leaned on the platform we already understood instead of adding new plugins.

Site-wide micro-interaction CSS handles card lift, image tile zoom, and visible focus states consistently across surfaces, so future tiles inherit the same polish without bespoke work each time.

## Key decisions

- **Role visibility, not role hiding.** Tiles are conditionally rendered rather than visually hidden, which keeps the experience clean and avoids accidental disclosure through inspect-element.
- **Tiles, not menus.** Dashboards beat dropdowns for monthly-use products. People who come back every 30 days don't want to remember where things are.
- **Borrow the brand, don't shout it.** QMS colours appear as category accents, not full-bleed branding, so the portal feels institutional and calm.
- **Edit-safe content.** Layouts work as plain WordPress blocks, so an Author-level editor can update a page without risking the structure.
- **Accessibility as part of the visual language.** Focus rings, contrast, and hit targets aren't optional polish. They're how a board member uses this on their phone at 7am.

## Accessibility and security considerations

- Real keyboard focus states on every interactive surface
- High contrast on text and category colours
- Mobile-first layout, because board work happens on phones more than people admit
- Role-based content gating, not just visual hiding
- Avoided plugins that introduced unnecessary attack surface
- No public previews of sensitive pages

## Outcome

Quantitative results from a private governance portal aren't appropriate to publish, so this case study focuses on qualitative outcomes:

- One predictable place for governance materials, instead of three
- A role-aware experience that puts each user's most-used resources first
- A maintainable content model that non-technical editors can keep current
- A visual system that quietly supports trust and clarity in a board context

## What I'd improve next

- A lightweight "what's new this month" surface so members landing the day before a meeting see relevant updates first
- Per-committee saved-search or recent-document patterns
- A small audit pass on long-running content to retire anything that's been replaced

## Reflection

The most useful design work on this project wasn't visual. It was figuring out where the friction actually lived: not at the page level, but at the navigation and role level. From there, the job was to build a small, defensible set of patterns that the editors and the board could both live with comfortably.
