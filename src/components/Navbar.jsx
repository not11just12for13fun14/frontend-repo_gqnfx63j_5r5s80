import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, MapPin, Truck } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-white' : 'text-slate-300 hover:text-white'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-md">
              <Truck size={20} />
            </div>
            <span className="text-white font-semibold tracking-tight">BlueLine Transport</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/about', 'About')}
            {navItem('/services', 'Services')}
            {navItem('/quote', 'Get a Quote')}
            {navItem('/track', 'Track Shipment')}
            {navItem('/contact', 'Contact')}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+18005551234" className="inline-flex items-center gap-2 text-sm text-white bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md">
              <Phone size={16} />
              <span>Call Us</span>
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItem('/', 'Home')}
            {navItem('/about', 'About')}
            {navItem('/services', 'Services')}
            {navItem('/quote', 'Get a Quote')}
            {navItem('/track', 'Track Shipment')}
            {navItem('/contact', 'Contact')}
            <a href="tel:+18005551234" className="inline-flex items-center gap-2 text-sm text-white bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md w-max mt-2">
              <Phone size={16} />
              <span>Call Us</span>
            </a>
            <div className="flex items-center gap-2 text-slate-300 text-sm mt-2">
              <MapPin size={16} /> 1200 Logistics Way, Suite 200
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
