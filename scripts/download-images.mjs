import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const images = [
  // Categories
  {
    url: 'https://images.pexels.com/photos/382551/pexels-photo-382551.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/categories/neckbands.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/30671691/pexels-photo-30671691.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/categories/tws-earbuds.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/3921632/pexels-photo-3921632.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/categories/charger-adapters.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1619459072761-496c0812331b?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/categories/charging-cables.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/categories/soundbars.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/9875411/pexels-photo-9875411.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/categories/bluetooth-speakers.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/11035487/pexels-photo-11035487.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/categories/ows-earbuds.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/13175402/pexels-photo-13175402.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/categories/home-theatre.jpg'
  },

  // Products - Neckbands
  {
    url: 'https://images.pexels.com/photos/382551/pexels-photo-382551.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/proflex-wireless-neckband.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/382550/pexels-photo-382550.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/activeband-sport-neckband.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/334586/pexels-photo-334586.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/comfortfit-neckband.jpg'
  },

  // Products - TWS Earbuds
  {
    url: 'https://images.pexels.com/photos/30671691/pexels-photo-30671691.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/purebuds-tws-earbuds.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/10756711/pexels-photo-10756711.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/compact-tws-earbuds.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/minipods-tws-earbuds.jpg'
  },

  // Products - Charger Adapters
  {
    url: 'https://images.pexels.com/photos/3921632/pexels-photo-3921632.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/compact-wall-charger.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/3921631/pexels-photo-3921631.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/dual-port-charger-adapter.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1530545233050-3f0a5d0dd1ac?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/travel-charger-adapter.jpg'
  },

  // Products - Charging Cables
  {
    url: 'https://images.unsplash.com/photo-1619459072761-496c0812331b?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/usb-c-charging-cable.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/6774438/pexels-photo-6774438.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/braided-usb-c-cable.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/multi-connector-cable.jpg'
  },

  // Products - Soundbars
  {
    url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/slim-soundbar.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/13175396/pexels-photo-13175396.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/home-soundbar-system.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/30488426/pexels-photo-30488426.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/compact-tv-soundbar.jpg'
  },

  // Products - Bluetooth Speakers
  {
    url: 'https://images.pexels.com/photos/9875411/pexels-photo-9875411.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/portable-bluetooth-speaker.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/waterproof-outdoor-speaker.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/mini-desktop-speaker.jpg'
  },

  // Products - OWS Earbuds
  {
    url: 'https://images.pexels.com/photos/11035487/pexels-photo-11035487.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/open-ear-wireless-earbuds.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/5953549/pexels-photo-5953549.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/sport-ows-earbuds.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/lightweight-ows-earbuds.jpg'
  },

  // Products - Home Theatre Systems
  {
    url: 'https://images.pexels.com/photos/13175402/pexels-photo-13175402.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/home-theatre-speaker-system.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/13175399/pexels-photo-13175399.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/surround-sound-system.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/29777555/pexels-photo-29777555.jpeg?auto=compress&cs=tinysrgb&w=800',
    dest: 'public/images/products/multimedia-speaker-setup.jpg'
  },

  // Hero & Showcase
  {
    url: 'https://images.pexels.com/photos/3568307/pexels-photo-3568307.jpeg?auto=compress&cs=tinysrgb&w=1600',
    dest: 'public/images/hero/hero-electronics.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/6243764/pexels-photo-6243764.jpeg?auto=compress&cs=tinysrgb&w=1600',
    dest: 'public/images/hero/audio-showcase.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/3921630/pexels-photo-3921630.jpeg?auto=compress&cs=tinysrgb&w=1600',
    dest: 'public/images/hero/charging-showcase.jpg'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    const fullPath = path.resolve(dest);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });

    const client = url.startsWith('https') ? https : http;

    const request = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Handle redirect
        downloadFile(res.headers.location, dest).then(resolve);
        return;
      }

      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(fullPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded: ${dest}`);
          resolve(true);
        });
      } else {
        console.warn(`✗ HTTP ${res.statusCode} for ${dest}`);
        resolve(false);
      }
    });

    request.on('error', (err) => {
      console.warn(`✗ Error downloading ${dest}: ${err.message}`);
      resolve(false);
    });

    request.setTimeout(15000, () => {
      request.destroy();
      console.warn(`✗ Timeout for ${dest}`);
      resolve(false);
    });
  });
}

async function main() {
  console.log(`Starting download of ${images.length} assets...`);
  for (const item of images) {
    await downloadFile(item.url, item.dest);
  }
  console.log('Finished downloading assets.');
}

main();
