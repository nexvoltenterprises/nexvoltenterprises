import https from 'https';
import fs from 'fs';
import path from 'path';

export function getWikimediaImageUrl(fileTitle) {
  return new Promise((resolve, reject) => {
    const title = fileTitle.startsWith('File:') ? fileTitle : `File:${fileTitle}`;
    const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;

    https.get(url, {
      headers: {
        'User-Agent': 'NexvoltWebsiteAuditor/1.0 (contact@nexvolt.example; testing for open licensed media)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query?.pages;
          const pageId = Object.keys(pages)[0];
          const imageInfo = pages[pageId]?.imageinfo;
          if (imageInfo && imageInfo[0]?.url) {
            resolve(imageInfo[0].url);
          } else {
            reject(new Error(`No image URL found for ${title}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

export function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const fullPath = path.resolve(dest);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });

    https.get(url, {
      headers: {
        'User-Agent': 'NexvoltWebsiteAuditor/1.0 (contact@nexvolt.example; testing for open licensed media)'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(fullPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Saved: ${dest} (${fs.statSync(fullPath).size} bytes)`);
          resolve(true);
        });
      } else {
        reject(new Error(`Download failed with status ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

const fileTitle = process.argv[2];
const destPath = process.argv[3];
if (fileTitle && destPath) {
  getWikimediaImageUrl(fileTitle)
    .then(url => {
      console.log(`Found direct URL: ${url}`);
      return downloadFile(url, destPath);
    })
    .catch(err => console.error('Error:', err.message));
}
