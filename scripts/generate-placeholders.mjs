// Generates SVG wood-grain placeholders for product imagery.
// Run with: node scripts/generate-placeholders.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../public/images/products");
mkdirSync(outDir, { recursive: true });

const species = [
  { slug: "mahogany", base: "#3b1f15", mid: "#5a3221", high: "#7a4b35", grain: 0.55 },
  { slug: "maple", base: "#c9b48a", mid: "#d8c39a", high: "#efe2c0", grain: 0.3 },
  { slug: "limba", base: "#2b2520", mid: "#54473a", high: "#a89478", grain: 0.7 },
  { slug: "ash", base: "#b29770", mid: "#c4a981", high: "#d8c197", grain: 0.45 },
  { slug: "cedar", base: "#6d4628", mid: "#8a5b37", high: "#a87a4f", grain: 0.4 },
  { slug: "korina", base: "#a48a64", mid: "#bba076", high: "#d3bb8e", grain: 0.35 }
];

function bodyShape(view) {
  // simplified guitar body silhouette path
  if (view === "side") {
    return "M120 280 L1080 280 L1080 320 L120 320 Z";
  }
  // classic offset body shape, abstracted
  return [
    "M600 120",
    "C760 120 880 200 920 320",
    "C960 440 920 560 820 620",
    "C720 680 600 660 600 660",
    "C600 660 480 680 380 620",
    "C280 560 240 440 280 320",
    "C320 200 440 120 600 120",
    "Z"
  ].join(" ");
}

function grainLines(seed, count, width, height, opacity) {
  const lines = [];
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = 0; i < count; i++) {
    const y = (i / count) * height + rand() * 6;
    const amp = 8 + rand() * 14;
    const phase = rand() * Math.PI * 2;
    const segs = 24;
    let d = `M 0 ${y.toFixed(1)}`;
    for (let j = 1; j <= segs; j++) {
      const x = (j / segs) * width;
      const yy = y + Math.sin(phase + (j / segs) * Math.PI * 3) * amp + (rand() - 0.5) * 2;
      d += ` L ${x.toFixed(1)} ${yy.toFixed(1)}`;
    }
    lines.push(
      `<path d="${d}" stroke="rgba(10,10,8,${(opacity * (0.4 + rand() * 0.6)).toFixed(2)})" stroke-width="${(0.4 + rand() * 0.8).toFixed(2)}" fill="none" />`
    );
  }
  return lines.join("\n");
}

function svg({ slug, base, mid, high, grain }, view) {
  const W = 1200;
  const H = view === "side" ? 600 : 800;
  const shape = bodyShape(view);
  const seed = (slug.charCodeAt(0) + view.charCodeAt(0)) * 31;
  const grainCount = view === "side" ? 18 : 60;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${slug} ${view}">
  <defs>
    <radialGradient id="bg-${slug}-${view}" cx="50%" cy="40%" r="80%">
      <stop offset="0%" stop-color="#161410"/>
      <stop offset="100%" stop-color="#0a0a08"/>
    </radialGradient>
    <linearGradient id="wood-${slug}-${view}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${base}"/>
      <stop offset="50%" stop-color="${mid}"/>
      <stop offset="100%" stop-color="${high}"/>
    </linearGradient>
    <radialGradient id="vignette-${slug}-${view}" cx="50%" cy="50%" r="65%">
      <stop offset="60%" stop-color="rgba(0,0,0,0)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0.45)"/>
    </radialGradient>
    <clipPath id="clip-${slug}-${view}">
      <path d="${shape}"/>
    </clipPath>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg-${slug}-${view})"/>
  <g clip-path="url(#clip-${slug}-${view})">
    <rect width="100%" height="100%" fill="url(#wood-${slug}-${view})"/>
    <g opacity="${grain.toFixed(2)}">
      ${grainLines(seed, grainCount, W, H, 0.55)}
    </g>
    <rect width="100%" height="100%" fill="url(#vignette-${slug}-${view})"/>
  </g>
</svg>`;
}

for (const sp of species) {
  for (const view of ["top", "bottom", "side"]) {
    const filename = `${sp.slug}-${view}.svg`;
    writeFileSync(resolve(outDir, filename), svg(sp, view));
  }
}

console.log(`Wrote ${species.length * 3} placeholders to ${outDir}`);
