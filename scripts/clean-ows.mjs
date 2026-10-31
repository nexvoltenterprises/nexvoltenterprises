import sharp from 'sharp';

async function cleanOpenrun() {
  const img = sharp('public/images/test-ows-openrun.jpg');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

  // SHOKZ logo: x: 1710..2050, y: 1670..1830
  // Background orange: b < 30, g < 60
  // Letter pixels: b > 45
  for (let y = 1670; y < 1830; y++) {
    for (let x = 1710; x < 2050; x++) {
      const idx = (y * info.width + x) * info.channels;
      const b = data[idx + 2];
      const g = data[idx + 1];
      
      if (b > 40 || g > 65) {
        // Sample from y + 35
        const sampleY = y + 38;
        const sampleIdx = (sampleY * info.width + x) * info.channels;
        data[idx] = data[sampleIdx];
        data[idx + 1] = data[sampleIdx + 1];
        data[idx + 2] = data[sampleIdx + 2];
      }
    }
  }

  // Inner pod CE marking: x: 1180..1440, y: 1040..1320
  // Background orange: b < 10, g < 35
  // Marking: b > 15 || g > 40
  for (let y = 1040; y < 1320; y++) {
    for (let x = 1180; x < 1440; x++) {
      const idx = (y * info.width + x) * info.channels;
      const b = data[idx + 2];
      const g = data[idx + 1];
      
      if (b > 15 || g > 38) {
        // Sample from x - 45
        const sampleX = x - 45;
        const sampleIdx = (y * info.width + sampleX) * info.channels;
        data[idx] = data[sampleIdx];
        data[idx + 1] = data[sampleIdx + 1];
        data[idx + 2] = data[sampleIdx + 2];
      }
    }
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .jpeg({ quality: 95 })
    .toFile('public/images/products/ows-earbuds/ows-002.jpg');
  console.log('Saved clean ows-002.jpg');
}

async function cleanWaterproof() {
  const img = sharp('public/images/test-ows-waterproof.jpg');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

  // NAENKA logo is in box around x: 1840..2320, y: 1940..2080
  // Pod is dark: r < 45, g < 30, b < 30
  // NAENKA letters: r > 50 || g > 35 || b > 35
  // Sample horizontally from x - 180 (blank pod area to the left of NAENKA)
  for (let y = 1930; y < 2090; y++) {
    for (let x = 1840; x < 2320; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      if (r > 45 || g > 30 || b > 30) {
        const sampleX = x - 200;
        const sampleIdx = (y * info.width + sampleX) * info.channels;
        data[idx] = data[sampleIdx];
        data[idx + 1] = data[sampleIdx + 1];
        data[idx + 2] = data[sampleIdx + 2];
      }
    }
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .jpeg({ quality: 95 })
    .toFile('public/images/products/ows-earbuds/ows-003.jpg');
  console.log('Saved clean ows-003.jpg');
}

async function main() {
  await cleanOpenrun();
  await cleanWaterproof();
}

main().catch(console.error);
