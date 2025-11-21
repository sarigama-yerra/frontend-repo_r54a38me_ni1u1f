// Simple in-code product data for demo purposes only.
// Edit or extend this list to manage the catalogue. No prices are shown in the UI.
export type Product = {
  id: string
  name: string
  sku: string
  category: string
  brand: string
  description: string
  image?: string
  packSize: string
  // price?: number // Optional; intentionally not rendered. Pricing visible only to trade customers.
}

export const products: Product[] = [
  {
    id: 'p-001',
    name: 'Stainless Steel Chef Knife 8\"',
    sku: 'HK-SSK-08',
    category: 'Home & Kitchen',
    brand: 'ProEdge',
    description: 'Professional-grade 8\" chef knife with ergonomic handle and balanced blade.',
    image: '',
    packSize: 'Case of 12',
  },
  {
    id: 'p-002',
    name: 'Wireless Earbuds V5',
    sku: 'EL-WEB-05',
    category: 'Electronics & Accessories',
    brand: 'SonicPulse',
    description: 'True wireless earbuds with noise isolation and charging case.',
    image: '',
    packSize: 'Case of 24',
  },
  {
    id: 'p-003',
    name: 'Vitamin C Serum 30ml',
    sku: 'HB-VCS-30',
    category: 'Health & Beauty',
    brand: 'GlowLab',
    description: 'Brightening serum with 10% Vitamin C for daily skincare routines.',
    image: '',
    packSize: 'Case of 48',
  },
  {
    id: 'p-004',
    name: 'Organic Granola 500g',
    sku: 'GC-OGR-50',
    category: 'Grocery & Convenience',
    brand: 'HarvestCo',
    description: 'Crunchy organic granola with mixed nuts and seeds.',
    image: '',
    packSize: 'Case of 16',
  },
  {
    id: 'p-005',
    name: 'Microfiber Cleaning Cloths',
    sku: 'HK-MCC-10',
    category: 'Home & Kitchen',
    brand: 'CleanPro',
    description: 'Ultra-soft microfiber cloths for streak-free cleaning.',
    image: '',
    packSize: 'Case of 60',
  },
  {
    id: 'p-006',
    name: 'USB-C Fast Charger 20W',
    sku: 'EL-UFC-20',
    category: 'Electronics & Accessories',
    brand: 'Voltix',
    description: 'Compact 20W USB-C fast charger with multi-protection.',
    image: '',
    packSize: 'Case of 40',
  },
]
