import type { HobbiesData } from './types'

export const hobbiesData: HobbiesData = {
  intro: 'Band, gemeinsame Games, KI-Experimente und Zeit draussen.',
  items: [
    {
      id: 'hobby-musik',
      title: 'Musik',
      descriptionBefore: 'Bassist bei ',
      link: { href: 'https://gobribbons.ch/', label: 'Gob Ribbons' },
      descriptionAfter: ', einer Post-Progressive-Rock-Band aus Luzern.',
    },
    {
      id: 'hobby-ai',
      title: 'KI-Anwendungen',
      description:
        'Neue Modelle, Workflows und Edge Cases testen, verstehen und praktisch ausprobieren.',
    },
    {
      id: 'hobby-outdoor',
      title: 'Outdoor',
      description:
        'Gerne draussen unterwegs — wandern, Sport treiben und in Bewegung bleiben.',
    },
    {
      id: 'hobby-games',
      title: 'Games',
      description: 'Am liebsten gemeinsam spielen — am Tisch, am Bildschirm',
    },
  ],
}
