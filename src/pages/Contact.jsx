import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const required = ['name', 'email', 'subject', 'message']
    for (const k of required) {
      if (!form.get(k)?.toString().trim()) {
        alert('Please fill in all required fields.')
        return
      }
    }
    setTimeout(() => setSent(true), 400)
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white">Get in touch with MYM SUPPLIERS LTD</h1>
        <p className="text-slate-300/90 mt-1 text-sm">We typically respond within one business day.</p>
      </header>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 grid gap-6 md:grid-cols-3">
        <div className="space-y-2 text-sm text-slate-300">
          <div><span className="text-slate-400">Phone:</span> +44 (0)20 0000 0000</div>
          <div><span className="text-slate-400">Email:</span> sales@mym-suppliers.com</div>
          <div><span className="text-slate-400">Address:</span> 123 Trade Park, London, UK</div>
          <div className="mt-6 rounded-md border border-slate-800 bg-slate-950/40 h-32 flex items-center justify-center text-slate-400 text-xs">
            Map placeholder – add embedded map later
          </div>
        </div>
        <form onSubmit={onSubmit} className="md:col-span-2 grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Name</label>
            <input name="name" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" name="email" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Phone (optional)</label>
            <input name="phone" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Subject</label>
            <input name="subject" className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea name="message" rows={5} className="w-full rounded-md bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-slate-100" required />
          </div>
          <div className="sm:col-span-2">
            <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">Send message</button>
          </div>
        </form>
      </section>

      {sent && (
        <div className="rounded-md border border-green-700 bg-green-900/20 px-3 py-2 text-sm text-green-200">
          Thank you. Your message has been sent. Our team will get back to you shortly.
        </div>
      )}
    </div>
  )
}
