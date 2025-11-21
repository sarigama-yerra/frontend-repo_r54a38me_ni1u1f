import { Link } from 'react-router-dom'

export default function CategoryCard({ name, description }) {
  const query = new URLSearchParams({ category: name }).toString()
  return (
    <div className="group rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-blue-500/40 hover:bg-slate-900/70 transition-colors">
      <div className="h-24 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-800 flex items-center justify-center">
        <span className="text-slate-400 text-sm">{name}</span>
      </div>
      <h3 className="mt-4 text-white font-medium">{name}</h3>
      <p className="text-sm text-slate-300/80 mt-1">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <Link
          to={`/products?${query}`}
          className="text-sm font-medium text-blue-400 hover:text-blue-300"
        >
          View products →
        </Link>
        <span className="text-[11px] text-slate-400">Login / Register to view trade prices</span>
      </div>
    </div>
  )
}
