import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-900/20 p-8 sm:p-10">
      <div className="absolute -inset-40 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.25),transparent_60%)]" />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            Wholesale only – open a trade account to access live pricing and place orders via your account manager.
          </h3>
          <p className="text-slate-300/90 mt-2 text-sm">
            Prices are visible only to approved trade customers.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/trade-account"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-500 transition-colors"
          >
            Open Trade Account
          </Link>
          <Link
            to="/auth"
            className="inline-flex items-center justify-center rounded-md border border-blue-400/50 text-blue-300 px-5 py-2.5 text-sm font-medium hover:bg-blue-500/10 transition-colors"
          >
            Login / Register
          </Link>
        </div>
      </div>
    </section>
  )
}
