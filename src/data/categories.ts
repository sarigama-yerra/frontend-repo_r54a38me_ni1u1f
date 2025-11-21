// Simple in-code category data. Edit names/descriptions as needed.
export type Category = {
  id: string
  name: string
  description: string
}

export const categories: Category[] = [
  { id: 'home-kitchen', name: 'Home & Kitchen', description: 'Cookware, utensils, storage and home essentials.' },
  { id: 'electronics', name: 'Electronics & Accessories', description: 'Audio, cables, chargers, and gadgets for daily use.' },
  { id: 'health-beauty', name: 'Health & Beauty', description: 'Skincare, personal care, and wellness essentials.' },
  { id: 'grocery', name: 'Grocery & Convenience', description: 'Ambient foods, snacks, and everyday convenience lines.' },
  { id: 'office', name: 'Office & Stationery', description: 'Paper, pens, office supplies and mailing.' },
  { id: 'cleaning', name: 'Cleaning & Janitorial', description: 'Surface care, detergents, and cleaning accessories.' },
  { id: 'toys', name: 'Toys & Gifts', description: 'Gifting, toys, and seasonal lines.' },
  { id: 'outdoor', name: 'Outdoor & DIY', description: 'Garden tools, lighting, and DIY accessories.' },
]
