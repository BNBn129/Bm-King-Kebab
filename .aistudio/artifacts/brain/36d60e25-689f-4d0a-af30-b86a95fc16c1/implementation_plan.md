# Implementation Plan: Modern Editorial Restaurant Refurbishment & Premium Transitions

Refurbish BM King Kebab into a prestigious modern editorial restaurant aesthetic with bold, prominent typography on mobile, fluid luxury transitions, and the complete elimination of all cheap-looking stock photos across the entire application in favor of typographic and graphic mastery.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following revisions incorporate your latest requests:
> - **Smooth, High-End Transitions**: Add fluid, elegant micro-interactions, smooth view switching transitions, silky drawer slides, and refined hover physics across all interactive elements (buttons, cards, drawer, modal, and tabs).
> - **Complete Removal of Cheap Pictures**: Zero cheap-looking food or stock photos anywhere in the application. All sections (Hero, Home Bestsellers, Story, Gallery/Specialties) will use clean editorial graphic cards, authentic typography, and genuine award insignias instead of generic stock food images.
> - **Bold, Prominent Mobile Headline**: Replace the small `text-xl` (20px) header on mobile with a commanding `text-3xl` / `text-4xl` editorial title that anchors the screen without crowding.
> - **Modern Editorial Palette**: Dark obsidian `#0a0b0e`, warm graphite `#12141a`, subtle hairline glass borders (`border-white/[0.08]`), and burnished gold accents (`#f59e0b` / `#d97706`).

---

## 1. Overview & Core Concept

- **The Problem**: On mobile and tablet, the previous hero headline was scaled down too small, looking like a weak paragraph. Furthermore, stock/artificial food photos across the page gave an impression of cheapness and inconsistency. The transitions between tabs and drawers lacked fluidity.
- **The Solution**:
  1. Make the headline bold, proud, and editorial on all screens — especially mobile (`text-3xl sm:text-4xl lg:text-6xl font-extrabold`).
  2. Purge every cheap food photo from the application. Replace them with high-contrast culinary cards featuring dish provenance, ingredients breakdown, portion sizing, and bold tabular pricing.
  3. Introduce silky smooth CSS and React transitions: buttery slide-ins for cart and mobile drawers, smooth cross-fades for tab transitions, and subtle spring-like hover states on action cards.

---

## 2. Visual Design & Transitions Architecture

### A. Fluid Transitions & Micro-Interactions
- **Tab & View Transitions**: Subtle cross-fade and 6px vertical settle (`fade-in-up 250ms cubic-bezier(0.16, 1, 0.3, 1)`) whenever the user switches between Home, Menu, O Nas, Opinie, or Lokalizacja.
- **Cart & Navigation Drawers**: Smooth off-canvas slide-in from right (`translateX`) with matching backdrop blur fade (`opacity 0 -> 1` over 200ms).
- **Dish Customization Modal**: Spring scale-in (`scale-95 opacity-0 -> scale-100 opacity-100` over 200ms ease-out).
- **Interactive Cards & Buttons**:
  - Cards: `transition-all duration-300 ease-out hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5`.
  - Buttons: Smooth scale micro-feedback (`active:scale-95 transition-transform duration-150`).
  - Category Pills in Menu: Fluid active highlight transitions with smooth horizontal scrolling.

### B. Typography & Photo-Free Culinary Editorial
- **Hero Section**:
  - Editorial Kicker: `ZŁOTY LAUREAT ORŁY GASTRONOMII 2025 & 2026 · ŁÓDŹ` in tracked gold uppercase (`tracking-[0.2em]`).
  - Commanding Headline: `"Królewska tradycja. Autentyczny smak."` (`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white`).
  - High-Contrast Proof: 4-stat luxury proof strip (Rating 4.9/5, Złoty Laureat 2025 & 2026, Godziny do 02:00, Darmowy çay na wejściu).
- **Home Bestsellers (`HomeTeaserMenu.tsx`)**:
  - Eliminate the stock image box entirely.
  - Present the 3 signature dishes as refined editorial cards: dish title, gold badge, detailed ingredients, portion weight, bold gold price, and instant customization button.
