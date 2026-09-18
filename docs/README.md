# s31f.dev

Personal site: one page, Astro, static output, no client-side JavaScript.

```sh
npm install
npm run dev      # localhost:4175
npm run build    # -> dist/
```

Content lives in the frontmatter of `src/pages/index.astro` as plain arrays —
`STACK`, `SERVICES`, `STEPS`, `WORK`, `LINKS`. Styles are in `src/styles/global.css`.

A `WORK` entry with an empty `shot` renders a framed placeholder; point it at a
file in `public/` to show a screenshot instead.

The previous version of this portfolio (Astro 4 + React, multiple pages) is in the
git history, up to commit `dac8656`.
