import type { ContactData } from './types'

export const contactData: ContactData = {
  closingText:
    'Interesse an einer Zusammenarbeit in der Zentralschweiz? Ich freue mich auf Ihre Nachricht.',
  links: [
    {
      type: 'email',
      label: 'E-Mail senden',
      href: 'mailto:kontakt@example.com',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn-Profil öffnen',
      href: 'https://linkedin.com/in/example',
    },
    {
      type: 'github',
      label: 'GitHub-Profil öffnen',
      href: 'https://github.com/example',
    },
  ],
}
