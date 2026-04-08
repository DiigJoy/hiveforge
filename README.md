# HiveForge Landing Page

This repository contains the React + Vite landing page for HiveForge, a company that sells custom AI workflow orchestration services.

The business model behind the site is documented in [ai_orchestration_business_doc.html](./ai_orchestration_business_doc.html). The website turns that service positioning into a deployable marketing page for Vercel.

## Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
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

- [src/App.tsx](./src/App.tsx): landing page content and section structure
- [src/index.css](./src/index.css): Tailwind entry and base styles
- [index.html](./index.html): app entry and metadata
- [vercel.json](./vercel.json): Vercel framework configuration

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

- Replace `hello@example.com` with the real contact email
- Add the final domain and social preview metadata
- If needed, connect the CTA to a form, Calendly, or CRM flow
