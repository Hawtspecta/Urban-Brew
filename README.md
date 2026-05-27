# ☕ Urban Brew Café

[Live Demo](https://urban-brew-ten.vercel.app/)

> A modern, animated café website built with React, TypeScript, and Tailwind CSS — featuring a warm design system, filterable menu, contact form, and WhatsApp integration.

---

## ✨ Features

- **Animated page sections** — scroll-triggered entrance animations via Framer Motion
- **Responsive navigation** — sticky navbar with mobile hamburger menu
- **Filterable menu** — category tabs for Coffee, Bakery, Breakfast, Desserts, and Drinks
- **Contact form** — with toast notifications on submission
- **WhatsApp floating button** — quick customer messaging on all pages
- **Google Maps embed** — on both the Home and Contact pages
- **Custom design system** — warm café color palette, dual-font typography, layered shadows

---

## 🗂️ Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, services, featured items, testimonials, map, CTA |
| `/about` | About | Founder story, brand values, team section |
| `/menu` | Menu | Full menu with category filtering |
| `/contact` | Contact | Contact form, business info, embedded map |
| `*` | 404 | Not Found fallback |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | Accessible component primitives |
| [Radix UI](https://radix-ui.com) | Headless UI components |
| [Framer Motion](https://framer.com/motion) | Scroll animations |
| [React Router v6](https://reactrouter.com) | Client-side routing |
| [TanStack Query](https://tanstack.com/query) | Server state management |
| [Sonner](https://sonner.emilkowal.ski) | Toast notifications |
| [Lucide React](https://lucide.dev) | Icon library |
| [Vitest](https://vitest.dev) | Unit testing |

---

## 🚀 Getting Started

### Prerequisites

- Node.js **18+**
- npm or pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/urban-brew-cafe.git
cd urban-brew-cafe

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run test      # Run unit tests with Vitest
```

---

## 📁 Project Structure

```
src/
├── assets/              # Images (hero, food, about, owner)
├── components/
│   ├── ui/              # shadcn/ui primitives (button, card, input, etc.)
│   ├── AnimatedSection  # Framer Motion scroll-entrance wrapper
│   ├── Footer           # Site footer with links, hours, social icons
│   ├── Layout           # Page wrapper (Navbar + Footer + WhatsApp)
│   ├── Navbar           # Sticky responsive navigation
│   ├── NavLink          # Active-state-aware router link
│   └── WhatsAppButton   # Floating WhatsApp CTA
├── hooks/
│   ├── use-mobile       # Mobile breakpoint detection
│   └── use-toast        # Toast state management
├── lib/
│   └── utils.ts         # cn() Tailwind merge utility
├── pages/
│   ├── Index.tsx         # Home page
│   ├── About.tsx         # About page
│   ├── MenuPage.tsx      # Menu page
│   ├── Contact.tsx       # Contact page
│   └── NotFound.tsx      # 404 page
├── test/
│   ├── setup.ts          # Test environment setup
│   └── example.test.ts   # Example test
├── App.tsx               # Root app with routing & providers
├── main.tsx              # React DOM entry point
└── index.css             # Global styles, Tailwind layers, CSS variables
```

---

## 🎨 Design System

### Color Palette

The theme uses warm, coffee-inspired CSS custom properties:

| Variable | Description |
|----------|-------------|
| `--primary` | Deep espresso brown |
| `--accent` | Warm caramel |
| `--background` | Soft cream |
| `--warm` | Light parchment (section bg) |
| `--espresso` | Dark roast (footer bg) |
| `--latte` | Muted warm beige |

### Typography

Two Google Fonts are loaded:

- **Playfair Display** (`font-display`) — headings and display text
- **Inter** (`font-body`) — body copy, labels, and UI elements

### Shadows

```css
--shadow-soft:     0 2px 20px -4px  hsl(25 30% 20% / 0.08)
--shadow-card:     0 4px 30px -6px  hsl(25 30% 20% / 0.10)
--shadow-elevated: 0 12px 40px -8px hsl(25 30% 20% / 0.15)
```

---

## 🧩 Key Components

### `AnimatedSection`
Wraps any content in a Framer Motion `div` that fades in and slides up when scrolled into view. Accepts a `delay` prop for staggered animations.

```tsx
<AnimatedSection delay={0.2}>
  <YourContent />
</AnimatedSection>
```

### `WhatsAppButton`
A fixed floating button linking to a pre-filled WhatsApp chat message. Update the phone number in `WhatsAppButton.tsx` and `Footer.tsx`.

### Menu Filtering
`MenuPage.tsx` maintains a local `active` state. Clicking a category pill filters the `menuItems` array in real time — no external state management required.

---

## 🔧 Customization

### Update Business Details

Search and replace the following placeholder values across the codebase:

| Placeholder | Replace With |
|-------------|-------------|
| `+15551234567` | Your phone number |
| `hello@urbanbrew.cafe` | Your email address |
| `123 Brew Street, Downtown District` | Your address |
| `Urban Brew` | Your café name |
| Google Maps `src` URL | Your embedded map URL |

### Add Menu Items

Edit the `menuItems` array in `src/pages/MenuPage.tsx`:

```ts
{
  name: "New Item",
  price: "$5.00",
  category: "Coffee",      // must match a value in `categories`
  description: "Short description here"
}
```

### Add a Category

Add the new category string to the `categories` array in `MenuPage.tsx`:

```ts
const categories = ["All", "Coffee", "Bakery", "Breakfast", "Desserts", "Drinks", "NewCategory"];
```

---

## 🧪 Testing

Tests use **Vitest** with **@testing-library/jest-dom**:

```bash
npm run test
```

Test files live in `src/test/`. `matchMedia` is polyfilled in `setup.ts` for jsdom compatibility.

---

## 📄 License

MIT — free to use, modify, and distribute.
