import { useState } from 'react'

function Banner({ kind = 'info', children }) {
  const colors = kind === 'success' ? 'bg-green-900/30 border-green-700 text-green-200' : 'bg-blue-900/30 border-blue-700 text-blue-200'
  return <div className={`rounded-md border px-3 py-2 text-sm ${colors}`}>{children}</div>
}

export default function AuthPage() {
  const [tab, setTab] = useState('login')
  const [message, setMessage] = useState('')

  const onLogin = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')?.toString().trim()
    const password = form.get('password')?.toString().trim()
    if (!email || !password) {
      setMessage('Please enter your email and password.')
      return
    }
    setMessage('Logged in (demo only). In a real system, this would redirect to your trade dashboard.')
  }

  const onRegister = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const required = ['businessName', 'contactName', 'email']
    for (const key of required) {
      const value = form.get(key)?.toString().trim()
      if (!value) {
        setMessage('Please fill in all required fields for registration.')
        return
      }
    }
    setMessage('Thank you. Your registration has been submitted. Our team will contact you to complete your trade account setup.')
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white">Login & Register</h1>
        <p className="text-slate-300/90 mt-1 text-sm">Prices are only visible to approved trade customers. Register or open a trade account to view live pricing and place orders with MYM SUPPLIERS LTD.</p>
      </header>

      {message && <Banner kind={message.startsWith('Thank') ? 'success' : 'info'}>{message}</Banner>}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Login */}
        <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-medium">Login</h2>
            <button onClick={() => setTab('login')} className={`text-xs ${tab==='login'?'text-blue-400':'text-slate-400'}`}>Select</button>
          </div>
          <form onSubmit={onLogin} className="space-y-3">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input name="email" type="email" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Password</label>
              <input name="password" type="password" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
            </div>
            <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">Login</button>
          </form>
        </section>

        {/* Register */}
        <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-medium">Register for Trade Access</h2>
            <button onClick={() => setTab('register')} className={`text-xs ${tab==='register'?'text-blue-400':'text-slate-400'}`}>Select</button>
          </div>
          <form onSubmit={onRegister} className="grid gap-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-300 mb-1">Business name</label>
              <input name="businessName" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
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
              <input name="phone" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Company registration number (optional)</label>
              <input name="companyReg" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">VAT number (optional)</label>
              <input name="vat" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Business type / Industry</label>
              <select name="industry" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100">
                <option>Independent Retailer</option>
                <option>eCommerce</option>
                <option>Wholesaler / Distributor</option>
                <option>Hospitality</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Website (optional)</label>
              <input name="website" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-300 mb-1">Notes / Additional info</label>
              <textarea name="notes" rows={4} className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" />
            </div>
            <div className="sm:col-span-2">
              <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">Submit Registration</button>
            </div>
          </form>
        </section>
      </div>

      {/* Inline hints for future backend wiring */}
      <p className="text-xs text-slate-500">
        Note: This is a demo-only front-end. Replace form handlers with real API calls to integrate authentication and CRM/ERP workflows later.
      </p>
    </div>
  )
}
