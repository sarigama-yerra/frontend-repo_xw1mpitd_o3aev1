export default function Footer() {
  return (
    <footer id="contact" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-300 to-emerald-400" />
              <span className="font-semibold text-gray-900">Angkasa Bali</span>
            </div>
            <p className="mt-4 text-sm text-gray-700 max-w-sm">
              High-end furniture and office solutions blending Scandinavian clarity with Balinese warmth.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Studio</h4>
            <p className="mt-2 text-sm text-gray-700">Jl. Petitenget, Seminyak, Bali</p>
            <p className="text-sm text-gray-700">Open Mon–Sat, 10:00–18:00</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Contact</h4>
            <p className="mt-2 text-sm text-gray-700">hello@angkasabali.com</p>
            <p className="text-sm text-gray-700">+62 811-0000-000</p>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-600">© {new Date().getFullYear()} Angkasa Bali. All rights reserved.</div>
      </div>
    </footer>
  )
}
