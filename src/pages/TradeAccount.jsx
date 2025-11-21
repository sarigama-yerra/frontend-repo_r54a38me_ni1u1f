import { useState } from 'react'

export default function TradeAccountPage() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const required = ['businessName', 'contactName', 'email', 'phone', 'billing', 'delivery', 'companyReg']
    for (const k of required) {
      if (!form.get(k)?.toString().trim()) {
        alert('Please fill in all required fields.')
        return
      }
    }
    // Simulate API call
    setTimeout(() => setSubmitted(true), 600)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-700 bg-green-900/20 p-8 text-green-100">
        <h1 className="text-2xl font-semibold mb-2">Thank you</h1>
        <p>
          Thank you for your interest in opening a trade account with MYM SUPPLIERS LTD. A member of our team will review your details and get in touch shortly.
        </p>
        <p className="mt-4 text-sm text-green-200/80">You can close this page or continue browsing the catalogue.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white">Open a Trade Account</h1>
        <p className="text-slate-300/90 mt-1 text-sm">Apply for trade access to view live pricing, discuss credit terms, and place orders via your account manager.</p>
      </header>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
        <h2 className="text-white font-medium mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-sm text-slate-300/90 space-y-1">
          <li>Access to competitive wholesale pricing</li>
          <li>Dedicated account support</li>
          <li>Potential credit terms and MOQs (subject to approval)</li>
          <li>Streamlined ordering via your account manager</li>
        </ul>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
        <h2 className="text-white font-medium mb-4">Application form</h2>
        <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-300 mb-1">Business name</label>
            <input name="businessName" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Trading name (optional)</label>
            <input name="tradingName" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Contact name</label>
            <input name="contactName" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" name="email" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Phone</label>
            <input name="phone" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-300 mb-1">Billing address</label>
            <textarea name="billing" rows={2} className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-300 mb-1">Delivery address</label>
            <textarea name="delivery" rows={2} className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Company registration number</label>
            <input name="companyReg" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">VAT number</label>
            <input name="vat" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Years in business (optional)</label>
            <input name="years" type="number" min="0" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Estimated monthly spend</label>
            <select name="spend" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100">
              <option>Under £1,000</option>
              <option>£1,000 - £5,000</option>
              <option>£5,000 - £10,000</option>
              <option>£10,000+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">How did you hear about us?</label>
            <select name="source" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100">
              <option>Search engine</option>
              <option>Referral</option>
              <option>Trade show</option>
              <option>Social media</option>
              <option>Other</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-300 mb-1">Notes / Requirements</label>
            <textarea name="notes" rows={4} className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" />
          </div>
          <div className="sm:col-span-2">
            <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">Submit Application</button>
          </div>
        </form>
        <p className="mt-4 text-sm text-slate-300">
          Already have an account? <a href="/auth" className="text-blue-400 hover:text-blue-300">Login to view pricing</a>.
        </p>
      </section>
    </div>
  )
}
