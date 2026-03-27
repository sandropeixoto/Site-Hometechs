---
task: scrapeAndRedesign()
responsável: Uma (UX Expert)
responsavel_type: Agente
atomic_layer: Config

**Entrada:**
- campo: url
  tipo: string
  origem: User Input
  obrigatório: true
  validação: Must be a valid URL

**Saída:**
- campo: redesign_path
  tipo: string
  destino: File system
  persistido: true

---

# Scrape & Redesign Website

## Purpose
Capture a website's content and restructure it into a premium, "incredible" design following modern UX/UI standards.

## Prerequisites
- Python 3.x installed
- `requests` and `beautifulsoup4` libraries available
- Active internet connection

## Implementation Steps

1. **Capture Phase**
   - Run the site scraper: `python .aiox-core/scripts/scrape-site.py <url>`
   - Capture the JSON output containing titles, navigation, and content.

2. **Analysis Phase**
   - Use the `ux-design-expert` persona to analyze the captured content.
   - Identify the primary value proposition and site structure.
   - Define a "Premium" design system (colors, typography, spacing).

3. **Generation Phase**
   - Generate a single-page modern redesign using Vanilla CSS and Semantic HTML.
   - Apply "Rich Aesthetics":
     - Glassmorphism effects.
     - Smooth gradients.
     - Hover micro-animations.
     - Modern typography (Inter/Outfit).

4. **Validation Phase**
   - Verify all links and content from the original site are preserved.
   - Check responsiveness.

## Validation Checklist
- [ ] Scraper returned valid JSON?
- [ ] Redesign uses modern CSS tokens?
- [ ] Animations are smooth and non-intrusive?
- [ ] Content is restructured for better readability?

## Success Output
```
✅ Redesign of '{url}' complete!
📁 Files generated:
   - outputs/redesign/{url_slug}/index.html
   - outputs/redesign/{url_slug}/style.css
```
