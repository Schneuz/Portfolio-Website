import type { ContactData } from './types'

export const contactData: ContactData = {
  closingText:
    'Interesse an einer Zusammenarbeit in der Zentralschweiz? Ich freue mich auf Ihre Nachricht.',
  referencesNote:
    'Referenzen stelle ich Ihnen gerne auf Anfrage zur Verfügung.',
  links: [
    {
      type: 'email',
      label: 'E-Mail senden',
      href: 'mailto:manuel.luthiger@gmail.com',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn-Profil öffnen',
      href: 'https://www.linkedin.com/in/manuel-luthiger-4876413b9/',
    },
    {
      type: 'github',
      label: 'GitHub-Profil öffnen',
      href: 'https://github.com/Schneuz',
    },
  ],
}
