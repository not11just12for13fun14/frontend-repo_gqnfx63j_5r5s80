import QuoteForm from '../components/QuoteForm'

export default function QuotePage() {
  return (
    <main className="bg-slate-950 text-slate-200">
      <section className="pt-28 pb-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Get a Quote</h1>
          <p className="mt-3 text-slate-300">Tell us about your shipment and we\'ll send pricing and timelines fast.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <QuoteForm />
          </div>
          <p className="mt-6 text-sm text-slate-400">We respect your privacy. Your information is used only for quoting purposes.</p>
        </div>
      </section>
    </main>
  )
}
