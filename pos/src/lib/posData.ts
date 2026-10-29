export interface POSProduct {
  id: string;
  name: string;
  category: 'edc' | 'decor' | 'sacred' | 'tech' | 'custom';
  price: number;
  stockQty: number;
  imageUrl?: string;
  color: string;
  shortcut?: string;
}

export interface POSCartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  variant?: string;
}

export interface POSTransaction {
  id: string;
  orderNumber: number;
  timestamp: string;
  items: POSCartItem[];
  totalAmount: number;
  paymentMethod: 'UPI' | 'CASH';
  cashTendered?: number;
  changeDue?: number;
  customerPhone?: string;
  stallName: string;
}

export interface StallShift {
  stallName: string;
  eventVenue: string;
  attendant: string;
  startedAt: string;
  openingCashFloat: number;
  isActive: boolean;
}

export const INITIAL_POS_PRODUCTS: POSProduct[] = [
  {
    id: 'pos-keychain-single',
    name: 'Single 3D Typographic Keychain',
    category: 'edc',
    price: 99,
    stockQty: 85,
    imageUrl: '/images/products/bespoke_keychains.jpg',
    color: '#8DC63F'
  },
  {
    id: 'pos-keychain-3pack',
    name: 'Custom Typographic Keychains (Pack of 3)',
    category: 'edc',
    price: 299,
    stockQty: 40,
    imageUrl: '/images/products/bespoke_keychains.jpg',
    color: '#0EA5E9'
  },
  {
    id: 'pos-hex',
    name: 'Hex Modular Desk Organizer',
    category: 'tech',
    price: 349,
    stockQty: 24,
    imageUrl: '/images/products/hex_desk_organizer.jpg',
    color: '#059669'
  },
  {
    id: 'pos-vase',
    name: 'Geometric Spiral Fluted Vase',
    category: 'decor',
    price: 449,
    stockQty: 18,
    imageUrl: '/images/products/spiral_fluted_vase.jpg',
    color: '#D97706'
  },
  {
    id: 'pos-stand',
    name: 'Parametric Headphone Stand',
    category: 'tech',
    price: 749,
    stockQty: 12,
    imageUrl: '/images/products/modular_headphone_stand.jpg',
    color: '#0F172A'
  },
  {
    id: 'pos-idol',
    name: 'Divine Ganesha Temple Idol',
    category: 'sacred',
    price: 899,
    stockQty: 15,
    imageUrl: '/images/products/cultural_deity_idol.jpg',
    color: '#B45309'
  },
  {
    id: 'pos-lamp',
    name: 'Voronoi Ambient Desk Lamp (LED)',
    category: 'decor',
    price: 1299,
    stockQty: 8,
    imageUrl: '/images/products/voronoi_ambient_lamp.jpg',
    color: '#4D7C0F'
  },
  {
    id: 'pos-litho',
    name: 'Lithophane Backlit Memory Box',
    category: 'decor',
    price: 1499,
    stockQty: 6,
    imageUrl: '/images/products/lithophane_photo_box.jpg',
    color: '#4338CA'
  }
];

export const DEFAULT_SHIFT: StallShift = {
  stallName: 'Namma 3D Lab Pop-up Stall',
  eventVenue: 'College Tech Fest 2026 (Bangalore)',
  attendant: 'Akshay / Volunteer',
  startedAt: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
  openingCashFloat: 1000,
  isActive: true
};
