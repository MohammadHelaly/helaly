# helaly.dev

My personal portfolio website, developed using React.js.

## Tech Stack

- React 18 and TypeScript for the application UI.
- Vite for local development, production builds, and previewing static output.
- Tailwind CSS, PostCSS, and a bundled Manrope font for styling.
- Framer Motion for section and interaction animations.
- React Hook Form and Zod for contact form state and validation.
- TanStack React Query and Axios for contact form submission.
- Radix UI primitives for accessible dialog/notification behavior.
- SVGR through `vite-plugin-svgr` for importing SVG icons as React components.
- ESLint and Prettier, including Tailwind class sorting, for code quality and formatting.

## Project Structure

```text
├── public/
│   ├── assets/files/       # Downloadable files, including the CV
│   ├── assets/fonts/       # Manrope font files
│   └── assets/images/      # Portfolio and profile images
├── src/
│   ├── api/                # Axios client, React Query client, and API hooks
│   ├── assets/icons/       # SVG icons exported as React components
│   ├── components/         # Reusable UI sections and primitives
│   ├── data/               # Services, projects, skills, and timeline content
│   ├── lib/                # Shared hooks and utilities
│   ├── styles/             # Global CSS, Tailwind entry points, and fonts
│   ├── app.tsx             # Page composition
│   └── main.tsx            # React entry point
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Prerequisites

- Node.js 18 or newer.
- npm. This repository includes a `package-lock.json`, so npm is the expected package manager.

## Environment Variables

Create a local environment file when working with contact form submissions:

```bash
VITE_CONTACT_FORM_ENDPOINT=<your-contact-form-endpoint>
```

`VITE_CONTACT_FORM_ENDPOINT` currently points to a Getform endpoint that accepts a JSON payload with `name`, `email`, and `message`. The rest of the site can run without it, but the contact form needs this value to submit successfully.

## Runbook

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

By default, Vite serves the app at `http://localhost:3000`.

Build a production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the codebase:

```bash
npm run lint
```

Format files with Prettier:

```bash
npm run format
```

## Deployment

This repository is deployed through Vercel. The project is connected to Vercel, so pushes to the configured production branch automatically trigger a build and deployment.

The Vercel project uses the standard Vite settings, and `VITE_CONTACT_FORM_ENDPOINT` is configured in the Vercel project environment variables.

## Development Notes

- The `@` import alias resolves to `src`, as configured in `vite.config.ts`.
- SVG files in `src/assets/icons` can be imported as React components.
- Styling is primarily utility-first through Tailwind, with global styles in `src/styles`.
- Contact form validation happens on the client with Zod before React Query sends the mutation to Getform.
- The production build outputs static assets to `dist`, and Vercel handles the hosted deployment automatically after pushes.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
