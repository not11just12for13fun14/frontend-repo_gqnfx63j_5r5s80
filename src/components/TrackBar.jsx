import { useState } from 'react'

export default function TrackBar() {
  const [tracking, setTracking] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleTrack = async (e) => {
    e.preventDefault()
    if (!tracking) return
    setLoading(true)
    setResult(null)
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    try {
      const res = await fetch(`${baseUrl}/api/track/${encodeURIComponent(tracking)}`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Not found')
      setResult(data.shipment)
    } catch (err) {
      setResult({ error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <form onSubmit={handleTrack} className="flex gap-2">
        <input
          value={tracking}
          onChange={(e) => setTracking(e.target.value)}
          placeholder="Enter tracking number"
          className="flex-1 bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400"
        />
        <button className="rounded-md bg-blue-600 px-4 py-3 text-white font-semibold hover:bg-blue-500 transition-colors">
          {loading ? 'Checking...' : 'Track'}
        </button>
      </form>

      {result && (
        <div className="mt-4 text-sm text-slate-200">
          {result.error ? (
            <p className="text-red-300">{result.error}</p>
          ) : (
            <div>
              <p className="font-semibold">Status: <span className="text-white">{result.status}</span></p>
              <p className="text-slate-300">From {result.origin} to {result.destination}</p>
              {result.events && result.events.length > 0 && (
                <ul className="mt-2 space-y-1 list-disc pl-4 text-slate-300">
                  {result.events.map((e, i) => (
                    <li key={i}>{new Date(e.timestamp).toLocaleString()} — {e.location || '—'} — {e.description}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
