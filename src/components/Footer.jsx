export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-400 text-sm">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <p className="text-white font-semibold">BlueLine Transport</p>
            <p className="mt-1">Licensed • Bonded • Insured</p>
            <p className="mt-1">USDOT 1234567 • MC 7654321</p>
          </div>
          <div className="space-y-1">
            <p>Mon–Fri: 7:00 AM – 7:00 PM</p>
            <p>Sat: 8:00 AM – 2:00 PM</p>
            <p>Sun: Closed</p>
          </div>
          <div className="space-y-1">
            <p>Phone: <a href="tel:+18005551234" className="text-slate-200 hover:text-white">(800) 555-1234</a></p>
            <p>Email: <a href="mailto:dispatch@blueline.com" className="text-slate-200 hover:text-white">dispatch@blueline.com</a></p>
            <p>1200 Logistics Way, Suite 200</p>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} BlueLine Transport. All rights reserved.</p>
      </div>
    </footer>
  )
}
