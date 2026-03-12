---
name: Luxury Web Deployer
description: Standard operating procedure for creating and deploying high-end, luxury landing pages using Next.js and TailwindCSS, based on the Segue 2026 success.
---

# Luxury Web Deployer Skill

Use this skill when the user asks to create a "Premium", "Luxury", or "High-End" landing page, or refers to the "Segue Standard".

## 1. Project Initialization & Structure
- **Framework**: Always use Next.js with App Router (`npx create-next-app@latest`).
- **Styling**: TailwindCSS is mandatory.
- **File Structure**:
  - `components/`: Atomic components (Hero, Navbar, Footer, CTA).
  - `app/globals.css`: Define standard animations (ken-burns, light-streak) here.

## 2. Design Aesthetics (The "Segue" Look)
- **Typography**:
  - **Headings**: Elegant Serif (e.g., Playfair Display, Cinzel, or custom local fonts like Riviera).
  - **Body/UI**: Clean Sans-Serif (e.g., Outfit, Montserrat).
  - **Tracking**: Use `tracking-widest` or `tracking-[0.4em]` for small uppercase subtitles.
- **Colors**:
  - Deep generic backgrounds (`#020d17`) instead of pure black.
  - Metallic accents (Gold/Silver) for borders and thin lines.
- **Glassmorphism**:
  - Use `bg-white/5 backdrop-blur-md border border-white/10` for cards floating over video/images.

## 3. Critical Technical Solutions (From Experience)

### Video Backgrounds on Mobile
**Problem**: Videos often show black bars on vertical screens.
**Solution**: Apply CSS scaling to the iframe or video element on mobile breakpoints.
```tsx
<iframe className="... md:scale-100 scale-[3.5] ..." />
```

### Typography Handling
**Problem**: Custom fonts may miss glyphs (like 'Ñ').
**Solution**: 
1. Always define a fallback class.
2. If a glyph fails, switch specific text blocks to the Sans-Serif font (`font-sans`).

### Contact Forms (Serverless)
**Standard**: Use Formspree.
**Code Pattern**:
- Use `fetch` API for AJAX submission (no redirect).
- **Security**: ALWAYS include a hidden Honeypot field:
  ```jsx
  <input type="text" name="_gotcha" style={{ display: 'none' }} />
  ```
- **Feedback**: Change button color to green (`bg-green-600`) locally upon success.

## 4. Deployment Checklist (Vercel)
1. Ensure `next build` runs locally without errors.
2. Verify `vercel.json` exists if custom routing is needed (rare for simple apps, but good practice).
3. Check that all assets (images/fonts) are in `/public`.

## 5. Mobile-First Logic
- **Navigation**: Hamburger menu is mandatory for mobile.
- **Accordions**: Complex grid layouts (like 3 cards) must convert to Accordions on mobile for usability.
- **Titles**: Manually control line breaks `<br className="md:hidden" />` to ensure poetic spacing on narrow screens.

## 6. Rapid Bilingual Implementation
**Standard**: Prop-based lightweight translation (No external i18n libs for simple landings).
- **Structure**:
  - `app/page.tsx` -> Spanish (Default).
  - `app/en/page.tsx` -> English (Wrapper that passes `lang="en"`).
- **Component Pattern**:
  ```tsx
  export default function MyComponent({ lang }: { lang: "es" | "en" }) {
      const isEs = lang === "es";
      const t = {
          title: isEs ? "Hola Mundo" : "Hello World",
          cta: isEs ? "Enviar" : "Send"
      };
      return <h1>{t.title}</h1>;
  }
  ```

## 7. High-Impact CTA Modules
**Design Pattern**:
- **Container**: Glass card (`backdrop-blur-xl`) floating over dark/video backgrounds.
- **Micro-Interactions**:
  - Button must have a "Light Streak" or "Glow" effect.
  - Smooth Scroll behavior for internal links (replacing anchors):
    ```javascript
    element.scrollIntoView({ behavior: 'smooth' });
    ```
- **Copywriting**: Pair a strong action verb (Recover, Discover, Command) with an italicized emotional benefit using Serif fonts.
