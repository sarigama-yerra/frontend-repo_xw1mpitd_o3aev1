export default function Materials() {
  const materials = [
    {
      name: 'Teak Wood',
      desc: 'Sustainably sourced, rich grain, naturally resistant.',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1400&auto=format&fit=crop',
    },
    {
      name: 'Rattan',
      desc: 'Handwoven texture that breathes and ages beautifully.',
      img: 'https://images.unsplash.com/photo-1511910849309-0dffb6f9d41d?q=80&w=1400&auto=format&fit=crop',
    },
    {
      name: 'Linen',
      desc: 'Soft, breathable, and elegant in neutral palettes.',
      img: 'https://images.unsplash.com/photo-1465804575741-338df8554e74?q=80&w=1400&auto=format&fit=crop',
    },
  ]

  return (
    <section id="materials" className="py-20 bg-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Natural Materials</h2>
        <p className="mt-3 text-gray-700 max-w-2xl">We craft with tactile, long-lasting materials that invite touch and create calm.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {materials.map((m) => (
            <div key={m.name} className="rounded-2xl overflow-hidden border border-emerald-100 bg-white">
              <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${m.img})` }} />
              <div className="p-5">
                <h3 className="font-medium text-gray-900">{m.name}</h3>
                <p className="mt-1 text-sm text-gray-700">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
