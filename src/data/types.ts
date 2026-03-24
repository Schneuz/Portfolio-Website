export interface HeroCta {
  label: string
  href: string
}

export interface HeroData {
  eyebrow?: string
  name?: string
  headline: string
  roleFocus: string
  tagline: string
  /** z. B. Abschluss unter der Tagline */
  degreeLine?: string
  /** Optionaler Pitch-Text unter Tagline/Subline */
  pitch?: string
  ctas: HeroCta[]
  meta: string[]
  imageSrc?: string
  imageAlt?: string
}

export interface ProfileCard {
  id: string
  /** Fetter Haupttitel (z. B. Frage) */
  title: string
  /** Optionaler Untertitel direkt unter dem Haupttitel */
  subtitle?: string
  /** Optionaler Fliesstext darunter */
  content?: string
  items?: string[]
}

export interface ProfileData {
  cards: ProfileCard[]
}

export interface MindmapNode {
  id: string
  label: string
  children?: MindmapNode[]
}

export interface MindmapData {
  centralNode: string
  branches: MindmapNode[]
}

export interface ProjectCta {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export interface ProjectData {
  id: string
  title: string
  description: string
  /** Kurzer Fokus-Satz; im UI mit Präfix „Fokus:“ auf eigener Zeile */
  focus: string
  context: string
  stack: string[]
  status?: string
  year?: string
  imageSrc?: string
  imageAlt?: string
  detailHref?: string
  ctas: ProjectCta[]
}

export interface ProjectsData {
  intro?: string
  projects: ProjectData[]
}

export interface HobbyItem {
  id: string
  title: string
  /** Einfacher Fliesstext (ohne Inline-Link) */
  description?: string
  /** Text vor Inline-Link (zusammen mit link + descriptionAfter) */
  descriptionBefore?: string
  link?: { href: string; label: string }
  /** Text nach Inline-Link */
  descriptionAfter?: string
}

export interface HobbiesData {
  intro?: string
  items: HobbyItem[]
}

/** Einzelner Schritt im Architektur-Flow (Blueprint Zone) */
export interface ProjectDetailFlowStep {
  id: string
  label: string
  description?: string
}

/** Challenge vs. Goal (Analysis Zone) */
export interface ProjectDetailAnalysis {
  challenge: string
  goal: string
}

/** Feature-Card für die Features Zone */
export interface ProjectDetailFeature {
  id: string
  title: string
  description: string
}

/** Tech-Stack-Eintrag mit optionalem Icon-Namen (Lucide) */
export interface ProjectDetailTech {
  label: string
  icon?: string
}

/** Phase (0-6) in phasenbasierter Pipeline */
export interface ProjectPhase {
  id: string
  phase: number
  title: string
  description: string
  command?: string
  icon?: string
}

/** Kernregel (z. B. Phasen-Autonomie, Board Meetings) */
export interface ProjectRule {
  id: string
  title: string
  description: string
  icon?: string
}

/** Architektur-Node im Flow-Diagramm */
export interface ProjectArchitectureNode {
  id: string
  label: string
  icon?: string
}

export interface ProjectDetailData {
  projectId: string
  title: string
  subline: string
  category: string
  /** Optional: Bild für Hero-Section */
  imageSrc?: string
  imageAlt?: string
  analysis: ProjectDetailAnalysis
  flowSteps: ProjectDetailFlowStep[]
  features: ProjectDetailFeature[]
  techStack: ProjectDetailTech[]
  ctas: ProjectCta[]
  /** Optional: Terminal-Zeilen im Hero (Agent Zero etc.) */
  heroTerminalLines?: string[]
  /** Optional: Architektur-Nodes für SVG-Flow */
  architectureNodes?: ProjectArchitectureNode[]
  /** Optional: 7 Phasen (0-6) */
  phases?: ProjectPhase[]
  /** Optional: Kernregeln / Prinzipien */
  rules?: ProjectRule[]
  /** Optional: Board Meeting Terminal-Simulation */
  boardMeetingTerminalLines?: string[]
  /** Optional: Hero CTA (z. B. "Architektur ansehen") */
  heroCta?: { label: string; href: string }
}

export interface TimelineEntry {
  id: string
  period: string
  title: string
  context: string
}

export interface TimelineData {
  entries: TimelineEntry[]
}

export interface WarumIchBlock {
  id: string
  title: string
  description: string
  /** Kurzes Label für die Karte (Badge) */
  tag: string
  /** Optional: Bild-URL; sonst Icon aus Sektion */
  imageSrc?: string
  imageAlt?: string
}

export interface WarumIchData {
  blocks: WarumIchBlock[]
}

export type ContactLinkType = 'email' | 'linkedin' | 'github'

export interface ContactLink {
  type: ContactLinkType
  label: string
  href: string
}

export interface ContactData {
  closingText?: string
  referencesNote?: string
  links: ContactLink[]
}

export interface SiteData {
  hero: HeroData
  profile: ProfileData
  mindmap: MindmapData
  projects: ProjectsData
  timeline: TimelineData
  warumIch: WarumIchData
  contact: ContactData
}
