import https from 'https';
import fs from 'fs';
import path from 'path';

const pageUrl = process.argv[2];
const savePath = process.argv[3];

if (!pageUrl) {
  console.error('Usage: node get-unsplash-image.mjs <unsplash-page-url> [save-path]');
  process.exit(1);
}

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const nextUrl = new URL(res.headers.location, url).toString();
        return fetchPage(nextUrl).then(resolve).catch(reject);
      }
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => resolve(html));
    }).on('error', reject);
  });
}

function downloadImage(imgUrl, dest) {
  return new Promise((resolve, reject) => {
    const fullPath = path.resolve(dest);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });

    https.get(imgUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const nextUrl = new URL(res.headers.location, imgUrl).toString();
        return downloadImage(nextUrl, dest).then(resolve).catch(reject);
      }
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(fullPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Saved: ${dest}`);
          resolve(true);
        });
      } else {
        reject(new Error(`Status ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  console.log(`Fetching page: ${pageUrl}`);
  const html = await fetchPage(pageUrl);
  const match = html.match(/<meta property=["']og:image["'] content=["']([^"']+)["']/i);
  if (!match) {
    console.error('No og:image found on page.');
    return;
  }
  let directUrl = match[1];
  console.log('Extracted direct image URL:', directUrl);

  if (savePath) {
    // Ensure high resolution
    if (directUrl.includes('?')) {
      directUrl = directUrl.split('?')[0] + '?auto=format&fit=crop&w=1400&q=85';
    }
    await downloadImage(directUrl, savePath);
  }
}

main().catch(err => console.error('Error:', err.message));
