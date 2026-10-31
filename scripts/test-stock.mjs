async function testStock(query) {
  try {
    const res = await fetch(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=10`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "*/*"
      }
    });
    console.log("Status:", res.status);
    if (res.ok) {
      const data = await res.json();
      console.log(`Query "${query}": found ${data.results.length}`);
      for (const r of data.results) {
        console.log(`- [${r.id}] ${r.alt_description} | URL: ${r.urls.regular}`);
      }
    } else {
      console.log("Response text:", await res.text());
    }
  } catch (e) {
    console.error("Error:", e.message);
  }
}
testStock("soundbar");
