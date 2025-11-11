export default function OfficeSolutions() {
  const items = [
    {
      title: 'Executive Suite',
      desc: 'A serene workspace with teak desk systems, acoustic rattan panels, and linen upholstery.',
      image:
        'https://images.unsplash.com/photo-1603808033192-0516522aa868?q=80&w=2200&auto=format&fit=crop',
    },
    {
      title: 'Collaborative Lounge',
      desc: 'Modular seating with natural textures, designed for effortless collaboration.',
      image:
        'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2200&auto=format&fit=crop',
    },
  ]

  return (
    <section id="office" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Office Solutions</h2>
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Request brochure</a>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-2xl border border-gray-200">
              <div className="aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
