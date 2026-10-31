import sharp from 'sharp';

async function main() {
  console.log('--- Cleaning Philips Soundbar ---');
  const { data, info } = await sharp('public/images/test-sb-philips.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  // 1. Ambisound area: x: 825..880, y: 100..148
  // Sample brushed aluminum from x: 750..805
  for (let y = 100; y <= 148; y++) {
    for (let x = 825; x <= 880; x++) {
      const idx = (y * info.width + x) * info.channels;
      const sx = x - 80;
      const sy = y;
      const sIdx = (sy * info.width + sx) * info.channels;
      data[idx] = data[sIdx];
      data[idx+1] = data[sIdx+1];
      data[idx+2] = data[sIdx+2];
    }
  }

  // 2. PHILIPS text area: x: 820..892, y: 226..262
  // Sample clean mesh from x: 740..812
  for (let y = 226; y <= 262; y++) {
    for (let x = 820; x <= 892; x++) {
      const idx = (y * info.width + x) * info.channels;
      const sx = x - 80;
      const sy = y;
      const sIdx = (sy * info.width + sx) * info.channels;
      data[idx] = data[sIdx];
      data[idx+1] = data[sIdx+1];
      data[idx+2] = data[sIdx+2];
    }
  }

  // First save cleaned JPEG
  await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .jpeg({ quality: 95 })
    .toFile('public/images/philips-clean-raw.jpg');

  // Create framed product card with white padding (1600x1000)
  await sharp('public/images/philips-clean-raw.jpg')
    .resize(1600, 1000, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .jpeg({ quality: 92 })
    .toFile('public/images/products/soundbars/soundbar-003.jpg');

  console.log('✓ soundbar-003.jpg completely cleaned and exported');
}

main().catch(console.error);
