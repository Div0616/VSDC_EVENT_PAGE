# Prompt: Recreate "Among Us" Game Landing Page (React)

Build a single-page, responsive **React** component (functional component, hooks if needed for nav toggle/mobile menu) that replicates the layout below section-by-section, pixel-close in spacing, hierarchy, and color. Use styled-components, CSS modules, or a single co-located CSS file (your choice, but keep styling scoped to this page). Use `<img src="placeholder.jpg">` (or a gray/colored div with an "IMAGE PLACEHOLDER" label) everywhere a photo/screenshot/illustration appears — do not generate real artwork. Use the exact copy provided; do not paraphrase it.

## Global Style
- **Background:** near-black (`#0b0c10` / `#111116`), used for the whole page except the footer CTA image band.
- **Primary accent red:** `#dc2626`–`#e11d2e` range (announcement bar, "Impostor" ribbon, small red accents).
- **Primary accent blue:** `#3aa0ff`/`#4f8ff7` (CTA button, "Crew" ribbon, links/highlighted text uses a pink `#ff5fa2`).
- **Text:** white for headings, light gray (`#c7c7cf`) for body copy.
- **Font pairing (locked in):** **Fredoka** (or **Baloo 2** as fallback) — rounded, bold, semi-bold weights — for the "AMONG US" logo, section headings, and banner text; **Inter** for body copy, nav links, and captions. Import both via Google Fonts.
- **Container width:** ~1200–1280px max, centered, generous vertical section padding (80–120px).
- **Decorative stars:** small white dots scattered as background texture behind the hero and "How to Play" sections.

---

## 1. Top Navigation Bar
- Dark background, full width.
- Left: wordmark logo "**AMONG US**" (small, rounded logo style, bean-shaped icon optional).
- Center/left-of-center nav links: `Games ▾`  `News`  `About ▾`  `Shop`
- Right: three circular social icons (Discord, Twitter/X, TikTok) in white on dark circles.

## 2. Announcement / Marquee Bar
- Thin red (`#e11d2e`) strip directly under the nav.
- Left text: **"OUT NOW!  December 6, 2023 — Play our all new game mode."**
- Right text: **"NEW GAME MODE: HIDE N SEEK IS HERE! | EMERGENCY MEETING #15"**
- Small white text, could scroll/marquee or sit static in two columns.

## 3. Hero Section
- Full-bleed dark navy/black starfield background image (placeholder), with silhouettes of colorful crewmates (red, blue, purple, pink, yellow, cyan, orange, green) scattered around the edges — use placeholder character sprites/divs.
- Centered large wordmark: **"AMONG US"** in big bold rounded white lettering with a subtle red/orange glow beneath it (like a spotlight).
- One oversized red crewmate character illustration centered at the bottom of the hero, glowing/backlit (placeholder image).
- Centered blue rounded pill button: **"Watch the trailer"**

## 4. Intro Statement Section
- Small yellow crewmate icon top-left of this block (placeholder).
- Small red crewmate icon on the right side (placeholder).
- Centered heading (white, bold, ~28–32px):
  **"Among Us is a party game of teamwork and betrayal."**
- Centered subtext (gray, ~16px):
  **"Crewmates work together to complete tasks before one or more Impostors can kill everyone aboard."**
- Scattered star dots in background.

## 5. Awards Grid
- 3-column grid (last row has 1 centered item), 7 dark gray rounded-corner cards (`#1c1d24`), each with small centered logo/badge (placeholder) + caption text below:
  1. **Kid's Choice Award for Favorite Video Game — 2021**
  2. **ESRB rating badge — "EVERYONE 10+ / Fantasy Violence, Mild Blood" — 2020** *(use an ESRB-style placeholder badge)*
  3. **The Game Award for Best Mobile Game — 2020**
  4. **Mobile Game Awards for Best India Developer — 2021**
  5. **Webby Breakout of the Year Award — 2021**
  6. **Golden Joystick Breakthrough Award — 2020**
  7. **App Store 2021 Award for Trend of the Year: Connection — 2021**

## 6. Gameplay Screenshots
- Small centered eyebrow label: **"GAME PLAY SCREENSHOTS"**
- Grid of 7 rounded-corner screenshot placeholders (3 per row, last row 1 centered), varying aspect ratios (mostly 4:3/16:10 landscape). One screenshot has a "CREWMATE" label overlay in cyan text (top-right area).

## 7. How to Play Section
- Two small crewmate icon accents flanking the heading (green left, purple right) — placeholders.
- Centered heading: **"How to Play"**
- Centered paragraph (with one phrase in pink/highlighted color):
  **"Prepare for departure but beware the Impostor! Play with 4-15 players online or via local WiFi as you"** *(pink highlight starts here)* **"attempt to hold your spaceship together and survive"** *(highlight ends)* **", but be careful. One or more random players among the crew are Impostors bent on killing everyone!"**

### 7a. "THE CREW" Banner
- Wide angled blue ribbon/banner graphic (placeholder) with bold text: **"THE CREW"**
- Sub-line centered below: **Objective:** **"Fill the group task bar or eject the Impostors"**
- Two-column x 3-row list (6 items total), each row with a small colored crewmate icon (placeholder) + short text:
  1. Complete all the tasks on the ship or eject Impostors to win
  2. Call emergency meetings if you see any dead bodies or suspicious behavior
  3. Check the Admin map and Security cameras to keep tabs on other Crewmates
  4. React quickly to undo the Impostor's sabotages
  5. Make sure you have your alibi ready in case you're falsely accused
  6. Vote to eject suspected Impostors. Hope you guessed correctly!

### 7b. "THE IMPOSTOR" Banner
- Same angled ribbon style but in red, bold text: **"THE IMPOSTOR"**
- Sub-line centered below: **Objective:** **"Kill off the crew"**
- Two-column x 3-row list (6 items total), each with a small colored crewmate icon (placeholder) + text:
  1. Kill Crewmates and frame innocent bystanders
  2. Pretend to do tasks to blend in with the Crewmates
  3. Sneak through the vents to quickly move around
  4. Sabotage tasks to cause chaos and confuse the crew
  5. Close doors to trap victims and kill in privacy
  6. Do everything you can to convince the crew that you're one of them

## 8. Footer Merch CTA
- Full-width warm-toned background image/illustration (placeholder) — a market-stall scene with crewmate characters (purple, red, dark-red) around a treasure-chest/stall.
- Left-aligned white text block over the image:
  - Small heading: **"Get official merch"**
  - Sub-line: **"From Among Us & more"**
  - Blue rounded pill button: **"Shop now"**

---

## Build Notes
- One functional React component per section (`<Nav>`, `<AnnouncementBar>`, `<Hero>`, `<Intro>`, `<Awards>`, `<Screenshots>`, `<HowToPlay>`, `<CrewSection>`, `<ImpostorSection>`, `<MerchCTA>`), composed in a single `<LandingPage>` parent — or one file if preferred, but keep JSX organized by section with comments matching the numbering above.
- All character/screenshot/badge/background art = placeholder `<img>` tags or styled `<div>` boxes with a neutral fill + centered label text (e.g., "Crewmate Placeholder", "Screenshot Placeholder") so real assets can be swapped in later.
- Keep the two-column bullet lists (Crew/Impostor) as CSS grid, responsive to single column on mobile.
- Buttons: fully rounded (pill), medium drop shadow, hover state slightly lighter fill.
- Make the whole layout responsive (stack to single column on screens under ~768px), since the reference is a mobile-width screenshot.
- Import Fredoka/Baloo 2 + Inter via Google Fonts `<link>` or `@import` at the top of the stylesheet.
