import type { MindmapData } from './types'

export const mindmapData: MindmapData = {
  centralNode: 'Kompetenzen im Überblick',
  branches: [
    {
      id: 'tech',
      label: 'Tech & Tools',
      children: [
        { id: 'tech-1', label: 'LLMs' },
        { id: 'tech-2', label: 'Prompt Engineering' },
        { id: 'tech-3', label: 'Python' },
        { id: 'tech-4', label: 'API-Design' },
        { id: 'tech-5', label: 'YOLO / OpenCV' },
        { id: 'tech-6', label: 'KI-Workflows' },
      ],
    },
    {
      id: 'arbeit',
      label: 'Methodik',
      children: [
        { id: 'arbeit-1', label: 'Rapid Prototyping' },
        { id: 'arbeit-2', label: 'MVPs' },
        { id: 'arbeit-3', label: 'Anforderungsanalyse' },
        { id: 'arbeit-4', label: 'Scrum' },
        { id: 'arbeit-5', label: 'Trend-Assessment' },
      ],
    },
    {
      id: 'sprachen',
      label: 'Sprachen',
      children: [
        { id: 'spr-1', label: 'Deutsch' },
        { id: 'spr-2', label: 'Englisch' },
      ],
    },
    {
      id: 'themen',
      label: 'Soft Skills',
      children: [
        { id: 'int-1', label: 'Analytisches Denken' },
        { id: 'int-2', label: 'Kritisches Hinterfragen' },
        { id: 'int-3', label: 'Kommunikation DE/EN' },
        { id: 'int-4', label: 'Lösungsorientierung' },
      ],
    },
  ],
}
