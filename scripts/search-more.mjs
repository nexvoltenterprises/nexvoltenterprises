async function searchFiles(q, limit = 20) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|mime&format=json`;
  const res = await fetch(url, { headers: { "User-Agent": "NexvoltBot/1.0" } });
  const data = await res.json();
  const list = [];
  if (data.query && data.query.pages) {
    for (const p of Object.values(data.query.pages)) {
      if (p.imageinfo && p.imageinfo[0] && p.imageinfo[0].mime.startsWith("image/")) {
        list.push({ title: p.title, width: p.imageinfo[0].width, height: p.imageinfo[0].height, size: p.imageinfo[0].size });
      }
    }
  }
  return list;
}

async function run() {
  const topics = [
    "portable speaker isolated",
    "bluetooth speaker white background",
    "soundbar isolated",
    "soundbar white background",
    "home theater isolated",
    "5.1 sound isolated",
    "open ear clip",
    "conduction headset",
    "earhook earphone"
  ];
  for (const t of topics) {
    console.log(`\n=== ${t} ===`);
    const files = await searchFiles(t, 10);
    for (const f of files) {
      console.log(`- ${f.title} (${f.width}x${f.height})`);
    }
  }
}
run();
