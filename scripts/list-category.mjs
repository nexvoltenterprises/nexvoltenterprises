async function listCategory(cat) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${encodeURIComponent(cat)}&cmnamespace=6&cmlimit=50&format=json`;
  const res = await fetch(url, { headers: { "User-Agent": "NexvoltBot/1.0" } });
  const data = await res.json();
  console.log(`=== Category: ${cat} ===`);
  if (data.query && data.query.categorymembers) {
    for (const item of data.query.categorymembers) {
      console.log(item.title);
    }
  } else {
    console.log("No members found or error:", data);
  }
}

async function main() {
  const cat = process.argv[2] || "Bluetooth speakers";
  await listCategory(cat);
}
main();
