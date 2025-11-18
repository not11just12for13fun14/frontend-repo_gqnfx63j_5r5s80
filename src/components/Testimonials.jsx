export default function Testimonials() {
  const quotes = [
    {
      name: 'Acme Manufacturing',
      text: 'On-time, every time. Their communication and tracking made our logistics painless.',
    },
    {
      name: 'FreshFoods Co.',
      text: 'Refrigerated loads arrived in perfect condition. Highly professional team.',
    },
    {
      name: 'BuildRight Supply',
      text: 'From flatbed deliveries to warehousing, they handle it all with care.',
    },
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Trusted by Businesses</h2>
        <p className="mt-3 text-slate-300 text-center max-w-3xl mx-auto">
          We build confidence with transparent communication, certified safety, and insured operations.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <div key={q.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-200">“{q.text}”</p>
              <p className="mt-4 text-slate-400 text-sm">{q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
