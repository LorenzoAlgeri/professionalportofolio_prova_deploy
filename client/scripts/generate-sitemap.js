import fs from 'fs';
import path from 'path';

const baseUrl = 'https://lorenzoalgeri.it';
const currentDate = new Date().toISOString().split('T')[0];

const urls = [
  {
    loc: `${baseUrl}/`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '1.0'
  },
  {
    loc: `${baseUrl}/#chi-sono`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: `${baseUrl}/#servizi-ai`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    loc: `${baseUrl}/#servizi-chatbot`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: `${baseUrl}/#automazioni`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: `${baseUrl}/#contatti`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Percorsi per public e dist
const publicDir = path.join(process.cwd(), 'public');
const distDir = path.join(process.cwd(), 'dist');
const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
const distSitemapPath = path.join(distDir, 'sitemap.xml');

// Ensure directories exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Write sitemap to both locations
fs.writeFileSync(publicSitemapPath, sitemap, 'utf8');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(distSitemapPath, sitemap, 'utf8');
}

console.log(`✅ Sitemap generated successfully`);
console.log(`📄 Generated ${urls.length} URLs`);
console.log(`📁 Saved to: ${publicSitemapPath}`);
if (fs.existsSync(distDir)) {
  console.log(`📁 Copied to: ${distSitemapPath}`);
}
