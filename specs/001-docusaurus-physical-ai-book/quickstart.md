# Quick Start: Docusaurus Physical AI Book

**Feature:** 001-docusaurus-physical-ai-book  
**Prerequisites:** Node.js >= 18.0, npm >= 9.0

## Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

The site will open at http://localhost:3000

### 3. Build for Production
```bash
npm run build
```

Output will be in `build/` directory

### 4. Serve Production Build Locally
```bash
npm run serve
```

## Project Structure

```
├── docs/                  # Documentation markdown files
│   ├── intro.md          # Introduction
│   ├── ros2/             # ROS 2 chapter
│   ├── simulation/       # Simulation chapter
│   ├── nvidia-isaac/     # NVIDIA Isaac chapter
│   ├── vla-models/       # VLA chapter
│   └── humanoid-robotics/ # Humanoid chapter
├── src/
│   ├── components/       # React components
│   ├── css/             # Custom styles
│   └── pages/           # Custom pages (homepage)
├── static/              # Static assets (images, etc.)
├── i18n/                # Translations (EN, UR, HI)
├── docusaurus.config.ts # Main configuration
└── sidebars.ts          # Sidebar structure
```

## Common Commands

```bash
# Development
npm start               # Start dev server
npm run start -- --locale ur  # Start with Urdu
npm run start -- --locale hi  # Start with Hindi

# Build
npm run build           # Production build
npm run build -- --locale en  # Build English only

# Deployment
npm run deploy          # Deploy to GitHub Pages

# Utilities
npm run clear           # Clear cache
npm run write-translations  # Generate translation files
```

## Adding New Content

### Add a New Chapter Page
1. Create markdown file in `docs/` (e.g., `docs/new-chapter.md`)
2. Add frontmatter:
```markdown
---
sidebar_position: 7
title: New Chapter
---

# New Chapter Title

Content here...
```

3. Update `sidebars.ts` if needed

### Add a New Component
1. Create component in `src/components/`
2. Export and import in page/doc where needed

## Testing

### Manual Testing Checklist
- [ ] Dev server runs without errors
- [ ] All pages load correctly
- [ ] Search functionality works
- [ ] Dark mode toggle works
- [ ] Language switcher works (EN/UR/HI)
- [ ] Code blocks display with syntax highlighting
- [ ] Mobile responsive (test on 375px, 768px, 1440px)

### Lighthouse Audit
```bash
npm run build
npm run serve
# Open Chrome DevTools → Lighthouse → Run audit
```

**Target Scores:** Performance > 90, Accessibility > 90, SEO > 90

## Troubleshooting

### Issue: Build fails with module not found
**Solution:** Clear cache and reinstall
```bash
npm run clear
rm -rf node_modules
npm install
```

### Issue: Search not finding content
**Solution:** Rebuild search index
```bash
npm run clear
npm run build
```

### Issue: Changes not reflecting in dev server
**Solution:** Restart dev server
```bash
# Ctrl+C to stop
npm start
```

## Deployment

### GitHub Pages
```bash
npm run deploy
```

Site will be live at: `https://<username>.github.io/<repo-name>/`

### Vercel
1. Connect GitHub repository to Vercel
2. Build command: `npm run build`
3. Output directory: `build`
4. Deploy automatically on push to main

## Resources

- [Docusaurus Docs](https://docusaurus.io/)
- [Markdown Guide](https://docusaurus.io/docs/markdown-features)
- [MDX Features](https://docusaurus.io/docs/markdown-features/react)
