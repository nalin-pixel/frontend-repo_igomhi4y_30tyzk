import React from 'react'

const Market = () => {
  return (
    <section id="market" className="w-full bg-[#050505] text-white py-20">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl mb-3">The Grosse Ile Market Report</h2>
          <p className="text-white/70 mb-8">
            Our real-time analysis of the ~173 annual Grosse Ile sales. We track the data so you can protect your equity.
          </p>
        </div>
        <div className="w-full rounded-2xl bg-white/5 border border-white/10 aspect-[16/9] grid place-items-center text-white/60 mb-6">
          <span>Waterfront image or graph placeholder</span>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 transition">
            Access the Full Analysis
          </a>
          <p className="text-white/60 text-sm">
            Access the full data, read our past reports, and subscribe to the Grosse Ile insider newsletter.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Market
