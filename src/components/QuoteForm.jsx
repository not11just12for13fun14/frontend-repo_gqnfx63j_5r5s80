import { useState } from 'react'

export default function QuoteForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    try {
      const res = await fetch(`${baseUrl}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setSuccess('Thanks! We\'ll send your quote shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setSuccess(`Error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" required placeholder="Your name" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
        <input name="email" required type="email" placeholder="Email" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="phone" placeholder="Phone" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
        <input name="company" placeholder="Company" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="cargo_type" required placeholder="Cargo type (reefer, pallets, etc.)" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
        <input name="weight_kg" type="number" step="0.1" placeholder="Weight (kg)" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
      </div>
      <div>
        <input name="dimensions_cm" placeholder="Dimensions (LxWxH cm)" className="w-full bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="pickup_location" required placeholder="Pickup location" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
        <input name="delivery_location" required placeholder="Delivery location" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="preferred_pickup_date" type="date" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
        <input name="preferred_delivery_date" type="date" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
      </div>
      <textarea name="notes" rows="4" placeholder="Additional details" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
      <button disabled={loading} className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-500 transition-colors disabled:opacity-60">
        {loading ? 'Sending...' : 'Request Quote'}
      </button>
      {success && <p className="text-sm text-slate-200">{success}</p>}
    </form>
  )
}
