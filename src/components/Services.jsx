import { Boxes, Route, Truck, Package, Warehouse } from 'lucide-react'

export default function Services() {
  const items = [
    {
      icon: Truck,
      title: 'Long-Haul Trucking',
      bullets: ['Nationwide coverage', 'Reefer, flatbed, and dry van', 'Real-time tracking'],
    },
    {
      icon: Route,
      title: 'Logistics Management',
      bullets: ['Route optimization', 'Load planning', 'Dedicated dispatch'],
    },
    {
      icon: Boxes,
      title: 'Local Delivery',
      bullets: ['Same-day options', 'Liftgate service', 'Inside delivery'],
    },
    {
      icon: Warehouse,
      title: 'Warehousing',
      bullets: ['Short & long-term storage', 'Cross-docking', 'Inventory management'],
    },
    {
      icon: Package,
      title: 'Freight Forwarding',
      bullets: ['Air, ocean, and ground', 'Customs documentation', 'Insurance options'],
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Our Services</h2>
        <p className="mt-3 text-slate-300 text-center max-w-3xl mx-auto">
          Transparent pricing, clear coverage areas, and specialized equipment tailored to your shipment.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <item.icon />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{item.title}</h3>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm list-disc pl-5">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
