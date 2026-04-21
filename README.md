# Accredian Enterprise — Partial Clone

A pixel-faithful partial clone of [enterprise.accredian.com](https://enterprise.accredian.com) built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**.

---

## 🚀 Live Demo

> 🔗 _Deploy to Vercel and paste your link here_

---

## 📦 Setup Instructions

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd clone_accredian

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

---

## 🏗️ Project Structure

```
src/
└── app/
    ├── page.tsx          # Root page — composes all sections
    ├── layout.tsx        # Root layout with font & metadata
    ├── globals.css       # Global styles, ticker animation, card-hover utility
    │
    ├── Navbar.tsx        # Sticky navbar with dropdown & mobile menu
    ├── Hero.tsx          # Hero section with animated dashboard card
    ├── StatsBar.tsx      # Key stats + animated logo ticker
    ├── LeadForm.tsx      # Lead capture form (bonus feature)
    ├── Programs.tsx      # Filterable program cards
    ├── Howitworks.tsx    # 4-step process section
    ├── Testimonials.tsx  # Carousel testimonials
    ├── Whyaccredian.tsx  # Feature grid with scroll animation
    ├── Footer.tsx        # Footer with CTA banner + links
    │
    └── api/
        └── leads/
            └── route.ts  # POST /api/leads — lead capture API
```

---

## 🧠 Approach Taken

### Architecture
- **Next.js App Router** with Client Components (`"use client"`) for interactive sections and Server Components for static ones.
- **Single-page layout** — all sections on one scrollable page with smooth anchor navigation.
- **Reusable data arrays** — programs, testimonials, features, nav links are declared as plain JS arrays at the top of each component, making content updates trivial.

### Styling
- **Tailwind CSS v4** utility-first throughout.
- Custom CSS in `globals.css` for the logo ticker keyframe animation (`.ticker-content`) and card-hover lift effect (`.card-hover`).
- Consistent blue/indigo gradient system matching Accredian's brand.

### Component Highlights

| Component | Key Techniques |
|-----------|---------------|
| `Navbar` | Scroll-aware background transition, hover dropdown, mobile slide-out |
| `Hero` | CSS entrance animation via `useEffect` + `useRef`, floating stat cards |
| `StatsBar` | CSS `@keyframes` marquee ticker that pauses on hover |
| `Programs` | Client-side filter with animated card grid |
| `Testimonials` | Circular index navigation with dot indicators + mini avatars |
| `WhyAccredian` | `IntersectionObserver` staggered card reveal |
| `LeadForm` | Full validation, async POST to `/api/leads`, success/error states |

### API Integration
`POST /api/leads` — Next.js Route Handler that:
1. Validates required fields server-side (name, email, company, interest)
2. Validates email format with regex
3. Stores leads in-memory with timestamps and unique IDs
4. Returns structured JSON responses with appropriate HTTP status codes

> **Note:** In-memory storage resets on server restart. For production, swap for a database (PostgreSQL via Prisma, MongoDB, or Supabase).

---

## 🤖 AI Usage (Claude & GitHub Copilot)

### Where AI Helped

| Area | AI Contribution |
|------|----------------|
| **Component scaffolding** | Generated initial JSX structure for Hero, Navbar, Footer |
| **Tailwind class suggestions** | Autocomplete for complex responsive layouts and gradient combinations |
| **Animation code** | `IntersectionObserver` logic in `WhyAccredian`, Hero entrance animation |
| **API route boilerplate** | Initial structure for the `/api/leads` Next.js route handler |
| **README template** | Starting point for this documentation |

### What I Modified / Improved Manually

- **Re-ordered page sections** — Corrected StatsBar placement (was after Footer; moved to after Hero)
- **Fixed the logo ticker** — Corrected CSS `translateX` end value to `-50%` and duplicated the logo array for seamless looping
- **Dropdown UX** — Rewrote hover logic using React state + `onMouseEnter`/`onMouseLeave` for better reliability
- **Form validation** — Added field-level error messages client-side and server-side validation in the API route
- **Color system** — Unified gradient palette across all sections (AI used inconsistent values)
- **Code cleanup** — Removed unused `next/image` import flagged by ESLint

---

## ⭐ Bonus Features

- ✅ **Lead capture form** — Full form with client + server validation
- ✅ **API route** — `POST /api/leads` stores submissions; `GET /api/leads` for admin review
- ✅ **Animated logo ticker** — CSS keyframe marquee with pause-on-hover

---

## 🛠️ Improvements With More Time

1. **Persistent lead storage** — Replace in-memory store with Supabase + email notification via Resend
2. **Animation polish** — Add `framer-motion` for smoother section transitions and staggered reveals
3. **Accessibility** — Full keyboard navigation audit, ARIA labels on carousel controls
4. **SEO** — Add `generateMetadata()` for OG tags, JSON-LD Organization schema
5. **Performance** — Real partner institute logos as `<Image>` with `priority` prop for LCP
6. **Testing** — Playwright E2E tests for the lead form flow and navigation

---

## 📄 License

MIT — built for educational/assignment purposes.
