# StudyGold GitHub Pages MVP Implementation Plan

## Goal

GitHub Pagesで共有できる、フィードバック獲得用のStudyGold MVP Webサイトを作成する。

目的は本番アプリ完成ではなく、以下をユーザーに見せて反応を得ること。

- 学習時間や成果がゴールドに変わる体験
- 自分で設定したご褒美と交換する体験
- ご褒美追加の面倒さが許容されるか
- ゴールド獲得・交換演出にワクワクするか
- サービス名、トンマナ、画面構成の納得感

## Technical Scope

- React
- Tailwind CSS
- Vite
- GitHub Pages compatible static build
- Client-side state only
- No backend
- No login
- No database
- Local UI interaction and animation only

## Reference Assets

Primary visual reference:

- `/Users/310tea/.codex/generated_images/019e37b3-99d9-7882-bb23-2bd197518de0/ig_02f787f4dc9bb5b4016a0a2d1ca1e881918552248865f5bcb6.png`

Tone and palette reference:

- `docs/mvp_lp_tone_and_palette.md`
- `styles/design-tokens.css`

Generated or derived assets must be copied into:

- `public/assets/`

## Fidelity Requirements

The implementation should reproduce the mock image as closely as practical in browser UI:

- Deep black background with subtle glow
- Gold primary accent
- Left sidebar navigation
- Top balance pill
- Large dashboard balance and timer cards
- Photo-like reward cards
- Add reward form with live preview
- History table
- Exchange completion modal with gold glow and particle animation

Pixel-level fidelity target:

- Desktop layout should visually match the generated mock at 1440px width.
- Japanese copy should match the mock and remain readable.
- Spacing, border radii, gold accents, card proportions, and hierarchy should be close to the reference.
- Mobile can be responsive but desktop fidelity is the priority.

## Pages / Views

Because GitHub Pages is static and feedback speed matters, implement a single React app with internal view switching:

1. LP
   - Brand value
   - CTA into demo
   - App preview
   - Reward preview

2. Dashboard
   - Current gold balance
   - Study timer mock
   - Gain gold action
   - Next reward
   - Recent log

3. Reward Shop
   - Reward grid
   - Category tabs
   - Exchange action
   - Add reward CTA

4. Add / Edit Reward
   - Form fields
   - Image option
   - Live preview card

5. History
   - Gold increase/decrease log
   - Balance summary

6. Exchange Modal
   - Opened from reward exchange
   - Gold particles
   - Balance decrease
   - Sound/haptic visual cues

## Animation Requirements

- Gold balance count-up/count-down feel
- Button hover glow
- Reward card hover lift
- Progress bar fill
- Exchange modal entrance
- Gold particles during exchange
- Subtle dashboard glow

Use CSS/Tailwind animations where possible. Avoid heavy animation libraries unless already necessary.

## GitHub Pages Requirements

- `npm run build` must produce static assets under `dist/`
- Vite `base` must be configurable for GitHub Pages repository path
- No server-only APIs
- No runtime dependency on local filesystem

## Acceptance Criteria

- `npm install` succeeds
- `npm run build` succeeds
- Local preview loads without console-breaking errors
- Browser Use visual check confirms main views are accessible
- Desktop visual direction matches the generated mock
- User can click:
  - LP CTA
  - Sidebar navigation
  - Study completion
  - Reward exchange
  - Add reward
  - History
- Exchange modal appears with rich visual feedback

## Risk / Adjustment Notes

- Exact pixel-level fidelity is limited by the generated mock being a raster reference rather than a design file. We will approximate layout, spacing, color, typography, and component proportions closely.
- Japanese text rendering depends on available system fonts. Use `Noto Sans JP` when available, with system fallbacks.
- Real image uploads cannot persist on GitHub Pages. For MVP feedback, use curated generated/derived reward images.
