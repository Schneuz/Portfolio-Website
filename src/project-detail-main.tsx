import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuroraBackground } from './components/ui/aurora-background'
import { Navbar } from './components/layout/Navbar'
import { Main } from './components/layout/Main'
import { Footer } from './components/layout/Footer'
import { ProjectDetailPage } from './components/sections/ProjectDetailPage'
import { getProjectDetail } from './data/projectDetails'
import { projectsData } from './data/projects'

const rootEl = document.getElementById('root')
const projectId = rootEl?.getAttribute('data-project-id') ?? ''
const detailData = getProjectDetail(projectId, projectsData.projects)

if (!rootEl) {
  throw new Error('Root element #root not found')
}

if (!detailData) {
  rootEl.innerHTML = `
    <div style="padding: 2rem; text-align: center; font-family: system-ui;">
      <h1>Projekt nicht gefunden</h1>
      <p><a href="./">Zurück zum Portfolio</a></p>
    </div>
  `
} else {
  createRoot(rootEl).render(
    <StrictMode>
      <AuroraBackground>
        <Navbar baseHref="./" />
        <Main>
          <ProjectDetailPage data={detailData} />
        </Main>
        <Footer />
      </AuroraBackground>
    </StrictMode>
  )
}
