import { Navbar } from './components/layout/Navbar'
import { Main } from './components/layout/Main'
import { Footer } from './components/layout/Footer'
import { AuroraBackground } from './components/ui/aurora-background'
import { HeroSection } from './components/sections/HeroSection'
import { ProfileSection } from './components/sections/ProfileSection'
import { FaehigkeitenSection } from './components/sections/FaehigkeitenSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { LebenslaufSection } from './components/sections/LebenslaufSection'
import { WarumIchSection } from './components/sections/WarumIchSection'
import { ContactSection } from './components/sections/ContactSection'

function App() {
  return (
    <AuroraBackground>
      <Navbar />
      <Main>
        <HeroSection />
        <ProfileSection />
        <FaehigkeitenSection />
        <ProjectsSection />
        <LebenslaufSection />
        <WarumIchSection />
        <ContactSection />
      </Main>
      <Footer />
    </AuroraBackground>
  )
}

export default App
