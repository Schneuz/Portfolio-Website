import { useEffect, useLayoutEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Main } from './components/layout/Main'
import { Footer } from './components/layout/Footer'
import { AuroraBackground } from './components/ui/aurora-background'
import { HeroSection } from './components/sections/HeroSection'
import { ProfileSection } from './components/sections/ProfileSection'
import { FaehigkeitenSection } from './components/sections/FaehigkeitenSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { LebenslaufSection } from './components/sections/LebenslaufSection'
import { HobbySection } from './components/sections/HobbySection'
import { WarumIchSection } from './components/sections/WarumIchSection'
import { ContactSection } from './components/sections/ContactSection'

function scrollToHashElement(behavior: ScrollBehavior = 'auto') {
  const hash = window.location.hash
  if (!hash) return
  const id = decodeURIComponent(hash.slice(1))
  if (!id) return
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior, block: 'start' })
  }
}

function App() {
  /* Hash-Ziele existieren erst nach React-Mount; Browser-Scroll beim Load greift oft ins Leere. */
  useLayoutEffect(() => {
    scrollToHashElement('auto')
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToHashElement('auto'))
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const onHashChange = () => scrollToHashElement('smooth')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <AuroraBackground>
      <Navbar />
      <Main>
        <HeroSection />
        <ProfileSection />
        <FaehigkeitenSection />
        <ProjectsSection />
        <LebenslaufSection />
        <HobbySection />
        <WarumIchSection />
        <ContactSection />
      </Main>
      <Footer />
    </AuroraBackground>
  )
}

export default App
