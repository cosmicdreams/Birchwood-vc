// Copies each workflows/*.mmd file into workflows.html, so the page always
// matches the diagram sources. Run from the project root:
//   node workflows/build.mjs
import { readFileSync, writeFileSync } from "node:fs";

const page = "workflows.html";
let html = readFileSync(page, "utf8");
let count = 0;

html = html.replace(
  /<pre class="mermaid" data-src="([^"]+)">\n[\s\S]*?\n  <\/pre>/g,
  (_, src) => {
    count++;
    const diagram = readFileSync(src, "utf8").trimEnd();
    return `<pre class="mermaid" data-src="${src}">\n${diagram}\n  </pre>`;
  },
);

writeFileSync(page, html);
console.log(`Updated ${count} diagrams in ${page}`);
