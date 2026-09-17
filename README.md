# GraphicsIdea

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2.35-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/Build-Passing%20(85%2F85%20Pages)-emerald)](https://github.com/Daimx1214/GraphicsIdea)

**GraphicsIdea** is an open, transparent, and verified B2B discovery marketplace connecting funded founders, CTOs, and product teams with audited software engineering firms, boutique design studios, marketing agencies, and independent senior specialists.

Unlike legacy freelance bidding platforms filled with fake reviews, middleman commissions, and race-to-the-bottom hourly rates, GraphicsIdea provides direct client-to-provider contracts, verified GitHub codebase audits, published pricing ranges, and zero platform take rate.

---

## Key Features

- **Independently Audited Directory**: Filter vetted providers across categories, technologies, hourly rates, team sizes, and minimum budgets.
- **Side-by-Side Comparison Tray**: Compare up to 4 agencies or specialists simultaneously with a persistent floating comparison drawer and detailed modal breakdown.
- **Interactive Multi-Step Project Intake (`/post-project`)**: Smart scoping questionnaire that matches founders with suitable providers based on technical requirements and timeline.
- **Comprehensive Provider Application Portal (`/onboarding`)**: 11-step vetting intake for agencies and senior contractors to submit portfolio repositories, business registration, and client references.
- **14 Dedicated Service Hubs**: In-depth landing pages covering Web Development, UI/UX, AI/ML, Cloud DevOps, Security Auditing, SEO, and more, complete with realistic market pricing and buyer guides.
- **8 Technology Verticals**: Specialized landing pages for React, Next.js, Node.js, Python, .NET, PHP, WordPress, and Shopify.
- **8 Industry Verticals**: Tailored directories addressing compliance and system requirements for FinTech, Healthcare (HIPAA), eCommerce, SaaS, Logistics, EdTech, PropTech, and LegalTech.
- **Verified Case Studies**: Production breakdowns with tangible metrics (query latency drops, checkout conversion lifts, pipeline ARR).
- **100% Pre-rendered Static Delivery**: All 85 pages are statically generated (SSG) at build time for instant page loads and zero server-side cold starts.
- **Search Engine Optimized**: Dynamic XML sitemap generator, `robots.txt`, rich OpenGraph metadata, and structured JSON-LD schemas.

---

## Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router + Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type-safety across all entities and API mockups)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with a custom sapphire brand palette, extended box-shadow utilities, and subtle micro-interactions
- **Icons**: [Lucide React](https://lucide.dev/) (Lightweight, accessible SVG icons)
- **State Management**: React Context API (`CompareContext`) for managing provider comparisons across routes
- **Performance**: Zero external heavy libraries, pure modular CSS, optimized font loading with `next/font`

---

## Project Structure

```text
GraphicsIdea/
├── public/                     # Static public assets
├── src/
│   ├── app/                    # Next.js App Router routes (85 SSG pages)
│   │   ├── about/              # Backstory, vetting philosophy, and mission
│   │   ├── blog/               # Editorial guides and technical articles
│   │   │   └── [slug]/         # Individual blog post pages
│   │   ├── case-studies/       # Real-world engineering & design case studies
│   │   │   └── [slug]/         # Technical outcome breakdowns
│   │   ├── categories/         # Directory categories (Development, Design, etc.)
│   │   │   └── [slug]/         # Category-specific provider listings
│   │   ├── contact/            # Support, advisory, and partner inquiry form
│   │   ├── cookies/            # Cookie policy
│   │   ├── faq/                # Categorized platform and hiring FAQs
│   │   ├── for-providers/      # Value proposition and onboarding criteria
│   │   ├── how-it-works/       # Step-by-step buyer and provider journey
│   │   ├── industries/         # Domain directories (Finance, Healthcare, etc.)
│   │   │   └── [slug]/         # Industry-specific provider listings
│   │   ├── onboarding/         # 11-step provider application workflow
│   │   ├── page.tsx            # High-conversion platform homepage
│   │   ├── post-project/       # 7-step client project scoping wizard
│   │   ├── privacy/            # Privacy policy & data protection
│   │   ├── providers/          # Complete searchable directory with filters
│   │   │   ├── [slug]/         # Comprehensive provider profile & portfolio
│   │   │   ├── agencies/       # Dedicated agency hub
│   │   │   ├── designers/      # Dedicated design studio hub
│   │   │   ├── developers/     # Senior developer hub
│   │   │   ├── marketing-experts/ # Growth and SEO specialist hub
│   │   │   └── software-companies/ # Software engineering firm hub
│   │   ├── reviews/            # Verified client testimonials and reviews
│   │   ├── robots.ts           # Dynamic robots.txt generation
│   │   ├── services/           # Service catalog
│   │   │   └── [slug]/         # Deep service pages with pricing guides
│   │   ├── sitemap.ts          # Automated XML sitemap generation
│   │   ├── technologies/       # Tech-specific directories
│   │   │   └── [slug]/         # Technology provider listings
│   │   ├── terms/              # Platform terms of service
│   │   ├── globals.css         # Base styles, Tailwind directives & scrollbars
│   │   └── layout.tsx          # Root layout with Navbar, Footer & Providers
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # Atomic elements (Button, badges, inputs)
│   │   ├── Breadcrumbs.tsx     # Accessible hierarchical breadcrumb trail
│   │   ├── ComparisonTray.tsx  # Floating multi-provider comparison drawer
│   │   ├── Footer.tsx          # 4-column footer with directory navigation
│   │   ├── Navbar.tsx          # Header with mega-menu and search modal
│   │   ├── ProviderCard.tsx    # Standardized provider card with verified metrics
│   │   └── ServiceCard.tsx     # Interactive service summary card
│   ├── context/
│   │   └── CompareContext.tsx  # Provider comparison tray state & handlers
│   └── lib/
│       ├── data.ts             # Strongly-typed platform datasets and entities
│       └── utils.ts            # Utility helpers (`cn`, formatting, clsx)
├── .gitignore                  # Git ignore rules for node_modules, .next, and env
├── next.config.mjs             # Next.js configuration
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS Tailwind plugins
├── tailwind.config.ts          # Custom brand palette, fonts, and shadows
└── tsconfig.json               # TypeScript configuration with strict mode
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your development environment:
- **Node.js**: `v18.17.0` or higher (LTS recommended)
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Daimx1214/GraphicsIdea.git
   cd GraphicsIdea
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to explore the platform.

---

## Available Scripts

In the project root, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server on `http://localhost:3000` with hot reloading. |
| `npm run build` | Compiles the TypeScript code and creates an optimized static production build (85 routes). |
| `npm run start` | Serves the production build locally. |
| `npm run lint` | Runs Next.js ESLint checks to identify formatting and code quality issues. |

---

## Core Workflows

### 1. Provider Comparison Tray
Users can click **"Compare"** on any provider card across the directory. The floating comparison bar docks to the bottom of the viewport, tracking selected providers and allowing side-by-side inspection of:
- Vetting verification status
- Hourly rate & minimum project sizes
- Team size & year founded
- Core tech stacks & specializations
- Direct proposal links

### 2. Client Project Matching (`/post-project`)
Founders answer a 7-step scoping questionnaire covering:
- Primary service discipline
- Tech stack requirements
- Estimated budget range
- Desired delivery timeline
- Project specifications and contact details
Upon submission, the request routes directly to matching verified partners.

### 3. Provider Vetting Portal (`/onboarding`)
Agencies and specialists submit:
- Business registration and tax identification
- Public GitHub/GitLab repositories for code quality inspection
- Live project URLs and client reference contacts
- Core disciplines, rate structures, and availability

---

## Design System & Theme

- **Primary Brand Color**: Sapphire Blue (`#1d4ed8` / `#1e40af`)
- **Accent Tones**: Emerald Green (`#10b981`) for verified badges and positive metrics
- **Surface Neutrals**: Slate palette (`#f8fafc` background, `#0f172a` headings, `#475569` body text)
- **Dark Mode Surfaces**: Rich midnight navy (`#020617` / `#0b132b`) for immersive footer sections and hero callouts
- **Typography**: Inter / system UI font stack with high legibility across mobile and desktop

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more details.
