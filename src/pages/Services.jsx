export default function ServicesPage() {
  const services = [
    {
      title: 'Freight Forwarding',
      desc: 'Air, ocean, and ground solutions with customs documentation and insurance options.',
      coverage: 'International and domestic lanes',
      pricing: 'From $2.20/mi domestic, contact for international rates',
    },
    {
      title: 'Logistics Management',
      desc: 'Route optimization, load planning, and dedicated dispatch to cut transit times and costs.',
      coverage: 'Nationwide network',
      pricing: 'Flat monthly retainer or per-load fee',
    },
    {
      title: 'Local Delivery',
      desc: 'Same-day options with liftgate and inside delivery available.',
      coverage: 'Metro and regional within 150 miles',
      pricing: 'From $120 base + per mile',
    },
    {
      title: 'Long-Haul Trucking',
      desc: 'Reefer, flatbed, and dry van capacity with real-time tracking and ELD compliance.',
      coverage: '48 states',
      pricing: 'Market-based per mile, fuel surcharge included',
    },
    {
      title: 'Warehousing',
      desc: 'Short and long-term storage, cross-docking, and inventory management.',
      coverage: 'Regional facilities near major interstates',
      pricing: 'From $12/pallet/month, handling extra',
    },
  ]

  return (
    <main className="bg-slate-950 text-slate-200">
      <section className="pt-28 pb-12 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Services</h1>
          <p className="mt-3 text-slate-300 max-w-3xl">Clear options, coverage areas, and transparent pricing so you can plan with confidence.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">{s.title}</h2>
              <p className="mt-2 text-slate-300">{s.desc}</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-white/5 border border-white/10 rounded-md p-3">
                  <p className="text-slate-400">Coverage</p>
                  <p className="text-slate-200">{s.coverage}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-md p-3">
                  <p className="text-slate-400">Pricing</p>
                  <p className="text-slate-200">{s.pricing}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
