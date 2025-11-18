import React, { useState } from 'react'
import { MessageCircle } from 'lucide-react'

const LunaFAB = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white text-black shadow-lg hover:scale-[1.02] active:scale-[0.98] transition"
        aria-label="Ask Luna: AI Concierge"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Ask Luna: AI Concierge</span>
      </button>

      {/* Chat Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative w-full sm:max-w-md bg-[#0b0b0b] border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-white">
                <div className="w-8 h-8 rounded-full bg-white/10 grid place-items-center">
                  <MessageCircle className="w-4 h-4 text-white/80" />
                </div>
                <div className="font-medium">Luna • AI Concierge</div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">Close</button>
            </div>
            <div className="h-64 rounded-xl bg-white/5 border border-white/10 p-4 text-white/60 mb-3 overflow-y-auto">
              <p>UI only for now. Ask anything about Grosse Ile luxury real estate.</p>
            </div>
            <div className="flex items-center gap-2">
              <input className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none" placeholder="Type your question..." />
              <button className="px-4 py-2 rounded-lg bg-white text-black">Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LunaFAB
