export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
}

export const categories: Category[] = [
  {
    name: 'Neckbands',
    slug: 'neckbands',
    description: 'Wireless neckband earphones for everyday listening and active lifestyles.',
    image: '/images/categories/neckbands.jpg',
    icon: 'Headphones',
  },
  {
    name: 'TWS Earbuds',
    slug: 'tws-earbuds',
    description: 'True wireless stereo earbuds for a cable-free audio experience.',
    image: '/images/categories/tws-earbuds.jpg',
    icon: 'Ear',
  },
  {
    name: 'Charger Adapters',
    slug: 'charger-adapters',
    description: 'Compact charging adapters for smartphones and compatible devices.',
    image: '/images/categories/charger-adapters.jpg',
    icon: 'Plug',
  },
  {
    name: 'Charging Cables',
    slug: 'charging-cables',
    description: 'Durable USB-C and multi-type charging cables for reliable connectivity.',
    image: '/images/categories/charging-cables.jpg',
    icon: 'Cable',
  },
  {
    name: 'Soundbars',
    slug: 'soundbars',
    description: 'Slim soundbars to enhance your home entertainment audio.',
    image: '/images/categories/soundbars.jpg',
    icon: 'Speaker',
  },
  {
    name: 'Bluetooth Speakers',
    slug: 'bluetooth-speakers',
    description: 'Portable Bluetooth speakers for music on the go.',
    image: '/images/categories/bluetooth-speakers.jpg',
    icon: 'Volume2',
  },
  {
    name: 'OWS Earbuds',
    slug: 'ows-earbuds',
    description: 'Open wearable stereo earbuds for ambient-aware audio.',
    image: '/images/categories/ows-earbuds.jpg',
    icon: 'Airplay',
  },
  {
    name: 'Home Theatre Systems',
    slug: 'home-theatre-systems',
    description: 'Complete home theatre speaker systems for immersive sound.',
    image: '/images/categories/home-theatre.jpg',
    icon: 'Home',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}
