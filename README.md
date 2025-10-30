# DubMatch Official Website

DubMatch is the AI-powered dating app that helps college students skip endless swipes and actually meet their crush in person. This repository contains the modern React + TypeScript marketing site used for the launch waitlist.

## Features
- Apple-inspired visual language with Tailwind CSS and generous white space
- Hash-based routing powered by React Router for GitHub Pages deployments
- Dynamic countdown timer to the Valentine’s Day 2026 launch
- Hero section with rotating “polaroid” imagery and subtle noise texture
- Scroll-triggered reveal animations for insights and how-it-works sections
- Formspree-backed waitlist modal with `.edu` email validation and success state
- Responsive layouts tuned for mobile, tablet, and desktop

## Getting Started
```bash
npm install
npm run dev
```

Open the app at `http://localhost:5173`. Navigation is handled client-side via `HashRouter`, so routes appear as `/#/about`—mirroring the production experience on static hosting.

## Production Build
```bash
npm run build
npm run preview
```

The optimized assets live in `dist/`. The Vite config sets `base: './'` so bundle paths resolve correctly on GitHub Pages and similar static hosts.

## Formspree Integration
The waitlist modal submits to Formspree. Provide your form endpoint by creating a `.env` file:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Without this environment variable the form falls back to a placeholder endpoint and will not deliver submissions.

## Deployment Notes
- Hash-based routing avoids 404s on GitHub Pages—no extra 404.html rewrites required.
- Update the optional `homepage` entry in `package.json` to match your deployed URL if you use automated deployments.
- A basic GitHub Actions workflow can install dependencies, run `npm run build`, and publish the `dist/` directory to Pages.

## Project Structure
```
src/
 ├── components/   // Reusable UI elements (Navbar, Hero, Countdown, WaitlistModal, etc.)
 ├── pages/        // Routed pages: Home and About
 ├── hooks/        // Custom hooks (e.g., scroll reveal)
 ├── App.tsx       // Router wiring + shared layout
 ├── main.tsx      // HashRouter bootstrap
 └── index.css     // Tailwind layers and global styling
```

## License
© 2025 DubMatch. All rights reserved.
