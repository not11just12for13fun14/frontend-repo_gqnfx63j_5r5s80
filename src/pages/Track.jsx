import TrackBar from '../components/TrackBar'

export default function TrackPage() {
  return (
    <main className="bg-slate-950 text-slate-200">
      <section className="pt-28 pb-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Track Shipment</h1>
          <p className="mt-3 text-slate-300">Enter your tracking number to see real-time status updates.</p>
          <div className="mt-6">
            <TrackBar />
          </div>
        </div>
      </section>
    </main>
  )
}
