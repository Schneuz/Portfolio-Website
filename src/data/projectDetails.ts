import type { ProjectDetailData } from './types'

export const projectDetailsById: Record<string, ProjectDetailData> = {
  'proj-1': {
    projectId: 'proj-1',
    title: 'Echtzeit-Sportanalyse',
    subline: 'Automatisierte Highlight-Erkennung mittels YOLO & OpenCV.',
    category: 'Bachelorarbeit',
    analysis: {
      challenge:
        'Manuelle Analyse von Sportvideos ist zeitaufwändig und subjektiv. Die Extraktion von Highlights aus langen Videoströmen erfordert effiziente Verfahren.',
      goal:
        'Automatisierte Erkennung von Schlüsselmomenten und visuelles Verständnis komplexer Datenströme in Echtzeit.',
    },
    architectureNodes: [
      { id: 'video', label: 'Video input', icon: 'Video' },
      { id: 'yolo', label: 'YOLO detection', icon: 'Scan' },
      { id: 'extract', label: 'Extract clips', icon: 'ListChecks' },
      { id: 'analyse', label: 'OpenCV Analyse', icon: 'Camera' },
      { id: 'highlight', label: 'Highlight frames', icon: 'CheckCircle' },
    ],
    flowSteps: [
      { id: 'video', label: 'Video input', description: 'Video-Stream-Eingabe' },
      { id: 'yolo', label: 'YOLO detection', description: 'Objekt- und Bewegungserkennung' },
      { id: 'extract', label: 'Extract clips', description: 'Clip-Extraktion' },
      { id: 'analyse', label: 'OpenCV Analyse', description: 'OpenCV-basierte Clip-Analyse' },
      { id: 'highlight', label: 'Highlight frames', description: 'Highlight-Rahmen und Export' },
    ],
    rules: [
      {
        id: 'r1',
        title: 'Experimentelle Methodik',
        description:
          'Die Arbeit ist als experimenteller Prozess angelegt, in dem verschiedene Analyseansätze iterativ getestet und verglichen werden.',
        icon: 'Repeat',
      },
      {
        id: 'r2',
        title: 'OpenCV für Vorfilterung und Clip-Qualität',
        description:
          'OpenCV wird genutzt, um Rohdaten und Frames nach visueller Qualität zu bewerten, etwa über Blur oder Sättigung, nicht zur eigentlichen Highlight-Erkennung.',
        icon: 'Camera',
      },
      {
        id: 'r3',
        title: 'Zuverlässige Spielererkennung statt Ballfokus',
        description:
          'YOLO wird primär für die Erkennung von Spielern eingesetzt, da der Ball in typischen Fussballaufnahmen oft zu klein für robuste Detektion ist.',
        icon: 'Users',
      },
      {
        id: 'r4',
        title: 'Bewegungsanalyse als Kernsignal',
        description:
          'Die Bewegung erkannter Spieler bildet die wichtigste Grundlage, um Spielintensität und potenziell interessante Phasen zu beschreiben.',
        icon: 'Workflow',
      },
      {
        id: 'r5',
        title: 'Spielpausen als Highlight-Hinweis',
        description:
          'Wenn die durchschnittliche Spielerbewegung deutlich unter einen Schwellenwert fällt, deutet das oft auf eine Unterbrechung hin — und damit auf ein relevantes Ereignis.',
        icon: 'Scale',
      },
      {
        id: 'r6',
        title: 'Audio als nächster Präzisionsschritt',
        description:
          'Zusätzliche Audio-Peaks sollen künftig ergänzt werden, um die Genauigkeit der Highlight-Erkennung weiter zu erhöhen.',
        icon: 'MessageSquare',
      },
    ],
    features: [
      {
        id: 'f1',
        title: 'Objekt-Erkennung',
        description: 'YOLO-Modelle für Spieler, Ball und Spielfeldstruktur.',
      },
      {
        id: 'f2',
        title: 'Feature-Extraktion',
        description: 'OpenCV-basierte Bewegung und Aktivitätsanalyse.',
      },
      {
        id: 'f3',
        title: 'Highlight-Identifikation',
        description: 'Automatische Erkennung von Schlüsselmomenten.',
      },
      {
        id: 'f4',
        title: 'Echtzeit-Verarbeitung',
        description: 'Optimierte Pipeline für Videostream-Verarbeitung.',
      },
    ],
    techStack: [
      { label: 'Python', icon: 'Code' },
      { label: 'YOLO', icon: 'ScanEye' },
      { label: 'OpenCV', icon: 'Camera' },
    ],
    ctas: [
      { label: 'Zurück zum Portfolio', href: './', variant: 'secondary' },
      { label: 'Kontakt für Details', href: 'index.html#kontakt', variant: 'primary' },
    ],
  },
  'proj-2': {
    projectId: 'proj-2',
    title: 'GameHub',
    subline: 'Infrastruktur-Plattform für Multiplayer-Spiele mit API-Fokus.',
    category: 'Hobby · Open Source',
    analysis: {
      challenge:
        'Lokale Coop-Minigames sollen schnell spielbar und einfach entwickelbar sein. In der Praxis bremsen aber Join, Session-Logik, Rollen und Synchronisation das eigentliche Bauen der Spiele aus.',
      goal:
        'Ein lokaler Hub, der die Infrastruktur übernimmt, damit neue Coop-Minigames als Plugins schnell gebaut, locker vibecoded und direkt gemeinsam gespielt werden können.',
    },
    architectureNodes: [
      { id: 'host', label: 'Host Hub', icon: 'Server' },
      { id: 'session', label: 'Session & Join', icon: 'Users' },
      { id: 'realtime', label: 'Realtime Layer', icon: 'Wifi' },
      { id: 'runtime', label: 'Game Runtime', icon: 'Code' },
      { id: 'clients', label: 'Clients & Central Screen', icon: 'MonitorSmartphone' },
    ],
    flowSteps: [
      { id: 'host', label: 'Host Hub', description: 'Lokaler Startpunkt auf dem Laptop. Verwaltet Session, Lobby, Rollen und Spielsteuerung.' },
      { id: 'session', label: 'Session & Join', description: 'Erzeugt Session-ID und QR-Code. Spieler treten direkt über den mobilen Browser bei.' },
      { id: 'realtime', label: 'Realtime Layer', description: 'Hält Geräte verbunden, unterstützt Reconnect und verbindet Spieler auch über verschiedene Netzwerke.' },
      { id: 'runtime', label: 'Game Runtime', description: 'Lädt Spiele als Plugins, verarbeitet Inputs und steuert den zentralen Spielzustand.' },
      { id: 'clients', label: 'Clients & Central Screen', description: 'Zeigt Spielstatus auf dem Laptop und liefert den Spielern ihre jeweilige mobile Spielansicht.' },
    ],
    rules: [
      {
        id: 'r1',
        title: 'Lokaler Host, klare Kontrolle',
        description:
          'Der Hub läuft auf dem Laptop, steuert die Session und bleibt der zentrale sichtbare Host für Lobby, Spielstart und Central Screen.',
        icon: 'Server',
      },
      {
        id: 'r2',
        title: 'Join ohne Reibung',
        description:
          'Spieler treten per QR-Code direkt im mobilen Browser bei — ohne App, ohne Account und ohne kompliziertes Setup.',
        icon: 'Users',
      },
      {
        id: 'r3',
        title: 'Der Hub macht die Infrastruktur',
        description:
          'Session-Management, Rollen, Reconnect, Kommunikation und Lifecycle werden zentral vom Hub übernommen, nicht von den Spielen.',
        icon: 'Workflow',
      },
      {
        id: 'r4',
        title: 'Plugins statt Sonderlösungen',
        description:
          'Jedes Spiel wird als klar definiertes Web-/TypeScript-Plugin gebaut und nutzt dieselben festen Schnittstellen des Hubs.',
        icon: 'FileJson',
      },
      {
        id: 'r5',
        title: 'Zentraler Spielzustand',
        description:
          'Der Host verwaltet die Spielregeln und den gemeinsamen State, damit Multiplayer-Spiele stabil, fair und konsistent bleiben.',
        icon: 'Database',
      },
      {
        id: 'r6',
        title: 'Open Source als Zielbild',
        description:
          'Der Hub ist von Anfang an so gedacht, dass er später offen, nachvollziehbar und einfach durch neue Spiele und Community-Beiträge erweitert werden kann.',
        icon: 'Code',
      },
    ],
    features: [
      {
        id: 'f1',
        title: 'API-Design',
        description: 'Klare REST- und Event-spezifische Schnittstellen.',
      },
      {
        id: 'f2',
        title: 'Multiplayer-Logik',
        description: 'Spielzustände und Synchronisation mehrerer Clients.',
      },
      {
        id: 'f3',
        title: 'Erweiterbarkeit',
        description: 'Modulare Architektur für verschiedene Spieltypen.',
      },
    ],
    techStack: [
      { label: 'API', icon: 'Workflow' },
      { label: 'Multiplayer', icon: 'Users' },
      { label: 'Infrastruktur', icon: 'Server' },
    ],
    ctas: [
      { label: 'Zurück zum Portfolio', href: './', variant: 'secondary' },
      { label: 'Kontakt für Details', href: 'index.html#kontakt', variant: 'primary' },
    ],
  },
  'proj-3': {
    projectId: 'proj-3',
    title: 'Agent Zero SD Pipeline',
    subline:
      'Phasenbasierte Software-Entwicklungs-Pipeline mit Agent-Orchestrierung & lokalem RAG-System.',
    category: 'Hobby · AI-Agents',
    heroCta: { label: 'Architektur ansehen', href: '#project-architecture' },
    heroTerminalLines: [
      '$ a0 route --intent "Softwareentwicklung starten"',
      '> Routing to Phase 0: Bootstrap...',
      '> Agent Zero initialized.',
      '> Sub-agents: Research, Code-Worker, Verify',
      '> Pipeline ready. Awaiting commands.',
    ],
    analysis: {
      challenge:
        'Viele Ideen folgen ähnlichen Abläufen, werden aber jedes Mal neu aufgesetzt. Gleichzeitig liefern LLMs nicht immer verlässliche Resultate und brauchen gezielte menschliche Korrektur.',
      goal:
        'Eine konsistente, halbautomatische Pipeline mit klaren Phasen und wenigen Human Gates, die wiederkehrende Abläufe standardisiert und den Weg von der Idee zum MVP deutlich beschleunigt.',
    },
    architectureNodes: [
      { id: 'user', label: 'User Input', icon: 'User' },
      { id: 'agent-zero', label: 'a0 CLI / Agent Zero', icon: 'Bot' },
      { id: 'sub-agents', label: 'Sub-Agents', icon: 'Search' },
      { id: 'code-worker', label: 'Cursor/Codex', icon: 'Code' },
      { id: 'handoff', label: 'Handoff', icon: 'CheckCircle' },
    ],
    flowSteps: [
      {
        id: 'user',
        label: 'User-Eingabe',
        description: 'Intent und Kontext',
      },
      {
        id: 'agent',
        label: 'Agent Zero',
        description: 'Zentraler Orchestrator',
      },
      {
        id: 'sub',
        label: 'Sub-Agents',
        description: 'Research, Code, Verify',
      },
      {
        id: 'code',
        label: 'Code-Worker',
        description: 'Cursor/Codex',
      },
      {
        id: 'handoff',
        label: 'Handoff',
        description: 'Deliverable',
      },
    ],
    phases: [
      {
        id: 'p0',
        phase: 0,
        title: 'Bootstrap',
        description:
          'Projektinitialisierung, Repo-Setup, Konfiguration und Kontext-Sammlung.',
        command: 'a0 init',
        icon: 'Rocket',
      },
      {
        id: 'p1',
        phase: 1,
        title: 'Research',
        description:
          'Recherche-Phase: Anforderungen, Architektur-Optionen, Best Practices.',
        command: 'a0 research-flow',
        icon: 'Search',
      },
      {
        id: 'p2',
        phase: 2,
        title: 'Plan',
        description: 'Planung der Implementierung: Tasks, Prioritäten, Abhängigkeiten.',
        command: 'a0 plan',
        icon: 'ListChecks',
      },
      {
        id: 'p3',
        phase: 3,
        title: 'Implement',
        description:
          'Implementierungsphase: Code-Generierung durch Code-Worker (Cursor/Codex).',
        command: 'a0 implement',
        icon: 'Code',
      },
      {
        id: 'p4',
        phase: 4,
        title: 'Verify',
        description: 'Verifikation: Tests, Linting, Qualitätschecks.',
        command: 'a0 verify',
        icon: 'Shield',
      },
      {
        id: 'p5',
        phase: 5,
        title: 'Review',
        description: 'Review-Phase: Board Meeting, Human Gate Entscheidungen.',
        command: 'a0 review',
        icon: 'Scale',
      },
      {
        id: 'p6',
        phase: 6,
        title: 'Handoff',
        description:
          'Übergabe: Dokumentation, Abschlussbericht, Finales Deliverable.',
        command: 'a0 handoff',
        icon: 'CheckCircle',
      },
    ],
    rules: [
      {
        id: 'r1',
        title: 'Reproduzierbarer Research-Flow',
        description:
          'Phasenbasierter Workflow (0–6), der echtes Projektmanagement spiegelt. Jeder Schritt ist durch standardisierte State-Routing-Prozesse messbar.',
        icon: 'Repeat',
      },
      {
        id: 'r2',
        title: 'Supervisor-Modell',
        description:
          'Agent Zero fungiert als technischer Projektleiter (Supervisor) für das Routing, während spezialisierte Sub-Agents als Experten-Worker agieren.',
        icon: 'UserCheck',
      },
      {
        id: 'r3',
        title: 'Human-in-the-loop (Safety Gates)',
        description:
          'Strategische Entscheidungspunkte (G1-G3) erfordern explizite menschliche Freigabe für maximale Kontrolle.',
        icon: 'ShieldAlert',
      },
      {
        id: 'r4',
        title: 'Artefakt-basierte Kontextoptimierung',
        description:
          'Sub-Agents produzieren persistente Artefakte (.md), die Agent Zero als komprimierter Kontext dienen, um Token-Verschwendung zu vermeiden.',
        icon: 'FileJson',
      },
      {
        id: 'r5',
        title: 'Board Meeting (Validierung)',
        description:
          'Dialektischer Diskurs zwischen "Advocate" und "Skeptic" Personas zur Risikoanalyse vor der Implementierung.',
        icon: 'Users',
      },
      {
        id: 'r6',
        title: 'Local-First RAG & Privacy',
        description:
          'Lokale RAG-Indizierung von Artefakten, Projektdaten und Entscheidungen. Agent Zero lädt je nach Phase nur relevanten Kontext nach und minimiert so den extern geteilten Projektkontext.',
        icon: 'Database',
      },
    ],
    boardMeetingTerminalLines: [
      '> a0 board-flow --analyze "Feature: OAuth2-Modul"',
      '[SUPERVISOR] Starte Board Meeting. Rollen verteilt.',
      '[ADVOCATE]   Vorschlag: Nutzung von Auth0-SDK für schnelle Time-to-Market.',
      '[SKEPTIC]    Einwand: Erhöht externe Abhängigkeit und Security-Risiko bei API-Key Management.',
      '[ADVOCATE]   Gegenargument: Eigenbau verzögert Phase 3 um 4 Tage.',
      '[SKEPTIC]    Kompromiss: Lokale Keycloak-Instanz nutzen. Sicher & Kostenlos.',
      '[SUPERVISOR] Synthese erstellt: Keycloak-Implementierung in plan.md übernommen.',
      '[SYSTEM]     Warte auf HUMAN_GATE: PLAN_APPROVAL.',
    ],
    features: [
      {
        id: 'f1',
        title: 'Agentic Orchestration',
        description:
          'Agent Zero als zentraler Orchestrator steuert Sub-Agents (Research, Code-Worker, Verify) und koordiniert den Phasenfluss.',
      },
      {
        id: 'f2',
        title: 'Phasenbasierte Pipeline',
        description:
          '7 klar definierte Phasen von Bootstrap bis Handoff mit autonomer Ausführung und Human Gates.',
      },
      {
        id: 'f3',
        title: 'CLI-Tooling',
        description:
          'Vollständige CLI-Steuerung: a0 route, a0 init, a0 research-flow, a0 plan, a0 implement, a0 verify, a0 review, a0 handoff.',
      },
      {
        id: 'f4',
        title: 'Wiederholbarkeit',
        description:
          'Konsistente Ergebnisse über verschiedene Projekttypen durch standardisierte Phasen und klare Konfiguration.',
      },
    ],
    techStack: [
      { label: 'Agentic AI', icon: 'Bot' },
      { label: 'Python', icon: 'Code' },
      { label: 'CLI', icon: 'Terminal' },
      { label: 'Automation', icon: 'Zap' },
      { label: 'LLM', icon: 'Brain' },
      { label: 'Prompt Engineering', icon: 'MessageSquare' },
    ],
    ctas: [
      { label: 'Zurück zum Portfolio', href: './', variant: 'secondary' },
      { label: 'Kontakt für Details', href: 'index.html#kontakt', variant: 'primary' },
    ],
  },
}

export function getProjectDetail(
  projectId: string,
  projects?: { id: string; imageSrc?: string; imageAlt?: string }[]
): ProjectDetailData | null {
  const detail = projectDetailsById[projectId] ?? null
  if (!detail || !projects) return detail
  const project = projects.find((p) => p.id === projectId)
  if (!project?.imageSrc) return detail
  return {
    ...detail,
    imageSrc: project.imageSrc,
    imageAlt: project.imageAlt ?? detail.imageAlt,
  }
}
