import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full bg-[#050505] text-white py-20">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="w-full aspect-[4/5] rounded-2xl bg-white/5 border border-white/10" />
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">The Advisor Behind the Strategy</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              My 10+ years of experience are not just for transacting; they are for protecting and growing your wealth. I treat every Grosse Ile property as a high-performance asset. This is my personal commitment to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
