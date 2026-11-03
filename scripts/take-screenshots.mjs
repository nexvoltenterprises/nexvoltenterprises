import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve(process.cwd(), 'screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const edgePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
];

const executablePath = edgePaths.find(p => fs.existsSync(p));
if (!executablePath) {
  console.error('No browser executable found!');
  process.exit(1);
}

const routes = [
  { name: 'home', path: '/' },
  { name: 'products', path: '/products' },
  { name: 'product-detail', path: '/products/purebuds-tws-earbuds' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' }
];

async function capture() {
  console.log('Launching browser at', executablePath);
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setCacheEnabled(false);

  for (const r of routes) {
    const url = `http://localhost:3000${r.path}`;
    console.log(`Capturing ${r.name} from ${url}...`);

    // Desktop
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(url, { waitUntil: 'load', timeout: 15000 });

    // Scroll to bottom and back to trigger all lazy-loaded images
    await page.evaluate(async () => {
      document.querySelectorAll('img').forEach(img => {
        img.loading = 'eager';
      });
      await new Promise(resolve => {
        let total = 0;
        const timer = setInterval(() => {
          window.scrollBy(0, 500);
          total += 500;
          if (total >= document.body.scrollHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 80);
      });
    });
    await new Promise(r => setTimeout(r, 1500));

    if (r.name === 'home') {
      await page.screenshot({ path: path.join(outDir, `${r.name}-desktop-full.png`), fullPage: true });

      // Click to open the pop-up modal and take a screenshot!
      try {
        const modalBtn = await page.$('button[aria-label="Click to open Nexvolt Essentials pop-up preview"]');
        if (modalBtn) {
          await modalBtn.click();
          await new Promise(res => setTimeout(res, 800));
          await page.screenshot({ path: path.join(outDir, `essentials-modal-open.png`), fullPage: false });
          // Close modal
          const closeBtn = await page.$('button[aria-label="Close pop-up"]');
          if (closeBtn) await closeBtn.click();
          await new Promise(res => setTimeout(res, 400));
        }
      } catch (e) {
        console.warn('Could not capture modal open:', e.message);
      }
    }
    await page.screenshot({ path: path.join(outDir, `${r.name}-desktop.png`), fullPage: false });

    // Mobile
    await page.setViewport({ width: 390, height: 844, isMobile: true });
    await page.goto(url, { waitUntil: 'load', timeout: 15000 });
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: path.join(outDir, `${r.name}-mobile.png`), fullPage: false });
  }

  await browser.close();
  console.log('Screenshots completed successfully!');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
