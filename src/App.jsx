import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowCaseSection from './sections/ShowCaseSection.jsx'
import NavBar from './components/NavBar.jsx'
import LogoSection from './components/LogoSection.jsx'
import FeatureCard from './sections/FeatureCard.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import Techstack from './sections/Techstack.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowCaseSection />
    {/* <LogoSection /> */}
    <FeatureCard />
    <ExperienceSection />
    <Techstack />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App