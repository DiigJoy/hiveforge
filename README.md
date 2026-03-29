# AI Workflow Orchestration Landing Page

This repository contains the React + Vite landing page for a company that sells custom AI workflow orchestration services.

The business model behind the site is documented in [ai_orchestration_business_doc.html](/mnt/c/Estudios/IA_weon/ai_orchestration_business_doc.html). The website turns that service positioning into a deployable marketing page for Vercel.

## Stack

- React 18
- Vite 5
- Plain CSS
- Vercel free tier deployment

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- [src/App.jsx](/mnt/c/Estudios/IA_weon/src/App.jsx): landing page content and section structure
- [src/styles.css](/mnt/c/Estudios/IA_weon/src/styles.css): visual system and responsive layout
- [index.html](/mnt/c/Estudios/IA_weon/index.html): app entry and metadata
- [vercel.json](/mnt/c/Estudios/IA_weon/vercel.json): Vercel framework configuration

## Deployment To Vercel

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Vercel should detect `vite` automatically.
4. Use the default build settings:

```bash
npm run build
```

Output directory:

```bash
dist
```

## Content To Replace Before Launch

- Update the company name in [src/App.jsx](/mnt/c/Estudios/IA_weon/src/App.jsx)
- Replace `hello@example.com` with the real contact email
- Add the final domain, favicon, and social preview metadata
- If needed, connect the CTA to a form, Calendly, or CRM flow
