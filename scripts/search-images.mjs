import https from 'https';

const query = process.argv[2] || 'wireless earbuds';

function searchUnsplash(q) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(q)}&per_page=10`;
  const req = https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        console.log(`Query: "${q}" — Found ${json.results?.length || 0} results:`);
        (json.results || []).forEach((item, idx) => {
          console.log(`--- [${idx + 1}] ---`);
          console.log(`ID: ${item.id}`);
          console.log(`Alt: ${item.alt_description || item.description || 'No description'}`);
          console.log(`URL: ${item.urls?.regular}`);
        });
      } catch (err) {
        console.error('Parse error:', err.message);
      }
    });
  });
  req.on('error', err => console.error('Request error:', err.message));
}

searchUnsplash(query);
