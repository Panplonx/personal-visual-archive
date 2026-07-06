# PERSONAL VISUAL ARCHIVE — Codex Project Rules

## 1. Project identity

Project name:

PERSONAL VISUAL ARCHIVE  
个人视觉实验档案

This is an introductory university web-design course project.

It is a portable, static, multi-page website created and maintained with Codex.

Use a modern browser to open, inspect and test the website.

The website is not a commercial website and is not a conventional employment portfolio.

---

## 2. Mandatory page structure

The site must contain a real multi-page structure with at least three clickable levels.

Minimum valid route:

`index.html`
→ `archive.html` or a collection page
→ an individual page in `entries/`

The levels must be separate HTML files.

Do not replace the required page structure with sections on one long page.

The planned site contains:

- `index.html`
- `archive.html`
- `index-page.html`
- `about.html`
- `contact.html`
- `404.html`
- four collection pages in `collections/`
- twelve experiment pages in `entries/`

The expected total is approximately 22 HTML pages.

---

## 3. Project content

The website contains only the twelve new experiments created for this project.

### TYPE

- A01 NONHUMAN ALPHABET｜非人字母表
- A02 BROKEN CAPTION｜破损字幕
- A03 UNREADABLE WEATHER｜不可读天气

### IMAGE

- A04 SYNTHETIC FOSSILS｜合成化石
- A05 SOFT HARDWARE｜柔软硬件
- A06 ARCHIVE OF ACCIDENTS｜偶发档案

### SYSTEM

- A07 FALSE TAXONOMY｜虚构分类学
- A08 SIGNAL SPECIMENS｜信号标本
- A09 INTERFACE RELICS｜界面遗物

### FIELD NOTES

- A10 TEMPORARY MONUMENT｜临时纪念碑
- A11 COLOR CONFLICT 01｜色彩冲突 01
- A12 UNKNOWN RITUALS｜未知仪式

Do not add or mention previous work involving:

- branding
- packaging
- Dunhuang webpages
- visual identity projects
- old posters
- commercial clients
- previous course projects
- awards
- exhibitions
- invented employment history

Do not invent missing personal information, clients, awards, schools, exhibitions or contact details.

Use an explicit TODO when information is genuinely unavailable.

---

## 4. Allowed technology

Use only:

- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS custom properties
- CSS media queries
- vanilla JavaScript
- local images
- local WOFF2 fonts
- document-relative paths

---

## 5. Prohibited technology

Do not use:

- React
- Vue
- Angular
- Next.js
- Tailwind
- Bootstrap
- npm
- Node.js
- Vite
- Webpack
- databases
- login systems
- admin systems
- WebGL
- Three.js
- external CDN dependencies
- iframe copies of reference websites
- code copied from reference websites
- absolute local paths such as `C:\Users\...`

The core website must not require npm, Node.js, a build tool, a database, an external CDN, a development server or an internet connection.

---

## 6. Local operation

The website must work as a portable static site.

It should be possible to open `index.html` directly in a modern browser without installing npm, Node.js, a database or a build tool.

A simple local static server may be used when browser testing requires it, but the server must remain an optional testing aid rather than a core website dependency.

Main pages must remain usable when opened locally in a browser.

Use document-relative paths for:

- HTML links
- CSS files
- JavaScript files
- images
- fonts

Do not use `fetch()` to load essential local JSON or Markdown content if this would fail under `file://`.

Important text, images and project cards must remain visible if JavaScript fails or is disabled.

---

## 7. Source-of-truth documents

Read the following documents before making changes:

1. `docs/course-requirements.md`
2. `docs/sitemap.md`
3. `wireframes/`
4. `docs/design-system.md`
5. `docs/fonts-readme.md`
6. `docs/reference-map.md`
7. `content/archive-manifest.xlsx`
8. `content/site-copy.md`
9. `content/entries/a01.md` through `a12.md`

Use:

- `docs/sitemap.md` for page names and page relationships;
- `wireframes/` for page layout;
- `docs/design-system.md` for colors, typography, spacing and grids;
- `docs/reference-map.md` only for abstract reference methods;
- `content/` for final project names and written content;
- `assets/images/` for images displayed by the website.

Do not use `assets/raw/` as the normal source for webpage image paths.

Do not display images from `references/` in the finished website.

---

## 8. Visual rules

Use the established colors:

- Ink: `#111111`
- Paper: `#F2EFE7`
- Soft Grey: `#DADADA`
- TYPE: `#DFFF42`
- IMAGE: `#FF4933`
- SYSTEM: `#3155FF`
- FIELD NOTES: `#7958FF`

Follow `docs/design-system.md` for the complete rules.

Do not introduce:

- new category colors
- gradients
- glassmorphism
- decorative rounded cards
- blurred shadows
- random fonts
- unrelated visual styles

The visual master is a style reference only.

It is not a webpage layout, background or project image.

---

## 9. Reference-site boundaries

Guajiro Bampo may inform:

- modular composition
- bold borders
- large titles
- asymmetric visual rhythm

Tristan Bagot may inform:

- project-list order
- metadata organization
- archive-like density

Do not copy:

- source code
- original images
- logos
- slogans
- project content
- exact layouts
- exact dimensions
- navigation wording

GRID, LIST, INDEX, MIX and category filters are features planned by this project.

Do not falsely describe them as existing Tristan Bagot features.

---

## 10. File naming

Use:

- lowercase English letters
- numbers
- hyphens

Examples:

- `archive.html`
- `field-notes.html`
- `a01-nonhuman-alphabet.html`
- `a01-cover.webp`
- `a01-detail-01.webp`

Avoid:

- spaces
- Chinese characters in webpage asset names
- parentheses
- duplicate suffixes
- names such as `final-final-2`
- double extensions such as `.png.png` or `.md.txt`

Do not change confirmed page names without reporting the conflict first.

---

## 11. Responsive requirements

The website must be checked at:

- 375px
- 768px
- 1024px
- 1440px

The site must not have unintended horizontal overflow.

Images must not be stretched.

Important controls must remain readable and usable on mobile devices.

Mobile content must not depend on hover.

---

## 12. Accessibility requirements

Each page should have:

- a valid language attribute;
- a unique `<title>`;
- one main `<h1>`;
- logical heading order;
- useful image `alt` text;
- keyboard-accessible links and buttons;
- visible focus states;
- adequate text contrast;
- controls that do not rely only on color.

Interactive controls such as GRID, LIST, INDEX and MIX must use real buttons.

Respect `prefers-reduced-motion`.

---

## 13. Change safety

Before modifying files:

1. read this file;
2. read the relevant planning documents;
3. inspect the current directory;
4. state which files will be changed;
5. avoid changing unrelated files.

Do not:

- delete source materials;
- rename confirmed assets without approval;
- overwrite raw images;
- alter reference screenshots;
- download new assets without explicit permission;
- automatically rewrite all project files when only one page is requested.

After modifications, report:

- files created;
- files modified;
- files deleted;
- checks performed;
- unresolved problems.

---

## 14. R00 audit rule

During R00:

- read and analyse only;
- do not create files;
- do not modify files;
- do not delete files;
- do not rename files;
- do not generate HTML, CSS or JavaScript;
- do not optimise or convert images;
- output the audit report only in the conversation.

Missing files must be reported, not automatically created.

---

## 15. Conflict handling

If documents conflict:

1. report the conflict;
2. identify the exact files involved;
3. do not silently choose a new design;
4. use the rule that is stricter and safer for local operation until the user decides.

Teacher-confirmed requirements take priority over internal project preferences.

Do not describe internal project standards as direct statements from the teacher.
