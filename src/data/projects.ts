import type { ProjectsData } from './types'
import sportanalyseImg from '../assets/HighilghtDetection.webp'
import gameHubImg from '../assets/GameHub.webp'
import agentZeroImg from '../assets/AgentZeroPipeline.webp'

export const projectsData: ProjectsData = {
  intro: 'Ausgewählte Projekte aus den letzten Jahren.',
  projects: [
    {
      id: 'proj-1',
      title: 'Echtzeit-Sportanalyse (Computer Vision)',
      description:
        'Automatisierte Highlight-Erkennung mittels YOLO & OpenCV. Fokus: komplexe Datenströme visuell verstehen.',
      context: 'Bachelorarbeit',
      stack: ['Python', 'YOLO', 'OpenCV', 'Computer Vision'],
      year: '2025',
      imageSrc: sportanalyseImg,
      imageAlt: 'Sportanalyse / Computer Vision',
      detailHref: 'project-echtzeit-sportanalyse.html',
      ctas: [{ label: 'Projektseite ansehen', href: 'project-echtzeit-sportanalyse.html' }],
    },
    {
      id: 'proj-2',
      title: 'GameHub',
      description:
        'Infrastruktur-Plattform für Multiplayer-Spiele mit API-Fokus. Architektur-Design und erweiterbare Plattform-Basis.',
      context: 'Hobby · Open Source',
      stack: ['API', 'Multiplayer', 'Infrastruktur'],
      year: '2026',
      imageSrc: gameHubImg,
      imageAlt: 'GameHub Infrastruktur',
      detailHref: 'project-gamehub.html',
      ctas: [
        { label: 'Projektseite ansehen', href: 'project-gamehub.html' },
        { label: 'Code auf GitHub', href: 'https://github.com' },
      ],
    },
    {
      id: 'proj-3',
      title: 'Agent Zero Pipeline',
      description:
        'Hochautomatisierte Projektinitialisierung mittels Agentic AI. Fokus: Effizienzsteigerung in der Softwareentwicklung.',
      context: 'Hobby · AI-Agents',
      stack: ['Agentic AI', 'Automation', 'CLI'],
      year: '2026',
      imageSrc: agentZeroImg,
      imageAlt: 'AI Agents Pipeline',
      detailHref: 'project-agent-zero.html',
      ctas: [{ label: 'Projektseite ansehen', href: 'project-agent-zero.html' }],
    },
  ],
}
