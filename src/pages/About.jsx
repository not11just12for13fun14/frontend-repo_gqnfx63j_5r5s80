export default function About() {
  return (
    <main className="bg-slate-950 text-slate-200">
      <section className="pt-28 pb-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="mt-4 text-slate-300">We are a professional logistics partner focused on reliability, safety, and transparent communication. Our mission is to keep your business moving with precision.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">What makes us different</h2>
            <ul className="mt-3 list-disc pl-6 text-slate-300 space-y-2">
              <li>On-time delivery backed by real-time tracking</li>
              <li>Specialized equipment: reefer, flatbed, liftgate</li>
              <li>Dedicated customer service and 24/7 dispatch</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Certifications & Safety</h3>
            <p className="mt-2 text-slate-300">USDOT and MC compliant. Fully insured and bonded with rigorous safety protocols and driver training.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
