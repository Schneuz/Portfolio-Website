export * from './types'
export { heroData } from './hero'
export { profileData } from './profile'
export { mindmapData } from './mindmap'
export { projectsData } from './projects'
export { hobbiesData } from './hobbies'
export { timelineData } from './timeline'
export { warumIchData } from './warumIch'
export { contactData } from './contact'

import { heroData } from './hero'
import { profileData } from './profile'
import { mindmapData } from './mindmap'
import { projectsData } from './projects'
import { timelineData } from './timeline'
import { warumIchData } from './warumIch'
import { contactData } from './contact'
import type { SiteData } from './types'

export const siteData: SiteData = {
  hero: heroData,
  profile: profileData,
  mindmap: mindmapData,
  projects: projectsData,
  timeline: timelineData,
  warumIch: warumIchData,
  contact: contactData,
}
