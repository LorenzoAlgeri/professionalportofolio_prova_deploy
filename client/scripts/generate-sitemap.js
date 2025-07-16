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

const publicDir = path.join(process.cwd(), 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap
fs.writeFileSync(sitemapPath, sitemap, 'utf8');

console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
console.log(`📄 Generated ${urls.length} URLs`);
