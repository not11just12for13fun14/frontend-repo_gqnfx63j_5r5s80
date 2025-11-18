import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import TrackBar from '../components/TrackBar'

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-200">
      <Hero onTrack={() => document.getElementById('track').scrollIntoView({ behavior: 'smooth' })} />

      <section id="track" className="py-16 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Track Shipment</h2>
          <p className="text-slate-300 mt-2">Enter your tracking number to see real-time updates.</p>
          <div className="mt-4">
            <TrackBar />
          </div>
        </div>
      </section>

      <Services />
      <Testimonials />

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white">Get a Free Quote</h2>
            <p className="mt-3 text-slate-300">Fast, transparent pricing. No obligations.</p>
            <a href="/quote" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 mt-6 text-white font-semibold hover:bg-blue-500 transition-colors">Open Quote Form</a>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-slate-300">Prefer inline? Use the dedicated quote page for a full form experience.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
