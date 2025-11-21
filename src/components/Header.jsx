import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-white' : 'text-slate-300 hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <span className="text-blue-400 font-bold">M</span>
              </div>
              <span className="text-white font-semibold tracking-wide">MYM SUPPLIERS LTD</span>
            </Link>
          </div>

          {/* Center: Nav (desktop) */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            <NavItem to="/" label="Home" />
            <NavItem to="/products" label="Products" />
            <NavItem to="/about" label="About" />
            <NavItem to="/contact" label="Contact" />
          </nav>

          {/* Right: CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/auth"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500 transition-colors"
            >
              Login / Register
            </Link>
            <Link
              to="/trade-account"
              className="inline-flex items-center justify-center rounded-md border border-blue-400/50 text-blue-300 px-4 py-2 text-sm font-medium hover:bg-blue-500/10 transition-colors"
            >
              Open Trade Account
            </Link>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden p-2 rounded text-slate-200 hover:bg-slate-800"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/95">
          <div className="px-4 py-3 space-y-1">
            <NavItem to="/" label="Home" onClick={() => setOpen(false)} />
            <NavItem to="/products" label="Products" onClick={() => setOpen(false)} />
            <NavItem to="/about" label="About" onClick={() => setOpen(false)} />
            <NavItem to="/contact" label="Contact" onClick={() => setOpen(false)} />
            <div className="pt-2 flex items-center gap-2">
              <Link
                to="/auth"
                onClick={() => setOpen(false)}
                className="flex-1 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500 transition-colors"
              >
                Login / Register
              </Link>
              <Link
                to="/trade-account"
                onClick={() => setOpen(false)}
                className="flex-1 inline-flex items-center justify-center rounded-md border border-blue-400/50 text-blue-300 px-4 py-2 text-sm font-medium hover:bg-blue-500/10 transition-colors"
              >
                Open Trade Account
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
