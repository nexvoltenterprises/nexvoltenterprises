import https from 'https';

const query = process.argv[2] || 'wireless headphones';

function searchCommons(q) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&gsrlimit=20&prop=imageinfo&iiprop=url|size|extmetadata&format=json`;

  https.get(url, {
    headers: {
      'User-Agent': 'NexvoltAuditor/1.0 (contact@nexvolt.example; testing)'
    }
  }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const pages = json.query?.pages || {};
        console.log(`Results for "${q}": ${Object.keys(pages).length}`);
        for (const pid of Object.keys(pages)) {
          const p = pages[pid];
          const info = p.imageinfo?.[0];
          const desc = info?.extmetadata?.ObjectName?.value || info?.extmetadata?.ImageDescription?.value || '';
          console.log(`- Title: "${p.title}"`);
          console.log(`  Size: ${info?.width}x${info?.height}`);
          console.log(`  URL: ${info?.url}`);
        }
      } catch (err) {
        console.error('Parse error:', err.message);
      }
    });
  }).on('error', err => console.error('Request error:', err.message));
}

searchCommons(query);
