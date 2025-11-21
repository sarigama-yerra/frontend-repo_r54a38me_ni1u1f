import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { categories } from '../data/categories'

function useQuery() {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

export default function ProductsPage() {
  const query = useQuery()
  const initialCategory = query.get('category') || 'All'

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState(initialCategory)
  const [brand, setBrand] = useState('All')

  const brands = useMemo(() => ['All', ...Array.from(new Set(products.map(p => p.brand)))], [])
  const categoryNames = ['All', ...categories.map(c => c.name)]

  const filtered = products.filter(p => {
    const matchesSearch = [p.name, p.sku].join(' ').toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || p.category === category
    const matchesBrand = brand === 'All' || p.brand === brand
    return matchesSearch && matchesCategory && matchesBrand
  })

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold text-white">Product Catalogue</h1>
        <p className="text-slate-300/90 mt-1 text-sm">Showcase only. No online purchasing. Pricing visible after login.</p>
      </header>

      {/* Filters */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <div className="grid gap-3 md:grid-cols-3">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or SKU"
            className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Search products"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Filter by category"
          >
            {categoryNames.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={brand}
            onChange={e => setBrand(e.target.value)}
            className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Filter by brand"
          >
            {brands.map(b => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Grid */}
      <section>
        {filtered.length === 0 ? (
          <div className="text-slate-400 text-sm">No products match your filters.</div>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
