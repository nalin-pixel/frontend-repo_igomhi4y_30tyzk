import React from 'react'

// Injects Playfair Display for headings and applies font classes
const Fonts = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" />
    <style>{`
      .font-serif { font-family: 'Playfair Display', serif; }
      body { font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      html { scroll-behavior: smooth; }
    `}</style>
  </>
)

export default Fonts
