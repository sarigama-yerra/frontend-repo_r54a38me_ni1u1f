import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import CTASection from '../components/CTASection'
import { categories } from '../data/categories'

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-b from-slate-900 to-slate-950 p-10">
        <div className="absolute -inset-40 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Trusted Wholesale Supply Partner for Independent Retailers & Businesses
          </h1>
          <p className="mt-4 text-slate-300/90 text-lg">
            MYM SUPPLIERS LTD is a wholesale-only supplier. Browse our ranges and register to view live trade pricing.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link to="/trade-account" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-blue-500">
              Open a Trade Account
            </Link>
            <Link to="/auth" className="inline-flex items-center justify-center rounded-md border border-blue-400/50 text-blue-300 px-5 py-3 text-sm font-medium hover:bg-blue-500/10">
              Login to View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Competitive wholesale pricing', desc: 'Preferential rates for approved trade customers.' },
            { title: 'Fast UK & international shipping', desc: 'Reliable logistics with tracked delivery options.' },
            { title: 'Dedicated account support', desc: 'Personal assistance from our trade account team.' },
            { title: 'Wide product range', desc: 'Curated selection across multiple categories.' },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <h3 className="text-white font-medium">{f.title}</h3>
              <p className="text-sm text-slate-300/80 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured categories */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Featured Categories</h2>
          <Link to="/products" className="text-sm text-blue-400 hover:text-blue-300">View all products →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 8).map((c) => (
            <CategoryCard key={c.id} name={c.name} description={c.description} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
