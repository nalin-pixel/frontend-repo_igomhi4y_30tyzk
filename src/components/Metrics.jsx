import React from 'react'

const MetricCard = ({ value, label }) => (
  <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
    <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">{value}</div>
    <div className="mt-2 text-sm sm:text-base text-white/60">{label}</div>
  </div>
)

const Metrics = () => {
  return (
    <section className="w-full bg-[#050505] text-white py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <MetricCard value="$85M+" label="Closed Volume" />
          <MetricCard value="98%" label="List-to-Sales Ratio" />
          <MetricCard value="12" label="Avg. Days Market Time" />
          <MetricCard value="10+" label="Years of Experience" />
        </div>
      </div>
    </section>
  )
}

export default Metrics
