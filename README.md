<div align="center">

# Version X

### Digital Innovation Studio — Websites · Mobile Apps · Software Systems · AI Solutions

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Production-ready corporate website** built with modern web standards, bilingual support, and a scalable design system.

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Overview

**Version X** is a full-featured corporate website for a digital innovation studio specializing in high-performance websites, mobile applications, enterprise software systems, and AI-powered solutions.

The project demonstrates **clean architecture**, **type-safe internationalization**, and **premium UI/UX** patterns inspired by leading SaaS brands — with smooth animations, dark mode, and full RTL/LTR support.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🌐 **Bilingual (EN / AR)** | Full English & Arabic dictionaries with instant locale switching |
| ↔️ **RTL / LTR Ready** | Automatic `dir` and `lang` attributes via `LocaleProvider` |
| 🎨 **Design System** | CSS variables, gradients, glassmorphism, and semantic tokens |
| 🌙 **Dark Mode** | System-aware theme with persistent `localStorage` preference |
| 🎬 **Animations** | Framer Motion — scroll reveals, counters, mobile menu transitions |
| 📱 **Responsive** | Mobile-first layout with adaptive navigation |
| 🔍 **SEO Ready** | Per-page `metadata` exports (App Router) |
| ⚡ **Performance** | Next.js 16 App Router, `next/image`, static generation |

---

## 🗂️ Pages

| Route | Description |
|-------|-------------|
| `/home` | Hero, services overview, stats, call-to-action |
| `/about` | Story, vision & mission, values, team preview |
| `/services` | Service grid, process, tech stack, why choose us |
| `/projects` | Filterable portfolio with category browsing |
| `/team` | Team members, skills, social links, stats |
| `/contact` | Contact form, info cards, map, FAQ |

---

## 🛠️ Tech Stack

```
Next.js 16        App Router · Server & Client Components
React 19          Latest concurrent features
TypeScript 5      Strict typing across data, i18n & UI
Tailwind CSS v4   @theme inline · CSS variables · utilities
Framer Motion     Page animations & interactive UI
Lucide React      Consistent icon system
```

---

## 🏗️ Project Structure

```
src/
├── app/                    # App Router pages & global styles
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── projects/
│   ├── team/
│   ├── contact/
│   ├── layout.tsx
│   └── globals.css         # Design system & utility classes
│
├── components/
│   ├── home/               # Hero, Services, Stats, CTA
│   ├── about/              # Story, Values, Vision, Team preview
│   ├── services/           # Grid, Process, Technologies
│   ├── projects/           # Filters, Grid, Project cards
│   ├── team/               # Grid, Stats, Join CTA
│   ├── contact/            # Form, FAQ, Map, Sidebar
│   ├── layout/             # Header, Footer, BrandLogo
│   └── icons/              # Custom social & dev icons
│
├── data/                   # Structural data (ids, icons, hrefs)
├── types/                  # Shared TypeScript interfaces
├── i18n/
│   ├── dictionaries/       # en.ts · ar.ts
│   ├── config.ts           # Locales & direction
│   ├── translate.ts        # Type-safe translator
│   └── get-dictionary.ts
│
├── providers/
│   └── LocaleProvider.tsx  # Locale state · html lang/dir
└── hooks/
    └── useTranslation.ts   # t() · dictionary · toggleLocale
```

---

## 🌍 Internationalization

The i18n system is **fully type-safe**:

```tsx
const { t, dictionary, locale, toggleLocale, isRTL } = useTranslation();

// Dot-notation keys with autocomplete
t('nav.home');
t('projects.items.neura-platform.title');

// Nested content from dictionary
dictionary.services.items.webDevelopment.features.map(...);
```

- **Locales:** `en` (LTR) · `ar` (RTL)
- **Persistence:** `localStorage`
- **Pattern:** Structural data in `src/data/` + translated strings in dictionaries

---

## 🎨 Design System

Defined in `globals.css` with Tailwind CSS v4 `@theme inline`:

| Token | Usage |
|-------|-------|
| `--primary-*` | Royal Blue → Deep Navy scale |
| `--secondary-*` | Electric Purple → Violet scale |
| `--accent` | Bright Cyan highlights |
| `--background` / `--foreground` | Semantic surfaces |
| `--gradient-hero` | Brand gradient (cyan → blue → purple) |

**Utility classes:** `.gradient-text` · `.gradient-bg` · `.glass` · `.card-glow` · `.hover-lift` · `.section-padding` · `.container-custom`

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.18+ (recommended: 20 LTS)
- **npm** 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/version-x.git
cd version-x/my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** — the app redirects to `/home`.

### Build & Production

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

---

## 📸 Screenshots

> Add screenshots of Home, Services, Projects, and Contact pages here.

```
public/
├── photo_5846002750095822271_y.jpg   # Brand logo
├── projects/                          # Project thumbnails
└── team/                              # Team avatars
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary to **Version X**. All rights reserved.

---

<div align="center">

**Built with ❤️ by Version X**

*Apps · Websites · Systems · AI Solutions*

</div>
