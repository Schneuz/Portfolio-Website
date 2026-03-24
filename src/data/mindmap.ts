import type { MindmapData } from './types'

export const mindmapData: MindmapData = {
  centralNode: 'Kompetenzen im Überblick',
  branches: [
    {
      id: 'tech',
      label: 'Technische Schwerpunkte',
      children: [
        { id: 'tech-1', label: 'Software Engineering' },
        { id: 'tech-2', label: 'KI-gestützte Entwicklung' },
        { id: 'tech-3', label: 'Multimodale Systeme' },
        { id: 'tech-4', label: 'Computer Vision' },
        { id: 'tech-5', label: 'API- & Systemdesign' },
        { id: 'tech-6', label: 'Automatisierung' },
      ],
    },
    {
      id: 'arbeit',
      label: 'Methodik',
      children: [
        { id: 'arbeit-1', label: 'Rapid Prototyping' },
        { id: 'arbeit-2', label: 'Requirements Engineering' },
        { id: 'arbeit-3', label: 'Iterative Entwicklung' },
        { id: 'arbeit-4', label: 'Systemdesign' },
        { id: 'arbeit-5', label: 'Experimentation' },
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
