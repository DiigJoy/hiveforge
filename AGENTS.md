# AGENTS.md

## Project Purpose

This repository is the marketing landing page for a company that sells custom AI workflow orchestration services.

The website is not the product itself. The website sells the service described in [ai_orchestration_business_doc.html](./ai_orchestration_business_doc.html).

The current stack is:

- React
- Vite
- TypeScript
- Tailwind CSS
- Vercel free tier deployment

## Primary Goal

Build a high-conviction landing page that explains the service clearly, looks credible for software and tech buyers, and can expand into a multilingual company site without rework.

## Required Site Structure

The landing page must include these permanent layout sections:

- Header
- Main landing page sections
- Footer

### Header requirements

The header should include:

- Company name or logo
- Primary navigation links
- Language selector
- Main CTA

The header should work on desktop and mobile. If a mobile menu is added, keep it simple and fast.

### Footer requirements

The footer should include:

- Company name
- Short positioning statement
- Navigation links
- Contact link or email
- Language-aware copyright text

The footer should exist on every public page variation, including future inner pages.

## Internationalization Requirements

The project must support three languages:

- English
- Spanish
- Portuguese

Use explicit locale codes:

- `en`
- `es`
- `pt`

### i18n rules

- Do not hardcode user-facing copy directly inside UI components if it will need translation.
- Store text in structured translation dictionaries.
- Keep translation keys stable and semantic.
- Prefer one shared content model for all languages instead of duplicating component logic.
- The selected language should control all visible marketing copy, navigation labels, CTA text, and footer content.
- Language switching should work cleanly on the client without breaking layout.

### Suggested translation structure

Use a structure similar to:

```ts
src/i18n/messages.ts
src/i18n/types.ts
src/i18n/useLocale.ts
```

Suggested message shape:

```ts
type Locale = 'en' | 'es' | 'pt'

type Messages = {
  header: {
    nav: {
      solution: string
      process: string
      contact: string
    }
    cta: string
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
  }
  footer: {
    statement: string
    contactLabel: string
    copyright: string
  }
}
```

## Content Guidelines

- Keep the message focused on replaced workflows, not generic AI hype.
- Prioritize clarity for technical buyers.
- Emphasize on-premise or client-environment deployment.
- Emphasize measurable ROI, governance, and institutional memory.
- Avoid vague SaaS language if the offer is still service-led.
- English copy is not the only source of truth. Spanish and Portuguese should read naturally, not like literal translations.

## UI and Design Guidelines

- Preserve the current premium, technical, dark visual direction unless the brand changes.
- Use Tailwind utilities for layout and styling.
- Keep reusable layout patterns extractable into components.
- Prefer small presentational components over one oversized page file as the site grows.
- Keep typography and spacing consistent across all locales, including longer Spanish and Portuguese strings.

## Recommended Component Direction

As the project expands, split the landing page into components such as:

- `Header`
- `Hero`
- `TrustStrip`
- `OfferSection`
- `ArchitectureSection`
- `IndustriesSection`
- `ProcessSection`
- `Footer`
- `LanguageSwitcher`

## Routing Guidance

If routing is introduced later:

- Keep `/` as the main landing page
- Support locale-aware routing only if it adds real value
- For now, client-side locale state is enough unless SEO for each language becomes a priority

## SEO and Deployment Notes

- The final site should include per-language metadata when i18n is implemented more fully.
- Vercel deployment should remain static-friendly.
- Avoid adding unnecessary backend complexity for the first version.

## Immediate Next Tasks

1. Add a real `Header` component with navigation and language switcher.
2. Add a real `Footer` component.
3. Move all landing page copy into translation dictionaries for `en`, `es`, and `pt`.
4. Refactor the page into reusable sections and wire them to the active locale.
5. Replace placeholder contact information with real company details.

## Working Rule

Any new UI work on this repository should assume multilingual support is required. Do not add new user-facing copy in a way that makes later translation harder.
