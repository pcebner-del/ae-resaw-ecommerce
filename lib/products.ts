export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'guitar' | 'bass';
  images: {
    top: string;
    bottom: string;
    sideProfile: string;
  };
  sizeOptions: {
    guitarBody?: string[];
    bassBody?: string[];
  };
  wood: string;
  finish: string;
}

// Mock product data
export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Mahogany Body',
    description: 'Exceptional mahogany blank with rich grain patterns. Ideal for warm, resonant tones with excellent sustain. Each piece is carefully selected for tonal quality and visual appeal.',
    price: 12500, // in cents
    category: 'guitar',
    wood: 'Mahogany',
    finish: 'Unfinished',
    images: {
      top: '/images/placeholder-top.jpg',
      bottom: '/images/placeholder-bottom.jpg',
      sideProfile: '/images/placeholder-side.jpg',
    },
    sizeOptions: {
      guitarBody: ['Size options TBD'],
      bassBody: undefined,
    },
  },
  {
    id: '2',
    name: 'Figured Maple Body',
    description: 'Stunning figured maple with exceptional flame patterns. Known for bright, articulate tone with excellent clarity. Premium grade selection.',
    price: 15000,
    category: 'guitar',
    wood: 'Figured Maple',
    finish: 'Unfinished',
    images: {
      top: '/images/placeholder-top.jpg',
      bottom: '/images/placeholder-bottom.jpg',
      sideProfile: '/images/placeholder-side.jpg',
    },
    sizeOptions: {
      guitarBody: ['Size options TBD'],
      bassBody: undefined,
    },
  },
  {
    id: '3',
    name: 'Ash Body Blank',
    description: 'Classic swamp ash blank with beautiful open grain. Delivers balanced tone with excellent resonance across the frequency spectrum. Lightweight and responsive.',
    price: 11000,
    category: 'guitar',
    wood: 'Swamp Ash',
    finish: 'Unfinished',
    images: {
      top: '/images/placeholder-top.jpg',
      bottom: '/images/placeholder-bottom.jpg',
      sideProfile: '/images/placeholder-side.jpg',
    },
    sizeOptions: {
      guitarBody: ['Size options TBD'],
      bassBody: undefined,
    },
  },
  {
    id: '4',
    name: 'Alder Bass Body',
    description: 'Premium alder blank sized for bass builds. Known for balanced, warm tone with excellent low-end definition. Consistent density for reliable tonal characteristics.',
    price: 13500,
    category: 'bass',
    wood: 'Alder',
    finish: 'Unfinished',
    images: {
      top: '/images/placeholder-top.jpg',
      bottom: '/images/placeholder-bottom.jpg',
      sideProfile: '/images/placeholder-side.jpg',
    },
    sizeOptions: {
      guitarBody: undefined,
      bassBody: ['Size options TBD'],
    },
  },
  {
    id: '5',
    name: 'Walnut Bass Body',
    description: 'Rich walnut blank with deep chocolate tones and striking grain. Offers warm, punchy tone with excellent sustain. Premium grade for discerning builders.',
    price: 16500,
    category: 'bass',
    wood: 'Walnut',
    finish: 'Unfinished',
    images: {
      top: '/images/placeholder-top.jpg',
      bottom: '/images/placeholder-bottom.jpg',
      sideProfile: '/images/placeholder-side.jpg',
    },
    sizeOptions: {
      guitarBody: undefined,
      bassBody: ['Size options TBD'],
    },
  },
  {
    id: '6',
    name: 'Mahogany Bass Body',
    description: 'Dense mahogany blank optimized for bass construction. Delivers warm, focused low-end with excellent note definition. Consistent grain for predictable tonal response.',
    price: 14000,
    category: 'bass',
    wood: 'Mahogany',
    finish: 'Unfinished',
    images: {
      top: '/images/placeholder-top.jpg',
      bottom: '/images/placeholder-bottom.jpg',
      sideProfile: '/images/placeholder-side.jpg',
    },
    sizeOptions: {
      guitarBody: undefined,
      bassBody: ['Size options TBD'],
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: 'guitar' | 'bass'): Product[] {
  return products.filter(p => p.category === category);
}
