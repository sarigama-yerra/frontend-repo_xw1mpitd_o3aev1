import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Materials from './components/Materials'
import OfficeSolutions from './components/OfficeSolutions'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Materials />
        <OfficeSolutions />
      </main>
      <Footer />
    </div>
  )
}

export default App
