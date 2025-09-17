import React, { useEffect } from 'react'
import GlowCard from './GlowCard'

const items = [
  { title: 'BotVIEW', review: 'Highly Functional and Responsive AI Interview Platform with a Support of Voice Agent.', eta: 'Oct 2025' },
  { title: 'Portfolio Revamp V2.0', review: 'Accessibility pass, content refresh, performance tweaks and Theme Switch Functionality.', eta: 'Nov 2025' },
  { title: 'Backend Playground', review: 'Node/Express APIs, auth, rate limiting, deploy + docs.', eta: 'Dec 2025' },
  { title: 'Problem Solving Archive', review: 'Daily DSA patterns, summaries, and visuals.', eta: 'Weekly' },
  { title: 'Learning Track', review: 'Advanced React, Three JS [GSAP,DREI], system design and Large Language Models.', eta: 'Ongoing' },
]

const FutureUpdate = ({ isOpen, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    const navbar = e.target.closest('.navbar')
    if (navbar) {
      onClose()
      return
    }
    if (e.target === e.currentTarget) onClose()
  }

  const preventScroll = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm overflow-hidden"
      onClick={handleBackdropClick}
      onWheel={preventScroll}
      onTouchMove={preventScroll}
      style={{ pointerEvents: 'auto', touchAction: 'none' }}
    >
      <div className="flex items-center justify-center min-h-screen p-4 pt-20 overflow-y-auto max-h-screen" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-content relative max-w-4xl w-full max-h-[85vh] overflow-hidden">
          <div className="glow" aria-hidden="true" />

          <button
            className="absolute top-4 right-4 z-10 text-white-50 hover:text-white transition-colors duration-300 bg-black-100/80 hover:bg-black-50/80 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>

          <div className="bg-black-100/70 rounded-t-2xl border-b border-black-50/50 p-4 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Upcoming Plans & Updates</h2>
            <p className="text-center text-white-50 text-sm mt-1">A transparent look at what’s next</p>
          </div>

          <div className="resume-content rounded-b-2xl border border-black-50/50 border-t-0 p-4 max-h-[75vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((it,i) => (
                
<div key={i} className="group relative rounded-xl border border-black-50 bg-black-100/60 hover:bg-black-100/80 transition-colors duration-300 p-4 backdrop-blur card">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-white font-semibold text-lg">{it.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white-50 border border-black-50/50">{it.eta}</span>
                  </div>
                  <p className="text-white-50 mt-2 leading-relaxed">{it.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FutureUpdate