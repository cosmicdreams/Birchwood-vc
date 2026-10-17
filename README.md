# Birchwood

Early discovery work for the Birchwood Property Group website: who will use it, what they need to get done, and how the brand could look.

Nothing here is a working website yet. These are drafts for discussion, and they will change as the open questions get answered.

## What's here

| File | What it is |
| --- | --- |
| [`workflows.html`](workflows.html) | Six draft diagrams of how people will use the site, each with the assumptions it makes |
| [`workflows/`](workflows/) | Each of those diagrams as its own Mermaid file, so it can be edited on its own |
| [`questions.md`](questions.md) | 43 questions to answer before we build. ★ marks the ones that change the build most |
| [`01-neighborhood-modernist.html`](01-neighborhood-modernist.html) | Brand direction 1: evergreen, stone and sage, built around an arched doorway |
| [`02-uptown-original.html`](02-uptown-original.html) | Brand direction 2: oxblood and pale blue, with a city block drawn as a shelf of books |
| [`03-bright-friendly-local.html`](03-bright-friendly-local.html) | Brand direction 3: teal and marigold, with an open door and rounded type |

## Who the site is for

The workflows cover four groups:

- **Office staff** keep the tenant list accurate and collect rent with a high success rate.
- **Management** bring new properties on board and make sure the ramp-up checklist is followed.
- **Tenants** look up details about their rental, keep track of important dates such as renewals, pay rent, and contact the super.
- **The public** find Birchwood through marketing and become leads in the CRM. Analytics shows which channels produce leases.

## Viewing the pages

Every page is a single HTML file. Open it in a browser; no install or build is needed. The pages load fonts, and `workflows.html` also loads the Mermaid diagram library, so they need an internet connection to look right.

## Editing a workflow

Edit the matching `.mmd` file in `workflows/`, then copy your changes into the page:

```sh
node workflows/build.mjs
```

[`workflows/README.md`](workflows/README.md) has the full details, including how to preview a diagram while you edit it and how to add a new workflow.

## Where things stand

- The workflows are educated guesses from a short brief. `questions.md` holds what we still need to learn.
- No brand direction has been chosen yet.
- The pages have been checked in Chrome only, at desktop and phone widths.
