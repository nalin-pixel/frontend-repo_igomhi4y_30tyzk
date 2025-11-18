import React from 'react'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Strategy from './components/Strategy'
import About from './components/About'
import Market from './components/Market'
import Testimonial from './components/Testimonial'
import LunaFAB from './components/LunaFAB'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Top bar / brand */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10" />
            <span className="tracking-wide">Troy Puste</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-white/70">
            <a href="#strategy" className="hover:text-white">Strategy</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#market" className="hover:text-white">Market</a>
            <a href="#testimonial" className="hover:text-white">Proof</a>
          </nav>
        </div>
      </header>

      <main className="[--scroll-behavior:smooth]">
        <Hero />
        <Metrics />
        <Strategy />
        <About />
        <Market />
        <Testimonial />
      </main>

      <footer className="bg-black border-t border-white/10">
        <div className="container mx-auto px-6 sm:px-8 py-8 text-white/60 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Troy Puste • Grosse Ile, Michigan</span>
          <span>Dark-mode, minimalist, data‑driven real estate advisory</span>
        </div>
      </footer>

      <LunaFAB />
    </div>
  )
}

export default App
