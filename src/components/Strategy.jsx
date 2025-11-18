import React from 'react'

const Strategy = () => {
  return (
    <section id="strategy" className="w-full bg-[#050505] text-white py-20">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-serif text-2xl mb-3">Precision Strategy</h3>
            <p className="text-white/70">
              In a market with only ~170 sales per year, there is no room for error. We analyze the entire Grosse Ile market—not just active listings, but off-market data and buyer trends. This data-driven approach allows us to position your property as a high-performance asset and identify unique opportunities before anyone else.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-serif text-2xl mb-3">Negotiation Mastery</h3>
            <p className="text-white/70">
              Our 10+ years of high-stakes negotiation are focused on one goal: protecting and maximizing your equity. We manage every transaction with a portfolio-level mindset, ensuring your financial position is strengthened and you never leave money on the table.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-serif text-2xl mb-3">Client Experience</h3>
            <p className="text-white/70">
              Our service is modeled after a private wealth advisory. This is a white-glove, concierge-level partnership defined by discretion, clarity, and absolute focus. We provide a seamless, strategic process curated to your specific goals, making your transaction effortless.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Strategy
