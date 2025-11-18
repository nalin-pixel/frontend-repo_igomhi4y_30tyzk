import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full bg-[#050505] text-white overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to enhance contrast - non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/70 to-[#050505]/95" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
              Grosse Ile Luxury Real Estate, Mastered.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-10">
              We treat your real estate as a high-value asset, applying portfolio-level strategy and negotiation mastery to protect and grow your wealth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#market" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 bg-black/70 hover:bg-black transition text-white">
                Start Your Search
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 transition">
                Request a Private Valuation
              </a>
            </div>
          </div>
          {/* Right visual placeholder for portrait/interior - kept minimal since Spline is background */}
          <div className="hidden lg:block" aria-hidden>
            <div className="w-full h-[420px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
