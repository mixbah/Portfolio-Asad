import React, { useState, useEffect } from 'react'

const ResumeModal = ({ isOpen, onClose }) => {
  const [pdfLoaded, setPdfLoaded] = useState(false)
  const [pdfError, setPdfError] = useState(false)

  // Close modal when clicking outside the content
  const handleBackdropClick = (e) => {
    // Check if the click is on a navbar element
    const navbar = e.target.closest('.navbar')
    if (navbar) {
      // If clicking on navbar, let it handle the navigation and close modal
      onClose()
      return
    }
    
    // If clicking on backdrop (not navbar), close modal
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Prevent scrolling on the modal backdrop
  const handleBackdropScroll = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Less aggressive scroll blocking
      document.body.style.overflow = 'hidden'
      // Remove these lines that reset the PDF state:
      // setPdfLoaded(false)
      // setPdfError(false)
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

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
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm overflow-hidden"
      onClick={handleBackdropClick}
      onWheel={handleBackdropScroll}
      onTouchMove={handleBackdropScroll}
      style={{
        // Ensure the backdrop is clickable but allows navbar clicks
        pointerEvents: 'auto',
        touchAction: 'none'
      }}
    >
      <div 
        className="flex items-center justify-center min-h-screen p-4 pt-20 overflow-y-auto max-h-screen"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from bubbling up
      >
        <div 
          className="resume-modal-content relative max-w-5xl w-full max-h-[85vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside from bubbling up
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
            {!pdfLoaded && !pdfError && (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white-50 mx-auto mb-4"></div>
                  <p className="text-white-50">Loading resume...</p>
                </div>
              </div>
            )}

            {pdfError && (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="text-red-400 text-6xl mb-4">⚠️</div>
                  <p className="text-white-50 mb-4">Unable to load PDF</p>
                  <p className="text-sm text-blue-50">Please check if the PDF file exists</p>
                </div>
              </div>
            )}

            <div className={`w-full h-full ${!pdfLoaded ? 'hidden' : ''}`}>
              <iframe
                src="public/profile/Mohammads RESUME.pdf"
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

          {/* Download Button */}
          <div className="flex justify-center mt-6 px-4">
            {/* <a
              href="/profile/Mohammads RESUME.pdf"
              download="Mohammads_Resume.pdf"
              className="px-8 py-3 bg-black-200/80 hover:bg-black-50/80 text-white-50 hover:text-white transition-all duration-300 rounded-xl border border-black-50/50 backdrop-blur-sm hover:scale-105"
            >
              Download Resume
            </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeModal