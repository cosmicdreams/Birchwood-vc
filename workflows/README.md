# Workflow diagrams

Each workflow is a separate [Mermaid](https://mermaid.js.org) file. Edit these files, not `workflows.html`.

| File | Workflow | Who |
| --- | --- | --- |
| `overview.mmd` | The whole site at a glance | Everyone |
| `tenant-list.mmd` | Keeping the tenant list right | Office staff |
| `rent-collection.mmd` | Collecting rent | Office staff |
| `new-property.mmd` | Bringing in a new property | Management |
| `tenant-portal.mmd` | Using the tenant portal | Tenants |
| `public-leads.mmd` | From visitor to lead | Public |

## Editing a diagram

Any of these will show a live preview while you edit:

- Paste the file into [mermaid.live](https://mermaid.live).
- Open it in VS Code with a Mermaid preview extension.
- View it on GitHub, which draws `.mmd` files automatically.

## Updating the page

`workflows.html` in the project root shows all six diagrams together, with notes and assumptions. After you edit a diagram, run this from the project root to copy your changes into the page:

```sh
node workflows/build.mjs
```

To add a new workflow, create a new `.mmd` file here, then copy one of the `<section>` blocks in `workflows.html` and set its `data-src` to the new file. Open questions belong in `questions.md`.
