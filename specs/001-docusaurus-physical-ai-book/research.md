# Research: Docusaurus Physical AI Book Frontend

**Feature:** 001-docusaurus-physical-ai-book  
**Research Date:** 2025-11-28

## Technology Selection

### Docusaurus 3.x vs Alternatives

**Options Considered:**
1. **Docusaurus** (chosen)
2. VitePress
3. Nextra (Next.js-based)
4. GitBook

**Decision:** Docusaurus 3.x

**Rationale:**
- Excellent plugin ecosystem (search, i18n, mermaid, math)
- Built-in i18n with RTL support (needed for Urdu)
- Strong TypeScript support
- Large community and extensive documentation
- Optimized for documentation sites
- React-based (familiar to team)

## Theme Approach

### Color Scheme
**Primary Color:** Teal (#1e7a6f)
- Professional, modern appearance
- Good contrast for accessibility
- Distinguishes from typical blue/purple tech sites

### Typography
**Font Choice:** Inter (Google Fonts)
- Clean, modern sans-serif
- Excellent readability at all sizes
- Wide language support (important for Hindi/Urdu)

## i18n Strategy

### Language Support
**Languages:** English, Urdu (اردو), Hindi (हिंदी)

**Approach:**
- Docusaurus native i18n (no third-party plugins needed)
- RTL configured specifically for Urdu
- Separate translation files per locale
- UI translations stored in JSON, docs in separate folders

**Alternative Considered:** Crowdin integration
**Decision:** Manual translations initially, Crowdin if needed later

## Search Implementation

### Search Plugin Selection
**Plugin:** @easyops-cn/docusaurus-search-local

**Rationale:**
- No external service required (Algolia requires application)
- Works offline
- Multi-language support (EN, HI - Urdu has limited support)
- Client-side indexing at build time
- Free and open-source

**Trade-off:** Larger bundle size (~200KB) vs external dependency

## Code Highlighting

### Syntax Highlighter
**Library:** Prism (Docusaurus default)

**Languages Configured:**
- Python (robot controllers, ML scripts)
- C++ (ROS 2 nodes)
- JavaScript/TypeScript (frontend code)
- YAML (ROS 2 launch files, config)
- Bash (setup scripts)

## Performance Optimization

### Lazy Loading
- Images lazy loaded via `loading="lazy"` attribute
- Route-based code splitting (Docusaurus default)
- Prefetching for improved navigation

### Bundle Size Target
**Goal:** < 1MB total bundle size
**Strategy:** Tree shaking, minification, compression (Gzip/Brotli)

## Deployment Strategy

### Primary: GitHub Pages
- Free hosting
- Automatic HTTPS
- Easy GitHub Actions integration
- Custom domain support

### Backup: Vercel
- Fast global CDN
- Automatic preview deployments for PRs
- Zero-config deployment

## Accessibility Considerations

**Standards:** WCAG 2.1 AA compliance

**Key Requirements:**
- Color contrast ratio ≥ 4.5:1
- Keyboard navigation
- Screen reader support (ARIA labels)
- Focus indicators visible
- Skip-to-content link

## Open Questions & Decisions

**Q: Include blog functionality?**
**A:** No - Out of scope for MVP. Can add later if needed.

**Q: PDF export for offline reading?**
**A:** Deferred to post-launch phase. Static site handles offline via PWA.

**Q: Interactive code sandboxes?**
**A:** Future enhancement. Will use CodeSandbox/StackBlitz embeds when ready.

## References

- [Docusaurus Documentation](https://docusaurus.io/)
- [Docusaurus i18n Guide](https://docusaurus.io/docs/i18n/introduction)
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Performance Guide](https://web.dev/performance/)
