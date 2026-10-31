export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  image: string;
  priceLabel: string;
  featured: boolean;
}

export const products: Product[] = [
  // Neckbands
  {
    id: 'proflex-wireless-neckband',
    name: 'ProFlex Wireless Neckband',
    slug: 'proflex-wireless-neckband',
    category: 'Neckbands',
    categorySlug: 'neckbands',
    description: 'Wireless neckband earphones designed for comfortable daily listening and clear audio quality.',
    image: '/images/products/neckbands/neckband-001.jpg',
    priceLabel: 'Price on Request',
    featured: true,
  },
  {
    id: 'activeband-sport-neckband',
    name: 'ActiveBand Sport Neckband',
    slug: 'activeband-sport-neckband',
    category: 'Neckbands',
    categorySlug: 'neckbands',
    description: 'Flexible neckband earphones built for active lifestyles and secure everyday wear.',
    image: '/images/products/neckbands/neckband-002.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },
  {
    id: 'comfortfit-neckband',
    name: 'ComfortFit Neckband',
    slug: 'comfortfit-neckband',
    category: 'Neckbands',
    categorySlug: 'neckbands',
    description: 'Lightweight neckband earphones engineered for extended comfort and convenient portability.',
    image: '/images/products/neckbands/neckband-003.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },

  // TWS Earbuds
  {
    id: 'purebuds-tws-earbuds',
    name: 'PureBuds TWS Earbuds',
    slug: 'purebuds-tws-earbuds',
    category: 'TWS Earbuds',
    categorySlug: 'tws-earbuds',
    description: 'True wireless stereo earbuds offering balanced audio and ergonomic everyday fit.',
    image: '/images/products/tws-earbuds/tws-001.jpg',
    priceLabel: 'Price on Request',
    featured: true,
  },
  {
    id: 'compact-tws-earbuds',
    name: 'Compact TWS Earbuds',
    slug: 'compact-tws-earbuds',
    category: 'TWS Earbuds',
    categorySlug: 'tws-earbuds',
    description: 'Pocket-sized true wireless stereo earbuds for convenient everyday audio and hands-free calls.',
    image: '/images/products/tws-earbuds/tws-002.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },
  {
    id: 'minipods-tws-earbuds',
    name: 'MiniPods TWS Earbuds',
    slug: 'minipods-tws-earbuds',
    category: 'TWS Earbuds',
    categorySlug: 'tws-earbuds',
    description: 'Sleek and compact wireless earbuds designed for lightweight portability and daily use.',
    image: '/images/products/tws-earbuds/tws-003.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },

  // Charger Adapters
  {
    id: 'compact-wall-charger',
    name: 'Compact Wall Charger',
    slug: 'compact-wall-charger',
    category: 'Charger Adapters',
    categorySlug: 'charger-adapters',
    description: 'Compact wall charging adapter providing reliable power delivery for phones and compatible devices.',
    image: '/images/products/charger-adapters/charger-001.jpg',
    priceLabel: 'Price on Request',
    featured: true,
  },
  {
    id: 'dual-port-charger-adapter',
    name: 'Dual Port Charger Adapter',
    slug: 'dual-port-charger-adapter',
    category: 'Charger Adapters',
    categorySlug: 'charger-adapters',
    description: 'Multi-port charging adapter designed to power two devices simultaneously from a single outlet.',
    image: '/images/products/charger-adapters/charger-002.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },
  {
    id: 'travel-charger-adapter',
    name: 'Travel Charger Adapter',
    slug: 'travel-charger-adapter',
    category: 'Charger Adapters',
    categorySlug: 'charger-adapters',
    description: 'Portable travel-friendly charging adapter suited for home, office, and on-the-go charging needs.',
    image: '/images/products/charger-adapters/charger-003.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },

  // Charging Cables
  {
    id: 'usb-c-charging-cable',
    name: 'USB-C Charging Cable',
    slug: 'usb-c-charging-cable',
    category: 'Charging Cables',
    categorySlug: 'charging-cables',
    description: 'Durable USB-C charging cable designed for smooth power delivery and device synchronization.',
    image: '/images/products/charging-cables/cable-001.jpg',
    priceLabel: 'Price on Request',
    featured: true,
  },
  {
    id: 'braided-usb-c-cable',
    name: 'Braided USB-C Cable',
    slug: 'braided-usb-c-cable',
    category: 'Charging Cables',
    categorySlug: 'charging-cables',
    description: 'Reinforced braided USB-C cable crafted for extra durability and tangle resistance.',
    image: '/images/products/charging-cables/cable-002.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },
  {
    id: 'multi-connector-cable',
    name: 'Multi-Connector Cable',
    slug: 'multi-connector-cable',
    category: 'Charging Cables',
    categorySlug: 'charging-cables',
    description: 'Versatile multi-connector cable offering broad compatibility with various device connection types.',
    image: '/images/products/charging-cables/cable-003.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },

  // Soundbars
  {
    id: 'slim-soundbar',
    name: 'Slim Soundbar',
    slug: 'slim-soundbar',
    category: 'Soundbars',
    categorySlug: 'soundbars',
    description: 'Slimline television soundbar designed to deliver clear acoustics and elevate home entertainment.',
    image: '/images/products/soundbars/soundbar-001.jpg',
    priceLabel: 'Price on Request',
    featured: true,
  },
  {
    id: 'home-soundbar-system',
    name: 'Home Soundbar System',
    slug: 'home-soundbar-system',
    category: 'Soundbars',
    categorySlug: 'soundbars',
    description: 'High-clarity soundbar system tailored for rich room-filling audio during movies and television.',
    image: '/images/products/soundbars/soundbar-002.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },
  {
    id: 'compact-tv-soundbar',
    name: 'Compact TV Soundbar',
    slug: 'compact-tv-soundbar',
    category: 'Soundbars',
    categorySlug: 'soundbars',
    description: 'Space-saving TV soundbar ideal for bedrooms and compact entertainment areas.',
    image: '/images/products/soundbars/soundbar-003.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },

  // Bluetooth Speakers
  {
    id: 'portable-bluetooth-speaker',
    name: 'Portable Bluetooth Speaker',
    slug: 'portable-bluetooth-speaker',
    category: 'Bluetooth Speakers',
    categorySlug: 'bluetooth-speakers',
    description: 'Compact wireless Bluetooth speaker delivering room-filling music wherever you go.',
    image: '/images/products/bluetooth-speakers/speaker-001.jpg',
    priceLabel: 'Price on Request',
    featured: true,
  },
  {
    id: 'waterproof-outdoor-speaker',
    name: 'Waterproof Outdoor Speaker',
    slug: 'waterproof-outdoor-speaker',
    category: 'Bluetooth Speakers',
    categorySlug: 'bluetooth-speakers',
    description: 'Rugged outdoor Bluetooth speaker built to resist splashes and accompany open-air gatherings.',
    image: '/images/products/bluetooth-speakers/speaker-002.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },
  {
    id: 'mini-desktop-speaker',
    name: 'Mini Desktop Speaker',
    slug: 'mini-desktop-speaker',
    category: 'Bluetooth Speakers',
    categorySlug: 'bluetooth-speakers',
    description: 'Desktop Bluetooth speaker designed for personal workstations, study desks, and bedside tables.',
    image: '/images/products/bluetooth-speakers/speaker-003.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },

  // OWS Earbuds
  {
    id: 'open-ear-wireless-earbuds',
    name: 'Open-Ear Wireless Earbuds',
    slug: 'open-ear-wireless-earbuds',
    category: 'OWS Earbuds',
    categorySlug: 'ows-earbuds',
    description: 'Open wearable stereo earbuds offering clear sound while keeping you connected to your surroundings.',
    image: '/images/products/ows-earbuds/ows-001.jpg',
    priceLabel: 'Price on Request',
    featured: true,
  },
  {
    id: 'sport-ows-earbuds',
    name: 'Sport OWS Earbuds',
    slug: 'sport-ows-earbuds',
    category: 'OWS Earbuds',
    categorySlug: 'ows-earbuds',
    description: 'Secure-fitting open-ear earbuds crafted for stability and situational awareness during sports.',
    image: '/images/products/ows-earbuds/ows-002.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },
  {
    id: 'lightweight-ows-earbuds',
    name: 'Lightweight OWS Earbuds',
    slug: 'lightweight-ows-earbuds',
    category: 'OWS Earbuds',
    categorySlug: 'ows-earbuds',
    description: 'Lightweight open-ear earbuds offering natural sound and fatigue-free listening throughout the day.',
    image: '/images/products/ows-earbuds/ows-003.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },

  // Home Theatre Systems
  {
    id: 'home-theatre-speaker-system',
    name: 'Home Theatre Speaker System',
    slug: 'home-theatre-speaker-system',
    category: 'Home Theatre Systems',
    categorySlug: 'home-theatre-systems',
    description: 'Comprehensive home theatre speaker setup providing immersive audio for family movie nights.',
    image: '/images/products/home-theatre/theatre-001.jpg',
    priceLabel: 'Price on Request',
    featured: true,
  },
  {
    id: 'surround-sound-system',
    name: 'Surround Sound System',
    slug: 'surround-sound-system',
    category: 'Home Theatre Systems',
    categorySlug: 'home-theatre-systems',
    description: 'Multi-speaker surround sound system designed to deliver cinema-quality audio in your living room.',
    image: '/images/products/home-theatre/theatre-002.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },
  {
    id: 'multimedia-speaker-setup',
    name: 'Multimedia Speaker Setup',
    slug: 'multimedia-speaker-setup',
    category: 'Home Theatre Systems',
    categorySlug: 'home-theatre-systems',
    description: 'Versatile multimedia speaker system ideal for televisions, home entertainment, and music streaming.',
    image: '/images/products/home-theatre/theatre-003.jpg',
    priceLabel: 'Price on Request',
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getAllProducts(): Product[] {
  return products;
}
