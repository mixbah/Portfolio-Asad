import React, { useEffect, useRef, useState } from 'react'
import { navLinks } from '../constants'
import ResumeModal from './ResumeModal'
import FutureUpdate from './FutureUpdate'

const NavBar = () => {

    const [scrolled ,setScrolled]=useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [resumeModalOpen, setResumeModalOpen] = useState(false);
    const [futureModalOpen, setFutureModalOpen] = useState(false);
    const profileRef = useRef(null);

    useEffect(()=>{
        const handleScroll=()=>{
            const isScrolled=window.scrollY > 10;
            setScrolled(isScrolled);
        }
        window.addEventListener('scroll',handleScroll);

        return ()=> window.removeEventListener('scroll',handleScroll);
    },[])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        };
        if (profileOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [profileOpen]);

    const handleSeeProjects = () => {
        setProfileOpen(false); // Close the profile panel
        setResumeModalOpen(true); // Open the resume modal
    };

    const handleCloseResumeModal = () => {
        setResumeModalOpen(false);
    };

    const handleOpenFuture = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        setProfileOpen(false);
        setFutureModalOpen(true);
    };

    const handleCloseFuture = () => {
        setFutureModalOpen(false);
    };

    // Handle navbar link clicks - close modal and navigate
    const handleNavLinkClick = (e) => {
        setResumeModalOpen(false); // Close resume modal
        setFutureModalOpen(false); // Close future updates modal
        setProfileOpen(false); // Close profile panel if open
        // Let the default navigation happen
    };

    // Handle logo click - close modal and navigate
    const handleLogoClick = () => {
        setProfileOpen(false);
        setResumeModalOpen(false); // Close resume modal
        setFutureModalOpen(false); // Close future updates modal
    };

    // Handle contact button click - close modal and navigate
    const handleContactClick = () => {
        setResumeModalOpen(false); // Close resume modal
        setFutureModalOpen(false); // Close future updates modal
        setProfileOpen(false); // Close profile panel if open
    };

  return (
    <>
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className='inner'>
                       <div className='brand-left'>
                <div className="profile-trigger" ref={profileRef}>
                    <button
                        type="button"
                        className="avatar-btn group"
                        aria-haspopup="dialog"
                        aria-expanded={profileOpen}
                        onClick={() => setProfileOpen((prev) => !prev)}
                    >
                        <img src="/profile/IMG_7460.PNG" alt="Asad Misbah" className="avatar-img" />
                        <span className="ring" aria-hidden="true" />
                    </button>
                    {profileOpen && (
                        <div className="profile-panel" role="dialog" aria-label="Profile quick view">
                            <div className="profile-glow" aria-hidden="true" />
                            <div className="profile-content">
                                <div className="profile-header">
                                    <img src="/profile/IMG_7460.PNG" alt="Profile" className="panel-avatar" />
                                    <div>
                                        <p className="name">Asad Misbah</p>
                                        <p className="tag">Student<br/>Developer<br/>Problem Solver</p>
                                    </div>
                                </div>
                                <div className="profile-actions">
                                    <button 
                                        className="quick-link" 
                                        onClick={handleSeeProjects}
                                    >
                                        See Resume
                                    </button>
                                    <a href="#contact" className="quick-link" onClick={handleOpenFuture}>Upcoming</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <a href="#hero" className='logo' onClick={handleLogoClick}>Misbah Asad</a>
            </div>
            <nav className='desktop'>
            <ul>
                {navLinks.map(({link,name})=>(
                    <li key={name} className='group'>
                        <a href={link} onClick={handleNavLinkClick}>
                            <span>{name}</span>
                            <span className='underline'/>
                        </a>
                    </li>
                ))
                }
            </ul>
            </nav>

            <a href="#contact" className='contact-btn group' onClick={handleContactClick}>
                <div className='inner'>
                    <span>Contact me</span>
                </div>
            </a>
        </div>
    </header>
    
    {/* Resume Modal */}
    <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={handleCloseResumeModal} 
    />
    {/* Future Updates Modal */}
    <FutureUpdate 
        isOpen={futureModalOpen}
        onClose={handleCloseFuture}
    />
    </>
  )
}

export default NavBar