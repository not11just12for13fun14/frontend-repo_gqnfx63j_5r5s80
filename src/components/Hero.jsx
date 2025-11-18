import Spline from '@splinetool/react-spline'

export default function Hero({ onTrack }) {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            Reliable Transport Solutions for Your Business – On Time, Every Time
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-200 max-w-xl">
            Professional logistics and freight services you can trust. Licensed, bonded, and insured for your peace of mind.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="/quote" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-500 transition-colors">
              Get a Free Quote
            </a>
            <button onClick={onTrack} className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-white font-semibold hover:bg-white/20 transition-colors border border-white/20">
              Track Your Shipment
            </button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <img src="/badges/insured.svg" alt="Insured" className="h-6" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/badges/bonded.svg" alt="Bonded" className="h-6" />
              <span>Bonded & Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/badges/experience.svg" alt="Years of experience" className="h-6" />
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
