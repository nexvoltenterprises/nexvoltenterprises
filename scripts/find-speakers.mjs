async function search(q) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&gsrlimit=30&prop=imageinfo&iiprop=url|size|mime&format=json`;
  const res = await fetch(url, { headers: { "User-Agent": "NexvoltBot/1.0" } });
  const data = await res.json();
  const list = [];
  if (data.query && data.query.pages) {
    for (const p of Object.values(data.query.pages)) {
      if (p.imageinfo && p.imageinfo[0] && p.imageinfo[0].mime && p.imageinfo[0].mime.startsWith("image/")) {
        list.push({ title: p.title, width: p.imageinfo[0].width, height: p.imageinfo[0].height, url: p.imageinfo[0].url });
      }
    }
  }
  return list;
}

async function run() {
  const queries = [
    "portable speaker",
    "bluetooth box",
    "mini speaker",
    "wireless speaker",
    "loudspeaker box"
  ];
  for (const q of queries) {
    const res = await search(q);
    console.log(`=== ${q}: ${res.length} images ===`);
    for (const r of res.slice(0, 15)) {
      console.log(`${r.title} | ${r.width}x${r.height}`);
    }
  }
}
run();
