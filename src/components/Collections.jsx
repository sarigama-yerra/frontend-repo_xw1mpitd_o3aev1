export default function Collections() {
  const items = [
    {
      title: 'Ubud Lounge',
      image:
        'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2200&auto=format&fit=crop',
      tag: 'Living',
    },
    {
      title: 'Seminyak Desk',
      image:
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2200&auto=format&fit=crop',
      tag: 'Workspace',
    },
    {
      title: 'Canggu Chair',
      image:
        'https://images.unsplash.com/photo-1616594039964-ae9021a469b3?q=80&w=2200&auto=format&fit=crop',
      tag: 'Seating',
    },
  ]

  return (
    <section id="collections" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Signature Collections</h2>
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-gray-200">
              <div
                className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-flex rounded-full bg-emerald-50 px-2 py-1 text-emerald-700">{item.tag}</span>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
