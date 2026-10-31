import sharp from 'sharp';

async function main() {
  const { data, info } = await sharp('public/images/test-sb-snowdon.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  // 1. Inpaint badge text "MAJORITY" at (x: 990..1080, y: 1180..1225)
  // The badge plate itself is dark gray (around RGB 35, 35, 35)
  for (let y = 1180; y <= 1225; y++) {
    for (let x = 990; x <= 1080; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 60 && g > 60 && b > 60) {
        // Sample from the badge's dark body (10px lower or to the left)
        const sx = 993; // inside badge black edge
        const sy = 1210;
        const sIdx = (sy * info.width + sx) * info.channels;
        data[idx] = data[sIdx];
        data[idx+1] = data[sIdx+1];
        data[idx+2] = data[sIdx+2];
      }
    }
  }

  // 2. Inpaint remote text "MAJORITY" at (x: 1320..1420, y: 1490..1535)
  for (let y = 1490; y <= 1535; y++) {
    for (let x = 1320; x <= 1420; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 75 && g > 75 && b > 75) {
        const sx = x - 22;
        const sy = y - 12;
        if (sx >= 0 && sy >= 0 && sx < info.width && sy < info.height) {
          const sIdx = (sy * info.width + sx) * info.channels;
          data[idx] = data[sIdx];
          data[idx+1] = data[sIdx+1];
          data[idx+2] = data[sIdx+2];
        }
      }
    }
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .toFile('public/images/products/soundbars/soundbar-001.jpg');

  console.log('✓ soundbar-001.jpg inpaint complete');
}

main().catch(console.error);
