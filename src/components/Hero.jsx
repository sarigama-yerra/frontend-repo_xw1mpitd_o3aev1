export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Background with tropical-scandi vibe */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-amber-50 to-white" />
        <div className="absolute -top-32 -right-24 h-[42rem] w-[42rem] rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[36rem] w-[36rem] rounded-full bg-amber-100/50 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/0 via-white/40 to-white/80" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Scandinavian Minimalism.
              <span className="block text-emerald-700">Balinese Warmth.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Angkasa Bali crafts refined furniture and office environments inspired by teak wood, rattan, and natural linens — designed for clarity, comfort, and calm.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#collections" className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800">
                Explore Collections
              </a>
              <a href="#contact" className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:border-gray-400">
                Book a Studio Visit
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                FSC-certified teak
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-amber-500" />
                Handwoven rattan
              </div>
            </div>
          </div>

          {/* Photorealistic mockup panel */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-white">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI4MTk5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="backdrop-blur-md bg-white/40 rounded-2xl p-4 sm:p-6 border border-white/50">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=400&auto=format&fit=crop"
                      alt="Teak texture"
                      className="h-14 w-14 rounded-xl object-cover"
                    />
                    <div>
                      <p className="text-sm text-gray-700">Signature Material</p>
                      <p className="font-medium text-gray-900">Grade-A Teak & Linen Blend</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-gray-700">
                    <div className="rounded-lg bg-white/70 p-3">Teak</div>
                    <div className="rounded-lg bg-white/70 p-3">Rattan</div>
                    <div className="rounded-lg bg-white/70 p-3">Linen</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Photorealistic showcase, inspired by award-winning case studies.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
