export default function AboutPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white">About MYM SUPPLIERS LTD</h1>
        <p className="text-slate-300/90 mt-1 text-sm">Professional wholesale supplier serving trade customers.</p>
      </header>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
        <p className="text-slate-300/90">
          We partner with independent retailers, eCommerce businesses, hospitality and distributors to supply a wide range of products at competitive wholesale terms. Our team focuses on reliability, fast fulfillment, and long-term relationships.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="text-white font-medium mb-2">Industries served</h2>
          <ul className="list-disc list-inside text-sm text-slate-300/90 space-y-1">
            <li>Independent Retail</li>
            <li>eCommerce and Online Sellers</li>
            <li>Hospitality and Catering</li>
            <li>Wholesale and Distribution</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="text-white font-medium mb-2">At a glance</h2>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-xs text-slate-400">Years experience</div>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4">
              <div className="text-2xl font-bold text-white">1,000+</div>
              <div className="text-xs text-slate-400">SKUs available</div>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4">
              <div className="text-2xl font-bold text-white">48h</div>
              <div className="text-xs text-slate-400">Typical dispatch</div>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4">
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-xs text-slate-400">Countries served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
