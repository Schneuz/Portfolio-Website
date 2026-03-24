import type { ProjectsData } from './types'
import sportanalyseImg from '../assets/HighilghtDetection.webp'
import gameHubImg from '../assets/GameHub.webp'
import agentZeroImg from '../assets/AgentZeroPipeline.webp'

export const projectsData: ProjectsData = {
  intro: 'Ausgewählte Projekte aus den letzten Jahren.',
  projects: [
    {
      id: 'proj-1',
      title: 'Echtzeit-Sportanalyse',
      description:
        'Automatisierte Highlight-Erkennung für Sportvideos mit YOLO & OpenCV. Fokus auf Fussball-Footage und die visuelle Analyse relevanter Spielszenen.',
      focus:
        'Enorme Mengen an Video-Footage automatisiert verdichten, um Highlights zuverlässig zu erkennen und Rohmaterial stark zu reduzieren.',
      context: 'Bachelorarbeit',
      stack: ['Python', 'YOLO', 'OpenCV'],
      year: '2025',
      imageSrc: sportanalyseImg,
      imageAlt: 'Echtzeit-Sportanalyse',
      detailHref: 'project-echtzeit-sportanalyse.html',
      ctas: [{ label: 'Projektseite ansehen', href: 'project-echtzeit-sportanalyse.html' }],
    },
    {
      id: 'proj-2',
      title: 'GameHub',
      description:
        'Infrastruktur-Plattform für Multiplayer-Spiele mit API-Fokus. Architektur-Design und erweiterbare Basis für Entwickler und ihre Spielprojekte.',
      focus:
        'Session-Handling zentral lösen, damit Entwickler nicht an komplexer Infrastruktur scheitern und sich auf Gameplay und Programming konzentrieren können.',
      context: 'Hobby · Open Source',
      stack: ['API', 'Multiplayer', 'Infrastruktur'],
      year: '2026',
      imageSrc: gameHubImg,
      imageAlt: 'GameHub Infrastruktur',
      detailHref: 'project-gamehub.html',
      ctas: [{ label: 'Projektseite ansehen', href: 'project-gamehub.html' }],
    },
    {
      id: 'proj-3',
      title: 'Agent Zero Pipeline',
      description:
        'Pipeline für agentische Workflows, die reale Geschäftsprozesse digital abbildet. Mit persistenten Artefakten, Kontextoptimierung und strukturierter Übergabe zwischen Schritten.',
      focus:
        'Wiederholbare Projektabläufe strukturieren und näher an echte Arbeitsprozesse bringen.',
      context: 'Hobby · AI-Agents',
      stack: ['Agentic AI', 'Automation', 'CLI'],
      year: '2026',
      imageSrc: agentZeroImg,
      imageAlt: 'Agent Zero Pipeline / Agentic Workflows',
      detailHref: 'project-agent-zero.html',
      ctas: [{ label: 'Projektseite ansehen', href: 'project-agent-zero.html' }],
    },
  ],
}
