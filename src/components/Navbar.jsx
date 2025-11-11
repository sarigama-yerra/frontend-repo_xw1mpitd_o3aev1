import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Collections', href: '#collections' },
    { label: 'Office Solutions', href: '#office' },
    { label: 'Materials', href: '#materials' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/30 bg-white/60 backdrop-blur-md shadow-sm">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-300 to-emerald-400 shadow-inner" />
              <span className="font-semibold tracking-wide text-gray-900">Angkasa Bali</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
              >
                Book a Consultation
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-gray-100 px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block text-gray-800">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="block rounded-full bg-gray-900 px-4 py-2 text-center text-white">
                Book a Consultation
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
