# Northstar Sessions

A responsive planning-session registration page for Robert Jenkins, built for SkillNexa job `6yu9lANrLyYmpVibYhtc`. The page uses React 19.2, Vite 6.4, JavaScript, CSS Modules, Arial system typography, and the supplied logo and WebP illustration.

## Run locally

Use Node.js 22.12 or later and npm. Run these commands from this directory:

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. To check and preview the production build:

```sh
npm run lint
npm run build
npm run preview
```

Vite writes the static site to `dist/`. The starter's package manifest, lockfile, Airbnb ESLint configuration and React bootstrap are preserved. The HTML entry point also includes the supplied logo as the favicon.

## Structure

| Path | Responsibility |
| --- | --- |
| `src/App.jsx` | Page landmarks and skip link |
| `src/components/Header/` | Brand, byline and primary anchor navigation |
| `src/components/Hero/` | Introductory copy, registration CTA and illustration |
| `src/components/Features/` | Three ordered feature cards |
| `src/components/RegistrationForm/` | Controlled fields, validation, local storage and feedback |
| `src/components/Footer/` | Brand credit and closing statement |
| `src/assets/`, `src/page-copy.json` | Supplied production artwork and copy |
| `src/global.css` | Reset, design tokens, shared gutters and focus styles |
| `netlify.toml` | Static build and publish settings |
| `evidence/` | Browser screenshots and layout measurements |

## Responsive layout

| Width | Hero | Features | Registration | Header navigation |
| --- | --- | --- | --- | --- |
| Below 640 px | One column | One column | One column | Hidden |
| 640 to 1023 px | One column | Two columns | One column | Visible |
| 1024 px and above | Two columns | Three columns | Two columns | Visible |

Mobile gutters grow from 16 px at 320 px to 24 px at 390 px. Tablet uses 32 px gutters. Desktop content is centered with a maximum width of 1120 px and at least 32 px gutters. Images have explicit intrinsic dimensions and scale proportionally.

## Registration and accessibility

Submit validates the trimmed 2 to 80 character name, a plausible email of up to 254 characters without internal whitespace, one of Student, Professional or Other, and checked storage consent. Errors are associated with the corresponding labels and fields, and focus moves to the first invalid field.

A valid submission writes one JSON record to `localStorage["northstar.registration.v1"]`. It contains `fullName`, trimmed lowercase `email`, `role`, `consent: true` and an ISO `savedAt`. Reload restores a valid registration. Update prefills the form and replaces the record on save. Remove clears the single key and resets the fields. A storage error leaves the editor usable and announces the failure. No backend or external requests are required for registration.

The page has a skip link, landmarks, one H1, native controls, visible keyboard focus, inline validation with `aria-invalid` and `aria-describedby`, and live regions for registration status and storage errors.

## Build size

Measured on Node 24.12.0 and npm 11.6.2. All sizes are uncompressed bytes. The JavaScript includes the inline header logo. The favicon is a separate emitted copy of the same supplied mark.

| Asset | Bytes |
| --- | ---: |
| HTML | 605 |
| CSS | 7,302 |
| JavaScript including React and logo | 203,843 |
| Hero WebP | 7,834 |
| SVG favicon | 203 |
| **Total** | **219,787** |

The WebP is below 100 KB and the initial build is below 500 KB.

## Deployment

Deploy as a static Vite project using the repository root. Netlify can read the supplied configuration for `npm run build`, output directory `dist`, and Node 22. See [submission steps](SUBMISSION_STEPS.md) for the private GitHub repository, production verification, Google Drive sharing and SkillNexaHub submission.

## Verification

See [registration results](Registration_Results.csv), [responsive audit](Responsive_Audit.csv), [completion note](COMPLETION_NOTE.txt) and the `evidence/` folder. The production preview is the local test target. Hosted verification and reviewer access are recorded separately in the completion note.

The final production preview passed all 10 supplied registration cases and all eight responsive viewport checks in headless Chrome 157.0.8103.80. The browser tests checked focus, field error associations, the live-region content, anchor navigation, image loading and console errors. Physical devices and screen-reader output were not tested.

At 1440 and 390 px, the measured illustration, CTA, feature cards, registration card, name input and save button were within 2.5 px of the reference bounds. The app centers the CTA labels and uses native select and checkbox controls. See [design measurements](evidence/DESIGN_COMPARISON.txt).
