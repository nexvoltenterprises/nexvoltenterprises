import sharp from 'sharp';

async function main() {
  console.log('--- Cleaning Sierra Soundbar ---');
  const { data, info } = await sharp('public/images/test-sb-sierra.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  // 1. Subwoofer: area around x: 1110..1205, y: 385..435
  // Fill the small rectangle with the exact surrounding wood tone
  // Sample wood tone average from x: 1080..1100, y: 385..435
  for (let y = 385; y <= 435; y++) {
    for (let x = 1110; x <= 1205; x++) {
      const idx = (y * info.width + x) * info.channels;
      const sx = x - 55;
      const sy = y;
      const sIdx = (sy * info.width + sx) * info.channels;
      data[idx] = data[sIdx];
      data[idx+1] = data[sIdx+1];
      data[idx+2] = data[sIdx+2];
    }
  }

  // 2. Soundbar left grille: x: 70..140, y: 1075..1120
  for (let y = 1075; y <= 1120; y++) {
    for (let x = 70; x <= 140; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 60 || g > 60 || b > 60) {
        const sx = x;
        const sy = y + 25;
        const sIdx = (sy * info.width + sx) * info.channels;
        data[idx] = data[sIdx];
        data[idx+1] = data[sIdx+1];
        data[idx+2] = data[sIdx+2];
      }
    }
  }

  // 3. Soundbar right badge: "Dolby Atmos" at x: 1510..1640, y: 1440..1490
  // Badge background is around RGB(60, 60, 60)
  for (let y = 1440; y <= 1490; y++) {
    for (let x = 1510; x <= 1640; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 90 && g > 90 && b > 90) { // bright white text
        // Sample badge body near left edge of badge
        const sIdx = (1470 * info.width + 1512) * info.channels;
        data[idx] = data[sIdx];
        data[idx+1] = data[sIdx+1];
        data[idx+2] = data[sIdx+2];
      }
    }
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .toFile('public/images/products/soundbars/soundbar-002.jpg');

  console.log('✓ soundbar-002.jpg perfected');
}

main().catch(console.error);