- **Story & Accolades (`AwardsAndStory.tsx`)**:
  - Replace the stock interior photo with a bespoke graphic **Orły Gastronomii Złoty Laureat Accreditation Card** with verified score metrics, certificate borders, and genuine guest review statistics.
- **Specialties Showcase (`GallerySection.tsx`)**:
  - Redesign as **"Sztuka Rzemiosła & Receptury"** with rich typographic recipe dossiers instead of stock food photography.

---

## 3. Key Product Decisions & Trade-Offs

| Decision | Rationale | Trade-Off / Mitigation |
| :--- | :--- | :--- |
| **Complete elimination of stock food photos** | Directly addresses the user's feedback that food photos look cheap. Elevates the brand to high-end culinary craft. | Relies on exceptional typographic hierarchy, ingredient transparency, and clear portion details to build appetite. |
| **Custom CSS keyframes & transitions** | Native CSS transitions provide 60fps hardware-accelerated animations with zero bundle overhead. | Kept lightweight (150ms-300ms) to ensure maximum speed and responsiveness without feeling sluggish. |
| **Bold mobile headline (`text-3xl` - `text-4xl`)** | Solves the user's complaint that the topic looked small and weird on phone screens. | Formatted with `leading-tight` and balanced typography so it fits naturally on smaller screens without awkward line breaks. |

---

## 4. Implementation Steps

### Step 1: CSS Transitions & Animations Setup (`src/index.css`)
- Define smooth animation utilities:
  - `@keyframes fadeIn`: opacity fade with hardware acceleration.
  - `@keyframes slideInRight`: silky drawer entrance.
  - `@keyframes fadeInUp`: smooth view transitions for tab switches.
- Add utility classes: `.animate-fade-in`, `.animate-slide-in-right`, `.animate-fade-in-up`, and smooth transition defaults.

### Step 2: Hero Overhaul (`src/components/Hero.tsx`)
- Enlarge mobile heading to `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight`.
- Maintain zero photos; emphasize glowing dark ambient backdrops and gold hairline borders.
- Add fluid button hover and tap states with `active:scale-95`.
- Refine the 4-stat metric strip into a clean architectural grid with smooth hover highlights.

### Step 3: Remove Stock Images from `HomeTeaserMenu.tsx`
- Remove the `<img ... />` photo showcase block.
- Redesign the 3 cards into luxury typographic format with:
  - Top badge: "Autorski Specjał Szefa Kuchni" / "Bestseller Łodzi".
  - Typographic title + portion details.
  - Full ingredient composition.
  - Bold price in `font-mono tabular-nums text-amber-400`.
  - Fluid "Personalizuj i Zamów" action button with smooth hover arrow.

### Step 4: Remove Stock Images from `AwardsAndStory.tsx` & `GallerySection.tsx`
- Replace interior photo in `AwardsAndStory` with a luxury graphic **Certyfikat Złotego Laureata Orły Gastronomii** featuring gold laurel wreaths, verified rating badge, and official restaurant credentials.
- Redesign `GallerySection` into **Królewskie Receptury & Rytuały** (Rytuał parzenia herbaty, Wypiek chleba z pieca, Selekcja marynat) using graphic icon badges instead of stock food pictures.

### Step 5: Smooth View Transitions in `src/App.tsx`
- Wrap active tab views in an animated container (`key={activeTab}` with `animate-fade-in-up`) so transitioning between Home, Menu, O Nas, etc. feels fluid and polished.

---

## 5. Verification Plan

1. **Compilation & Syntax**:
   - Run `compile_applet` to confirm zero build errors.
   - Run `lint_applet` to ensure TypeScript and lint compliance.
2. **Visual & Transition Testing**:
   - Check mobile screen (375px/390px): verify headline is prominent, legible, and impressive.
   - Verify zero cheap photos remain across all sections.
   - Test tab transitions: smooth fade and settle between views.
   - Test Cart Drawer & Mobile Drawer: smooth slide-in and backdrop blur.
   - Test Dish Customization Modal: smooth scale-in and dismiss.
