import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 hover:border-blue-500/40 hover:bg-slate-900/70 transition-colors">
      <div className="h-28 rounded-lg bg-[linear-gradient(135deg,rgba(59,130,246,0.15),rgba(15,23,42,0.6))] border border-slate-800 flex items-center justify-center">
        <span className="text-slate-300 text-xs">Image placeholder</span>
      </div>
      <div className="mt-3">
        <h3 className="text-white font-medium line-clamp-2">{product.name}</h3>
        <div className="mt-1 text-xs text-slate-400">SKU: {product.sku}</div>
        <div className="mt-1 text-xs text-slate-400">Category: {product.category}</div>
        <p className="mt-2 text-sm text-slate-300/90 line-clamp-3">{product.description}</p>
        <div className="mt-2 text-xs text-slate-400">Pack size: {product.packSize}</div>
        <div className="mt-4 flex items-center justify-between">
          <Link
            to="/auth"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-500"
          >
            Login to view pricing
          </Link>
          <span className="text-[11px] text-slate-400">Pricing available to approved trade customers only</span>
        </div>
      </div>
    </div>
  )
}
