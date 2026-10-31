async function searchCommons(q) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srnamespace=6&srlimit=20&format=json`;
  const res = await fetch(url, { headers: { "User-Agent": "NexvoltBot/1.0" } });
  const data = await res.json();
  console.log(`=== Query: ${q} ===`);
  for (const item of data.query.search) {
    console.log(item.title);
  }
}

async function main() {
  const query = process.argv[2] || "bluetooth speaker";
  await searchCommons(query);
}
main();
