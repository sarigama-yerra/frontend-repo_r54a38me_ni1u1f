import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-white font-semibold">MYM SUPPLIERS LTD</h3>
          <p className="mt-3 text-sm text-slate-300/80">
            Wholesale-only supplier. Professional B2B partner for retailers and businesses.
          </p>
        </div>
        <div>
          <h4 className="text-slate-200 font-medium">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="text-slate-300 hover:text-white" to="/">Home</Link></li>
            <li><Link className="text-slate-300 hover:text-white" to="/products">Products</Link></li>
            <li><Link className="text-slate-300 hover:text-white" to="/trade-account">Open Trade Account</Link></li>
            <li><Link className="text-slate-300 hover:text-white" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-200 font-medium">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><span className="text-slate-400">Privacy Policy (placeholder)</span></li>
            <li><span className="text-slate-400">Terms of Service (placeholder)</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-200 font-medium">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Email: sales@mym-suppliers.com</li>
            <li>Phone: +44 (0)20 0000 0000</li>
            <li>Address: 123 Trade Park, London, UK</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} MYM SUPPLIERS LTD. All rights reserved.
      </div>
    </footer>
  )
}
