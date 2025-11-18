export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-slate-200">
      <section className="pt-28 pb-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-3 text-slate-300">We\'re here to help with quotes, bookings, and support.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Get in Touch</h2>
            <p className="mt-2 text-slate-300">Business hours: Mon–Fri 7am–7pm, Sat 8am–2pm</p>
            <div className="mt-4 space-y-2 text-slate-200">
              <p>Phone: <a href="tel:+18005551234" className="text-slate-100 hover:text-white">(800) 555-1234</a></p>
              <p>Email: <a href="mailto:dispatch@blueline.com" className="text-slate-100 hover:text-white">dispatch@blueline.com</a></p>
              <p>Address: 1200 Logistics Way, Suite 200</p>
            </div>
            <div className="mt-6">
              <iframe
                title="Map"
                className="w-full h-64 rounded-md border border-white/10"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-122.523%2C37.704%2C-122.35%2C37.82&layer=mapnik"
              />
            </div>
          </div>
          <form className="rounded-xl border border-white/10 bg-white/5 p-6 grid gap-3">
            <input placeholder="Your name" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
            <input type="email" placeholder="Email" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
            <textarea rows="5" placeholder="How can we help?" className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400" />
            <button className="rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-500 transition-colors w-max">Send</button>
          </form>
        </div>
      </section>
    </main>
  )
}
