async function search(q) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&gsrlimit=20&prop=imageinfo&iiprop=url|size|mime&format=json`;
  const res = await fetch(url, { headers: { "User-Agent": "NexvoltBot/1.0" } });
  const data = await res.json();
  console.log(`=== Query: ${q} ===`);
  if (!data.query || !data.query.pages) {
    console.log("None found");
    return [];
  }
  const results = [];
  for (const p of Object.values(data.query.pages)) {
    if (p.imageinfo && p.imageinfo[0]) {
      const info = p.imageinfo[0];
      if (info.mime && info.mime.startsWith("image/")) {
        console.log(`- Title: ${p.title} (${info.width}x${info.height}, ${Math.round(info.size/1024)}KB)`);
        results.push({ title: p.title, url: info.url, width: info.width, height: info.height });
      }
    }
  }
  return results;
}

async function run() {
  const query = process.argv.slice(2).join(" ");
  if (query) {
    await search(query);
  } else {
    await search("soundbar speaker");
    await search("5.1 speaker system");
  }
}
run();
