import React, { useState, useEffect } from 'react'

const ResumeModal = ({ isOpen, onClose }) => {
  const [pdfLoaded, setPdfLoaded] = useState(false)
  const [pdfError, setPdfError] = useState(false)

useEffect(() => {
  if (isOpen) {
    // Save scroll position
    const scrollY = window.scrollY

    // Freeze body at current scroll
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.overflow = 'hidden'
    document.body.style.width = '100%'
  } else {
    // Restore scroll
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.style.overflow = ''
    document.body.style.width = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1) // restore position
  }

  return () => {
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.style.overflow = ''
    document.body.style.width = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
}, [isOpen])

  const handlePdfLoad = () => {
    setPdfLoaded(true)
    setPdfError(false)
  }

  const handlePdfError = () => {
    setPdfError(true)
    setPdfLoaded(false)
  }

  if (!isOpen) return null

  return (
    <div 
      id="resume-modal" 
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm overflow-hidden"
      onClick={onClose}
      // onClick={handleBackdropClick}
      // onWheel={handleBackdropScroll}
      // onTouchMove={handleBackdropScroll}
      style={{
        // Ensure the backdrop is clickable but allows navbar clicks
        pointerEvents: 'auto',
        touchAction: 'auto'
      }}
    >
      <div 
        className="flex items-center justify-center min-h-screen p-4 pt-20 overflow-y-auto max-h-screen"
        // onClick={(e) => e.stopPropagation()}
        // Prevent clicks inside from bubbling up
      >
        <div 
          className="resume-modal-content relative max-w-5xl w-full max-h-[85vh] overflow-hidden"
         // Prevent clicks inside from bubbling up
        >
          {/* Glow Effect - Similar to profile panel */}
          <div className="resume-modal-glow" aria-hidden="true" />
          
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 z-10 text-white-50 hover:text-white transition-colors duration-300 bg-black-100/80 hover:bg-black-50/80 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
          
          {/* Header */}
          <div className="bg-black-100/70 rounded-t-2xl border-b border-black-50/50 p-4 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Resume</h2>
          </div>
          
          {/* PDF Content */}
          <div className="resume-content bg-black-100/70 rounded-b-2xl border border-black-50/50 border-t-0 p-4 max-h-[75vh] overflow-hidden backdrop-blur-sm">

            <div className={`w-full h-full ${!pdfLoaded ? 'hidden' : ''}`}>
              <iframe
                src="/profile/Resumeforportfolio.pdf"
                className="w-full h-[70vh] border-0 rounded-xl"
                title="Resume PDF"
                onLoad={handlePdfLoad}
                onError={handlePdfError}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeModal