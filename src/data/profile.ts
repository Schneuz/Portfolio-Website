import type { ProfileData } from './types'

export const profileData: ProfileData = {
  cards: [
    {
      id: 'wer-bin-ich',
      title: 'Wer bin ich?',
      subtitle: 'Von Mechanik zu Software & KI',
      items: [
        'Polymechaniker',
        'BSc in Wirtschaftsinformatik',
        'Software Engineering',
        'Agentic AI',
        'Prototyping',
      ],
    },
    {
      id: 'was-suche-ich',
      title: 'Was suche ich?',
      content: 'Rollen an der Schnittstelle von AI, Technik und Business.',
      items: [
        'Applied AI Specialist',
        'Digital Innovation Manager',
        'Solution Engineer',
        'Business Analyst (Tech-Fokus)',
      ],
    },
    {
      id: 'schwerpunkte',
      title: 'Was interessiert mich?',
      subtitle: 'Meine Schwerpunkte',
      items: [
        'Applied AI (LLMs & Agents)',
        'Rapid Prototyping & MVPs',
        'Business-IT Schnittstelle',
      ],
    },
    {
      id: 'perspektive',
      title: 'Wie ich an Probleme herangehe?',
      subtitle: 'Meine Arbeitsweise',
      items: [
        'Validieren vor Skalieren',
        'Iterativ & kritisch',
        'Wissenstransfer',
        'Business verstehen',
      ],
    },
  ],
}
